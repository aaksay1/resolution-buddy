"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignUpInPage() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isRegistering ? "Sign Up" : "Log In"}
        </h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input id="email" type="email" placeholder="Enter your email" className="mt-1 w-full" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full"
            />
          </div>
          {isRegistering && (
            <>
              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Re-enter your password"
                  className="mt-1 w-full"
                />
              </div>
              {/* Password Instructions */}
              <div className="text-sm text-gray-500">
                Password must be at least 8 characters long and include a mix of uppercase, lowercase, numbers, and symbols.
              </div>
            </>
          )}
          <Button type="submit" className="w-full bg-teal-600 text-white font-bold py-2 px-4 rounded">
            {isRegistering ? "Sign Up" : "Log In"}
          </Button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          {isRegistering ? (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsRegistering(false)}
                className="text-teal-600 hover:underline"
              >
                Log In
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                type="button"
                onClick={() => setIsRegistering(true)}
                className="text-teal-600 hover:underline"
              >
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </main>
  );
}
