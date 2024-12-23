import Breadcrumb from "@/components/Base/Breadcrumb";
import Lucide from "@/components/Base/Lucide";
import QuickSearch from "@/components/QuickSearch";
import Litepicker from "@/components/Base/Litepicker";
import users from "@/fakers/users";
import projects from "@/fakers/projects";
import projectDetails from "@/fakers/project-details";
import { Tab } from "@/components/Base/Headless";
import TomSelect from "@/components/Base/TomSelect";
import { ClassicEditor } from "@/components/Base/Ckeditor";
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
import Alert from "@/components/Base/Alert";
import Tippy from "@/components/Base/Tippy";
import products from "@/fakers/products";
import categories from "@/fakers/categories";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";
import NotificationsPanel from "@/components/NotificationsPanel";
import ActivitiesPanel from "@/components/ActivitiesPanel";
import { Menu } from "@/components/Base/Headless";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Main() {
  const [subcategory, setSubcategory] = useState(["0"]);
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");
  const [generalReportFilter, setGeneralReportFilter] = useState<string>();
  const [show, setShow] = useState(false);
  const [non, setnon] = useState(false);
  const [quickSearch, setQuickSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // const [setSearchTerm] = useState(false);
  const [notificationsPanel, setNotificationsPanel] = useState(false);
  const [activitiesPanel, setActivitiesPanel] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleClearAll = () => {
    // formRef.current.reset();  // This will clear the form inputs
    const formRef = useRef<HTMLFormElement | null>(null);
  };

  return (
    <>
      {!show && (
        <div className="p-5 mt-[-120px] border bg-white border-slate-200/60 dark:border-darkmode-400">
          <div className=" items-center z-10 pb-5 text-[0.94rem] rounded-md font-medium border-b border-slate-200/60 dark:border-darkmode-400">
            <h1 className="text-2xl"> Find Judgement </h1>
            <div>
              {/* BEGIN: Breadcrumb */}
              <Breadcrumb className="flex-1 hidden xl:block ">
                <Breadcrumb.Link
                  className="dark:before:bg-chevron-black"
                  to="/"
                >
                  App
                </Breadcrumb.Link>
                <Breadcrumb.Link
                  className="dark:before:bg-chevron-black"
                  to="/"
                >
                  Dashboard
                </Breadcrumb.Link>
                <Breadcrumb.Link
                  className="dark:before:bg-chevron-black"
                  to="/"
                  active={true}
                >
                  Judgement
                </Breadcrumb.Link>
              </Breadcrumb>
              {/* END: Breadcrumb */}
              {/* BEGIN: Search */}
            </div>
          </div>
          <form ref={formRef}>
            <div className="mt-5">
              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Search in text</div>
                    </div>
                    <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                      Enter the unique name of your product. Make it descriptive
                      and easy to remember for customers.
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <FormInput
                    type="text"
                    placeholder="Search your keyword here"
                    className="text-black h-[40px]"
                  />
                  {/* <FormHelp>Maximum character 0/70</FormHelp> */}
                </div>
              </div>
              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Court name</div>
                    </div>
                    <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                      Select the primary category that best represents your
                      product. This helps customers find your product more
                      easily.
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  {/* <FormSelect id="category">
             {categories.fakeCategories().map((faker, fakerKey) => (
               <option key={fakerKey} value={fakerKey}>
                 {faker.name}
               </option>
             ))}
           </FormSelect> */}
                  <FormSelect className="py-3 w-full h-[40px]">
                    <option value="monthly">Court name</option>
                    <option value="yearly">Yearly</option>
                    <option value="weekly">Weekly</option>
                    <option value="daily">Daily</option>
                  </FormSelect>
                </div>
              </div>
              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Party name</div>
                      {/* <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                 Required
               </div> */}
                    </div>
                    <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                      Choose a more specific subcategory that closely matches
                      your product. It provides further details about your item.
                    </div>
                  </div>
                </label>
                {/* <div className="flex-1 w-full mt-3 xl:mt-0">
           <TomSelect
             value={subcategory}
             onChange={(e) => {
               setSubcategory(e.target.value);
             }}
             options={{
               placeholder: "Etalase",
             }}
             className="w-full"
             multiple
           >
             {categories.fakeCategories().map((faker, fakerKey) => (
               <option key={fakerKey} value={fakerKey}>
                 {faker.name}
               </option>
             ))}
           </TomSelect>
              <FormInput type="text" placeholder="Party name" />
         </div> */}
                <div className="flex mt-3 gap-6 xl:mt-0">
                  {/* <FormInput type="text" placeholder="Select one" className="w-[350px]"/> */}
                  <FormSelect className="py-3 w-[40%] h-[40px]">
                    <option value="monthly">Select one</option>
                    <option value="yearly">Yearly</option>
                    <option value="weekly">Weekly</option>
                    <option value="daily">Daily</option>
                  </FormSelect>
                  <FormInput
                    type="text"
                    placeholder="Petitioner/Respondent"
                    className="w-[700px] h-[40px]"
                  />
                </div>
              </div>
              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex w-[240px] items-center">
                      <div className="font-medium">Year/Volume</div>
                    </div>
                    <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                      Choose a more specific subcategory that closely matches
                      your product. It provides further details about your item.
                    </div>
                  </div>
                </label>
                <div className="flex w-full mt-3 gap-6">
                  {/* <FormInput type="text" placeholder="Select one" className="w-[350px]"/> */}
                  <FormSelect className="py-3 w-[50%] h-[40px]">
                    <option value="monthly">Year</option>
                    <option value="yearly">Yearly</option>
                    <option value="weekly">Weekly</option>
                    <option value="daily">Daily</option>
                  </FormSelect>
                  <FormSelect className="py-3 w-[50%] h-[40px]">
                    <option value="monthly">Volume</option>
                    <option value="yearly">Yearly</option>
                    <option value="weekly">Weekly</option>
                    <option value="daily">Daily</option>
                  </FormSelect>
                </div>
              </div>
              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex w-[250px] items-center">
                      <div className="font-medium">Case Type</div>
                    </div>
                    <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                      Choose a more specific subcategory that closely matches
                      your product. It provides further details about your item.
                    </div>
                  </div>
                </label>
                <div className="flex flex-wrap w-full mt-3 gap-6 xl:mt-0">
                  {/* <FormInput type="text" placeholder="Select one" className="w-[250px]"/> */}
                  <FormSelect className="py-3 h-[40px] w-[20%]">
                    <option value="monthly">Case Type</option>
                    <option value="yearly">Yearly</option>
                    <option value="weekly">Weekly</option>
                    <option value="daily">Daily</option>
                  </FormSelect>
                  <FormInput
                    type="text"
                    placeholder="Case no"
                    className="w-[450px] h-[40px]"
                  />
                  <FormSelect className="py-3 h-[40px] w-[20%]">
                    <option value="monthly">Year</option>
                    <option value="yearly">Yearly</option>
                    <option value="weekly">Weekly</option>
                    <option value="daily">Daily</option>
                  </FormSelect>
                  {/* <FormInput type="text" placeholder="Petitioner/Respondent" className="w-[250px]" /> */}
                </div>
              </div>
              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex w-[250px] items-center">
                      <div className="font-medium">Date of Judgement</div>
                    </div>
                    <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                      Enter the unique name of your product. Make it descriptive
                      and easy to remember for customers.
                    </div>
                  </div>
                </label>
                <div className="flex w-full gap-20 mt- xl:mt-0">
                  {/* <FormInput type="text" placeholder="Search your keyword here" /> */}

                  <FormInput
                    type="text"
                    placeholder="Date"
                    className="w-[330px] h-[40px]"
                  />
                  <h1>to</h1>
                  {/* <div className="relative ">
                  <Lucide
                    icon="Calendar"
                    className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3]"
                  />
                  <Litepicker
                    value={generalReportFilter}
                    onChange={(e) => {
                      setGeneralReportFilter(e.target.value);
                    }}
                    options={{
                      autoApply: false,
                      singleMode: false,
                      numberOfColumns: 2,
                      numberOfMonths: 2,
                      showWeekNumbers: true,
                      dropdowns: {
                        minYear: 1990,
                        maxYear: null,
                        months: true,
                        years: true,
                      },
                    }}
                    className="pl-9 sm:w-64 rounded-[0.3rem]"
                  />
                </div> */}
                  <FormInput
                    type="text"
                    placeholder="Date"
                    className="w-[330px] h-[40px]"
                  />
                  {/* <FormHelp>Maximum character 0/70</FormHelp> */}
                </div>
              </div>
              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Judgement Deliverd by</div>
                      {/* <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                 Search in text
               </div> */}
                    </div>
                    <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                      Enter the unique name of your product. Make it descriptive
                      and easy to remember for customers.
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  {/* <FormInput type="text" placeholder="Search your keyword here" /> */}
                  <FormInput
                    type="text"
                    placeholder="Judge Name"
                    className="w-full h-[40px]"
                  />
                  {/* <FormHelp>Maximum character 0/70</FormHelp> */}
                </div>
              </div>
              {/* Buttons */}
              <div className="w-full max-w-[1050px] flex flex-wrap justify-end space-x-4 md:space-x-2 lg:space-x-4 mx-auto p-4">
                <button
                  type="reset"
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none"
                  onClick={handleClearAll}
                >
                  Clear All
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                  onClick={() => setShow(!show)}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      {show && (
        <>
          <div className="gap-4 bg-white mt-[-120px] position-relative">
            <div className="bg-gray-100 w-full h-20 flex items-center">
              <div className="ml-5 cursor-pointer">
                {/* BEGIN: Breadcrumb */}
                <Breadcrumb className="flex-1 hidden xl:block">
                  <Breadcrumb.Link
                    className="dark:before:bg-chevron-black"
                    to="/"
                  >
                    App
                  </Breadcrumb.Link>
                  <Breadcrumb.Link
                    className="dark:before:bg-chevron-black"
                    to="/"
                  >
                    Dashboard
                  </Breadcrumb.Link>
                  <Breadcrumb.Link
                    className="dark:before:bg-chevron-black"
                    to="/"
                    active={true}
                  >
                    Judgement
                  </Breadcrumb.Link>
                </Breadcrumb>
                {/* END: Breadcrumb */}
                {/* BEGIN: Search */}
              </div>
              {/* <div
                className="relative justify-center flex-1 hidden xl:flex"
                onClick={() => setQuickSearch(true)}
              >
                <div className="mr-[200px] cursor-pointer bg-black/[0.12] dark:bg-darkmode-900/30 dark:border-transparent border-transparent border w-[350px] flex items-center py-2 px-3.5 rounded-[0.5rem] text-white/60 cursor-pointer hover:bg-black/[0.15] transition-colors duration-300 hover:duration-100">
                  <Lucide icon="Search" className="w-[18px] h-[18px]" />
                  <input
                    type="text"
                    placeholder="Quick search..."
                    className="ml-2.5 cursor-pointer mr-auto bg-transparent text-white/60 placeholder-white/60 border-none focus:outline-none"
                    onChange={(e) => setSearchTerm(e.target.value)} // Add this to capture input
                  />
                  <div>⌘K</div>
                </div>
              </div>
              <QuickSearch
                quickSearch={quickSearch}
                setQuickSearch={setQuickSearch}
              /> */}

              {/* END: Search */}
              {/* BEGIN: Notification & User Menu */}
              {/* <div className="flex items-center flex-1">
                <div className="flex items-center gap-1 ml-auto">
                  <a
                    href=""
                    className="p-2 text-white rounded-full hover:bg-white/5"
                    onClick={(e) => {
                      e.preventDefault();
                      setActivitiesPanel(true);
                    }}
                  >
                    <Lucide icon="LayoutGrid" className="w-[18px] h-[18px]" />
                  </a>
                  <a
                    href=""
                    className="p-2 text-white rounded-full hover:bg-white/5"
                    onClick={(e) => {
                      e.preventDefault();
                      // requestFullscreen();
                    }}
                  >
                    <Lucide icon="Expand" className="w-[18px] h-[18px]" />
                  </a>
                  <a
                    href=""
                    className="p-2 text-white rounded-full hover:bg-white/5"
                    onClick={(e) => {
                      e.preventDefault();
                      setNotificationsPanel(true);
                    }}
                  >
                    <Lucide icon="Bell" className="w-[18px] h-[18px]" />
                  </a>
                </div>
                <Menu className="ml-5">
                  <Menu.Button className="overflow-hidden rounded-full w-[36px] h-[36px] border-[3px] border-white/[0.15] image-fit">
                    <img
                      alt="Tailwise - Admin Dashboard Template"
                      src={users.fakeUsers()[0].photo}
                    />
                  </Menu.Button>
                </Menu>
              </div> */}
            </div>
            <div className="mt-[] max-w-[1130px] m-auto">
              <div className="mt-3.5 box h-auto box--stacked shadow-md">
                {/* <div className="bg-black w-full h-10">

              </div> */}
                <div
                  role="button"
                  onClick={() => setnon(!non)}
                  className="bg-white h-auto rounded-md shadow-md p-6 border border-gray-100 cursor-pointer"
                >
                  {/* Title Section */}
                  <div className="flex justify-between mb-4">
                    <div>
                      <h1 className="text-xl font-semibold text-gray-900">
                        SUBRATA CHOUDHURY @ SANTOSH CHOUDHURY & ORS.
                      </h1>
                      <h2 className="text-xl text-gray-700">
                        vs. THE STATE OF ASSAM & ANR.
                      </h2>
                    </div>
                    <div className="flex space-x-2">
                      <span className="px-3 h-[40px] flex items-center justify-center py-1 text-xs font-medium text-yellow-700 bg-yellow-100 border border-yellow-300 rounded-full">
                        [2024] 12 S.C.R. 1
                      </span>
                      <span className="px-3 h-[40px] flex items-center justify-center py-1 text-xs font-medium text-blue-700 bg-blue-100 border border-blue-300 rounded-full">
                        2024 INSC 834
                      </span>
                    </div>
                  </div>

                  {/* Case Information */}
                  <div className="text-gray-600 text-sm mb-4">
                    (CRIMINAL APPEAL /4451/2024)
                  </div>

                  {/* Date Section */}
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm">05 NOVEMBER 2024</p>
                  </div>

                  {/* Judges Section */}
                  <div className="mb-4 text-gray-600 text-sm">
                    <p>
                      <span>Hon'ble Mr. Justice C.T. Ravikumar*</span>
                      <span className="mx-2">•</span>
                      <span>Hon'ble Mr. Justice Rajesh Bindal</span>
                    </p>
                  </div>

                  {/* Description */}
                  <div className="mb-6 flex">
                    <p className="text-gray-700 text-sm">
                      Code of Criminal Procedure, 1973 – Second
                      respondent-complainant filed second complaint dtd.
                      20.07.2011, after the dismissal of the protest petition
                      and the acceptance of the negative Final Report in the
                      first complaint dtd. 11.11.2010, on the same set of
                      facts/allegations against the appellants and the...
                    </p>
                    <div className="text-blue-500 text-sm cursor-pointer hover:underline">
                      →
                    </div>
                  </div>

                  {/* Buttons Section */}
                  <div className="flex justify-between items-center"></div>
                </div>
              </div>
              <div className="mt-7 box h-auto box--stacked shadow-md">
                <div
                  role="button"
                  onClick={() => setnon(!non)}
                  className="bg-white h-auto rounded-md shadow-md p-6 border border-gray-200 cursor-pointer"
                >
                  {/* Title Section */}
                  <div className="flex justify-between mb-4">
                    <div>
                      <h1 className="text-xl font-semibold text-gray-900">
                        SUBRATA CHOUDHURY @ SANTOSH CHOUDHURY & ORS.
                      </h1>
                      <h2 className="text-xl text-gray-700">
                        vs. THE STATE OF ASSAM & ANR.
                      </h2>
                    </div>
                    <div className="flex space-x-2">
                      <span className="px-3 h-[40px] flex items-center justify-center py-1 text-xs font-medium text-yellow-700 bg-yellow-100 border border-yellow-300 rounded-full">
                        [2024] 12 S.C.R. 1
                      </span>
                      <span className="px-3 h-[40px] flex items-center justify-center py-1 text-xs font-medium text-blue-700 bg-blue-100 border border-blue-300 rounded-full">
                        2024 INSC 834
                      </span>
                    </div>
                  </div>

                  {/* Case Information */}
                  <div className="text-gray-600 text-sm mb-4">
                    (CRIMINAL APPEAL /4451/2024)
                  </div>

                  {/* Date Section */}
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm">05 NOVEMBER 2024</p>
                  </div>

                  {/* Judges Section */}
                  <div className="mb-4 text-gray-600 text-sm">
                    <p>
                      <span>Hon'ble Mr. Justice C.T. Ravikumar*</span>
                      <span className="mx-2">•</span>
                      <span>Hon'ble Mr. Justice Rajesh Bindal</span>
                    </p>
                  </div>

                  {/* Description */}
                  <div className="mb-6 flex">
                    <p className="text-gray-700 text-sm">
                      Code of Criminal Procedure, 1973 – Second
                      respondent-complainant filed second complaint dtd.
                      20.07.2011, after the dismissal of the protest petition
                      and the acceptance of the negative Final Report in the
                      first complaint dtd. 11.11.2010, on the same set of
                      facts/allegations against the appellants and the...
                    </p>
                    <div className="text-blue-500 text-sm cursor-pointer hover:underline">
                      →
                    </div>
                  </div>

                  {/* Buttons Section */}
                  <div className="flex justify-between items-center">
                    {/* Left Placeholder for Navigation */}
                    {/* <div className="text-blue-500 text-sm cursor-pointer hover:underline">
                    →
                  </div> */}

                    {/* Tags */}
                    {/* <div className="flex space-x-2">
                    <span className="px-3 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 border border-yellow-300 rounded-full">
                      [2024] 12 S.C.R. 1
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 border border-blue-300 rounded-full">
                      2024 INSC 834
                    </span>
                  </div> */}
                  </div>
                </div>
              </div>
              <div className="mt-7 box h-auto box--stacked shadow-md">
                <div
                  role="button"
                  onClick={() => setnon(!non)}
                  className="bg-white h-auto rounded-md shadow-md p-6 border border-gray-200 cursor-pointer"
                >
                  {/* Title Section */}
                  <div className="flex justify-between mb-2">
                    <div>
                      <h1 className="text-xl font-semibold text-gray-900">
                        SUBRATA CHOUDHURY @ SANTOSH CHOUDHURY & ORS.
                      </h1>
                      <h2 className="text-xl text-gray-700">
                        vs. THE STATE OF ASSAM & ANR.
                      </h2>
                    </div>
                    <div className="flex space-x-2">
                      <span className="px-3 h-[40px] flex items-center justify-center py-1 text-xs font-medium text-yellow-700 bg-yellow-100 border border-yellow-300 rounded-full">
                        [2024] 12 S.C.R. 1
                      </span>
                      <span className="px-3 h-[40px] flex items-center justify-center py-1 text-xs font-medium text-blue-700 bg-blue-100 border border-blue-300 rounded-full">
                        2024 INSC 834
                      </span>
                    </div>
                  </div>

                  {/* Case Information */}
                  <div className="text-gray-600 text-sm mb-4">
                    (CRIMINAL APPEAL /4451/2024)
                  </div>

                  {/* Date Section */}
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm">05 NOVEMBER 2024</p>
                  </div>

                  {/* Judges Section */}
                  <div className="mb-4 text-gray-600 text-sm">
                    <p>
                      <span>Hon'ble Mr. Justice C.T. Ravikumar*</span>
                      <span className="mx-2">•</span>
                      <span>Hon'ble Mr. Justice Rajesh Bindal</span>
                    </p>
                  </div>

                  {/* Description */}
                  <div className="mb-6 flex">
                    <p className="text-gray-700 text-sm">
                      Code of Criminal Procedure, 1973 – Second
                      respondent-complainant filed second complaint dtd.
                      20.07.2011, after the dismissal of the protest petition
                      and the acceptance of the negative Final Report in the
                      first complaint dtd. 11.11.2010, on the same set of
                      facts/allegations against the appellants and the...
                    </p>
                    <div className="text-blue-500 text-sm cursor-pointer hover:underline">
                      →
                    </div>
                  </div>

                  {/* Buttons Section */}
                  <div className="flex justify-between items-center">
                    {/* Left Placeholder for Navigation */}

                    {/* Tags */}
                    {/* <div className="flex space-x-2">
                    <span className="px-3 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 border border-yellow-300 rounded-full">
                      [2024] 12 S.C.R. 1
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 border border-blue-300 rounded-full">
                      2024 INSC 834
                    </span>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {non && (
        <>
          <div className="mt-[-900px] bg-gray-200 max-w-[1050px] m-auto gap-10">
            <div className="mt-3.5 box h-auto box--stacked">
              {/* Card Container */}
              <div className="bg-white bg-gray-100 rounded-lg w-full p-6 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.08)]">
                <div className="w-full bg-gray-100 rounded-lg flex items-center justify-between px-4 py-2 shadow-sm">
                  {/* Navigation Arrows and Current Page */}
                  <div className="flex items-center space-x-4">
                    {/* Back Arrow */}
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200"
                      aria-label="Previous"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>
                    </button>

                    {/* Current Page Display */}
                    <span className="text-gray-600 text-sm">1 out of 95</span>

                    {/* Forward Arrow */}
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200"
                      aria-label="Next"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Close Button */}
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200"
                    aria-label="Close"
                    onClick={() => navigate(-0)} // Navigate back to the previous page
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <hr className="m-auto" />
                {/* Header Section */}
                <div className="flex bg-gray-100 rounded w-full justify-between items-start border-b pb-4">
                  {/* Case Information */}
                  <div className="pl-3">
                    <h1 className="text-lg font-semibold text-gray-800">
                      SUBRATA CHOUDHURY @ SANTOSH CHOUDHURY & ORS. vs. THE STATE
                      OF ASSAM & ANR.
                    </h1>
                    <p className="text-sm text-gray-600 mt-2">
                      Year/Volume: 2024/Volume 12
                    </p>
                    <p className="text-sm text-gray-600">
                      Date of Judgement: Nov 05, 2024
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Delivered by:{" "}
                      <span className="font-medium">
                        Hon'ble Mr. Justice C.T. Ravikumar
                      </span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Case Type: (CRIMINAL APPEAL /4451/2024)
                    </p>
                  </div>
                  {/* Download Button */}
                  <button className="bg-blue-600 mr-2 text-white pr-5 px-6 py-2 rounded-md hover:bg-blue-700">
                    Download
                  </button>
                </div>

                {/* Judgment Section */}
                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Code of Criminal Procedure, 1973
                  </h2>
                  <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                    Second respondent-complainant filed second complaint dated
                    20.07.2011, after the dismissal of the protest petition and
                    the acceptance of the negative Final Report in the first
                    complaint dated 11.11.2010, on the same set of
                    facts/allegations against the appellants and the other
                    accused persons contained in the first complaint.
                  </p>

                  <h3 className="mt-4 font-semibold text-gray-800">
                    Maintainability:
                  </h3>
                  <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                    Held: Not maintainable – Maintainability or otherwise of the
                    second complaint depends upon how the earlier complaint was
                    rejected/dismissed at the first instance – If the earlier
                    disposal of the complaint was on merits and in a manner
                    known to law, the second complaint on ‘almost identical
                    facts’ which were raised in the first complaint would not be
                    maintainable if the core of both the complaints is same – In
                    the present case, the core of the first complaint dated
                    11.11.2010 and the second complaint dated 20.07.2011 was the
                    same – Further, the CJM dismissed the first complaint vide
                    order dated 06.06.2011 after accepting the Final Report,
                    hearing the second respondent and considering the protest
                    petition holding that the investigation did not suffer from
                    any infirmity.
                  </p>

                  <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                    Despite the said order, the second respondent did not
                    challenge the same but, chose to file a fresh
                    complaint/second complaint – Decision of the Sessions Judge
                    and the High Court interfering with the order passed by the
                    CJM which held that second complaint was not maintainable in
                    law, set aside – Order of the CJM restored. [Paras 27, 31,
                    32, 34]
                  </p>

                  <p className="text-sm text-gray-700 mt-4">
                    <strong>
                      Code of Criminal Procedure, 1973 – ss.202, 203:
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Main;
