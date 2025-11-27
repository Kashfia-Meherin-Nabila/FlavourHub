import Image from "next/image";
import Link from "next/link";

export default function MenuCard({ image, name, description, price }) {
  return (
    <div className="card w-80 bg-base-100 shadow-xl m-4 hover:shadow-2xl transition-shadow duration-300">
      <figure className="h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={320}
          height={192}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-bold text-lg">${price}</span>
          <Link href="/shop" className="btn btn-primary btn-sm">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
}

