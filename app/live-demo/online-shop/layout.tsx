import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const appPath = "/live-demo/online-shop";
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      <header className="border-b border-zinc-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href={`${appPath}`}
            className="text-2xl font-bold text-zinc-900"
          >
            SwissWebDev Shop
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="text-zinc-600 hover:text-zinc-900">
              Home
            </Link>
            <Link
              href={`${appPath}/cart`}
              className="text-zinc-600 hover:text-zinc-900"
            >
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link
              href={`${appPath}/admin-login`}
              className="text-zinc-600 hover:text-zinc-900"
            >
              <User className="h-6 w-6" />
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="border-t border-zinc-200 py-4 text-center text-zinc-600">
        © 2024 SwissWebDev Shop. All rights reserved.
      </footer>
    </div>
  );
}
