import BranchCard from "@/components/branch/card/BranchCard";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

export default function Branch() {
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 border-b-2 border-lineColor bg-white">
        <Navbar />
      </header>
      <main>
        <section className="mt-40">
          <BranchCard />
        </section>
      </main>
    </div>
  );
}
