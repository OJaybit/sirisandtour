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
      <div className="absolute bg-transparent -top-9 -left-17 w-32 h-32 lg:w-48 lg:h-48 pointer-events-none opacity-10">
  <img
    src="/starfish.png" 
    alt="Top left Decoration"
    className="w-full h-full object-contain"
  />
</div>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl px-6 lg:px-20 text-center lg:text-center z-10">
        <h2 className="text-[42px] sm:text-[48px] lg:text-[56px] font-bold mb-10">
          WHERE WE ARE
        </h2>

        <p className="text-gray-100 leading-[1.7] mb-6">
          Based in the heart of Cairo, we operate across every major destination in Egypt. From the bustling streets of the capital to the serene shores of the Red Sea and the ancient temples of Luxor and Aswan.
        </p>
 <p className="text-gray-100 leading-[1.7] mb-10">
              Whether you seek luxurious comfort, eco-friendly living, or a
              family-friendly escape, we offer a refined experience tailored
              to every guest.
            </p>
         <div className="absolute bg-transparent -bottom-20  -right-9 w-20 h-182 lg:w-60 lg:h-50 pointer-events-none opacity-15">
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
