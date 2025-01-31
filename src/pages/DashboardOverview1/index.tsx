import { useEffect, useState } from "react";
import logo from "@/assets/logo_law.webp";
import { Search, TrendingUp, History } from "lucide-react";
import Lucide from "@/components/Base/Lucide";
import {
  FormLabel,
  FormCheck,
  FormInput,
  FormInline,
  FormSelect,
  FormSwitch,
  InputGroup,
  FormHelp,
} from "@/components/Base/Form";
// import axios from 'axios'
// import { ChevronDownIcon } from "lucide-react";

function SearchComponent() {
  const [userData, setData] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");

  // Toggle dropdown visibility
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Handle selection of an option from the dropdown
  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false); // Close dropdown after selection
  };

  // useEffect(()=>{
  //   axios.post("http://localhost:5001/authUser/register")
  //   .then((response)=>{
  //     console.log(response.data)
  //     setData(response.data)
  //   })
  // })

  



  return (
    <div className="flex justify-center pr-[220px] items-center pt-20 w-full px-4">
      {/* Search Bar Container */}
      <div className="flex w-full  h-[40px] bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        {/* FormSelect Inside Search Bar */}
        <FormSelect className="w-[30%] md:w-[20%] bg-gray-100 text-gray-600 text-sm px-3 focus:outline-none">
          <option value="monthly">All</option>
          <option value="yearly">Legal Terms</option>
          <option value="weekly">Definition</option>
        </FormSelect>

        {/* Input Field */}
        <input
          type="text"
          placeholder="What are you looking for..."
          className="w-full text-sm text-gray-700  px-4 focus:outline-none"
        />
      </div>
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
    <div className="w-full">
      {!show && (
        <div className="w-full mt-[-80px] rounded-xl flex flex-col mr-8">
          <img
            src={logo}
            alt="Logo"
            className="w-[115px] h-[115px] mt-[-10px] m-auto"
          />
          <h1 className="text-[28px] mt-6 sm:text-[34px] md:text-[40px] lg:text-[48px] flex items-center justify-center w-[90%] max-w-[600px] h-auto m-auto text-white font-publicSans font-semibold text-center">
            Understand Law Better
          </h1>

          <div className="m-auto mt-6 w-full px-4">
            {/* Search Bar */}
            <div
              className="w-full sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%] m-auto"
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

          <div className="w-full flex flex-col md:flex-row gap-10 md:gap-40 items-center justify-center mt-2 p-4 rounded-lg">
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
                      className="w-[110px] gap-2 h-[30px] bg-gray-600 text-white text-sm rounded-md flex items-center justify-center"
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
                      className="w-[110px] gap-2 h-[30px] bg-gray-600 text-white text-sm rounded-md flex items-center justify-center"
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
          <div className="w-full bg-white">
            {/* Header Section */}
            <div className="bg-blue-600 h-[200px] fixed top-0 w-full flex flex-wrap items-center justify-between px-4 md:px-8 py-2">
              {/* Logo and Title */}
              <div className="flex items-center gap-3 mx-auto md:ml-10 mt-[50px] md:mt-0">
                <img
                  src={logo}
                  alt="Lawwheels Logo"
                  className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full"
                />
                <h1 className="text-white text-xl md:text-2xl font-bold">
                  Lawwheels
                </h1>
              </div>

              {/* Search Component */}
              <div className="flex justify-center items-center w-full">
                {/* Search Bar Container */}
                <div className="flex w-full max-w-[600px] flex justify-center items-center mt-[5px] h-[40px] bg-white rounded-lg overflow-hidden shadow-sm">
                  {/* FormSelect Inside Search Bar */}
                  <FormSelect className="w-[30%] h-[38px]  md:w-[24%] bg-gray-100 text-gray-600 text-sm px-3 focus:outline-none">
                    <option value="monthly">All</option>
                    <option value="yearly">Legal Terms</option>
                    <option value="weekly">Definition</option>
                  </FormSelect>

                  {/* Input Field */}
                  <input
                    type="text"
                    placeholder="What are you looking for..."
                    className="w-full text-sm h-[40px] text-gray-700 px-4"
                  
                  />
                </div>
              </div>

              <div className=" w-full flex flex-wrap justify-center items-center px-4 py-2">
                {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ#").map((letter) => (
                  <button
                    key={letter}
                    className="text-white text-xs sm:text-sm md:text-base hover:text-blue-300 focus:text-blue-300 px-1"
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="container bg-white mx-auto mt-[120px]  px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={`bg-white ${
                    expanded[index] ? "md:col-span-2 -order-1" : ""
                  } border mt-10 border-gray-300 rounded-lg shadow-sm p-4 transition-all duration-300`}
                >
                  <h3 className="text-base font-semibold text-gray-800 mb-4">
                    Always
                  </h3>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                      {expanded[index] && (
                        <span>
                          {" "}
                          More details about the content. Lorem Ipsum has been
                          the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type
                          and scrambled it to make a type specimen book.
                        </span>
                      )}
                    </p>
                    <button
                      className="text-blue-500 self-end"
                      onClick={() => handleReadMore(index)}
                    >
                      {expanded[index] ? "Read Less" : "Read More"}
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
