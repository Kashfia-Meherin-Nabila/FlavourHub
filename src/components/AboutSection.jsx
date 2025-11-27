import { poppins } from "@/app/layout";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/chef.jpg"
            alt="Our Chef"
            width={500}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-[rgb(239,69,28)] text-4xl font-bold ">About Us</h2>

          <p className="text-lg leading-relaxed text-gray ">
            Welcome to <span className="font-semibold">FlavourHub</span>, where
            we bring delicious meals crafted with passion and fresh ingredients.
            Our mission is to provide high-quality food with fast delivery,
            giving you the perfect blend of taste and convenience.
          </p>

          <p className="text-lg leading-relaxed text-gray">
            From traditional recipes to modern flavors, our chefs prepare each
            meal with love, ensuring a delightful experience in every bite.
          </p>

          <button className={`${poppins.className} px-6 py-6 font-bold rounded-lg btn btn-neutral btn-outline w-40`}>Learn More</button>
        </div>
      </div>
    </section>
  );
}
