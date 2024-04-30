import Corucel from "@/components/corucel/Corucel";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <header className="">
        <Navbar />
      </header>
      <main>
        <section className="py-6 md:py-12">
          <Corucel />
        </section>
      </main>
    </div>
  );
}
