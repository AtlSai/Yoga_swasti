// import { useState } from "react";
import Lucide from "@/components/Base/Lucide";
import Litepicker from "@/components/Base/Litepicker";
import { Menu } from "@/components/Base/Headless";
import users from "@/fakers/users";
import projects from "@/fakers/projects";
import projectDetails from "@/fakers/project-details";
// import { FormSelect, FormInput, FormCheck } from "@/components/Base/Form";
// import Tippy from "@/components/Base/Tippy";
// import Button from "@/components/Base/Button";
import { Tab } from "@/components/Base/Headless";
// import _ from "lodash";
// import Lucide from "@/components/Base/Lucide";
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

function Main() {
  const [subcategory, setSubcategory] = useState(["0"]);
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");
  const [generalReportFilter, setGeneralReportFilter] = useState<string>();
  const [show, setShow] = useState(false);

 

  return (
    // <>
    // <div className="grid grid-cols-12 gap-y-10 gap-x-6">
    //   <div className="col-span-12">
    //     <Tab.Group>
    //       <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
    //         <div className="text-base font-medium group-[.mode--light]:text-white">
    //           Project Statistic
    //         </div>
    //         <Tab.List
    //           variant="boxed-tabs"
    //           className="w-auto md:ml-auto bg-white box rounded-[0.6rem] border-slate-200 group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!border-transparent dark:group-[.mode--light]:!bg-darkmode-900/30 dark:!box"
    //         >
    //           <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-current group-[.mode--light]:bg-transparent group-[.mode--light]:[&[aria-selected='true']_button]:bg-white/[0.12] group-[.mode--light]:[&[aria-selected='true']_button]:border-transparent dark:group-[.mode--light]:[&[aria-selected='true']_button]:bg-white/[.05] dark:bg-transparent">
    //             <Tab.Button
    //               className="w-full md:w-24 text-slate-500 whitespace-nowrap rounded-[0.6rem] group-[.mode--light]:text-slate-200"
    //               as="button"
    //             >
    //               Daily
    //             </Tab.Button>
    //           </Tab>
    //           <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-current group-[.mode--light]:bg-transparent group-[.mode--light]:[&[aria-selected='true']_button]:bg-white/[0.12] group-[.mode--light]:[&[aria-selected='true']_button]:border-transparent dark:group-[.mode--light]:[&[aria-selected='true']_button]:bg-white/[.05] dark:bg-transparent">
    //             <Tab.Button
    //               className="w-full md:w-24 text-slate-500 whitespace-nowrap rounded-[0.6rem] group-[.mode--light]:text-slate-200"
    //               as="button"
    //             >
    //               Monthly
    //             </Tab.Button>
    //           </Tab>
    //           <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-current group-[.mode--light]:bg-transparent group-[.mode--light]:[&[aria-selected='true']_button]:bg-white/[0.12] group-[.mode--light]:[&[aria-selected='true']_button]:border-transparent dark:group-[.mode--light]:[&[aria-selected='true']_button]:bg-white/[.05] dark:bg-transparent">
    //             <Tab.Button
    //               className="w-full md:w-24 text-slate-500 whitespace-nowrap rounded-[0.6rem] group-[.mode--light]:text-slate-200"
    //               as="button"
    //             >
    //               Yearly
    //             </Tab.Button>
    //           </Tab>
    //         </Tab.List>
    //       </div>
    //       <Tab.Panels className="mt-3.5 box box--stacked">
    //         <Tab.Panel className="flex flex-col xl:flex-row gap-2 p-1.5 leading-relaxed">
    //           <div className="grid w-full grid-cols-4 gap-2">
    //             <div className="col-span-4 sm:col-span-2 xl:col-span-1 bg-gradient-to-b from-theme-2/90 to-theme-1/[0.85] flex-1 p-5 border-0 relative rounded-[0.6rem] box border-slate-200/60 bg-slate-50 overflow-hidden before:content-[''] before:w-full before:h-[130%] before:bg-gradient-to-b before:from-black/[0.15] before:to-transparent before:absolute before:right-0 before:top-0 before:rotate-45 before:-mr-[62%]">
    //               <div className="flex items-center justify-center w-12 h-12 border rounded-full border-white/10 bg-white/10">
    //                 <Lucide
    //                   icon="Database"
    //                   className="w-6 h-6 text-white fill-white/10"
    //                 />
    //               </div>
    //               <div className="flex items-center mt-12">
    //                 <div className="text-2xl font-medium text-white">
    //                   247,220
    //                 </div>
    //                 <div className="flex items-center ml-3.5 border border-success/50 bg-success/50 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-white/90 dark:bg-white/10">
    //                   12%
    //                   <Lucide
    //                     icon="ChevronUp"
    //                     className="w-4 h-4 ml-px stroke-[1.5]"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="mt-1 text-base text-white/70">
    //                 Customer Engagement
    //               </div>
    //               <Menu className="absolute top-0 right-0 mt-5 mr-5">
    //                 <Menu.Button className="w-5 h-5 text-slate-500">
    //                   <Lucide
    //                     icon="MoreVertical"
    //                     className="w-6 h-6 stroke-white/70 fill-white/70"
    //                   />
    //                 </Menu.Button>
    //                 <Menu.Items className="w-40">
    //                   <Menu.Item>
    //                     <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
    //                     Link
    //                   </Menu.Item>
    //                   <Menu.Item>
    //                     <Lucide icon="Trash" className="w-4 h-4 mr-2" />
    //                     Delete
    //                   </Menu.Item>
    //                 </Menu.Items>
    //               </Menu>
    //             </div>
    //             <div className="col-span-4 sm:col-span-2 xl:col-span-1 flex-1 p-5 border relative rounded-[0.6rem] bg-slate-50/50 overflow-hidden dark:bg-darkmode-400">
    //               <div className="flex items-center justify-center w-12 h-12 border rounded-full border-primary/10 bg-primary/10">
    //                 <Lucide
    //                   icon="AppWindow"
    //                   className="w-6 h-6 text-primary fill-primary/10"
    //                 />
    //               </div>
    //               <div className="flex items-center mt-12">
    //                 <div className="text-2xl font-medium">124,625</div>
    //                 <div className="flex items-center ml-3.5 border border-danger/50 bg-danger/70 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-white/90">
    //                   3%
    //                   <Lucide
    //                     icon="ChevronDown"
    //                     className="w-4 h-4 ml-px stroke-[1.5]"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="mt-1 text-base text-slate-500">
    //                 Lead Generation
    //               </div>
    //               <Menu className="absolute top-0 right-0 mt-5 mr-5">
    //                 <Menu.Button className="w-5 h-5 text-slate-500">
    //                   <Lucide
    //                     icon="MoreVertical"
    //                     className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
    //                   />
    //                 </Menu.Button>
    //                 <Menu.Items className="w-40">
    //                   <Menu.Item>
    //                     <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
    //                     Link
    //                   </Menu.Item>
    //                   <Menu.Item>
    //                     <Lucide icon="Trash" className="w-4 h-4 mr-2" />
    //                     Delete
    //                   </Menu.Item>
    //                 </Menu.Items>
    //               </Menu>
    //             </div>
    //             <div className="col-span-4 sm:col-span-2 xl:col-span-1 flex-1 p-5 border relative rounded-[0.6rem] bg-slate-50/50 overflow-hidden dark:bg-darkmode-400">
    //               <div className="flex items-center justify-center w-12 h-12 border rounded-full border-info/10 bg-info/10">
    //                 <Lucide
    //                   icon="Box"
    //                   className="w-6 h-6 text-info fill-info/10"
    //                 />
    //               </div>
    //               <div className="flex items-center mt-12">
    //                 <div className="text-2xl font-medium">749,220</div>
    //                 <div className="flex items-center ml-3.5 border border-success/50 bg-success/70 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-white/90">
    //                   4%
    //                   <Lucide
    //                     icon="ChevronUp"
    //                     className="w-4 h-4 ml-px stroke-[1.5]"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="mt-1 text-base text-slate-500">
    //                 Support Tickets
    //               </div>
    //               <Menu className="absolute top-0 right-0 mt-5 mr-5">
    //                 <Menu.Button className="w-5 h-5 text-slate-500">
    //                   <Lucide
    //                     icon="MoreVertical"
    //                     className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
    //                   />
    //                 </Menu.Button>
    //                 <Menu.Items className="w-40">
    //                   <Menu.Item>
    //                     <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
    //                     Link
    //                   </Menu.Item>
    //                   <Menu.Item>
    //                     <Lucide icon="Trash" className="w-4 h-4 mr-2" />
    //                     Delete
    //                   </Menu.Item>
    //                 </Menu.Items>
    //               </Menu>
    //             </div>
    //             <div className="col-span-4 sm:col-span-2 xl:col-span-1 flex-1 p-5 border relative rounded-[0.6rem] bg-slate-50/50 overflow-hidden dark:bg-darkmode-400">
    //               <div className="flex items-center justify-center w-12 h-12 border rounded-full border-primary/10 bg-primary/10">
    //                 <Lucide
    //                   icon="PanelsTopLeft"
    //                   className="w-6 h-6 text-primary fill-primary/10"
    //                 />
    //               </div>
    //               <div className="flex items-center mt-12">
    //                 <div className="text-2xl font-medium">273,235</div>
    //                 <div className="flex items-center ml-3.5 border border-success/50 bg-success/70 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-white/90">
    //                   9%
    //                   <Lucide
    //                     icon="ChevronUp"
    //                     className="w-4 h-4 ml-px stroke-[1.5]"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="mt-1 text-base text-slate-500">
    //                 Pipeline Management
    //               </div>
    //               <Menu className="absolute top-0 right-0 mt-5 mr-5">
    //                 <Menu.Button className="w-5 h-5 text-slate-500">
    //                   <Lucide
    //                     icon="MoreVertical"
    //                     className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
    //                   />
    //                 </Menu.Button>
    //                 <Menu.Items className="w-40">
    //                   <Menu.Item>
    //                     <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
    //                     Link
    //                   </Menu.Item>
    //                   <Menu.Item>
    //                     <Lucide icon="Trash" className="w-4 h-4 mr-2" />
    //                     Delete
    //                   </Menu.Item>
    //                 </Menu.Items>
    //               </Menu>
    //             </div>
    //           </div>
    //           <a
    //             href=""
    //             className="bg-slate-50 xl:w-20 text-slate-400/80 flex flex-col justify-center items-center p-5 border border-slate-300/80 rounded-[0.6rem] hover:bg-slate-50 border-dashed [&:hover_svg]:rotate-180 dark:bg-darkmode-400"
    //           >
    //             <Lucide
    //               icon="PlusSquare"
    //               className="w-6 h-6 transition-transform transform"
    //             />
    //           </a>
    //         </Tab.Panel>
    //         <Tab.Panel className="p-5 leading-relaxed"></Tab.Panel>
    //         <Tab.Panel className="p-5 leading-relaxed"></Tab.Panel>
    //       </Tab.Panels>
    //     </Tab.Group>
    //   </div>
    //   <div className="flex flex-col col-span-12 xl:col-span-6 gap-y-10">
    //     <div>
    //       <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
    //         <div className="text-base font-medium">Contact Details</div>
    //       </div>
    //       <div className="p-5 mt-3.5 box box--stacked">
    //         <div className="flex flex-col items-center pb-5 mb-5 border-b border-dashed gap-y-2 sm:flex-row border-slate-300/70">
    //           <div className="overflow-hidden rounded-full w-14 h-14 image-fit border-[3px] border-slate-200/70">
    //             <img
    //               alt="Tailwise - Admin Dashboard Template"
    //               src={users.fakeUsers()[0].photo}
    //             />
    //           </div>
    //           <div className="text-center sm:text-left sm:ml-4">
    //             <div className="text-base font-medium">
    //               {users.fakeUsers()[0].name}
    //             </div>
    //             <div className="text-slate-500 mt-0.5">
    //               {users.fakeUsers()[0].position}
    //             </div>
    //           </div>
    //           <div className="flex items-center px-3 py-1 font-medium border rounded-full sm:ml-auto border-success/10 bg-success/10 text-success">
    //             <div className="w-1.5 h-1.5 mr-2 rounded-full border border-success/50 bg-success/50"></div>{" "}
    //             High priority
    //           </div>
    //         </div>
    //         <div className="flex flex-col text-center gap-y-3 sm:flex-row">
    //           <div className="flex-1 border-dashed sm:border-r last:border-0">
    //             <div className="text-slate-500">Leads Generated</div>
    //             <div className="flex items-center justify-center mt-1">
    //               <div className="text-base font-medium">2,176</div>
    //               <div className="flex items-center ml-2 -mr-1 text-xs text-success">
    //                 11%
    //                 <Lucide icon="ChevronUp" className="w-4 h-4 ml-px" />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="flex-1 border-dashed sm:border-r last:border-0">
    //             <div className="text-slate-500">Deals Closed</div>
    //             <div className="flex items-center justify-center mt-1">
    //               <div className="text-base font-medium">2,027</div>
    //               <div className="flex items-center ml-2 -mr-1 text-xs text-success">
    //                 2%
    //                 <Lucide icon="ChevronUp" className="w-4 h-4 ml-px" />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="flex-1 border-dashed sm:border-r last:border-0">
    //             <div className="text-slate-500">Meetings Scheduled</div>
    //             <div className="flex items-center justify-center mt-1">
    //               <div className="text-base font-medium">342</div>
    //               <div className="flex items-center ml-2 -mr-1 text-xs text-danger">
    //                 4%
    //                 <Lucide icon="ChevronDown" className="w-4 h-4 ml-px" />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
    //         <div className="text-base font-medium">Invite Team Member</div>
    //       </div>
    //       <div className="p-5 mt-3.5 box box--stacked">
    //         <div className="pb-5 mb-5 border-b border-dashed border-slate-300/70">
    //           <div>Everyone at project can access this file</div>
    //           <div className="relative mt-3">
    //             <FormInput
    //               type="text"
    //               placeholder="everyone@gmail.com"
    //               className="sm:py-3"
    //             />
    //             <Button
    //               variant="primary"
    //               size="sm"
    //               className="w-full sm:w-auto sm:absolute inset-y-0 right-0 pl-3.5 pr-4 my-auto mt-2 sm:mt-auto mr-2 h-9 sm:h-8 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
    //             >
    //               <Lucide
    //                 icon="Send"
    //                 className="w-3.5 h-3.5 mr-1.5 stroke-[1.3]"
    //               />
    //               Send Invitation
    //             </Button>
    //           </div>
    //         </div>
    //         <div className="flex flex-col gap-5 pb-5 mb-5 border-b border-dashed border-slate-300/70">
    //           {_.take(users.fakeUsers(), 5).map((faker, fakerKey) => (
    //             <div className="flex items-center gap-3.5" key={fakerKey}>
    //               <div>
    //                 <div className="w-12 h-12 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
    //                   <img
    //                     alt="Tailwise - Admin Dashboard Template"
    //                     src={faker.photo}
    //                   />
    //                 </div>
    //               </div>
    //               <div className="flex flex-col w-full sm:items-center gap-y-2.5 sm:flex-row">
    //                 <div>
    //                   <div className="font-medium">{faker.name}</div>
    //                   <div className="text-xs text-slate-500 mt-0.5">
    //                     {faker.email}
    //                   </div>
    //                 </div>
    //                 <div className="relative sm:ml-auto">
    //                   <Lucide
    //                     icon="Settings"
    //                     className="absolute inset-y-0 w-3.5 h-3.5 my-auto ml-2.5 stroke-[1.2]"
    //                   />
    //                   <FormSelect
    //                     className="bg-[length:15px_auto] sm:w-48 pl-8 pr-2.5 py-1.5 text-xs"
    //                     value={faker.position}
    //                     onChange={() => {}}
    //                   >
    //                     {_.take(users.fakeUsers(), 5).map((faker, fakerKey) => (
    //                       <option key={fakerKey} value={faker.position}>
    //                         {faker.position}
    //                       </option>
    //                     ))}
    //                   </FormSelect>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //         <div>
    //           <div>Share invitation link</div>
    //           <div className="flex gap-3 mt-3">
    //             <FormInput
    //               type="text"
    //               placeholder="everyone@gmail.com"
    //               value="https://left4code.com/invitation?token=abcdefgh12345678"
    //               disabled
    //               className="text-slate-500"
    //             />
    //             <Tippy
    //               content="Copy link"
    //               as={Button}
    //               variant="outline-secondary"
    //             >
    //               <Lucide icon="Copy" className="w-4 h-4 stroke-[1.5]" />
    //             </Tippy>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex flex-col col-span-12 xl:col-span-6 gap-y-10">
    //     <div>
    //       <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
    //         <div className="text-base font-medium">Team Collaboration</div>
    //       </div>
    //       <div className="p-5 mt-3.5 box box--stacked">
    //         <div className="pb-5 mb-5 border-b border-dashed border-slate-300/70">
    //           <div>Collaboration progress report</div>
    //           <div className="flex items-center w-full px-3 py-3 mt-3 border rounded-lg bg-success/10 border-success/10 text-success">
    //             <Lucide icon="Clock" className="w-5 h-5 mr-2" />
    //             Project kick-off date:
    //             <div className="ml-2">{projects.fakeProjects()[0].dueDate}</div>
    //           </div>
    //           <div className="flex flex-col gap-4 mt-5">
    //             <div className="flex flex-col items-center sm:flex-row gap-y-2">
    //               <div className="sm:w-36 text-slate-500">Project Name</div>
    //               <div className="flex items-center font-medium sm:ml-5 sm:h-7">
    //                 {projects.fakeProjects()[0].projectName}
    //               </div>
    //             </div>
    //             <div className="flex flex-col items-center sm:flex-row gap-y-2">
    //               <div className="sm:w-36 text-slate-500">Project Manager</div>
    //               <div className="flex items-center h-5 sm:ml-5">
    //                 <div className="w-6 h-6 overflow-hidden border-2 rounded-full image-fit zoom-in border-slate-200/70 box">
    //                   <img
    //                     alt="Tailwise - Admin Dashboard Template"
    //                     src={projects.fakeProjects()[0].projectManager.photo}
    //                   />
    //                 </div>
    //                 <div className="ml-2.5 underline decoration-dotted decoration-primary/30 underline-offset-[3px]">
    //                   {projects.fakeProjects()[0].projectManager.name}
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="flex flex-col items-center sm:flex-row gap-y-2">
    //               <div className="sm:w-36 text-slate-500">
    //                 Creative Director
    //               </div>
    //               <div className="flex items-center sm:ml-5 sm:h-7">
    //                 <div className="w-6 h-6 overflow-hidden border-2 rounded-full image-fit zoom-in border-slate-200/70 box">
    //                   <img
    //                     alt="Tailwise - Admin Dashboard Template"
    //                     src={projects.fakeProjects()[1].projectManager.photo}
    //                   />
    //                 </div>
    //                 <div className="ml-2.5 underline decoration-dotted decoration-primary/30 underline-offset-[3px]">
    //                   {projects.fakeProjects()[1].projectManager.name}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div>
    //           <div className="flex items-center w-full px-3 py-3 font-medium border rounded-lg bg-slate-50 text-slate-500 dark:bg-darkmode-400">
    //             <Lucide
    //               icon="KanbanSquare"
    //               className="w-5 h-5 mr-2 stroke-[1.3]"
    //             />
    //             Project Details for Team Members
    //             <Menu className="ml-auto">
    //               <Menu.Button as="a">
    //                 <Lucide
    //                   icon="MoreVertical"
    //                   className="w-5 h-5 stroke-slate-500/70 fill-slate-500/70"
    //                 />
    //               </Menu.Button>
    //               <Menu.Items className="w-40">
    //                 <Menu.Item>
    //                   <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy Link
    //                 </Menu.Item>
    //                 <Menu.Item>
    //                   <Lucide icon="Trash" className="w-4 h-4 mr-2" />
    //                   Delete
    //                 </Menu.Item>
    //               </Menu.Items>
    //             </Menu>
    //           </div>
    //           <div className="flex flex-col gap-3 mt-3">
    //             {_.take(projectDetails.fakeProjectDetails(), 4).map(
    //               (faker, fakerKey) => (
    //                 <div
    //                   className="relative flex flex-col items-center gap-5 p-3 border border-dashed rounded-lg sm:flex-row border-slate-300/60"
    //                   key={fakerKey}
    //                 >
    //                   <div className="absolute top-0 right-0 mt-3 mr-3">
    //                     <FormCheck.Input
    //                       className="border"
    //                       type="checkbox"
    //                       checked={[true, false][_.random(0, 1)]}
    //                       onChange={() => {}}
    //                     />
    //                   </div>
    //                   <div>
    //                     <div className="w-40 h-24 rounded-md image-fit border-[3px] border-slate-200/70">
    //                       <img
    //                         alt="Tailwise - Admin Dashboard Template"
    //                         className="rounded-md saturate-[0.7]"
    //                         src={faker.image}
    //                       />
    //                     </div>
    //                   </div>
    //                   <div className="-mt-1">
    //                     <a
    //                       href=""
    //                       className="block font-medium text-center sm:text-left"
    //                     >
    //                       {faker.title}
    //                     </a>
    //                     <div className="flex items-center mt-2.5 text-xs text-slate-500 dark:text-slate-500">
    //                       <Lucide
    //                         icon="Link"
    //                         className="w-2.5 h-2.5 mr-1.5 stroke-[2]"
    //                       />
    //                       <a
    //                         href=""
    //                         className="truncate underline decoration-dotted underline-offset-[3px] decoration-slate-300"
    //                       >
    //                         {faker.link}
    //                       </a>
    //                     </div>
    //                     <div className="flex items-center justify-center mt-4 sm:justify-start">
    //                       <div className="flex">
    //                         <div className="w-6 h-6 image-fit zoom-in">
    //                           <Tippy
    //                             as="img"
    //                             alt="Tailwise - Admin Dashboard Template"
    //                             className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
    //                             src={faker.contributors[0].photo}
    //                             content={faker.contributors[0].name}
    //                           />
    //                         </div>
    //                         <div className="w-6 h-6 -ml-2.5 image-fit zoom-in">
    //                           <Tippy
    //                             as="img"
    //                             alt="Tailwise - Admin Dashboard Template"
    //                             className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
    //                             src={faker.contributors[1].photo}
    //                             content={faker.contributors[1].name}
    //                           />
    //                         </div>
    //                         <div className="w-6 h-6 -ml-2.5 image-fit zoom-in">
    //                           <Tippy
    //                             as="img"
    //                             alt="Tailwise - Admin Dashboard Template"
    //                             className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
    //                             src={faker.contributors[2].photo}
    //                             content={faker.contributors[2].name}
    //                           />
    //                         </div>
    //                       </div>
    //                       <div className="ml-3 text-xs text-slate-500">
    //                         4+ Members
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               )
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </>
    // <>
    //   <div className="max-w-6xl border-black mx-auto mt-[-60px] p-6 bg-white shadow-md rounded-md">
    //     <h1 className="text-2xl font-semibold mb-6">Find Judgements</h1>
    //     <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //       {/* Search in Text */}
    //       <div className="flex flex-col md:flex-row justify-between md:col-span-2">
    //         <div className="w-full md:w-[350px] mb-4 md:mb-0">
    //           <label className="block text-gray-700 font-bold mb-2">
    //             Search in Text
    //           </label>
    //           <p className="text-sm text-gray-500 mb-2">
    //             Enter the text you want to search.
    //           </p>
    //         </div>
    //         <input
    //           type="text"
    //           placeholder="Search your keyword here..."
    //           className="w-full md:w-[689px] h-[38px] px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
    //         />
    //       </div>

    //       {/* Court Name */}
    //       <div className="flex flex-col md:flex-row justify-between md:col-span-2">
    //         <div className="w-full md:w-[350px] mb-4 md:mb-0">
    //           <label className="block text-gray-700 font-bold mb-2">
    //             Court Name
    //           </label>
    //           <p className="text-sm text-gray-500 mb-2">
    //             Filter judgments based on the court where the case was heard,
    //             such as Supreme Court, High Courts, District Courts, or Special
    //             Tribunals.
    //           </p>
    //         </div>
    //         <select
    //           title="go"
    //           className="w-full md:w-[689px] h-[38px] px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
    //         >
    //           <option value="">Court name</option>
    //         </select>
    //       </div>

    //       {/* Party Name */}
    //       <div className="flex flex-col md:flex-row justify-between md:col-span-2">
    //         <div className="w-full md:w-[350px] mb-4 md:mb-0">
    //           <label className="block text-gray-700 font-bold mb-2">
    //             Party Name
    //           </label>
    //           <p className="text-sm text-gray-500 mb-2">
    //             Select judgments based on the party name, such as Petitioner or
    //             Respondent.
    //           </p>
    //         </div>

    //         <div className="flex flex-col md:flex-row gap-4 w-full">
    //           <select
    //             title="go"
    //             className="h-[38px] w-full md:w-[327px] px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
    //           >
    //             <option value="">Select one</option>
    //           </select>
    //           <select
    //             title="go"
    //             className="h-[38px] w-full md:w-[327px] px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
    //           >
    //             <option value="">Petitioner/Respondent</option>
    //           </select>
    //         </div>
    //       </div>

    //       {/* Year / Volume */}
    //       <div className="flex flex-col md:flex-row justify-between gap-4 md:col-span-2">
    //         <div className="w-full md:w-[350px] mb-4 md:mb-0">
    //           <label className="block text-gray-700 font-bold mb-2">
    //             Year/Volume
    //           </label>
    //           <p className="text-sm text-gray-500 mb-2">
    //             Filter judgments based on the year the case was heard.
    //           </p>
    //         </div>

    //         <div className="flex flex-col md:flex-row gap-4 w-full">
    //           <select
    //             title="go"
    //             className="w-full md:w-[327px] h-[38px] px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
    //           >
    //             <option value="">Year</option>
    //           </select>
    //           <select
    //             title="go"
    //             className="w-full md:w-[327px] h-[38px] px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
    //           >
    //             <option value="">Volume</option>
    //           </select>
    //         </div>
    //       </div>

    //       {/* Case Type */}
    //       <div className="flex flex-col md:flex-row justify-between gap-4 md:col-span-2">
    //         <div className="w-full md:w-[350px] mb-4 md:mb-0">
    //           <label className="block text-gray-700 font-bold mb-2">
    //             Case Type
    //           </label>
    //           <p className="text-sm text-gray-500 mb-2">
    //             Filter judgments by case type.
    //           </p>
    //         </div>

    //         <div className="flex flex-col md:flex-row gap-4 w-full">
    //           <select
    //             title="go"
    //             className="w-full md:w-[219px] h-[38px] px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
    //           >
    //             <option value="">Case type</option>
    //           </select>
    //           <input
    //             title="go"
    //             type="text"
    //             className="w-full md:w-[219px] h-[38px] px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
    //           />
    //           <select
    //             title="go"
    //             className="w-full md:w-[219px] h-[38px] px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
    //           >
    //             <option value="">Year</option>
    //           </select>
    //         </div>
    //       </div>

    //       {/* Date of Judgment */}
    //       <div className=" gap-4 flex flex-col md:col-span-2">
    //         <div className="flex justify-between">
    //           <div className="w-[350px]">
    //             <label className="block text-gray-700 font-bold mb-2">
    //               Date of Judgment (From)
    //             </label>
    //             <p className="text-sm text-gray-500 mb-2">
    //               Filter judgments by date range (from).
    //             </p>
    //           </div>
    //           <div>
    //             <input
    //               title="go"
    //               type="date"
    //               className="w-[689px] h-[38px] px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
    //             />
    //           </div>
    //         </div>
    //         <div className="flex justify-between">
    //           <div className="w-[400px]">
    //             <label className="block text-gray-700 font-bold mb-2">To</label>
    //             <p className="text-sm text-gray-500 mb-2">
    //               Filter judgments by date range (to).
    //             </p>
    //           </div>
    //           <div>
    //             <input
    //               title="go"
    //               type="date"
    //               className="w-[689px] h-[38] px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       {/* Judgment Delivered By */}
    //       <div className="flex justify-between md:col-span-2">
    //         <div className="w-[350px]">
    //           <label className="block text-gray-700 font-bold mb-2">
    //             Judgment Delivered By
    //           </label>
    //           <p className="text-sm text-gray-500 mb-2">
    //             Filter judgments based on the judge who delivered the judgment.
    //           </p>
    //         </div>
    //         <select
    //           title="go"
    //           className="w-[689px] h-[38px] px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
    //         >
    //           <option value="">Judge name</option>
    //         </select>
    //       </div>

    //       {/* Buttons */}
    //       <div className="w-[1050px] flex justify-end space-x-4">
    //         <button
    //           type="reset"
    //           className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none"
    //         >
    //           Clear All
    //         </button>
    //         <button
    //           type="submit"
    //           className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
    //         >
    //           Search
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </>
    <>
    {!show && (
    <div className="p-5 mt-[-50px] border bg-white rounded-[0.6rem] border-slate-200/60 dark:border-darkmode-400">
      <div className="flex items-center pb-5 text-[0.94rem] font-medium border-b border-slate-200/60 dark:border-darkmode-400">
        {/* <Lucide
         icon="ChevronDown"
         className="w-5 h-5 stroke-[1.3] mr-2"
       />{" "} */}
        <h1 className="text-xl"> Find Judgement </h1>
      </div>
      <div className="mt-5">
        {/* <Alert
         variant="outline-warning"
         className="flex items-center px-4 mb-2 bg-warning/5 border-warning/30"
       >
         {({ dismiss }) => (
           <>
             <div>
               <Lucide
                 icon="Lightbulb"
                 className="stroke-[1.3] w-4 h-4 mr-3 2xl:mr-2"
               />
             </div>
             <div className="mr-5 leading-relaxed">
               Avoid selling counterfeit products / violating
               Intellectual Property Rights, so that your products
               are not deleted.
               <a
                 href=""
                 className="ml-1 font-medium underline decoration-dotted decoration-warning/50 underline-offset-[3px]"
               >
                 Learn More
               </a>
               <Alert.DismissButton
                 type="button"
                 className="inset-y-0 btn-close"
                 onClick={dismiss}
                 aria-label="Close"
               >
                 <Lucide icon="X" className="w-4 h-4" />
               </Alert.DismissButton>
             </div>
           </>
         )}
       </Alert> */}
        <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
          <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
            <div className="text-left">
              <div className="flex items-center">
                <div className="font-medium">Search in taxt</div>
                {/* <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                 Search in text
               </div> */}
              </div>
              <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                Enter the unique name of your product. Make it descriptive and
                easy to remember for customers.
              </div>
            </div>
          </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <FormInput type="text" placeholder="Search your keyword here" className="text-black" />
            {/* <FormHelp>Maximum character 0/70</FormHelp> */}
          </div>
        </div>
        <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
          <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
            <div className="text-left">
              <div className="flex items-center">
                <div className="font-medium">Court name</div>
                {/* <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                 Required
               </div> */}
              </div>
              <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                Select the primary category that best represents your product.
                This helps customers find your product more easily.
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
            <FormSelect className="py-3 w-full">
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
                Choose a more specific subcategory that closely matches your
                product. It provides further details about your item.
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
            <FormSelect className="py-3 w-[40%]">
              <option value="monthly">Select one</option>
              <option value="yearly">Yearly</option>
              <option value="weekly">Weekly</option>
              <option value="daily">Daily</option>
            </FormSelect>
            <FormInput  
              type="text"
              placeholder="Petitioner/Respondent"
              className="w-[700px]"
            />
          </div>
        </div>
        <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
          <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
            <div className="text-left">
              <div className="flex w-[240px] items-center">
                <div className="font-medium">Yaer/Volume</div>
                {/* <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                 Required
               </div> */}
              </div>
              <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                Choose a more specific subcategory that closely matches your
                product. It provides further details about your item.
              </div>
            </div>
          </label>
          <div className="flex w-full mt-3 gap-6">
            {/* <FormInput type="text" placeholder="Select one" className="w-[350px]"/> */}
            <FormSelect className="py-3 w-[50%]">
              <option value="monthly">Yaer</option>
              <option value="yearly">Yearly</option>
              <option value="weekly">Weekly</option>
              <option value="daily">Daily</option>
            </FormSelect>
            <FormSelect className="py-3 w-[50%]">
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
                {/* <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                 Required
               </div> */}
              </div>
              <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                Choose a more specific subcategory that closely matches your
                product. It provides further details about your item.
              </div>
            </div>
          </label>
          <div className="flex flex-wrap w-full mt-3 gap-6 xl:mt-0">
            {/* <FormInput type="text" placeholder="Select one" className="w-[250px]"/> */}
            <FormSelect className="py-3 w-[20%]">
              <option value="monthly">Case Type</option>
              <option value="yearly">Yearly</option>
              <option value="weekly">Weekly</option>
              <option value="daily">Daily</option>
            </FormSelect>
            <FormInput
              type="text"
              placeholder="Case no"
              className="w-[450px]"
            />
            <FormSelect className="py-3 w-[20%]">
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
                {/* <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                 Search in text
               </div> */}
              </div>
              <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                Enter the unique name of your product. Make it descriptive and
                easy to remember for customers.
              </div>
            </div>
          </label>
          <div className="flex w-full gap-10 mt- xl:mt-0">
            {/* <FormInput type="text" placeholder="Search your keyword here" /> */}
            <div className="relative ">
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
                </div>
            <h1>to</h1>
            <div className="relative">
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
                </div>
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
                Enter the unique name of your product. Make it descriptive and
                easy to remember for customers.
              </div>
            </div>
          </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            {/* <FormInput type="text" placeholder="Search your keyword here" /> */}
            <FormSelect className="py-3">
              <option value="monthly">Judge name</option>
              <option value="yearly">Yearly</option>
              <option value="weekly">Weekly</option>
              <option value="daily">Daily</option>
            </FormSelect>
            {/* <FormHelp>Maximum character 0/70</FormHelp> */}
          </div>
        </div>
          {/* Buttons */}
           <div className="w-[1050px] flex justify-end space-x-4">
             <button
               type="reset"
               className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none"
             >
               Clear All
             </button>
             <button
               type="submit"
               className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
               onClick={() => setShow(!show)}
             >
               Search
             </button>
             </div>
      </div>
    </div>
    )};

   {show && (
     <>
    <div className="mt-[-90px]">
          <div className="mt-3.5 box box--stacked">
      <div className="bg-white rounded-md shadow-md p-6 border border-gray-200">
        {/* Title Section */}
        <div className="mb-4">
          <h1 className="text-xl font-semibold text-gray-900">
            SUBRATA CHOUDHURY @ SANTOSH CHOUDHURY & ORS.
          </h1>
          <h2 className="text-xl text-gray-700">vs. THE STATE OF ASSAM & ANR.</h2>
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
        <div className="mb-6">
          <p className="text-gray-700 text-sm">
            Code of Criminal Procedure, 1973 – Second respondent-complainant
            filed second complaint dtd. 20.07.2011, after the dismissal of the
            protest petition and the acceptance of the negative Final Report in
            the first complaint dtd. 11.11.2010, on the same set of
            facts/allegations against the appellants and the...
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-between items-center">
          {/* Left Placeholder for Navigation */}
          <div className="text-blue-500 text-sm cursor-pointer hover:underline">
            →
          </div>

          {/* Tags */}
          <div className="flex space-x-2">
            <span className="px-3 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 border border-yellow-300 rounded-full">
              [2024] 12 S.C.R. 1
            </span>
            <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 border border-blue-300 rounded-full">
              2024 INSC 834
            </span>
          </div>
        </div>
            </div>
          </div>
          <div className="mt-3.5 box box--stacked">
      <div className="bg-white rounded-md shadow-md p-6 border border-gray-200">
        {/* Title Section */}
        <div className="mb-4">
          <h1 className="text-xl font-semibold text-gray-900">
            SUBRATA CHOUDHURY @ SANTOSH CHOUDHURY & ORS.
          </h1>
          <h2 className="text-xl text-gray-700">vs. THE STATE OF ASSAM & ANR.</h2>
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
        <div className="mb-6">
          <p className="text-gray-700 text-sm">
            Code of Criminal Procedure, 1973 – Second respondent-complainant
            filed second complaint dtd. 20.07.2011, after the dismissal of the
            protest petition and the acceptance of the negative Final Report in
            the first complaint dtd. 11.11.2010, on the same set of
            facts/allegations against the appellants and the...
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-between items-center">
          {/* Left Placeholder for Navigation */}
          <div className="text-blue-500 text-sm cursor-pointer hover:underline">
            →
          </div>

          {/* Tags */}
          <div className="flex space-x-2">
            <span className="px-3 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 border border-yellow-300 rounded-full">
              [2024] 12 S.C.R. 1
            </span>
            <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 border border-blue-300 rounded-full">
              2024 INSC 834
            </span>
          </div>
        </div>
            </div>
          </div>
          <div className="mt-3.5 box box--stacked">
      <div className="bg-white rounded-md shadow-md p-6 border border-gray-200">
        {/* Title Section */}
        <div className="mb-4">
          <h1 className="text-xl font-semibold text-gray-900">
            SUBRATA CHOUDHURY @ SANTOSH CHOUDHURY & ORS.
          </h1>
          <h2 className="text-xl text-gray-700">vs. THE STATE OF ASSAM & ANR.</h2>
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
        <div className="mb-6">
          <p className="text-gray-700 text-sm">
            Code of Criminal Procedure, 1973 – Second respondent-complainant
            filed second complaint dtd. 20.07.2011, after the dismissal of the
            protest petition and the acceptance of the negative Final Report in
            the first complaint dtd. 11.11.2010, on the same set of
            facts/allegations against the appellants and the...
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-between items-center">
          {/* Left Placeholder for Navigation */}
          <div className="text-blue-500 text-sm cursor-pointer hover:underline">
            →
          </div>

          {/* Tags */}
          <div className="flex space-x-2">
            <span className="px-3 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 border border-yellow-300 rounded-full">
              [2024] 12 S.C.R. 1
            </span>
            <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 border border-blue-300 rounded-full">
              2024 INSC 834
            </span>
          </div>
        </div>
            </div>
          </div>
          </div>
    </>)}
    </>
  );
}
export default Main;
