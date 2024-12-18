import { useState } from "react";
import logo from "@/assets/logo_law.webp";
import { Search, TrendingUp, History } from "lucide-react";
import Lucide from "@/components/Base/Lucide";
// import { ChevronDownIcon } from "lucide-react";

function SearchComponent() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");

  // Toggle dropdown visibility
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Handle selection of an option from the dropdown
  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="flex items-center mt-[30px] m-auto w-full md:w-[65%] mr-[280px] md:mb-0 relative">
      <div className="relative">
        <button
          className="h-[40px] w- flex absolute right top-1/2 transform -translate-y-1/2 bg- text-black border px-4 py-2 rounded-lg  focus:outline-none"
          onClick={toggleDropdown}
        >
          <Lucide icon="ChevronDown" className="w-5 h-5 flex float-left" />
          {selectedOption}
        </button>
        {/* Dropdown menu */}
        {dropdownOpen && (
          <div className="absolute mt-5 w-40 bg-white  rounded-lg shadow-lg z-20">
            <ul>
              <li
                className="px-4 z-20 py-2 text-gray-700 cursor-pointer hover:bg-blue-100"
                onClick={() => handleSelectOption("All")}
              >
                All
              </li>
              <li
                className="px-4 text-gray-700 cursor-pointer hover:bg-blue-100"
                onClick={() => handleSelectOption("LegalTerm")}
              >
                LegalTerm
              </li>
              <li
                className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-blue-100"
                onClick={() => handleSelectOption("Definition")}
              >
                Definition
              </li>
            </ul>
          </div>
        )}
      </div>

      <Search className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 mr-5 w-6 h-6" />
      <input
        type="text"
        placeholder="What you looking for...."
        className="w-full h-[36px] md:h-[40px] pl-32 pr-12 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
  );
}

const Main = () => {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  // Handle the "Read More" toggle
  const handleReadMore = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the expanded state for the specific index
    }));
  };

  return (
    <div className="w-[1173px] ml-[-35px]">
      {!show && (
        <div className="w-full mt-[-80px] rounded-xl flex flex-col mr-8">
          <img
            src={logo}
            alt="Logo"
            className="w-[115px] h-[115px] mt-[-10px] m-auto"
          />
          <h1 className="text-[34px] mt-5 m-auto text-white font-publicSans font-semibold">
            Understand Law Better
          </h1>

          <div className="m-auto w-full px-4">
            {/* Search Bar */}
            <div
              className="w-full sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%] m-auto mt-5"
              onClick={() => setShow(!show)}
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-[36px] p-4 text-md border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Alphabets */}
            <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%] flex justify-between m-auto mt-4 text-white">
              {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ#").map((letter) => (
                <button
                  key={letter}
                  className="text-white text-sm hover:text-blue-500 focus:text-blue-500"
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-10 md:gap-40 items-center justify-center mt-6 p-4 rounded-lg">
            {/* Popular Legal Terms */}
            <div className="flex flex-col mt-4 items-center w-full md:w-auto">
              <div className="flex">
                <TrendingUp className="w-6 h-6 mt-1 mr-2 text-[#1262D2]" />
                <h2 className="text-lg font-bold text-black mb-4 text-center">
                  Popular Legal Terms
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
                {Array(12)
                  .fill(0)
                  .map((_, index) => (
                    <button
                      key={index}
                      className="w-[110px] gap-2 h-[30px] bg-sky-100 text-sky-600 text-sm rounded-md flex items-center justify-center"
                    >
                      Always
                    </button>
                  ))}
              </div>
            </div>

            {/* Recent Searches */}
            <div className="flex flex-col mt-4 items-center w-full md:w-auto">
              <div className="flex">
                <History className="w-6 h-6 mr-2 text-[#1262D2] mt-0.5" />
                <h2 className="text-lg font-bold text-black mb-4 text-center">
                  Recent Searches
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
                {Array(12)
                  .fill(0)
                  .map((_, index) => (
                    <button
                      key={index}
                      className="w-[110px] gap-2 h-[30px] bg-sky-100 text-sky-600 text-sm rounded-md flex items-center justify-center"
                    >
                      Always
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {show && (
        <>
          <div className="bg-blue-600 fixed top-0 w-full h-[170px] p-4 flex items-center justify-between ">
            {/* Logo and Title */}
            <div className="flex items-center mt-[-90px] space-x-3 mb-3 md:mb-0">
              <img
                src={logo}
                alt="Lawwheels Logo"
                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full"
              />
              <h1 className="text-white text-xl md:text-2xl font-bold">
                Lawwheels
              </h1>
            </div>

            {/* Search Bar */}
            <SearchComponent />
          </div>

          <div className="w-[950px] fixed w-full text-center">
            <div className="flex mt-[-40px] ml-[230px] flex-wrap justify-center">
              {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ#").map((letter) => (
                <button
                  key={letter}
                  className="text-white text-sm md:text-sm hover:text-blue-300 focus:text-blue-300 px-2"
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
          {/* Content Section Below */}
          <div className="mt-[80px]">
            {/* Add content here */}
          </div>
          <div className="w-full m-auto bg-white mt-[110px] flex flex-wrap gap-6 items-center justify-center p-4">
            {/* Repeated Content Box */}
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white  w-[450px] md:w-[48%] lg:w-[48%] border border-gray-300 rounded-lg shadow-sm p-4"
                >
                  <h3 className="text-base font-semibold text-gray-800 mb-4">Always</h3>
                  <div className=" md:flex-row gap-4">
                    {/* First Paragraph */}
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                      {/* Show additional content when expanded is true */}
                      {expanded[index] && (
                        <span>
                          {" "}
                          More details about the content. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s, when an
                          unknown printer took a galley of type and scrambled it to make
                          a type specimen book.
                        </span>
                      )}
                    </p>
                    {/* Read More Button */}
                    <button
                      className="text-blue-500 flex float-right"
                      onClick={() => handleReadMore(index)} // Toggle the expanded state when clicked
                    >
                      {expanded[index] ? "Read Less" : "Read More"} {/* Toggle button text */}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Main;

