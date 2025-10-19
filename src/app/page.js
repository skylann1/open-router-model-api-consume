import NavHeader from "@/components/NavHeader";
import Camera from "@/components/Camera";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen text-gray-900 py-8 px-8">
      <div className="flex flex-col gap-16 items-center max-w-7xl">
        <NavHeader />
        <Camera />
        <Footer />
      </div>
    </main>
  );
}
