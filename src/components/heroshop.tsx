"use client";
import React from "react";
 
import { ContainerScroll } from "./ui/content-scroll-animation";

export function ShopOwnersDash() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl font-semibold text-black dark:text-white">
              Track Profits <br />
              <span className="text-3xl md:text-[4rem] font-bold mt-1 leading-none">
                Analyze Student Discounts Easily 
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/img/screenshot.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}