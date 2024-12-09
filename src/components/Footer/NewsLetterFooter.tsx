export default function NewsletterSection() {
  return (
    <div className="w-full max-w-screen-xl mx-auto text-center mb-12 px-4">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-[#FF9F0D]">Still</span> You Need Our Support?
        </h2>
        <p className="mb-6 text-gray-600">
          Don't wait, make a smart & logical quote here. It's pretty easy.
        </p>
      </div>

      <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto w-full">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-grow bg-[#FF9F0D] text-white placeholder-white placeholder-opacity-60 px-4 py-2 rounded-md focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-white text-[#FF9F0D] px-6 py-2 rounded-md font-semibold hover:bg-[#FF9F0D] hover:text-white transition duration-300"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );
}
