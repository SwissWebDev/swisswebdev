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

export default function Cart() {
  interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
  }

  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = Cookies.get("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const removeFromCart = (productId: any) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    Cookies.set("cart", JSON.stringify(updatedCart), { expires: 7 });
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-zinc-900">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-zinc-600">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <Card key={item.id} className="mb-4">
              <CardContent className="p-4 flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-md mr-4"
                />
                <div className="flex-grow">
                  <CardTitle className="text-lg mb-2">{item.name}</CardTitle>
                  <p className="text-zinc-600">${item.price}</p>
                </div>
                <Button
                  variant="destructive"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          ))}
          <div className="mt-6 text-right">
            <p className="text-xl font-bold text-zinc-900">Total: ${total}</p>
            <Button
              className="mt-4"
              onClick={() =>
                alert("Checkout process would be implemented here.")
              }
            >
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
