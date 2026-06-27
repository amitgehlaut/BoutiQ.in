export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-3xl font-bold text-purple-700">BoutiQ.in</h1>

        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <a href="#" className="hover:text-purple-700">Home</a>
          <a href="#" className="hover:text-purple-700">Boutiques</a>
          <a href="#" className="hover:text-purple-700">Compare Quotes</a>
          <a href="#" className="hover:text-purple-700">Upload Design</a>
          <a href="#" className="hover:text-purple-700">About</a>
          <a href="#" className="hover:text-purple-700">Contact</a>
        </nav>

        <div className="flex gap-3">
          <button className="rounded-lg border border-purple-700 px-4 py-2 text-purple-700 hover:bg-purple-50">
            Login
          </button>

          <button className="rounded-lg bg-purple-700 px-5 py-2 text-white hover:bg-purple-800">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}
