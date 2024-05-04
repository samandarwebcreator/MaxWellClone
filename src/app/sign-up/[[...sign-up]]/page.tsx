import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col  min-h-screen">
      <header className="border-b border-lineColor">
        <Navbar />
      </header>
      <main className="container py-10 md:py-10 flex items-center justify-center flex-1 max-w-[350px] bg-white md:max-w-[450px] lg:max-w-[500px]">
        <SignUp path="/sign-up" />
      </main>
      <footer className="pt-16 border-t border-lineColor static md:sticky lg:static bottom-0">
        <Footer />
      </footer>
    </div>
  );
}
