import Image from "next/image";
import Navbar from "../components/Navbar";
import { playfair, poppins } from "./layout";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/assets/food1.jpg"
        alt="banner"
        fill
        className="object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1
          className={`${playfair.className}  text-white text-center text-8xl w-225 font-bold`}
        >
          Order favorite meals online
        </h1>
        <p
          className={`${poppins.className} text-2xl text-center items-center justify-center text-[#eae2b7] mt-10 w-225`}
        >
          Eats brings healthy meals and pure water to your door, making eating
          well easy and fast for all.
        </p>

        <div className="flex gap-4 justify-center mt-6">
          {/* View Menu Button */}
          <Link href="/menu">
          <button className={`${poppins.className}px-6 py-3 text-white rounded-lg bg-[rgb(239,69,28)] hover:bg-[rgb(200,50,20)] transition-colors duration-300 w-40`}>
            View Menu
          </button>          
          </Link>

          {/* Order Now Button */}
          
          <Link href="/shop">
          <button className={`${poppins.className} px-6 py-6 font-bold rounded-lg btn btn-neutral btn-outline w-40`}>
            Order Now
          </button>
          </Link>
          
        </div>

      </div>
    </div>
  );
}
