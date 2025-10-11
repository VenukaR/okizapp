"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Waitlist1 = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleJoin = async () => {
    if (!email) return;

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwfI3f6JLZUNoYyHHUbNauJSn4CBu73r6_Hyv1HXgjvv43oj23x2cH2FJWbaLTDkc9m/exec",
        {
          method: "POST",
          mode: "no-cors", // avoids CORS errors
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      setStatus("success");
      setEmail(""); // clear input
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="flex h-full min-h-screen w-full items-center justify-center bg-white py-25 text-gray-900">
      <div className="container flex w-full flex-col items-center justify-center px-4 md:h-full">
        <div className="relative z-20 py-2 text-center font-sans text-5xl font-bold tracking-tight md:py-10 lg:text-7xl">
          <span>Join the </span>
          <span className="text-primary-dark">Waitlist</span>
        </div>

        <p className="text-md mx-auto max-w-xl text-center text-gray-600 lg:text-lg">
          Be the first to access our platform. Unlock exclusive features, early
          updates, and priority support by joining today.
        </p>

        <div className="relative z-20 mt-10 flex w-full max-w-md items-center gap-3 rounded-full border border-gray-200 bg-gray-50 p-2 shadow-sm">
          <Input
            className="h-12 w-full rounded-full border-none bg-transparent px-4 text-gray-900 placeholder-gray-400 focus-visible:ring-2 focus-visible:ring-Primary-dark"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            className="h-12 rounded-full bg-primary-dark px-6 font-semibold text-white shadow-md hover:bg-primary-verydark"
            onClick={handleJoin}
          >
            Join
          </Button>
        </div>

        {status === "success" && (
          <p className="mt-4 text-green-600">Thanks! You’re on the waitlist.</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600">Oops! Something went wrong.</p>
        )}
      </div>
    </section>
  );
};

export { Waitlist1 };
