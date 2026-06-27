export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-pink-500 text-white">
      <div className="mx-auto flex min-h-[600px] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-bold">India&apos;s Boutique Marketplace</h1>

        <p className="mt-6 text-2xl">Compare • Choose • Stitch</p>

        <p className="mt-6 max-w-2xl text-lg text-purple-100">
          Discover thousands of boutique designers, compare stitching quotes,
          upload your favorite design, and get it stitched by the best boutique
          near you.
        </p>

        <div className="mt-10 flex gap-5">
          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-purple-700">
            Explore Boutiques
          </button>

          <button className="rounded-xl border border-white px-8 py-4">
            Compare Quotes
          </button>
        </div>
      </div>
    </section>
  );
}
