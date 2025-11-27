import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[rgb(239,69,28)] mb-10">
          What Our Customers Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="card bg-base-100 shadow-xl p-6">
            <div className="flex flex-col items-center">
              <Image
                src="/assets/user1.jpg"
                alt="User 1"
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Ayesha Rahman</h3>
              <p className="text-gray-500 text-sm mb-3">Dhaka, Bangladesh</p>
              <p className="text-gray-700">
                “The food is always fresh and delicious. Delivery is super fast!
                Highly recommend FlavourHub for daily meals.”
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 shadow-xl p-6">
            <div className="flex flex-col items-center">
              <Image
                src="/assets/user2.jpg"
                alt="User 2"
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Rafiuzzaman Karim</h3>
              <p className="text-gray-500 text-sm mb-3">Chittagong</p>
              <p className="text-gray-700">
                “Amazing taste and great portion size. Their biryani and
                burgers are my absolute favorites!”
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 shadow-xl p-6">
            <div className="flex flex-col items-center">
              <Image
                src="/assets/user3.jpg"
                alt="User 3"
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Sara Ahmed</h3>
              <p className="text-gray-500 text-sm mb-3">Sylhet</p>
              <p className="text-gray-700">
                “Great service and beautiful packaging. I love how they maintain
                quality in every item!”
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
