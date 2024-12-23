"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth } from "../../(auth)/firebase"; // Import the Firebase auth object
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

export default function SignUpInPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      if (isForgotPassword) {
        await sendPasswordResetEmail(auth, email);
        setMessage("Password reset email sent. Please check your inbox.");
        setIsForgotPassword(false);
        return;
      }
  
      if (isRegistering) {
        if (password !== confirmPassword) {
          setMessage("Passwords do not match");
          return;
        }
  
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        setMessage("Registration successful! You can now log in.");
        setIsRegistering(false);
        console.log("Registered user:", userCredential.user);
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setMessage("Login successful!");
        console.log("Logged-in user:", userCredential.user);
      }
    } catch (err) {
      // Handle the error safely
      if (err instanceof Error) {
        setMessage(err.message);
      } else {
        setMessage("An unknown error occurred.");
      }
    }
  };
  

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isForgotPassword
            ? "Forgot Password"
            : isRegistering
            ? "Sign Up"
            : "Log In"}
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {!isForgotPassword && !isRegistering && (
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="mt-1 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}
          {isRegistering && (
            <>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Re-enter your password"
                  className="mt-1 w-full"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="text-sm text-gray-500">
                Password must be at least 6 characters long.
              </div>
            </>
          )}
          <Button type="submit" className="w-full bg-teal-600 text-white font-bold py-2 px-4 rounded">
            {isForgotPassword
              ? "Send Reset Email"
              : isRegistering
              ? "Sign Up"
              : "Log In"}
          </Button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          {message && <span className="block text-red-500">{message}</span>}
          {!isForgotPassword && (
            <>
              {isRegistering ? (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setIsRegistering(false);
                      setMessage("");
                    }}
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
                    onClick={() => {
                      setIsRegistering(true);
                      setMessage("");
                    }}
                    className="text-teal-600 hover:underline"
                  >
                    Sign Up
                  </button>
                </>
              )}
              <br />
              <button
                type="button"
                onClick={() => {
                  setIsForgotPassword(true);
                  setMessage("");
                }}
                className="text-teal-600 hover:underline mt-2"
              >
                Forgot Password?
              </button>
            </>
          )}
          {isForgotPassword && (
            <button
              type="button"
              onClick={() => {
                setIsForgotPassword(false);
                setMessage("");
              }}
              className="text-teal-600 hover:underline"
            >
              Back to Login
            </button>
          )}
        </p>
      </div>
    </main>
  );
}
