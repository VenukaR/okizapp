"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Waitlist1 = () => {
  return (
    <section className="flex h-full min-h-screen w-full items-center justify-center bg-white py-25 text-gray-900">
      <div className="container flex w-full flex-col items-center justify-center px-4 md:h-full">
        {/* Heading */}
        <div className="relative z-20 py-2 text-center font-sans text-5xl font-bold tracking-tight md:py-10 lg:text-7xl">
          <span>Join the </span>
          <span className="text-primary-dark">Waitlist</span>
        </div>

        {/* Subtext */}
        <p className="text-md mx-auto max-w-xl text-center text-gray-600 lg:text-lg">
          Be the first to access our platform. Unlock exclusive features, early
          updates, and priority support by joining today.
        </p>

        {/* Email input */}
        <div className="relative z-20 mt-10 flex w-full max-w-md items-center gap-3 rounded-full border border-gray-200 bg-gray-50 p-2 shadow-sm">
          <Input
            className="h-12 w-full rounded-full border-none bg-transparent px-4 text-gray-900 placeholder-gray-400 focus-visible:ring-2 focus-visible:ring-Primary-dark"
            placeholder="Enter your email"
          />
          <Button className="h-12 rounded-full bg-primary-dark px-6 font-semibold text-white shadow-md hover:bg-primary-verydark">
            Join
          </Button>
        </div>

        {/* Social proof */}
        {/* <div className="mt-10 flex items-center gap-3">
          <span className="inline-flex items-center -space-x-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <Avatar key={index} className="size-9 border-2 border-white shadow-sm">
                <AvatarImage
                  src={`https://randomuser.me/api/portraits/women/${index + 10}.jpg`}
                  alt="member"
                />
              </Avatar>
            ))}
          </span>
          <p className="tracking-tight text-gray-600">
            <span className="font-semibold text-gray-900">+1,000</span> people already joined
          </p>
        </div> */}
      </div>
    </section>
  );
};

export { Waitlist1 };
