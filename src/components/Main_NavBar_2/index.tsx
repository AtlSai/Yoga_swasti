import logo from "@/assets/logo_law.webp";

function Main() {
  return (
    <div className="flex flex-col items-center p-4 bg-blue-600">
      {/* Logo and Header */}
      <div className="flex items-center space-x-4 mb-6">
        <img src={logo} alt="Lawwheels Logo" className="w-16 h-16" />
        <h1 className="text-white text-3xl font-semibold">Lawwheels</h1>
      </div>

      {/* Search Bar and Filters */}
      <div className="flex items-center space-x-4 w-full max-w-4xl">
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Quick search..."
            className="w-full p-3 text-lg rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filter Options */}
        <div className="flex items-center text-white space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="radio" name="filter" className="hidden" />
            <div className="w-5 h-5 border-2 rounded-full"></div>
            <span>All</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="radio" name="filter" className="hidden" />
            <div className="w-5 h-5 border-2 rounded-full"></div>
            <span>Legal Term</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="radio" name="filter" checked className="hidden" />
            <div className="w-5 h-5 border-2 rounded-full bg-white"></div>
            <span>Definition</span>
          </label>
        </div>
      </div>

      {/* Alphabet Navigation */}
      <div className="flex justify-center mt-6 space-x-2 text-white">
        {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ#").map((letter) => (
          <button
            key={letter}
            className="text-md hover:text-blue-300 transition-colors"
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Main;
