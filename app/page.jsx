
import { Button } from "../components/ui/button"
import Link from "next/link";
import Hero from "@/components/Hero";
import InteractiveStats from "@/components/InteractiveStats";
import FeaturesSection from "../components/FeaturesSection";

export default function Home() {

  return (
    <div className="pt-36">

      <Hero/>

     <InteractiveStats/>
    <FeaturesSection/>
     
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Ready To <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Create Something Amazing</span></h2>
          <p className="text-xl text-gray-300 mb-8" >
            join thousand of creator who are already using Ai to transform their images and bring their vision to life.
          </p>
          <Link href="/dashboard">
            <Button variant="primary" size="xl">🌟 Start Creating Now</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
