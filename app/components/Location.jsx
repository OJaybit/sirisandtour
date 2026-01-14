export default function Location() {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center overflow-hidden relative text-white"
     style={{
  backgroundImage: "linear-gradient(rgba(10,123,190,0.9), rgba(10,123,190,0.9)), url('/background-image.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
}}

    >
      <div className="absolute bg-transparent -top-5 -left-15 w-32 h-32 lg:w-48 lg:h-48 pointer-events-none opacity-30">
  <img
    src="/starfish.png" 
    alt="Top left Decoration"
    className="w-full h-full object-contain"
  />
</div>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl px-6 lg:px-20 text-center lg:text-left z-10">
        <h2 className="text-[42px] sm:text-[48px] lg:text-[56px] font-bold mb-8">
          WHERE WE ARE
        </h2>

        <p className="text-gray-100 leading-[1.7] mb-6">
          Welcome to a sanctuary of relaxation and elegance, where every
          detail is designed to create unforgettable experiences.
        </p>

        <p className="text-gray-100 leading-[1.7] mb-10">
          Whether you seek luxurious comfort, eco-friendly living, or a
          family-friendly escape, we offer a refined experience tailored
          to every guest.
        </p>

         <div className="absolute bg-transparent -bottom-20 -right-4 w-20 h-182 lg:w-48 lg:h-48 pointer-events-none opacity-30">
  <img
    src="/rebune.png" 
    alt="Top left Decoration"
    className="w-full h-full object-contain"
  />
</div>
      </div>
    </section>
  );
}
