"use client";
import GooeyNav from "@/blocks/Components/GooeyNav/GooeyNav";
import React from "react";
const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const NavBar = () => {
  return (
    <div className="flex items-center justify-center py-4  w-full">
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
};

export default NavBar;
