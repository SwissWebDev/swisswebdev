"use client";

import { useState, useEffect, SetStateAction } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Cookies from "js-cookie";

export default function AdminDashboard() {
  const [products, setProducts] = useState<
    { id: number; name: string; price: number; image: string }[]
  >([]);
  const [editingProduct, setEditingProduct] = useState<{
    id: number;
    name: string;
    price: number;
    image: string;
  } | null>(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "/placeholder.webp?height=100&width=100",
  });

  useEffect(() => {
    const storedProducts = Cookies.get("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const handleEdit = (product: {
    id: number;
    name: string;
    price: number;
    image: string;
  }) => {
    setEditingProduct({ ...product });
  };

  const handleSave = () => {
    if (!editingProduct) return;
    const updatedProducts = products.map((p) =>
      p.id === editingProduct.id ? editingProduct : p
    );
    setProducts(updatedProducts);
    Cookies.set("products", JSON.stringify(updatedProducts), { expires: 7 });
    setEditingProduct(null);
  };

  const handleDelete = (productId: number) => {
    const updatedProducts = products.filter((p) => p.id !== productId);
    setProducts(updatedProducts);
    Cookies.set("products", JSON.stringify(updatedProducts), { expires: 7 });
  };

  const handleAddProduct = () => {
    const newId = Math.max(...products.map((p) => p.id), 0) + 1;
    const productToAdd = {
      ...newProduct,
      id: newId,
      price: parseFloat(newProduct.price),
    };
    const updatedProducts = [...products, productToAdd];
    setProducts(updatedProducts);
    Cookies.set("products", JSON.stringify(updatedProducts), { expires: 7 });
    setNewProduct({
      name: "",
      price: "",
      image: "/placeholder.webp?height=100&width=100",
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-zinc-900">Admin Dashboard</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Input
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Button
              onClick={(e) => {
                e.preventDefault();
                // check if the fields are not empty
                if (!newProduct.name || !newProduct.price) return;
                handleAddProduct();
              }}
            >
              Add Product
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4 flex items-center">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="rounded-md mr-4"
              />
              {editingProduct && editingProduct.id === product.id ? (
                <div className="flex-grow space-y-2">
                  <Input
                    value={editingProduct.name}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        name: e.target.value,
                      })
                    }
                  />
                  <Input
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        price: parseFloat(e.target.value),
                      })
                    }
                  />
                </div>
              ) : (
                <div className="flex-grow">
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <p className="text-zinc-600">${product.price}</p>
                </div>
              )}
              {editingProduct && editingProduct.id === product.id ? (
                <Button onClick={handleSave}>Save</Button>
              ) : (
                <div className="space-x-2">
                  <Button onClick={() => handleEdit(product)}>Edit</Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
