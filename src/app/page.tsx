import Navbar from "@/components/Navbar";
import HeroCinematic from "@/components/HeroCinematic";
import AboutSection from "@/components/AboutSection";
import TrainingSection from "@/components/TrainingSection";
import GallerySection from "@/components/GallerySection";
import MembershipSection from "@/components/MembershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-white selection:bg-[#00F59B] selection:text-black">
      <Navbar />
      <HeroCinematic />
      <AboutSection />
      <TrainingSection />
      <GallerySection />
      <MembershipSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
