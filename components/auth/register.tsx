"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  async function signupWithGoogle() {
    setIsLoading(true);
    try {
      const result = await signIn("google", { callbackUrl: "/email-list" });
      if (result?.error) {
        console.error("Error signing in with Google:", result.error);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-auto max-w-sm mt-16 rounded-xl mx-auto  bg-white text-black">
      <div className="mx-auto max-w-[380px] space-y-6 p-4">
        <div className="space-y-6 text-center">
          <h1 className="text-2xl font-bold">Join Outlook today</h1>
        </div>
        <div className="space-y-4">
          {isLoading ? (
            <Button
              variant="outline"
              disabled
              className="w-full hover:text-white bg-gradient-to-br from-blue-400 to-blue-600 text-white"
            >
              {/* <img src="/google.png" className="w-4 h-4" alt="google" /> */}
              SigningUp....
            </Button>
          ) : (
            <Button
              onClick={() => signupWithGoogle()}
              variant="outline"
              className="w-full hover:text-white bg-gradient-to-br from-blue-400 to-blue-600 text-white"
            >
              <img src="/google.png" className="w-4 h-4" alt="google" />
              Sign up with Google
            </Button>
          )}
          <Button
            variant="outline"
            className="w-full bg-gradient-to-br hover:text-white from-blue-400 to-blue-600 text-white"
          >
            <img src="/mic.png" className="w-4 h-4" alt="microsoft" />
            {/* <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"
              />
            </svg> */}
            Sign up with Apple
          </Button>
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-zinc-700"></div>
            <span className="mx-4 flex-shrink text-zinc-500">or</span>
            <div className="flex-grow border-t border-zinc-700"></div>
          </div>
          <div className="space-y-4">
            <Input
              className="border-zinc-700 bg-gray-100 text-gray-800 focus-visible:ring-1 focus-visible:ring-blue-500 placeholder-zinc-500 outline-none focus-visible:outline-none"
              placeholder="Name"
            />
            <Input
              className="border-zinc-700 bg-gray-100 text-gray-800 placeholder-zinc-500 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:outline-none outline-none"
              placeholder="Email"
              type="email"
            />
            <Input
              className="border-zinc-700 bg-gray-100 text-gray-800 placeholder-zinc-500 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:outline-none outline-none"
              placeholder="Password"
              type="password"
            />
            <Button className="w-full bg-gradient-to-br from-blue-400 to-blue-600 text-white">
              Create account
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <p className="text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
