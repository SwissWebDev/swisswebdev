"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Cookies from "js-cookie";

export default function Home() {
  interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = Cookies.get("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      const initialProducts = [
        {
          id: 1,
          name: "Modern Chair",
          price: 199,
          image: "/placeholder.webp?height=200&width=200",
        },
        {
          id: 2,
          name: "Sleek Lamp",
          price: 89,
          image: "/placeholder.webp?height=200&width=200",
        },
        {
          id: 3,
          name: "Minimalist Vase",
          price: 59,
          image: "/placeholder.webp?height=200&width=200",
        },
        {
          id: 4,
          name: "Artistic Clock",
          price: 129,
          image: "/placeholder.webp?height=200&width=200",
        },
      ];
      setProducts(initialProducts);
      Cookies.set("products", JSON.stringify(initialProducts), { expires: 7 });
    }

    const storedCart = Cookies.get("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    Cookies.set("cart", JSON.stringify(updatedCart), { expires: 7 });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-zinc-900">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
              <p className="text-zinc-600">${product.price}</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => addToCart(product)} className="w-full">
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
