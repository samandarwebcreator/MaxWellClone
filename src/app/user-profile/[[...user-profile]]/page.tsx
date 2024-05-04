import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <div className="">
    <header className="border-b border-lineColor">
      <Navbar />
    </header>
    <main className="container py-0">
      <UserProfile path="/user-profile" />
    </main>
    <footer className="pt-16 border-t border-lineColor">
      <Footer />
    </footer>
  </div>
);

export default UserProfilePage;
