// import "@/assets/css/pages/landing-page.css";
// import Lucide, { icons } from "@/components/Base/Lucide";
// import { Menu } from "@/components/Base/Headless";
// import { FormInput, FormTextarea } from "@/components/Base/Form";
// import {
//   setColorScheme,
//   colorSchemes,
//   ColorSchemes,
// } from "@/stores/colorSchemeSlice";
// import { setPageLoader } from "@/stores/pageLoaderSlice";
// import { selectColorScheme } from "@/stores/colorSchemeSlice";
// import { useAppDispatch, useAppSelector } from "@/stores/hooks";
// import ReportDonutChart7 from "@/components/ReportDonutChart7";
// import { Link, useNavigate } from "react-router-dom";
// import Tippy from "@/components/Base/Tippy";
// import users from "@/fakers/users";
// import messages from "@/fakers/messages";
// import activities from "@/fakers/activities";
// import Button from "@/components/Base/Button";
// import { themes, Themes } from "@/stores/themeSlice";
// import { useState } from "react";
// import clsx from "clsx";
// import _ from "lodash";

// function Main() {
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const [topBarActive, setTopBarActive] = useState(false);
//   const [showcaseActive, setShowcaseActive] = useState(true);
//   const activeColorScheme = useAppSelector(selectColorScheme);
//   const [tempActiveColorScheme, setTempActiveColorScheme] =
//     useState(activeColorScheme);

//   const setColorSchemeClass = () => {
//     const el = document.querySelectorAll("html")[0];
//     el.setAttribute("class", activeColorScheme);
//   };

//   const switchColor = (colorScheme: ColorSchemes) => {
//     setTempActiveColorScheme(colorScheme);

//     setTimeout(() => {
//       dispatch(setColorScheme(colorScheme));
//     }, 500);
//     localStorage.setItem("colorScheme", colorScheme);
//     setColorSchemeClass();
//   };

//   const scrollTo = (e: React.MouseEvent) => {
//     e.preventDefault();

//     const targetId = (e.target as HTMLElement).getAttribute("data-link");
//     const el = document.getElementById(
//       targetId !== null ? targetId.slice(1) : ""
//     );

//     if (el !== null) {
//       window.scroll({
//         behavior: "smooth",
//         left: 0,
//         top: el.offsetTop - 140,
//       });
//     }
//   };

//   const previewTheme = (theme: Themes) => {
//     dispatch(setPageLoader(true));
//     navigate(`/?theme=${theme.name}`);
//   };

//   setColorSchemeClass();

//   const themesImageAssets = import.meta.glob<{
//     default: string;
//   }>("/src/assets/images/themes/*.{jpg,jpeg,png,svg}", { eager: true });

//   const frameworkImageAssets = import.meta.glob<{
//     default: string;
//   }>("/src/assets/images/frameworks/*.{jpg,jpeg,png,svg}", { eager: true });

//   const pageImageAssets = import.meta.glob<{
//     default: string;
//   }>("/src/assets/images/pages/*.{jpg,jpeg,png,svg}", { eager: true });

//   window.onscroll = () => {
//     if (
//       document.body.scrollTop > 50 ||
//       document.documentElement.scrollTop > 50
//     ) {
//       setTopBarActive(true);
//     } else {
//       setTopBarActive(false);
//     }

//     if (
//       document.body.scrollTop > 100 ||
//       document.documentElement.scrollTop > 100
//     ) {
//       setShowcaseActive(false);
//     } else {
//       setShowcaseActive(true);
//     }
//   };

//   const [groups, setGroups] = useState<
//     Array<{
//       group: string;
//       icon: keyof typeof icons;
//       active: boolean;
//       pages: Array<{
//         name: string;
//         pathname: string;
//         image: string;
//       }>;
//     }>
//   >([
//     {
//       group: "Dashboards",
//       icon: "GaugeCircle",
//       active: true,
//       pages: [
//         {
//           name: "E-Commerce",
//           pathname: "/",
//           image: "dashboard-overview-1",
//         },
//         {
//           name: "CRM",
//           pathname: "/dashboard-overview-2",
//           image: "dashboard-overview-2",
//         },
//         {
//           name: "Hospital",
//           pathname: "/dashboard-overview-3",
//           image: "dashboard-overview-3",
//         },
//         {
//           name: "Factory",
//           pathname: "/dashboard-overview-4",
//           image: "dashboard-overview-4",
//         },
//         {
//           name: "Banking",
//           pathname: "/dashboard-overview-5",
//           image: "dashboard-overview-5",
//         },
//         {
//           name: "Cafe",
//           pathname: "/dashboard-overview-6",
//           image: "dashboard-overview-6",
//         },
//         {
//           name: "Crypto",
//           pathname: "/dashboard-overview-7",
//           image: "dashboard-overview-7",
//         },
//         {
//           name: "Hotel",
//           pathname: "/dashboard-overview-8",
//           image: "dashboard-overview-8",
//         },
//       ],
//     },
//     {
//       group: "Apps",
//       icon: "ActivitySquare",
//       active: false,
//       pages: [
//         {
//           name: "Inbox",
//           pathname: "/inbox",
//           image: "inbox",
//         },
//         {
//           name: "File Manager List",
//           pathname: "/file-manager-list",
//           image: "file-manager-list",
//         },
//         {
//           name: "File Manager Grid",
//           pathname: "/file-manager-grid",
//           image: "file-manager-grid",
//         },
//       ],
//     },
//     {
//       group: "UI Widgets",
//       icon: "Album",
//       active: false,
//       pages: [
//         {
//           name: "Creative",
//           pathname: "/creative",
//           image: "creative",
//         },
//         {
//           name: "Dynamic",
//           pathname: "/dynamic",
//           image: "dynamic",
//         },
//         {
//           name: "Interactive",
//           pathname: "/interactive",
//           image: "interactive",
//         },
//       ],
//     },
//     {
//       group: "User Management",
//       icon: "BookMarked",
//       active: false,
//       pages: [
//         {
//           name: "Users",
//           pathname: "/users",
//           image: "users",
//         },
//         {
//           name: "Departments",
//           pathname: "/departments",
//           image: "departments",
//         },
//         {
//           name: "Add User",
//           pathname: "/add-user",
//           image: "add-user",
//         },
//       ],
//     },
//     {
//       group: "Personal Dashboard",
//       icon: "HardDrive",
//       active: false,
//       pages: [
//         {
//           name: "Profile Overview",
//           pathname: "/profile-overview",
//           image: "profile-overview",
//         },
//         {
//           name: "Events",
//           pathname: "/profile-overview?page=events",
//           image: "profile-overview-events",
//         },
//         {
//           name: "Achievements",
//           pathname: "/profile-overview?page=achievements",
//           image: "profile-overview-achievements",
//         },
//         {
//           name: "Contacts",
//           pathname: "/profile-overview?page=contacts",
//           image: "profile-overview-contacts",
//         },
//         {
//           name: "Default",
//           pathname: "/profile-overview?page=default",
//           image: "profile-overview-default",
//         },
//       ],
//     },
//     {
//       group: "General Settings",
//       icon: "MousePointerSquare",
//       active: false,
//       pages: [
//         {
//           name: "Profile Info",
//           pathname: "/settings",
//           image: "settings",
//         },
//         {
//           name: "Email Settings",
//           pathname: "/settings?page=email-settings",
//           image: "settings-email-settings",
//         },
//         {
//           name: "Security",
//           pathname: "/settings?page=security",
//           image: "settings-security",
//         },
//         {
//           name: "Preferences",
//           pathname: "/settings?page=preferences",
//           image: "settings-preferences",
//         },
//         {
//           name: "Two-factor Authentication",
//           pathname: "/settings?page=two-factor-authentication",
//           image: "settings-two-factor-authentication",
//         },
//         {
//           name: "Device History",
//           pathname: "/settings?page=device-history",
//           image: "settings-device-history",
//         },
//         {
//           name: "Notification Settings",
//           pathname: "/settings?page=notification-settings",
//           image: "settings-notification-settings",
//         },
//         {
//           name: "Connected Services",
//           pathname: "/settings?page=connected-services",
//           image: "settings-connected-services",
//         },
//         {
//           name: "Social Media Links",
//           pathname: "/settings?page=social-media-links",
//           image: "settings-social-media-links",
//         },
//         {
//           name: "Account Deactivation",
//           pathname: "/settings?page=account-deactivation",
//           image: "settings-account-deactivation",
//         },
//       ],
//     },
//     {
//       group: "Account",
//       icon: "ShieldHalf",
//       active: false,
//       pages: [
//         {
//           name: "Billing",
//           pathname: "/billing",
//           image: "billing",
//         },
//         {
//           name: "Invoice",
//           pathname: "/invoice",
//           image: "invoice",
//         },
//       ],
//     },
//     {
//       group: "E-Commerce",
//       icon: "Building",
//       active: false,
//       pages: [
//         {
//           name: "Categories",
//           pathname: "/categories",
//           image: "categories",
//         },
//         {
//           name: "Add Product",
//           pathname: "/add-product",
//           image: "add-product",
//         },
//         {
//           name: "Product List",
//           pathname: "/product-list",
//           image: "product-list",
//         },
//         {
//           name: "Product Grid",
//           pathname: "/product-grid",
//           image: "product-grid",
//         },
//         {
//           name: "Transaction List",
//           pathname: "/transaction-list",
//           image: "transaction-list",
//         },
//         {
//           name: "Transaction Detail",
//           pathname: "/transaction-detail",
//           image: "transaction-detail",
//         },
//         {
//           name: "Seller List",
//           pathname: "/seller-list",
//           image: "seller-list",
//         },
//         {
//           name: "Seller Detail",
//           pathname: "/seller-detail",
//           image: "seller-detail",
//         },
//         {
//           name: "Reviews",
//           pathname: "/reviews",
//           image: "reviews",
//         },
//         {
//           name: "Point of Sale",
//           pathname: "/point-of-sale",
//           image: "point-of-sale",
//         },
//       ],
//     },
//     {
//       group: "Authentications",
//       icon: "PanelRightClose",
//       active: false,
//       pages: [
//         {
//           name: "Login",
//           pathname: "/login",
//           image: "login",
//         },
//         {
//           name: "Register",
//           pathname: "/register",
//           image: "register",
//         },
//       ],
//     },
//   ]);

//   const setActiveGroup = (e: React.MouseEvent, key: number) => {
//     e.preventDefault();

//     const computedGroups = groups.map((group, groupKey) => {
//       return {
//         ...group,
//         active: groupKey === key,
//       };
//     });

//     setGroups(computedGroups);
//   };

//   return (
//     <div
//       className={clsx([
//         "landing-page relative",
//         "before:content-[''] before:w-screen before:h-screen before:fixed before:bg-slate-100 before:z-[-1]",
//         !showcaseActive && "landing-page--scrolled",
//       ])}
//     >
//       <div
//         className={clsx([
//           "relative group background overflow-x-hidden scroll-smooth",
//           "before:content-[''] before:w-screen before:h-screen before:rounded-[0_0_50%] [&.background--hidden]:before:from-slate-100 [&.background--hidden]:before:to-transparent before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:absolute before:z-[-1] before:transition-colors before:ease-in-out before:duration-300",
//           "after:content-[''] after:z-[-1] after:h-screen after:w-screen [&.background--hidden]:after:opacity-0 after:transition-[opacity,height] after:ease-in-out after:duration-300 after:top-0 after:fixed after:bg-texture-white after:bg-contain after:bg-fixed after:bg-[center_-25rem] after:bg-no-repeat",
//           topBarActive && "background--hidden",
//         ])}
//       >
//         <div className="container fixed inset-x-0 z-50 px-5 mx-auto xl:px-0">
//           <div
//             className={clsx([
//               "relative flex items-center h-16 w-full mt-5 px-5",
//               "before:content-[''] before:inset-0 before:box before:absolute before:opacity-0 before:border-0 before:bg-gradient-to-r before:from-theme-1 before:to-theme-2 before:rounded-xl",
//               "group-[.background--hidden]:before:opacity-100",
//               "after:content-[''] after:z-[-1] after:inset-x-4 after:shadow-sm after:opacity-0 after:h-full after:bg-primary/5 after:border after:border-primary/10 after:absolute after:rounded-lg after:mx-auto after:top-0 after:mt-3 after:dark:bg-darkmode-600/70 after:dark:border-darkmode-500/60",
//               "group-[.background--hidden]:after:opacity-100",
//             ])}
//           >
//             <a className="relative z-10 flex items-center lg:mr-14" href="">
//               <div className="flex items-center justify-center w-[34px] rounded-lg h-[34px] bg-white/10 border-white/10 border transition-transform ease-in-out group-[.side-menu--collapsed.side-menu--on-hover]:xl:-rotate-180">
//                 <div className="w-[16px] h-[16px] relative -rotate-45 [&_div]:bg-white">
//                   <div className="absolute w-[21%] left-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]"></div>
//                   <div className="absolute w-[21%] inset-0 m-auto h-[120%] rounded-full"></div>
//                   <div className="absolute w-[21%] right-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]"></div>
//                 </div>
//               </div>
//               <div className="font-medium text-white ml-3.5 text-lg">
//                 Tailwise
//               </div>
//             </a>
//             <div
//               className={clsx([
//                 "main-menu [&.main-menu--show]:flex hidden fixed inset-0 md:flex flex-col items-center justify-center flex-1 gap-5 text-xl text-white md:text-sm md:relative md:flex-row lg:gap-10 bg-gradient-to-b from-theme-1 to-theme-2/90 md:bg-none",
//                 { "main-menu--show": showMobileMenu },
//               ])}
//             >
//               <a
//                 onClick={(e) => {
//                   scrollTo(e);
//                   setShowMobileMenu(!showMobileMenu);
//                 }}
//                 data-link="#themes-variants"
//                 className="cursor-pointer"
//               >
//                 Themes & Variants
//               </a>
//               <a
//                 onClick={(e) => {
//                   scrollTo(e);
//                   setShowMobileMenu(!showMobileMenu);
//                 }}
//                 data-link="#pages-layouts"
//                 className="cursor-pointer"
//               >
//                 Pages & Layouts
//               </a>
//               <a
//                 onClick={(e) => {
//                   scrollTo(e);
//                   setShowMobileMenu(!showMobileMenu);
//                 }}
//                 data-link="#frameworks"
//                 className="cursor-pointer"
//               >
//                 Frameworks
//               </a>
//               <a
//                 onClick={(e) => {
//                   scrollTo(e);
//                   setShowMobileMenu(!showMobileMenu);
//                 }}
//                 data-link="#pricing"
//                 className="cursor-pointer"
//               >
//                 Pricing
//               </a>
//             </div>
//             <div className="flex gap-2.5 relative ml-auto md:ml-0">
//               <Button
//                 as="a"
//                 data-link="#colors"
//                 rounded
//                 onClick={(e: React.MouseEvent) => scrollTo(e)}
//                 className="hidden md:block relative text-white bg-white/10 border-white/10 px-2.5"
//               >
//                 <Lucide icon="Palette" className="w-4 h-4" />
//                 <div className="absolute inset-0" data-link="#colors"></div>
//               </Button>
//               <Button
//                 as="a"
//                 href="https://themeforest.net/item/tailwise-intuitive-tailwind-dashboard-kit/48659596"
//                 target="_blank"
//                 rounded
//                 className="hidden px-5 text-white md:block bg-white/10 border-white/10"
//               >
//                 <span className="hidden lg:block">Download Now</span>
//                 <Lucide icon="Download" className="w-4 h-4 lg:hidden" />
//               </Button>
//               <Button
//                 rounded
//                 className="px-5 text-white bg-white/10 border-white/10 md:hidden"
//                 onClick={() => setShowMobileMenu(!showMobileMenu)}
//               >
//                 {showMobileMenu ? (
//                   <Lucide icon="X" className="w-4 h-4" />
//                 ) : (
//                   <Lucide icon="AlignJustify" className="w-4 h-4" />
//                 )}
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="container relative z-10 pt-40">
//           <div className="flex flex-col items-center gap-56 mb-40">
//             <div className="flex flex-col items-center">
//               <div className="text-5xl leading-[1.2] text-center text-white group-[.background--hidden]:text-slate-600 font-medium">
//                 Unleash Your Dashboard's
//                 <div>Superpowers.</div>
//               </div>
//               <div className="mt-4 text-lg leading-[1.75] text-center text-white/70 group-[.background--hidden]:text-slate-600/70 px-10 md:px-0">
//                 <div className="inline md:block">
//                   Tailwise redefines the way developers craft admin dashboards
//                 </div>
//                 unlocking endless possibilities with the fusion of Headless UI
//                 and Tailwind CSS.
//               </div>
//               <Link to="/">
//                 <Button
//                   rounded
//                   className="zoom-in px-7 py-3 mt-8 text-white bg-white/10 border-white/10 group-[.background--hidden]:bg-primary group-[.background--hidden]:border-primary text-[0.94rem]"
//                 >
//                   View Demo
//                 </Button>
//               </Link>
//               <div className="grid w-full gap-5 px-5 sm:px-24 lg:px-20 lg:grid-cols-3 landing-page__showcase">
//                 <div className="flex flex-col gap-7">
//                   <div className="p-5 box box--stacked">
//                     <div className="flex flex-col items-center">
//                       <div className="flex items-center gap-8">
//                         <Tippy
//                           as="a"
//                           className="flex relative items-center justify-center border rounded-full w-11 h-11 border-primary/[0.25] bg-primary/[0.03]"
//                           content={users.fakeUsers()[0].email}
//                         >
//                           <Lucide
//                             icon="SkipBack"
//                             className="w-4 h-4 text-primary fill-primary/5"
//                           />
//                         </Tippy>
//                         <div className="w-28 h-28 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
//                           <img
//                             alt="Tailwise - Admin Dashboard Template"
//                             src={users.fakeUsers()[0].photo}
//                           />
//                         </div>
//                         <Tippy
//                           as="a"
//                           className="flex relative items-center justify-center border rounded-full w-11 h-11 border-primary/[0.25] bg-primary/[0.03]"
//                           content={users.fakeUsers()[0].name}
//                         >
//                           <Lucide
//                             icon="SkipForward"
//                             className="w-4 h-4 text-primary fill-primary/5"
//                           />
//                         </Tippy>
//                       </div>
//                       <div className="mt-4 text-base font-medium">Cancer</div>
//                       <div className="text-slate-500 mt-0.5">
//                         My Chemical Romance
//                       </div>
//                       <div className="flex items-center w-full gap-3 mt-5">
//                         <div className="text-xs text-slate-500">0:00</div>
//                         <div className="flex w-full h-2 border rounded bg-slate-100">
//                           <Tippy
//                             as="div"
//                             content="Heart Disease"
//                             className="h-full first:rounded-l last:rounded-r border border-primary/50 bg-primary/50 w-[35%]"
//                           ></Tippy>
//                         </div>
//                         <div className="text-xs text-slate-500">2:42</div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="p-1 box box--stacked">
//                     <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-r from-theme-2/[0.85] to-theme-1/[0.85]">
//                       <div className="flex w-full">
//                         <div className="mr-auto text-white">Day</div>
//                         <Menu className="mr-1">
//                           <Menu.Button className="w-5 h-5 text-slate-500">
//                             <Lucide
//                               icon="MoreHorizontal"
//                               className="w-6 h-6 stroke-white/70 fill-white/70"
//                             />
//                           </Menu.Button>
//                           <Menu.Items className="w-40">
//                             <Menu.Item>
//                               <Lucide icon="Copy" className="w-4 h-4 mr-2" />{" "}
//                               Copy Link
//                             </Menu.Item>
//                             <Menu.Item>
//                               <Lucide icon="Trash" className="w-4 h-4 mr-2" />
//                               Delete
//                             </Menu.Item>
//                           </Menu.Items>
//                         </Menu>
//                       </div>
//                       <div className="flex items-center mt-10 mb-11">
//                         <div className="flex items-center gap-8">
//                           <div className="flex flex-col items-center">
//                             <div className="text-[2.1rem] font-medium text-white/90">
//                               17°C
//                             </div>
//                             <div className="mt-3.5 text-base text-white/80">
//                               Cloudy
//                             </div>
//                           </div>
//                           <div
//                             className={clsx([
//                               "opacity-[0.95] relative bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full w-8 h-8 -mt-6 ml-10 mr-2",
//                               "before:content-[''] before:w-14 before:h-14 before:bg-white before:rounded-full before:absolute before:top-0 before:right-0 before:mr-4 before:-mt-1",
//                               "after:content-[''] after:w-8 after:h-8 after:bg-white after:rounded-full after:absolute after:top-0 after:right-0 after:mt-5 after:-mr-2",
//                             ])}
//                           >
//                             <div className="absolute bottom-0 right-0 w-10 h-5 mr-1.5 -mb-5 bg-white"></div>
//                           </div>
//                         </div>
//                       </div>
//                       <Button
//                         className="px-10 mb-5 bg-white/20 border-white/50"
//                         rounded
//                       >
//                         <Lucide
//                           icon="ChevronDown"
//                           className="stroke-[1.3] text-white w-5 h-5"
//                         />
//                       </Button>
//                     </div>
//                   </div>
//                   <div className="p-5 box box--stacked">
//                     <div className="relative">
//                       <FormInput
//                         type="text"
//                         className="pr-11"
//                         rounded
//                         placeholder="Search members..."
//                       />
//                       <div className="absolute inset-y-0 right-0 flex items-center justify-center w-11">
//                         <Lucide
//                           icon="Search"
//                           className="stroke-[1.3] w-4 h-4 text-slate-400"
//                         />
//                       </div>
//                     </div>
//                     <div className="flex flex-col mt-3.5 gap-2">
//                       {_.take(users.fakeUsers(), 4).map((faker, fakerKey) => (
//                         <div
//                           className="hover:bg-slate-50 transition-all rounded-lg cursor-pointer px-2 -mx-2 py-1.5 flex items-center gap-3.5"
//                           key={fakerKey}
//                         >
//                           <div>
//                             <div className="w-10 h-10 overflow-hidden border-2 rounded-full image-fit border-slate-200/70">
//                               <img
//                                 alt="Tailwise - Admin Dashboard Template"
//                                 src={faker.photo}
//                               />
//                             </div>
//                           </div>
//                           <div>
//                             <div className="font-medium">{faker.name}</div>
//                             <div className="mt-1 text-xs text-slate-500">
//                               {faker.position}
//                             </div>
//                           </div>
//                           <div className="flex gap-2.5 ml-auto">
//                             <Tippy
//                               as="a"
//                               className="flex items-center justify-center border rounded-full w-7 h-7 border-primary/40 bg-primary/5"
//                               content="Call"
//                             >
//                               <Lucide
//                                 icon="Phone"
//                                 className="w-3 h-3 text-primary fill-primary/10"
//                               />
//                             </Tippy>
//                             <Tippy
//                               as="a"
//                               className="flex items-center justify-center border rounded-full w-7 h-7 border-primary/40 bg-primary/5"
//                               content="Send a message"
//                             >
//                               <Lucide
//                                 icon="Mail"
//                                 className="w-3 h-3 text-primary fill-primary/10"
//                               />
//                             </Tippy>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col lg:-mt-10 gap-7">
//                   <div className="p-5 box box--stacked">
//                     <div className="flex flex-col items-center my-1">
//                       <div
//                         className={clsx([
//                           "relative flex items-end rounded-full w-48 h-48 bg-gradient-to-r from-slate-100 via-theme-1 to-theme-2",
//                           "before:content-[''] before:w-1.5 before:h-2 before:absolute before:bg-white before:inset-y-0 before:my-auto before:right-0",
//                           "after:content-[''] after:w-2 after:h-1.5 after:absolute after:bg-white after:inset-x-0 after:mx-auto after:top-0",
//                         ])}
//                       >
//                         <div className="bg-white rounded-full w-[97%] h-[97%] ml-0.5 mb-0.5 flex items-center justify-center">
//                           <div>
//                             <div className="w-32 h-32 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70 -mt-1 -mr-1">
//                               <img
//                                 alt="Tailwise - Admin Dashboard Template"
//                                 src={users.fakeUsers()[0].photo}
//                               />
//                             </div>
//                           </div>
//                           <div className="absolute left-0 w-6 h-6 overflow-hidden border rounded-full image-fit border-slate-200/70 -ml-2.5">
//                             <img
//                               alt="Tailwise - Admin Dashboard Template"
//                               src={users.fakeUsers()[0].photo}
//                             />
//                           </div>
//                           <div className="absolute bottom-0 left-0 w-8 h-8 mb-2.5 ml-2.5 overflow-hidden border rounded-full image-fit border-slate-200/70">
//                             <img
//                               alt="Tailwise - Admin Dashboard Template"
//                               src={users.fakeUsers()[0].photo}
//                             />
//                           </div>
//                           <Tippy
//                             as="a"
//                             className="absolute bottom-0 flex items-center justify-center w-12 h-12 -mb-5 border border-transparent rounded-full box bg-gradient-to-b from-theme-1/90 to-theme-2/90"
//                             content="Play"
//                           >
//                             <Lucide
//                               icon="Play"
//                               className="w-5 h-5 stroke-[0.9] text-white fill-white/5 -mr-1"
//                             />
//                           </Tippy>
//                         </div>
//                       </div>
//                       <div className="mt-10 text-base font-medium">
//                         Subscription Box
//                       </div>
//                       <div className="text-slate-500 mt-1.5 text-center mx-5">
//                         The gift that keeps on grooving. Subscribe to Music Box
//                         for curated music surprises.
//                       </div>
//                       <Button
//                         type="button"
//                         variant="primary"
//                         rounded
//                         className="w-full mt-5"
//                       >
//                         <Lucide
//                           icon="Send"
//                           className="w-4 h-4 stroke-[1.3] mr-2"
//                         />
//                         Subscribe Now
//                       </Button>
//                     </div>
//                   </div>
//                   <div className="p-5 box box--stacked">
//                     <div className="flex items-center gap-3.5">
//                       <div>
//                         <div className="w-14 h-14 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
//                           <img
//                             alt="Tailwise - Admin Dashboard Template"
//                             src={users.fakeUsers()[0].photo}
//                           />
//                         </div>
//                       </div>
//                       <div>
//                         <div className="text-base font-medium truncate max-w-[9rem] md:max-w-none">
//                           {users.fakeUsers()[0].name}
//                         </div>
//                         <div className="text-slate-500 mt-0.5">
//                           {users.fakeUsers()[0].position}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-center w-full gap-3 mt-5">
//                       <div className="flex w-full h-2 border rounded bg-slate-100">
//                         <Tippy
//                           as="div"
//                           content="Heart Disease"
//                           className="h-full first:rounded-l last:rounded-r border border-primary/50 bg-primary/50 w-[35%]"
//                         ></Tippy>
//                       </div>
//                       <div className="text-xs text-slate-500">45%</div>
//                     </div>
//                   </div>
//                   <div className="p-5 box box--stacked">
//                     <div className="flex flex-col items-center pb-8 mb-5 border-b border-dashed">
//                       <div className="max-w-[17rem] text-base font-medium truncate">
//                         Hi, {users.fakeUsers()[0].name}
//                       </div>
//                       <div className="text-slate-500 mt-0.5">
//                         Your food is getting ready in
//                       </div>
//                       <div className="flex items-center gap-4 mt-8">
//                         <div className="w-10">
//                           <ReportDonutChart7
//                             className="relative z-10"
//                             height={35}
//                           />
//                         </div>
//                         <div className="text-[2.1rem] font-medium opacity-90">
//                           00:32
//                         </div>
//                       </div>
//                     </div>
//                     <div
//                       className={clsx([
//                         "flex flex-col gap-5 relative",
//                         "before:content-[''] before:w-px before:h-full before:absolute before:bg-slate-200 before:ml-5",
//                       ])}
//                     >
//                       <div className="flex items-center gap-3.5 relative z-10">
//                         <div>
//                           <div className="flex items-center justify-center w-10 h-10 border-2 rounded-full bg-primary/90 border-slate-200/70">
//                             <Lucide
//                               icon="Cookie"
//                               className="w-4 h-4 text-white fill-white/10"
//                             />
//                           </div>
//                         </div>
//                         <div>
//                           <div className="font-medium truncate max-w-[15rem]">
//                             Cooking Kitchen
//                           </div>
//                           <div className="mt-1 text-xs text-slate-500">
//                             Traditional Restaurant
//                           </div>
//                         </div>
//                         <Tippy
//                           as="a"
//                           className="ml-auto flex relative items-center justify-center border rounded-full w-9 h-9 border-primary/[0.25] bg-primary/[0.03]"
//                           content="Send Message"
//                         >
//                           <Lucide
//                             icon="MessagesSquare"
//                             className="w-3.5 h-3.5 text-primary fill-primary/5"
//                           />
//                         </Tippy>
//                       </div>
//                       <div className="flex items-center gap-3.5 relative z-10">
//                         <div>
//                           <div className="w-10 h-10 overflow-hidden border-2 rounded-full image-fit border-slate-200/70">
//                             <img
//                               alt="Tailwise - Admin Dashboard Template"
//                               src={users.fakeUsers()[0].photo}
//                             />
//                           </div>
//                         </div>
//                         <div>
//                           <div className="font-medium truncate max-w-[15rem]">
//                             {users.fakeUsers()[0].name}
//                           </div>
//                           <div className="mt-1 text-xs text-slate-500">
//                             Driver
//                           </div>
//                         </div>
//                         <Tippy
//                           as="a"
//                           className="ml-auto flex relative items-center justify-center border rounded-full w-9 h-9 border-primary/[0.25] bg-primary/[0.03]"
//                           content="Send Message"
//                         >
//                           <Lucide
//                             icon="MessagesSquare"
//                             className="w-3.5 h-3.5 text-primary fill-primary/5"
//                           />
//                         </Tippy>
//                       </div>
//                       <div className="flex items-center gap-3.5 relative z-10">
//                         <div>
//                           <div className="flex items-center justify-center w-10 h-10 border-2 rounded-full bg-slate-100 border-slate-200/70">
//                             <Lucide
//                               icon="MapPin"
//                               className="w-4 h-4 text-primary fill-primary/10"
//                             />
//                           </div>
//                         </div>
//                         <div>
//                           <div className="font-medium truncate max-w-[15rem]">
//                             Delivery
//                           </div>
//                           <div className="mt-1 text-xs text-slate-500">
//                             Driver go to your location
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3 mt-7">
//                       <Button
//                         rounded
//                         type="button"
//                         variant="outline-primary"
//                         className="w-full"
//                       >
//                         Cancel Order
//                       </Button>
//                       <Button
//                         rounded
//                         type="button"
//                         variant="primary"
//                         className="w-full"
//                       >
//                         See Details
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-7">
//                   <div className="p-5 box box--stacked">
//                     <div className="flex flex-col items-center">
//                       <div className="flex items-center w-full px-1">
//                         <div className="flex items-center justify-center w-6 h-6 rounded-full bg-success">
//                           <Lucide
//                             icon="Check"
//                             className="stroke-[1.3] text-white w-4 h-4"
//                           />
//                         </div>
//                         <Menu className="ml-auto mr-1">
//                           <Menu.Button className="w-5 h-5 text-slate-500">
//                             <Lucide
//                               icon="MoreHorizontal"
//                               className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
//                             />
//                           </Menu.Button>
//                           <Menu.Items className="w-40">
//                             <Menu.Item>
//                               <Lucide icon="Copy" className="w-4 h-4 mr-2" />{" "}
//                               Copy Link
//                             </Menu.Item>
//                             <Menu.Item>
//                               <Lucide icon="Trash" className="w-4 h-4 mr-2" />
//                               Delete
//                             </Menu.Item>
//                           </Menu.Items>
//                         </Menu>
//                       </div>
//                       <div className="mt-5">
//                         <div className="w-28 h-28 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
//                           <img
//                             alt="Tailwise - Admin Dashboard Template"
//                             src={users.fakeUsers()[0].photo}
//                           />
//                         </div>
//                       </div>
//                       <div className="mt-3.5 text-base font-medium">
//                         {users.fakeUsers()[0].name}
//                       </div>
//                       <div className="text-slate-500 mt-0.5">
//                         {users.fakeUsers()[0].department}
//                       </div>
//                       <div className="flex items-center gap-3 mt-5">
//                         <div className="flex items-center text-xs font-medium rounded-md text-primary bg-primary/10 border border-primary/10 px-2 py-0.5">
//                           <span className="-mt-px">
//                             {_.random(10, 120)} Active Tasks
//                           </span>
//                         </div>
//                         <div className="ml-auto flex items-center text-xs font-medium rounded-md text-success bg-success/10 border border-success/10 px-2 py-0.5">
//                           <span className="-mt-px">
//                             {_.random(10, 20)} Completed
//                           </span>
//                         </div>
//                       </div>
//                       <Button
//                         type="button"
//                         rounded
//                         variant="primary"
//                         className="w-full mt-10"
//                       >
//                         <Lucide
//                           icon="Send"
//                           className="w-4 h-4 stroke-[1.3] mr-2"
//                         />
//                         Assign to Task
//                       </Button>
//                     </div>
//                   </div>
//                   <div className="p-1 box box--stacked">
//                     <div className="flex items-center gap-3.5 bg-gradient-to-r from-theme-2/[0.85] to-theme-1/[0.85] p-4 rounded-lg">
//                       <div>
//                         <div className="w-14 h-14 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
//                           <img
//                             alt="Tailwise - Admin Dashboard Template"
//                             src={users.fakeUsers()[0].photo}
//                           />
//                         </div>
//                       </div>
//                       <div>
//                         <div className="text-base font-medium text-white">
//                           {users.fakeUsers()[0].name}
//                         </div>
//                         <div className="text-slate-500 mt-0.5 text-white/80">
//                           {activities.fakeActivities()[0].activity}
//                         </div>
//                         <div className="mt-1 text-white/80">
//                           {activities.fakeActivities()[0].date}
//                         </div>
//                       </div>
//                       <div className="flex gap-2 ml-auto">
//                         <Tippy
//                           as="a"
//                           className="flex items-center justify-center border rounded-full w-9 h-9 border-white/40 bg-white/5"
//                           content="Send a message"
//                         >
//                           <Lucide
//                             icon="ChevronRight"
//                             className="w-4 h-4 text-white fill-white/10"
//                           />
//                         </Tippy>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="p-5 box box--stacked">
//                     <div className="flex flex-col items-center my-1">
//                       <div>
//                         <div className="w-28 h-28 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
//                           <img
//                             alt="Tailwise - Admin Dashboard Template"
//                             src={users.fakeUsers()[0].photo}
//                           />
//                         </div>
//                       </div>
//                       <div className="mt-3.5 text-base font-medium">Cancer</div>
//                       <div className="text-slate-500 mt-0.5">
//                         My Chemical Romance
//                       </div>
//                       <div className="flex items-center justify-center h-10 gap-1 mt-4">
//                         <div className="w-0.5 h-[15%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
//                         <div className="w-0.5 h-[25%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
//                         <div className="w-0.5 h-[35%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
//                         <div className="w-0.5 h-[45%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
//                         <div className="w-0.5 h-[40%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
//                         <div className="w-0.5 h-[30%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
//                         <div className="w-0.5 h-[20%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
//                         <div className="w-0.5 h-[25%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
//                         <div className="w-0.5 h-[35%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
//                         <div className="w-0.5 h-[45%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
//                         <div className="w-0.5 h-[40%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
//                         <div className="w-0.5 h-[30%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
//                         <div className="w-0.5 h-[40%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
//                         <div className="w-0.5 h-[50%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
//                         <div className="w-0.5 h-[70%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
//                         <div className="w-0.5 h-[100%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
//                         <div className="w-0.5 h-[90%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
//                         <div className="w-0.5 h-[70%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
//                         <div className="w-0.5 h-[50%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
//                         <div className="w-0.5 h-[40%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
//                         <div className="w-0.5 h-[30%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
//                         <div className="w-0.5 h-[40%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
//                         <div className="w-0.5 h-[45%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
//                         <div className="w-0.5 h-[35%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
//                         <div className="w-0.5 h-[25%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
//                         <div className="w-0.5 h-[15%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
//                         <div className="w-0.5 h-[15%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
//                         <div className="w-0.5 h-[25%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
//                         <div className="w-0.5 h-[35%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
//                         <div className="w-0.5 h-[45%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
//                         <div className="w-0.5 h-[40%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
//                         <div className="w-0.5 h-[30%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
//                         <div className="w-0.5 h-[20%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
//                       </div>
//                       <div className="flex items-center gap-3.5 mt-5">
//                         <Tippy
//                           as="a"
//                           className="flex items-center justify-center border rounded-full w-9 h-9 border-primary/[0.15] box bg-primary/5"
//                           content="Skip Back"
//                         >
//                           <Lucide
//                             icon="SkipBack"
//                             className="w-4 h-4 stroke-[1.3] text-primary fill-primary/5"
//                           />
//                         </Tippy>
//                         <Tippy
//                           as="a"
//                           className="flex items-center justify-center w-12 h-12 border border-transparent rounded-full box bg-gradient-to-b from-theme-1/90 to-theme-2/90"
//                           content="Play"
//                         >
//                           <Lucide
//                             icon="Play"
//                             className="w-5 h-5 stroke-[0.9] text-white fill-white/5 -mr-1"
//                           />
//                         </Tippy>
//                         <Tippy
//                           as="a"
//                           className="flex items-center justify-center border rounded-full w-9 h-9 border-primary/[0.15] box bg-primary/5"
//                           content="Skip Forward"
//                         >
//                           <Lucide
//                             icon="SkipForward"
//                             className="w-4 h-4 stroke-[1.3] text-primary fill-primary/5"
//                           />
//                         </Tippy>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="flex flex-col items-center w-full"
//               id="themes-variants"
//             >
//               <div
//                 className={clsx([
//                   "text-3xl font-medium relative",
//                   "before:content-[''] before:bg-gradient-to-b before:from-transparent before:via-slate-100/80 before:to-slate-100 before:inset-0 before:absolute before:h-[360%] before:w-[150%] before:-mt-[4.5rem] before:-ml-[25%]",
//                 ])}
//               >
//                 <div className="absolute inset-x-0 w-36 h-36 mx-auto -mt-[5.5rem] border rounded-full border-theme-1/[0.13] z-[-1] flex items-center justify-center">
//                   <div className="w-16 h-16 border rounded-full border-theme-1/20"></div>
//                   <div className="absolute w-10 h-10 -mt-10 border rounded-full -ml-52 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
//                   <div className="absolute w-10 h-10 -ml-36 border rounded-full -mt-40 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
//                   <div className="absolute w-10 h-10 border rounded-full -mt-[13rem] bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
//                   <div className="absolute w-10 h-10 -mr-36 border rounded-full -mt-40 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
//                   <div className="absolute w-10 h-10 -mt-10 border rounded-full -mr-52 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
//                 </div>
//                 <div className="relative text-center z-5 text-theme-1">
//                   Themes & Variants
//                 </div>
//               </div>
//               <div className="relative mt-4 text-base text-center px-14 sm:px-0 text-slate-500/80 z-5">
//                 Discover a spectrum of styles, 11 captivating theme variants at
//                 your fingertips!
//               </div>
//               <div className="-mx-2.5 mt-10 px-10 sm:px-20">
//                 <div className="flex flex-wrap justify-center w-full gap-y-9">
//                   {themes.map((theme, themeKey) => (
//                     <div className="w-full lg:w-1/3 px-2.5" key={themeKey}>
//                       <div className="box box--stacked [&_img]:lg:hover:w-[150%] [&_img]:lg:hover:h-[150%]">
//                         <a
//                           onClick={() => previewTheme(theme)}
//                           className="p-2.5 cursor-pointer block"
//                         >
//                           <div className="h-56 overflow-hidden rounded-lg box cursor-zoom-in">
//                             {/* <img
//                               className="w-full h-full transition-all duration-300 ease-in-out max-w-none"
//                               src={
//                                 themesImageAssets[
//                                   `/src/assets/images/themes/${theme.name}.png`
//                                 ].default
//                               }
//                             /> */}
//                           </div>
//                           <div className="flex items-center px-3 py-3 mt-2 font-medium capitalize transition-all duration-300 ease-in-out text-primary">
//                             <div className="flex items-center">
//                               Theme {themeKey + 1}{" "}
//                               <div className="w-1 h-1 mx-2 rounded-full bg-primary/40"></div>{" "}
//                               {theme.name}
//                             </div>
//                             <Lucide
//                               icon="ArrowRight"
//                               className="w-5 h-5 stroke-[1] ml-auto"
//                             />
//                           </div>
//                         </a>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col items-center w-full" id="colors">
//               <div
//                 className={clsx([
//                   "text-3xl font-medium relative",
//                   "before:content-[''] before:bg-gradient-to-b before:from-transparent before:via-slate-100/80 before:to-slate-100 before:inset-0 before:absolute before:h-[360%] before:w-[150%] before:-mt-[4.5rem] before:-ml-[25%]",
//                 ])}
//               >
//                 <div className="absolute inset-x-0 w-48 h-48 mx-auto rounded-full -mt-36 z-[-1]">
//                   <div className="absolute inset-y-0 w-1/2 my-auto rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
//                   <div className="absolute bottom-0 left-0 w-1/2 rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
//                   <div className="absolute inset-x-0 bottom-0 w-1/2 mx-auto rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
//                   <div className="absolute bottom-0 right-0 w-1/2 rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
//                   <div className="absolute inset-y-0 right-0 w-1/2 my-auto rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
//                   <div className="absolute inset-x-0 top-0 w-1/2 mx-auto rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
//                 </div>
//                 <div className="relative text-center z-5 text-theme-1">
//                   Color Schemes
//                 </div>
//               </div>
//               <div className="relative mt-4 text-base text-center px-14 sm:px-0 text-slate-500/80 z-5">
//                 Dual-tone magic, enhance your design with two brilliant color
//                 schemes!
//               </div>
//               <div className="grid w-full grid-cols-6 gap-5 px-10 mt-10 sm:px-20">
//                 <div className="col-span-6 mt-2 md:col-span-3 lg:col-span-2">
//                   <div className="p-1 box box--stacked border-theme-1/50">
//                     <div className="p-4 rounded-lg bg-gradient-to-b from-theme-1/90 to-theme-2/90">
//                       <div className="flex items-center gap-3.5">
//                         <div>
//                           <div className="overflow-hidden border-2 rounded-full border-white/20 w-14 h-14 image-fit">
//                             <img
//                               alt="Tailwise - Admin Dashboard Template"
//                               src={users.fakeUsers()[0].photo}
//                             />
//                           </div>
//                         </div>
//                         <div>
//                           <div className="text-base font-medium truncate max-w-[8rem] md:max-w-none text-white">
//                             {users.fakeUsers()[0].name}
//                           </div>
//                           <div className="text-white/80 mt-0.5">Available</div>
//                         </div>
//                         <div className="flex items-center ml-auto gap-2.5">
//                           <Tippy
//                             as="a"
//                             className="flex items-center justify-center border rounded-full w-9 h-9 bg-white/5 border-white/[0.13] ml-auto"
//                             content="Make a phone call"
//                           >
//                             <Lucide
//                               icon="Phone"
//                               className="w-4 h-4 text-white fill-white/5"
//                             />
//                           </Tippy>
//                           <Tippy
//                             as="a"
//                             className="flex items-center justify-center border rounded-full w-9 h-9 bg-white/5 border-white/[0.13] ml-auto"
//                             content="Make a phone call"
//                           >
//                             <Lucide
//                               icon="Settings"
//                               className="w-4 h-4 text-white fill-white/5"
//                             />
//                           </Tippy>
//                         </div>
//                       </div>
//                       <div className="flex flex-col gap-2.5 border-y border-dashed border-white/20 py-5 my-5">
//                         {_.take(messages.fakeMessages(), 2).map(
//                           (faker, fakerKey) => (
//                             <div
//                               key={fakerKey}
//                               className={clsx([
//                                 "mr-auto border px-4 py-3 rounded-r-xl rounded-bl-xl bg-white/5 border-white/[0.13] text-white [&.right]:text-right [&.right]:mr-0 [&.right]:ml-auto [&.right]:rounded-l-xl [&.right]:rounded-tr-none",
//                                 { right: [0, 0, 1, 1, 1][_.random(0, 5)] },
//                               ])}
//                             >
//                               <div>{faker.content}</div>
//                               <div className="mt-1 text-xs text-white/60">
//                                 {faker.time}
//                               </div>
//                             </div>
//                           )
//                         )}
//                       </div>
//                       <div className="relative">
//                         <FormTextarea
//                           className="-mb-1.5 pr-16 rounded-xl resize-none bg-white/5 border-white/[0.13] text-white placeholder:text-white/50"
//                           placeholder="Type a message..."
//                         />
//                         <div className="absolute inset-y-0 right-0 flex items-center justify-center w-[3.8rem]">
//                           <a
//                             href=""
//                             className="flex items-center justify-center rounded-full cursor-pointer bg-white/5 border-white/[0.13] w-9 h-9 box"
//                           >
//                             <Lucide
//                               icon="Send"
//                               className="stroke-[1.3] w-4 h-4 -ml-0.5 text-white/70"
//                             />
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-span-6 row-start-1 lg:row-start-auto lg:col-span-2">
//                   <div className="px-5 py-6 box box--stacked border-theme-1/60 bg-gradient-to-b from-slate-50 to-transparent">
//                     <div className="grid grid-cols-3 gap-x-2 gap-y-2.5">
//                       {colorSchemes.map((colorScheme, colorKey) => (
//                         <Tippy
//                           className={clsx([
//                             "p-1 rounded-full box border-2 cursor-pointer",
//                             tempActiveColorScheme == colorScheme &&
//                               "border-theme-1/60",
//                           ])}
//                           key={colorKey}
//                           onClick={() => switchColor(colorScheme)}
//                           content={`Color Scheme ${colorKey + 1}`}
//                         >
//                           <div className="h-8 overflow-hidden rounded-full">
//                             <div className="flex items-center h-full gap-1 -mx-2">
//                               <div
//                                 className={clsx([
//                                   "w-1/2 h-[240%] bg-theme-1 rotate-12",
//                                   colorScheme,
//                                 ])}
//                               ></div>
//                               <div
//                                 className={clsx([
//                                   "w-1/2 h-[240%] bg-theme-2 rotate-12",
//                                   colorScheme,
//                                 ])}
//                               ></div>
//                             </div>
//                           </div>
//                         </Tippy>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-span-6 mt-2 md:col-span-3 lg:col-span-2">
//                   <div className="p-1 box box--stacked border-theme-1/50">
//                     <div className="p-4 rounded-lg bg-gradient-to-b from-theme-1/90 to-theme-2/90">
//                       <div className="flex flex-col items-center">
//                         <div className="relative w-40 h-40 mt-1.5">
//                           <div className="w-40 h-40 overflow-hidden rounded-full image-fit border-[3px] border-white/20">
//                             <img
//                               alt="Tailwise - Admin Dashboard Template"
//                               src={users.fakeUsers()[0].photo}
//                             />
//                           </div>
//                           <Lucide
//                             icon="CheckCheck"
//                             className="w-9 h-9 stroke-[1.3] absolute text-white fill-white/10 rounded-full box p-2 top-0 left-0 mt-7 -ml-2.5 bg-theme-1/70 border-2 border-white/20"
//                           />
//                           <Lucide
//                             icon="Zap"
//                             className="w-9 h-9 stroke-[1.3] absolute text-white fill-white/10 rounded-full box p-2 bottom-0 right-0 mb-7 -mr-2.5 bg-theme-1/70 border-2 border-white/20"
//                           />
//                         </div>
//                         <div className="mt-4 text-white/80">Welcome Back</div>
//                         <div className="text-base text-white font-medium mt-0.5">
//                           {users.fakeUsers()[0].name}
//                         </div>
//                         <Button
//                           type="button"
//                           rounded
//                           variant="primary"
//                           className="w-full mt-5 bg-white/5 border-white/[0.15]"
//                         >
//                           <Lucide
//                             icon="Send"
//                             className="w-4 h-4 stroke-[1.3] mr-2"
//                           />
//                           Continue
//                         </Button>
//                         <Button
//                           rounded
//                           type="button"
//                           variant="outline-primary"
//                           className="w-full mt-2 border-white/[0.15] text-white"
//                         >
//                           Dismiss
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="flex flex-col items-center w-full"
//               id="pages-layouts"
//             >
//               <div
//                 className={clsx([
//                   "text-3xl font-medium relative",
//                   "before:content-[''] before:bg-gradient-to-b before:from-transparent before:via-slate-100/80 before:to-slate-100 before:inset-0 before:absolute before:h-[360%] before:w-[150%] before:-mt-[4.5rem] before:-ml-[25%]",
//                 ])}
//               >
//                 <div className="absolute inset-x-0 w-36 h-36 mx-auto -mt-[5.5rem] border rounded-full border-theme-1/[0.13] z-[-1] flex items-center justify-center">
//                   <div className="w-16 h-16 border rounded-full border-theme-1/20"></div>
//                   <div className="absolute w-10 h-10 -mt-10 border rounded-full -ml-52 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
//                   <div className="absolute w-10 h-10 -ml-36 border rounded-full -mt-40 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
//                   <div className="absolute w-10 h-10 border rounded-full -mt-[13rem] bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
//                   <div className="absolute w-10 h-10 -mr-36 border rounded-full -mt-40 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
//                   <div className="absolute w-10 h-10 -mt-10 border rounded-full -mr-52 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
//                 </div>
//                 <div className="relative text-center z-5 text-theme-1">
//                   Pages & Layouts
//                 </div>
//               </div>
//               <div className="relative mt-4 text-base text-center px-14 sm:px-0 text-slate-500/80 z-5">
//                 Discover a spectrum of styles, 11 captivating theme variants at
//                 your fingertips!
//               </div>
//               <div className="flex flex-col w-full px-10 mt-10 md:px-20 lg:flex-row gap-7">
//                 <div className="flex-none lg:w-[19rem]">
//                   <div className="flex flex-col gap-5 px-5 py-6 box box--stacked">
//                     {groups.map((group, groupKey) => (
//                       <a
//                         href=""
//                         onClick={(e) => setActiveGroup(e, groupKey)}
//                         key={groupKey}
//                         className={clsx([
//                           "flex items-center [&.active]:text-primary [&.active]:font-medium",
//                           { active: group.active },
//                         ])}
//                       >
//                         <Lucide
//                           icon={group.icon}
//                           className="stroke-[1.3] w-4 h-4 mr-3"
//                         />{" "}
//                         {group.group}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="w-full">
//                   <div className="grid w-full sm:grid-cols-2 gap-x-5 gap-y-8">
//                     {groups
//                       .find((group) => group.active)
//                       ?.pages.map((page, pageKey) => (
//                         <div
//                           className="box box--stacked [&_img]:hover:w-[150%] [&_img]:hover:h-[150%]"
//                           key={pageKey}
//                         >
//                           <Link
//                             to={page.pathname}
//                             target="_blank"
//                             className="p-2.5 cursor-pointer block"
//                           >
//                             <div className="h-56 overflow-hidden rounded-lg box cursor-zoom-in">
//                               {/* <img
//                                 className="w-full h-full transition-all duration-300 ease-in-out max-w-none"
//                                 src={
//                                  c[
//                                     `/src/assets/images/pages/${page.image}.jpg`
//                                   ].default
//                                 }
//                               /> */}
//                             </div>
//                             <div className="flex items-center px-3 py-3 mt-2 font-medium capitalize transition-all duration-300 ease-in-out text-primary">
//                               <div className="flex items-center">
//                                 {page.name}
//                               </div>
//                               <Lucide
//                                 icon="ArrowRight"
//                                 className="w-5 h-5 stroke-[1] ml-auto"
//                               />
//                             </div>
//                           </Link>
//                         </div>
//                       ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col items-center w-full" id="frameworks">
//               <div
//                 className={clsx([
//                   "text-3xl font-medium relative",
//                   "before:content-[''] before:bg-gradient-to-b before:from-transparent before:via-slate-100/80 before:to-slate-100 before:inset-0 before:absolute before:h-[360%] before:w-[150%] before:-mt-[4.5rem] before:-ml-[25%]",
//                 ])}
//               >
//                 <div className="absolute inset-x-0 w-48 h-48 mx-auto rounded-full -mt-36 z-[-1]">
//                   <div className="absolute inset-y-0 w-1/2 my-auto rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
//                   <div className="absolute bottom-0 left-0 w-1/2 rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
//                   <div className="absolute inset-x-0 bottom-0 w-1/2 mx-auto rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
//                   <div className="absolute bottom-0 right-0 w-1/2 rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
//                   <div className="absolute inset-y-0 right-0 w-1/2 my-auto rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
//                   <div className="absolute inset-x-0 top-0 w-1/2 mx-auto rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
//                 </div>
//                 <div className="relative text-center z-5 text-theme-1">
//                   Tools & Frameworks
//                 </div>
//               </div>
//               <div className="relative mt-4 text-base text-center px-14 sm:px-0 text-slate-500/80 z-5">
//                 Dual-tone magic, enhance your design with two brilliant color
//                 schemes!
//               </div>
//               <div className="-mx-2.5 mt-10 px-10 sm:px-20">
//                 <div className="flex flex-wrap justify-center w-full gap-y-8">
//                   <div className="sm:w-1/2 lg:w-1/3 px-2.5">
//                     <div className="flex flex-col items-center p-5 box box--stacked">
//                       <div className="w-12 h-12">
//                         {/* <img
//                           src={
//                             frameworkImageAssets[
//                               `/src/assets/images/frameworks/react.png`
//                             ].default
//                           }
//                         /> */}
//                       </div>
//                       <div className="mt-4 text-base font-medium">
//                         React 18+
//                       </div>
//                       <div className="pb-2 mt-2 leading-relaxed text-center text-slate-500">
//                         React 18+ brings the latest advancements to the React
//                         library, offering improved features and optimizations to
//                         empower your development projects.
//                       </div>
//                     </div>
//                   </div>
//                   <div className="sm:w-1/2 lg:w-1/3 px-2.5">
//                     <div className="flex flex-col items-center p-5 box box--stacked">
//                       <div className="w-12 h-12">
//                         {/* <img
//                           src={
//                             frameworkImageAssets[
//                               `/src/assets/images/frameworks/tailwindcss.png`
//                             ].default
//                           }
//                         /> */}
//                       </div>
//                       <div className="mt-4 text-base font-medium">
//                         TailwindCSS 3
//                       </div>
//                       <div className="pb-2 mt-2 leading-relaxed text-center text-slate-500">
//                         TailwindCSS 3 introduces the newest features and
//                         enhancements, further expanding the capabilities of the
//                         popular utility-first CSS framework.
//                       </div>
//                     </div>
//                   </div>
//                   <div className="sm:w-1/2 lg:w-1/3 px-2.5">
//                     <div className="flex flex-col items-center p-5 box box--stacked">
//                       <div className="w-12 h-12">
//                         {/* <img
//                           src={
//                             frameworkImageAssets[
//                               `/src/assets/images/frameworks/vite.png`
//                             ].default
//                           }
//                         /> */}
//                       </div>
//                       <div className="mt-4 text-base font-medium">Vite 3</div>
//                       <div className="pb-2 mt-2 leading-relaxed text-center text-slate-500">
//                         Vite 3 is the latest iteration of the Vite JavaScript
//                         build tool, bringing a range of performance improvements
//                         and new features to accelerate your development process.
//                       </div>
//                     </div>
//                   </div>
//                   <div className="sm:w-1/2 lg:w-1/3 px-2.5">
//                     <div className="flex flex-col items-center p-5 box box--stacked">
//                       <div className="w-12 h-12">
//                         {/* <img
//                           src={
//                             frameworkImageAssets[
//                               `/src/assets/images/frameworks/headlessui.png`
//                             ].default
//                           }
//                         /> */}
//                       </div>
//                       <div className="mt-4 text-base font-medium">
//                         Headless UI
//                       </div>
//                       <div className="pb-2 mt-2 leading-relaxed text-center text-slate-500">
//                         Headless UI is a set of completely unstyled, fully
//                         accessible UI components, designed to integrate
//                         seamlessly with your design system or style. It allows
//                         you to build fully customized UI.
//                       </div>
//                     </div>
//                   </div>
//                   <div className="sm:w-1/2 lg:w-1/3 px-2.5">
//                     <div className="flex flex-col items-center p-5 box box--stacked">
//                       <div className="w-12 h-12">
//                         {/* <img
//                           src={
//                             frameworkImageAssets[
//                               `/src/assets/images/frameworks/reduxtoolkit.png`
//                             ].default
//                           }
//                         /> */}
//                       </div>
//                       <div className="mt-4 text-base font-medium">
//                         Redux Toolkit
//                       </div>
//                       <div className="pb-2 mt-2 leading-relaxed text-center text-slate-500">
//                         Redux Toolkit is the official, opinionated,
//                         batteries-included toolset for efficient Redux
//                         development. It simplifies the Redux workflow for
//                         managing your application's state.
//                       </div>
//                     </div>
//                   </div>
//                   <div className="sm:w-1/2 lg:w-1/3 px-2.5">
//                     <div className="flex flex-col items-center p-5 box box--stacked">
//                       <div className="w-12 h-12">
//                         {/* <img
//                           src={
//                             frameworkImageAssets[
//                               `/src/assets/images/frameworks/typescript.png`
//                             ].default
//                           }
//                         /> */}
//                       </div>
//                       <div className="mt-4 text-base font-medium">
//                         Typescript
//                       </div>
//                       <div className="pb-2 mt-2 leading-relaxed text-center text-slate-500">
//                         TypeScript is a superset of JavaScript that provides
//                         static typing, enabling developers to catch errors and
//                         bugs in their code early in the development process.
//                       </div>
//                     </div>
//                   </div>
//                   <div className="sm:w-1/2 lg:w-1/3 px-2.5">
//                     <div className="flex flex-col items-center p-5 box box--stacked">
//                       <div className="w-12 h-12">
//                         {/* <img
//                           src={
//                             frameworkImageAssets[
//                               `/src/assets/images/frameworks/postcss.png`
//                             ].default
//                           }
//                         /> */}
//                       </div>
//                       <div className="mt-4 text-base font-medium">PostCSS</div>
//                       <div className="pb-2 mt-2 leading-relaxed text-center text-slate-500">
//                         PostCSS is a tool for transforming CSS with JavaScript
//                         plugins. These plugins can lint your CSS, support
//                         variables and mixins, transpile future CSS syntax,
//                         inline images, and more.
//                       </div>
//                     </div>
//                   </div>
//                   <div className="sm:w-1/2 lg:w-1/3 px-2.5">
//                     <div className="flex flex-col items-center p-5 box box--stacked">
//                       <div className="w-12 h-12">
//                         {/* <img
//                           src={
//                             frameworkImageAssets[
//                               `/src/assets/images/frameworks/chartjs.png`
//                             ].default
//                           }
//                         /> */}
//                       </div>
//                       <div className="mt-4 text-base font-medium">ChartJs</div>
//                       <div className="pb-2 mt-2 leading-relaxed text-center text-slate-500">
//                         Chart.js is a JavaScript library that allows you to
//                         create various types of charts and graphs on web pages.
//                         It is an easy-to-use and flexible library that supports
//                         different chart types.
//                       </div>
//                     </div>
//                   </div>
//                   <div className="sm:w-1/2 lg:w-1/3 px-2.5">
//                     <div className="flex flex-col items-center p-5 box box--stacked">
//                       <div className="w-12 h-12">
//                         {/* <img
//                           src={
//                             frameworkImageAssets[
//                               `/src/assets/images/frameworks/ckeditor.png`
//                             ].default
//                           }
//                         /> */}
//                       </div>
//                       <div className="mt-4 text-base font-medium">CKEditor</div>
//                       <div className="pb-2 mt-2 leading-relaxed text-center text-slate-500">
//                         CKEditor is a popular rich text editor for the web,
//                         known for its flexibility and feature-rich capabilities.
//                         It allows users to create and edit content with a wide
//                         range of formatting options.
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full px-10 -mt-24 sm:px-20">
//               <div className="p-1 box box--stacked">
//                 <div
//                   className={clsx([
//                     "relative px-10 sm:px-20 py-20 overflow-hidden bg-gradient-to-b from-theme-1 to-theme-2 rounded-[0.6rem]",
//                     "after:content-[''] after:h-full after:w-full after:ease-in-out after:duration-300 after:top-0 after:absolute after:left-0 after:bg-texture-white after:bg-contain after:bg-[center_-5rem] after:bg-no-repeat",
//                   ])}
//                 >
//                   <div className="relative z-10 text-center lg:w-96">
//                     <div className="text-xl font-medium text-white">
//                       Why Choose Tailwise
//                     </div>
//                     <div className="mt-4 text-base leading-relaxed text-white/70">
//                       Discover the power of Tailwise, the efficient and
//                       user-friendly admin template that elevates your project to
//                       new heights. With a perfect blend of innovation and
//                       functionality, Tailwise offers the ultimate solution for a
//                       seamless and delightful development experience.
//                     </div>
//                     <Link to="/">
//                       <Button
//                         variant="primary"
//                         rounded
//                         className="px-8 py-2.5 mt-7 bg-white/5 border-white/[0.15]"
//                       >
//                         View Demo
//                       </Button>
//                     </Link>
//                   </div>
//                   <div className="hidden lg:block absolute top-0 right-0 w-3/4 h-[120%] -rotate-[9deg] -mt-10 rounded-[0.6rem] overflow-hidden box p-1 -mr-[23%]">
//                     {/* <img
//                       className="w-full h-full rounded-[0.6rem]"
//                       src={
//                         themesImageAssets[
//                           `/src/assets/images/themes/${
//                             themes[_.random(0, themes.length - 1)].name
//                           }.png`
//                         ].default
//                       }
//                     /> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col items-center w-full" id="pricing">
//               <div
//                 className={clsx([
//                   "text-3xl font-medium relative",
//                   "before:content-[''] before:bg-gradient-to-b before:from-transparent before:via-slate-100/80 before:to-slate-100 before:inset-0 before:absolute before:h-[360%] before:w-[150%] before:-mt-[4.5rem] before:-ml-[25%]",
//                 ])}
//               >
//                 <div className="absolute inset-x-0 w-36 h-36 mx-auto -mt-[5.5rem] border rounded-full border-theme-1/[0.13] z-[-1] flex items-center justify-center">
//                   <div className="w-16 h-16 border rounded-full border-theme-1/20"></div>
//                   <div className="absolute w-10 h-10 -mt-10 border rounded-full -ml-52 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
//                   <div className="absolute w-10 h-10 -ml-36 border rounded-full -mt-40 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
//                   <div className="absolute w-10 h-10 border rounded-full -mt-[13rem] bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
//                   <div className="absolute w-10 h-10 -mr-36 border rounded-full -mt-40 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
//                   <div className="absolute w-10 h-10 -mt-10 border rounded-full -mr-52 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
//                 </div>
//                 <div className="relative text-center z-5 text-theme-1">
//                   Pricing Plans
//                 </div>
//               </div>
//               <div className="relative mt-4 text-base text-center px-14 sm:px-0 text-slate-500/80 z-5">
//                 Discover a spectrum of styles, 11 captivating theme variants at
//                 your fingertips!
//               </div>
//               <div className="flex w-full px-10 mt-10 md:px-24 gap-7">
//                 <div className="flex flex-col w-full lg:flex-row box box--stacked">
//                   <div className="w-full pt-5 lg:pt-[137px]">
//                     <div className="px-5 py-5">
//                       <div className="flex items-center justify-center px-5 py-4 font-medium rounded-md lg:justify-start bg-slate-100/60">
//                         Number of end products
//                       </div>
//                       <div className="flex items-center justify-center px-5 py-4 font-medium rounded-md lg:justify-start">
//                         Use in a single end product
//                       </div>
//                       <div className="flex items-center justify-center px-5 py-4 font-medium rounded-md lg:justify-start bg-slate-100/60">
//                         Use in a free end product
//                         <Tippy as="a" content="More than one end user allowed">
//                           <Lucide
//                             className="w-4 h-4 ml-2 stroke-[1.3] text-slate-500"
//                             icon="Info"
//                           />
//                         </Tippy>
//                       </div>
//                       <div className="flex items-center justify-center px-5 py-4 font-medium rounded-md lg:justify-start">
//                         Use in an end product that's sold
//                       </div>
//                       <div className="flex items-center justify-center px-5 py-4 font-medium rounded-md lg:justify-start bg-slate-100/60">
//                         On-demand products/services
//                         <Tippy
//                           as="a"
//                           content="E.g. 'made to order' or 'create your own' apps and sites"
//                         >
//                           <Lucide
//                             className="w-4 h-4 ml-2 stroke-[1.3] text-slate-500"
//                             icon="Info"
//                           />
//                         </Tippy>
//                       </div>
//                       <div className="flex items-center justify-center px-5 py-4 font-medium rounded-md lg:justify-start">
//                         Use in stock items/templates
//                       </div>
//                     </div>
//                   </div>
//                   <div className="border-l border-dashed"></div>
//                   <div className="flex flex-col flex-none p-5 lg:w-72">
//                     <div className="flex flex-col items-center gap-4 pt-3 pb-6 border-b border-dashed">
//                       <div className="flex items-center justify-center w-10 h-10 border rounded-full border-primary/10 bg-primary/10">
//                         <Lucide
//                           icon="Zap"
//                           className="w-4 h-4 text-primary fill-primary/10"
//                         />
//                       </div>
//                       <div className="text-base font-medium">
//                         Regular License
//                       </div>
//                     </div>
//                     <div className="flex flex-col items-center py-5 mb-5 border-b border-dashed">
//                       <div className="flex justify-center w-full py-3.5 rounded-md bg-slate-100/60">
//                         <div className="flex items-center justify-center h-6 px-10 text-xs font-medium text-center">
//                           <div className="-mt-0.5">1</div>
//                         </div>
//                       </div>
//                       <div className="flex justify-center w-full py-3.5 rounded-md">
//                         <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-primary/80 border-primary">
//                           <Lucide
//                             icon="Check"
//                             className="stroke-[2] text-white w-3.5 h-3.5"
//                           />
//                         </div>
//                       </div>
//                       <div className="flex justify-center w-full py-3.5 rounded-md bg-slate-100/60">
//                         <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-primary/80 border-primary">
//                           <Lucide
//                             icon="Check"
//                             className="stroke-[2] text-white w-3.5 h-3.5"
//                           />
//                         </div>
//                       </div>
//                       <div className="flex justify-center w-full py-3.5 rounded-md">
//                         <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-danger/80 border-danger">
//                           <Lucide
//                             icon="X"
//                             className="stroke-[2] text-white w-3.5 h-3.5"
//                           />
//                         </div>
//                       </div>
//                       <div className="flex justify-center w-full py-3.5 rounded-md bg-slate-100/60">
//                         <div className="flex items-center justify-center h-6 px-10 text-xs font-medium text-center">
//                           <div className="-mt-0.5">
//                             One license per each customized end product
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex justify-center w-full py-3.5 rounded-md">
//                         <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-danger/80 border-danger">
//                           <Lucide
//                             icon="X"
//                             className="stroke-[2] text-white w-3.5 h-3.5"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="text-2xl font-medium text-center">$25</div>
//                     <Button
//                       as="a"
//                       target="_blank"
//                       href="https://themeforest.net/item/tailwise-intuitive-tailwind-dashboard-kit/48659596"
//                       rounded
//                       variant="primary"
//                       className="mt-5"
//                     >
//                       Choose
//                     </Button>
//                   </div>
//                   <div className="border-l border-dashed"></div>
//                   <div className="flex flex-col flex-none p-5 lg:w-72">
//                     <div className="flex flex-col items-center gap-4 pt-3 pb-6 border-b border-dashed">
//                       <div className="flex items-center justify-center w-10 h-10 border rounded-full border-primary/10 bg-primary/10">
//                         <Lucide
//                           icon="ShieldCheck"
//                           className="w-4 h-4 text-primary fill-primary/10"
//                         />
//                       </div>
//                       <div className="text-base font-medium">
//                         Extended License
//                       </div>
//                     </div>
//                     <div className="flex flex-col items-center py-5 mb-5 border-b border-dashed">
//                       <div className="flex justify-center w-full py-3.5 rounded-md bg-slate-100/60">
//                         <div className="flex items-center justify-center h-6 px-10 text-xs font-medium text-center">
//                           <div className="-mt-0.5">1</div>
//                         </div>
//                       </div>
//                       <div className="flex justify-center w-full py-3.5 rounded-md">
//                         <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-primary/80 border-primary">
//                           <Lucide
//                             icon="Check"
//                             className="stroke-[2] text-white w-3.5 h-3.5"
//                           />
//                         </div>
//                       </div>
//                       <div className="flex justify-center w-full py-3.5 rounded-md bg-slate-100/60">
//                         <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-primary/80 border-primary">
//                           <Lucide
//                             icon="Check"
//                             className="stroke-[2] text-white w-3.5 h-3.5"
//                           />
//                         </div>
//                       </div>
//                       <div className="flex justify-center w-full py-3.5 rounded-md">
//                         <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-primary/80 border-primary">
//                           <Lucide
//                             icon="Check"
//                             className="stroke-[2] text-white w-3.5 h-3.5"
//                           />
//                         </div>
//                       </div>
//                       <div className="flex justify-center w-full py-3.5 rounded-md bg-slate-100/60">
//                         <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-danger/80 border-danger">
//                           <Lucide
//                             icon="X"
//                             className="stroke-[2] text-white w-3.5 h-3.5"
//                           />
//                         </div>
//                       </div>
//                       <div className="flex justify-center w-full py-3.5 rounded-md">
//                         <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-danger/80 border-danger">
//                           <Lucide
//                             icon="X"
//                             className="stroke-[2] text-white w-3.5 h-3.5"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="text-2xl font-medium text-center">$799</div>
//                     <Button
//                       as="a"
//                       target="_blank"
//                       href="https://themeforest.net/item/tailwise-intuitive-tailwind-dashboard-kit/48659596"
//                       rounded
//                       variant="primary"
//                       className="mt-5"
//                     >
//                       Choose
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Main;
// import { useState } from "react";
import "@/assets/css/pages/landing-page.css";
import Lucide, { icons } from "@/components/Base/Lucide";
// import { Menu } from "@/components/Base/Headless";
import { FormInput, FormTextarea } from "@/components/Base/Form";
import {
  setColorScheme,
  colorSchemes,
  ColorSchemes,
} from "@/stores/colorSchemeSlice";
import { setPageLoader } from "@/stores/pageLoaderSlice";
import { selectColorScheme } from "@/stores/colorSchemeSlice";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import ReportDonutChart7 from "@/components/ReportDonutChart7";
import { Link, useNavigate } from "react-router-dom";
import Tippy from "@/components/Base/Tippy";
import users from "@/fakers/users";
import messages from "@/fakers/messages";
import activities from "@/fakers/activities";
import Button from "@/components/Base/Button";
import { themes, Themes } from "@/stores/themeSlice";
// import yoga from "../../assets/images/section/yoga.png";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";
// import logo from "../../assets/images/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Vector from "../../assets/Vector9.png";
import Logo from "../../assets/White Logo 1.png";
// import Imageback from "../../assets/leaf.jpg";
import Maain from "../../assets/maain.png";
import Image1 from "../../assets/zero.png";
import Image2 from "../../assets/document.png";
import Image3 from "../../assets/arrow.png";
import Image4 from "../../assets/hand.png";
import Right from "../../assets/right2.png";
import Video1 from "../../assets/video1.gif";
import Video2 from "../../assets/video2.gif";
import Video3 from "../../assets/video3.gif";
import { Menu, X } from "lucide-react";
import Person from "../../assets/person1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Backimage from "../../assets/backimage.png"

const images = [Vector, Vector, Vector, Vector, Vector, Vector, Vector, Vector];
function Main() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [topBarActive, setTopBarActive] = useState(false);
  const [showcaseActive, setShowcaseActive] = useState(true);
  const activeColorScheme = useAppSelector(selectColorScheme);
  const [tempActiveColorScheme, setTempActiveColorScheme] =
    useState(activeColorScheme);
  const [isOpen, setIsOpen] = useState(false);

  const setColorSchemeClass = () => {
    const el = document.querySelectorAll("html")[0];
    el.setAttribute("class", activeColorScheme);
  };

  const switchColor = (colorScheme: ColorSchemes) => {
    setTempActiveColorScheme(colorScheme);

    setTimeout(() => {
      dispatch(setColorScheme(colorScheme));
    }, 500);
    localStorage.setItem("colorScheme", colorScheme);
    setColorSchemeClass();
  };

  const scrollTo = (e: React.MouseEvent) => {
    e.preventDefault();

    const targetId = (e.target as HTMLElement).getAttribute("data-link");
    const el = document.getElementById(
      targetId !== null ? targetId.slice(1) : ""
    );

    if (el !== null) {
      window.scroll({
        behavior: "smooth",
        left: 0,
        top: el.offsetTop - 140,
      });
    }
  };

  const previewTheme = (theme: Themes) => {
    dispatch(setPageLoader(true));
    navigate(`/?theme=${theme.name}`);
  };

  setColorSchemeClass();

  const themesImageAssets = import.meta.glob<{
    default: string;
  }>("/src/assets/images/themes/*.{jpg,jpeg,png,svg}", { eager: true });

  const frameworkImageAssets = import.meta.glob<{
    default: string;
  }>("/src/assets/images/frameworks/*.{jpg,jpeg,png,svg}", { eager: true });

  const pageImageAssets = import.meta.glob<{
    default: string;
  }>("/src/assets/images/pages/*.{jpg,jpeg,png,svg}", { eager: true });

  window.onscroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setTopBarActive(true);
    } else {
      setTopBarActive(false);
    }

    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setShowcaseActive(false);
    } else {
      setShowcaseActive(true);
    }
  };

  const mediaFiles = [
    {
      type: "image",
      src: Video1,
    },
    {
      type: "image",
      src: Video2,
    },
    {
      type: "image",
      src: Video3,
    },
  ];

  const data = [
    {
      id: 1,
      title: "What is Swasti Bharat?",
      description:
        "Swasti Bharat is a platform where yoga instructors can list their services, and students can book online or offline yoga sessions. It connects people looking for yoga classes with certified and experienced instructors.",
    },
    {
      id: 2,
      title: "How does Swasti Bharat work?",
      description:
        "For users, Swasti Bharat allows you to browse and book yoga sessions based on your preference (online/offline, group/private). For instructors, it provides a platform to offer classes, manage schedules, and earn money.",
    },
    {
      id: 3,
      title: "How do I contact customer support?",
      description:
        "You can reach us via email, phone, or live chat on our website. Go to the ‘Help & Support’ section and choose your preferred method to contact us.",
    },
    {
      id: 4,
      title:
        "What makes Swasti Bharat unique compared to other yoga platforms?",
      description:
        "Swasti Bharat stands out because of:\n- **Low Commission for Instructors** – Only 10%, one of the lowest in the industry.\n- **Zero Registration Fees** – Instructors can onboard for free without any upfront charges.\n- **Flexible Class Options** – Instructors can offer one-day, weekly, or monthly classes.\n- **Transparent Earnings** – Instructors can track earnings and withdrawals in real-time.\n- **Affordable Yoga for Users** – Quality yoga classes at competitive prices.\n- **Expert Instructors** – Only well-certified and experienced yoga teachers are listed.",
    },
  ];

  const [groups, setGroups] = useState<
    Array<{
      group: string;
      icon: keyof typeof icons;
      active: boolean;
      pages: Array<{
        name: string;
        pathname: string;
        image: string;
      }>;
    }>
  >([
    {
      group: "Dashboards",
      icon: "GaugeCircle",
      active: true,
      pages: [
        {
          name: "E-Commerce",
          pathname: "/",
          image: "dashboard-overview-1",
        },
        {
          name: "CRM",
          pathname: "/dashboard-overview-2",
          image: "dashboard-overview-2",
        },
        {
          name: "Hospital",
          pathname: "/dashboard-overview-3",
          image: "dashboard-overview-3",
        },
        {
          name: "Factory",
          pathname: "/dashboard-overview-4",
          image: "dashboard-overview-4",
        },
        {
          name: "Banking",
          pathname: "/dashboard-overview-5",
          image: "dashboard-overview-5",
        },
        {
          name: "Cafe",
          pathname: "/dashboard-overview-6",
          image: "dashboard-overview-6",
        },
        {
          name: "Crypto",
          pathname: "/dashboard-overview-7",
          image: "dashboard-overview-7",
        },
        {
          name: "Hotel",
          pathname: "/dashboard-overview-8",
          image: "dashboard-overview-8",
        },
      ],
    },
    {
      group: "Apps",
      icon: "ActivitySquare",
      active: false,
      pages: [
        {
          name: "Inbox",
          pathname: "/inbox",
          image: "inbox",
        },
        {
          name: "File Manager List",
          pathname: "/file-manager-list",
          image: "file-manager-list",
        },
        {
          name: "File Manager Grid",
          pathname: "/file-manager-grid",
          image: "file-manager-grid",
        },
      ],
    },
    {
      group: "UI Widgets",
      icon: "Album",
      active: false,
      pages: [
        {
          name: "Creative",
          pathname: "/creative",
          image: "creative",
        },
        {
          name: "Dynamic",
          pathname: "/dynamic",
          image: "dynamic",
        },
        {
          name: "Interactive",
          pathname: "/interactive",
          image: "interactive",
        },
      ],
    },
    {
      group: "User Management",
      icon: "BookMarked",
      active: false,
      pages: [
        {
          name: "Users",
          pathname: "/users",
          image: "users",
        },
        {
          name: "Departments",
          pathname: "/departments",
          image: "departments",
        },
        {
          name: "Add User",
          pathname: "/add-user",
          image: "add-user",
        },
      ],
    },
    {
      group: "Personal Dashboard",
      icon: "HardDrive",
      active: false,
      pages: [
        {
          name: "Profile Overview",
          pathname: "/profile-overview",
          image: "profile-overview",
        },
        {
          name: "Events",
          pathname: "/profile-overview?page=events",
          image: "profile-overview-events",
        },
        {
          name: "Achievements",
          pathname: "/profile-overview?page=achievements",
          image: "profile-overview-achievements",
        },
        {
          name: "Contacts",
          pathname: "/profile-overview?page=contacts",
          image: "profile-overview-contacts",
        },
        {
          name: "Default",
          pathname: "/profile-overview?page=default",
          image: "profile-overview-default",
        },
      ],
    },
    {
      group: "General Settings",
      icon: "MousePointerSquare",
      active: false,
      pages: [
        {
          name: "Profile Info",
          pathname: "/settings",
          image: "settings",
        },
        {
          name: "Email Settings",
          pathname: "/settings?page=email-settings",
          image: "settings-email-settings",
        },
        {
          name: "Security",
          pathname: "/settings?page=security",
          image: "settings-security",
        },
        {
          name: "Preferences",
          pathname: "/settings?page=preferences",
          image: "settings-preferences",
        },
        {
          name: "Two-factor Authentication",
          pathname: "/settings?page=two-factor-authentication",
          image: "settings-two-factor-authentication",
        },
        {
          name: "Device History",
          pathname: "/settings?page=device-history",
          image: "settings-device-history",
        },
        {
          name: "Notification Settings",
          pathname: "/settings?page=notification-settings",
          image: "settings-notification-settings",
        },
        {
          name: "Connected Services",
          pathname: "/settings?page=connected-services",
          image: "settings-connected-services",
        },
        {
          name: "Social Media Links",
          pathname: "/settings?page=social-media-links",
          image: "settings-social-media-links",
        },
        {
          name: "Account Deactivation",
          pathname: "/settings?page=account-deactivation",
          image: "settings-account-deactivation",
        },
      ],
    },
    {
      group: "Account",
      icon: "ShieldHalf",
      active: false,
      pages: [
        {
          name: "Billing",
          pathname: "/billing",
          image: "billing",
        },
        {
          name: "Invoice",
          pathname: "/invoice",
          image: "invoice",
        },
      ],
    },
    {
      group: "E-Commerce",
      icon: "Building",
      active: false,
      pages: [
        {
          name: "Categories",
          pathname: "/categories",
          image: "categories",
        },
        {
          name: "Add Product",
          pathname: "/add-product",
          image: "add-product",
        },
        {
          name: "Product List",
          pathname: "/product-list",
          image: "product-list",
        },
        {
          name: "Product Grid",
          pathname: "/product-grid",
          image: "product-grid",
        },
        {
          name: "Transaction List",
          pathname: "/transaction-list",
          image: "transaction-list",
        },
        {
          name: "Transaction Detail",
          pathname: "/transaction-detail",
          image: "transaction-detail",
        },
        {
          name: "Seller List",
          pathname: "/seller-list",
          image: "seller-list",
        },
        {
          name: "Seller Detail",
          pathname: "/seller-detail",
          image: "seller-detail",
        },
        {
          name: "Reviews",
          pathname: "/reviews",
          image: "reviews",
        },
        {
          name: "Point of Sale",
          pathname: "/point-of-sale",
          image: "point-of-sale",
        },
      ],
    },
    {
      group: "Authentications",
      icon: "PanelRightClose",
      active: false,
      pages: [
        {
          name: "Login",
          // pathname: "/login",
          pathname: "/",
          image: "login",
        },
        {
          name: "Register",
          pathname: "/register",
          image: "register",
        },
      ],
    },
  ]);

  const setActiveGroup = (e: React.MouseEvent, key: number) => {
    e.preventDefault();

    const computedGroups = groups.map((group, groupKey) => {
      return {
        ...group,
        active: groupKey === key,
      };
    });

    setGroups(computedGroups);
  };

  return (
    <div
      className={clsx([
        "",
        "",
        // !showcaseActive && "landing-page--scrolled",
      ])}
    >
      <div
        className={clsx([
          // "relative group background overflow-x-hidden scroll-smooth",
          "before:content-[''] before:w-screen before:h-screen before:rounded-[0_0_0%] [&.background--hidden]:before:from-slate-100 [&.background--hidden]:before:to-transparent before:bg-gradient-to-b before:from-[#4F0A39] before:to-[#89346E] before:absolute before:z-[-1] before:transition-colors before:ease-in-out before:duration-300",
          "after:content-[''] after:z-[-1] after:h-screen after:w-screen [&.background--hidden]:after:opacity-0 after:transition-[opacity,height] after:ease-in-out after:duration-300 after:top-0 after:fixed after:bg-texture-white after:bg-contain after:bg-fixed after:bg-[center_-25rem] after:bg-no-repeat",
          // topBarActive && "background--hidden",
        ])}
      >
        <div className="container fixed inset-x-0 z-50 px-5 mx-auto xl:px-0">
          <div className="relative font-['Public_Sans'] flex items-center h-16 w-full px-5 mt-5">
            <a href="/" className="relative z-10 flex items-center">
              <div className="bg-[#82396b] text-white p-4 rounded-lg flex items-center space-x-4">
                <img src={Logo} alt="Logo" className="h-12 w-12" />
                <div className="hidden md:block">
                  <p className="text-orange-400">
                    Swasth Bharat <span className="text-white">with</span>
                  </p>
                  <p className="text-xl font-bold">Swasti Bharat</p>
                </div>
              </div>
            </a>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white lg:hidden ml-auto"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Navigation Sidebar */}
            <nav
              className={clsx(
                "fixed top-0 left-0 z-10 h-screen w-[70%] bg-[#78285e] transition-all duration-300 flex flex-col items-start gap-[40px] px-6 text-white lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:flex-row lg:justify-center lg:items-center lg:gap-3",
                { "hidden lg:flex": !isOpen }
              )}
            >
              {/* Close Button inside Sidebar */}

              {/* Logo inside Sidebar (Visible only when sidebar is open) */}
              {isOpen && (
                <div className="flex items-center mt-[30px] gap-3">
                  <img src={Logo} alt="Logo" className="h-10 w-10" />
                  <span className="text-white text-lg font-bold">
                    Swasti Bharat
                  </span>
                </div>
              )}

              <a
                href="#themes-variants"
                className="py-2 px-4 hover:text-gray-300"
              >
                Themes & Variants
              </a>
              <a
                href="#pages-layouts"
                className="py-2 px-4 hover:text-gray-300"
              >
                Pages & Layouts
              </a>
              <a href="#frameworks" className="py-2 px-4 hover:text-gray-300">
                Frameworks
              </a>
              <a href="#pricing" className="py-2 px-4 hover:text-gray-300">
                Pricing
              </a>

              {/* Register Button for Mobile View */}
              <a
                href="/register"
                className="px-5 py-2 bg-white/10 border border-white/10 rounded lg:hidden text-white font-[Public_Sans] text-sm font-medium leading-5 tracking-[0.35px] rounded-full shadow-sm flex items-center justify-center mt-4"
              >
                Register Now
              </a>
            </nav>

            {/* Buttons Section (Desktop) */}
            <div className="hidden lg:flex gap-2.5 ml-auto">
              <a
                href="/register"
                className="text-white font-[Public_Sans] text-sm font-medium leading-5 tracking-[0.35px] rounded-full border border-white/10 bg-white/10 shadow-sm flex items-center justify-center px-5 py-[9px]"
              >
                Register Now
              </a>
              {/* <a
                href="/"
                className="px-5 py-2 bg-white/10 border border-white/10 rounded lg:hidden"
              >
                Login
              </a> */}
            </div>
          </div>
        </div>
        {/* <div className="container relative z-10 pt-40">
          <div className="flex flex-col items-center "> */}
        <div className="container relative z-10 pt-40 flex items-center justify-center">
          <div className="flex w-[100%] flex-col items-center w-full">
            <div className="container h-[70vh] w-full flex flex-col md:flex-row items-center justify-center sm:px10  sm:px-6">
              {/* Left Side - Text Content */}
              <div className="w-full md:w-5/12 lg:w-6/12 xl:w-6/12 text-center md:text-left flex flex-col items-center md:items-start justify-center">
                <h1 className="text-3xl sm:text-4xl font-['Public_Sans'] md:text-5xl font-semibold leading-tight text-white">
                  Are you a certified <br />
                </h1>
                <h1 className="text-[#E3A09B] mt-2 text-3xl font-['Public_Sans'] sm:text-4xl md:text-5xl font-semibold leading-tight">
                  Yoga Instructor
                </h1>
                <p className="text-white/80 font-['Public_Sans'] text-base sm:text-lg mt-4 px-2 sm:px-0">
                  Empower Lives Through Yoga – Inspire, Teach & Earn. Join
                  Swasti Bharat – Where Your Passion for Yoga Meets Unlimited
                  Growth!
                </p>

                {/* Input and Button */}
                <div className="mt-6 w-full flex justify-center md:justify-start">
                  <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    className="px-4 py-3 rounded-l-lg border-none outline-none w-56 sm:w-64 text-gray-700"
                  />
                  <button className="bg-[#F5B342] text-black px-4 sm:px-5 py-3 rounded-r-lg font-medium">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Right Side - Larger Image */}
              <div className="w-full md:w-7/12 lg:w-6/12 xl:w-6/12 flex justify-center mt-6 md:mt-0">
                <img
                  src={Maain}
                  alt="Yoga Instructor"
                  className="w-[967px] h-[260px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
                />
              </div>
            </div>
            <section className="w-full font-['Public_Sans'] bg-white h-auto flex flex-wrap items-center justify-center py-10 px-4">
              <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-[70px] items-center">
                {/* Image Grid */}
                <div className="grid w-[109%] grid-cols-1 [@media(max-width:1279px)]:w-auto md:grid-cols-2 gap-4 place-items-center">
                  {mediaFiles.map((media, index) => (
                    <div
                      key={index}
                      className={`w-[295.276px] h-[205px] flex-shrink-0 border border-[#E2E8F0] bg-white rounded-xl p-2 flex justify-center items-center ${
                        index === 0 ? "sm:col-span-2" : ""
                      }`}
                    >
                      {/* Media Content */}
                      <div className="relative w-full h-full bg-[#E2E8F0] rounded-[9.6px] border border-[#E2E8F0] flex justify-center items-center overflow-hidden">
                        {media.type === "video" ? (
                          <div className="relative w-full h-full">
                            <video
                              className="w-full h-full object-cover rounded-[9.6px]"
                              autoPlay
                              loop
                              muted
                            >
                              <source src={media.src} type="video/mp4" />
                            </video>
                          </div>
                        ) : (
                          <img
                            className="w-full h-full object-cover rounded-[9.6px]"
                            src={media.src}
                            alt="media"
                          />
                        )}
                        {/* Bottom Ribbon with Text */}
                        <div className="absolute bottom-0 z-10 left-0 w-full h-[39px] bg-[#84316A] rounded-b-[9.6px] flex justify-center items-center text-orange-400 font-semibold">
                          {index === 0
                            ? "Yoga Classes"
                            : index === 1
                            ? "Offline Classes"
                            : "Online Classes"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Text Section */}
                <div className="w-[100%] text-center md:text-left h-auto px-2 sm:px-4">
                  <h2 className="text-[#111] font-['Public_Sans'] text-[28px] not-italic font-semibold leading-[38px]">
                    Select your preferred format to offer yoga classes – choose
                    from these three options!
                  </h2>
                  <p className="text-[#333] font-['Public_Sans'] text-[15px] not-italic font-normal leading-[26px]">
                    Join <span className="font-semibold">Swasti Bharat</span> to
                    attract more students, receive secure payments, and build
                    your credibility with verified badges and real-time updates.
                  </p>
                </div>
              </div>
            </section>

            <section className="w-full h-auto bg-white min-h-screen flex items-center justify-center">
              <div className="w-full h-auto bg-[#FFE7FE] px-4  pt-12 flex justify-center">
                <div className="w-full pb-[30px] grid grid-cols-1 xl:grid-cols-2 items-center gap-10">
                  {/* Left Content */}
                  <div className="text-center w-full md:w-[95%] md:text-left px-2 md:px-0">
                    <h2 className="text-[#111] font-['Public_Sans'] text-[28px] not-italic font-semibold leading-[38px]">
                      Get Recognized, Earn More,{" "}
                      <br className="hidden md:block" /> and Teach Effortlessly!
                    </h2>
                    <p className="text-[#333] font-['Public_Sans'] text-[15px] not-italic font-normal leading-[26px]">
                      Join <span className="font-semibold">Swasti Bharat</span>{" "}
                      to attract more students, receive secure payments, and
                      build your credibility with verified badges and real-time
                      updates.
                    </p>
                  </div>

                  {/* Right Grid Layout */}
                  <div className="grid grid-cols-1  md:grid-cols-2 gap-5 sm:gap-8">
                    {/* Left Column */}
                    <div className="flex [@media(max-width:1280px)]:mt-[0px] flex-col lg:mt-[-120px] max-lg:mt-0 gap-7">
                      <div className="w-full w-[250px] md:w-[100%] [@media(max-width:1280px)]:h-auto h-[193px] p-5 bg-white rounded-[20px] border border-[#F0EFFC] shadow-[0px_0px_6px_2px_rgba(0,0,0,0.04)]">
                        <h3 className="text-black font-['Public_Sans'] text-lg font-semibold leading-7">
                          Verified Instructor Badge
                        </h3>
                        <p className="text-[#3B3B3B] font-['Public_Sans'] text-sm font-normal leading-6">
                          Build trust and attract more students.
                        </p>
                      </div>
                      <div className="w-full w-[250px] [@media(max-width:1280px)]:h-auto md:w-[100%] h-[193px] p-5 bg-white rounded-[20px] border border-[#F0EFFC] shadow-[0px_0px_6px_2px_rgba(0,0,0,0.04)]">
                        <h3 className="text-black font-['Public_Sans'] text-lg font-semibold leading-7">
                          Real-Time Notifications
                        </h3>
                        <p className="text-[#3B3B3B] font-['Public_Sans'] text-sm font-normal leading-6">
                          Instant alerts for bookings, payments, and messages.
                        </p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-7">
                      <div className="w-full w-[316px] [@media(max-width:1280px)]:h-auto md:w-[100%] h-[169px] p-5 bg-white rounded-[20px] border border-[#F0EFFC] shadow-[0px_0px_6px_2px_rgba(0,0,0,0.04)]">
                        <h3 className="text-black font-['Public_Sans'] text-lg font-semibold leading-7">
                          Zero Investment, Maximum Earnings
                        </h3>
                        <p className="text-[#3B3B3B] font-['Public_Sans'] text-sm font-normal leading-6">
                          Secure, timely payouts with zero hidden charges.
                        </p>
                      </div>
                      <div className="w-full w-[200px] [@media(max-width:1280px)]:h-auto md:w-[100%] h-[169px] p-5 bg-white rounded-[20px] border border-[#F0EFFC] shadow-[0px_0px_6px_2px_rgba(0,0,0,0.04)]">
                        <h3 className="text-black font-['Public_Sans'] text-lg font-semibold leading-7">
                          Location-Based Bookings
                        </h3>
                        <p className="text-[#3B3B3B] font-['Public_Sans'] text-sm font-normal leading-6">
                          Nearby student sessions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-around bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Backimage})` }}
            >
        <div className="text-white w-[60%]">
            <h2 className="text-2xl font-bold">
                Join 1,500+ Instructors Growing with <span className="text-orange-500">Swasti Bharat</span>
            </h2>
            <p className="mt-4 text-lg">
                Showcase your expertise, connect with students, and grow your yoga practice on a trusted, government-recognized platform. Start your journey today!
            </p>
            <button className="mt-6 bg-orange-500 text-white font-semibold py-2 px-4 rounded">
                Join Now
            </button>
        </div>
        <div className="bg-purple-800 w-[150px] h-[150px] text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-orange-500">1500+</h3>
            <p className="mt-2 text-md">Certified</p>
            <p className="text-md">Yoga Instructors</p>
        </div>
    </div>
            <div className="container bg-white mx-auto px-4 py-4">
              <div className="flex flex-col gap-5 md:flex-row items-start md:items-center">
                {/* Left Side - Title and Description */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h1 className="text-[#111] font-[public sans] text-[28px] not-italic font-semibold leading-[38px]">
                    Why <span className="text-[#82396b]">Swasti Bharat</span> is
                    Best for Instructors
                  </h1>
                  <p className="text-[#333] font-[public sans] text-[15px] not-italic font-normal leading-[26px]">
                    All the benefits that come with selling on Meesho are
                    designed to help you sell more and make it easier to grow
                    your business.
                  </p>
                </div>

                {/* Right Side - Benefits Section */}
                <div className="md:w-1/2">
                  <div className="bg-white border border-blue-500 rounded-lg p-6 shadow-sm">
                    {/* Transparent Payment System */}
                    <div className="flex items-start mb-6">
                      <img
                        src={Image1}
                        alt="Payment System"
                        className="w-6 h-6 mr-4"
                      />
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-1">
                          Transparent Payment System
                        </h2>
                        <p className="text-gray-600">
                          Suppliers selling on Meesho keep 100% of their profit
                          by not paying any commission.
                        </p>
                      </div>
                    </div>
                    <hr className="border-gray-200 my-4" />

                    {/* Teach Beyond Borders */}
                    <div className="flex items-start mb-6">
                      <img
                        src={Image2}
                        alt="Teach Beyond Borders"
                        className="w-6 h-6 mr-4"
                      />
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-1">
                          Teach Beyond Borders
                        </h2>
                        <p className="text-gray-600">
                          Sell online without the fear of order cancellation
                          charges with 0 penalty for late dispatch or order
                          cancellations.
                        </p>
                      </div>
                    </div>
                    <hr className="border-gray-200 my-4" />

                    {/* Complete Freedom */}
                    <div className="flex items-start mb-6">
                      <img
                        src={Image3}
                        alt="Complete Freedom"
                        className="w-6 h-6 mr-4"
                      />
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-1">
                          Complete Freedom
                        </h2>
                        <p className="text-gray-600">
                          From small to large, unbranded to branded, and now
                          open for sellers who don’t have a regular GSTIN
                          too—Meesho fuels growth for all suppliers.
                        </p>
                      </div>
                    </div>
                    <hr className="border-gray-200 my-4" />

                    {/* Hassle-Free Business */}
                    <div className="flex items-start">
                      <img
                        src={Image4}
                        alt="Hassle-Free Business"
                        className="w-6 h-6 mr-4"
                      />
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-1">
                          Hassle-Free Business
                        </h2>
                        <p className="text-gray-600 flex flex-col">
                          <span className="flex items-center">
                            <img
                              src={Right}
                              alt="Check"
                              className="w-3 h-3 mr-2"
                            />{" "}
                            Easy Product Listing
                          </span>
                          <span className="flex items-center">
                            <img
                              src={Right}
                              alt="Check"
                              className="w-3 h-3 mr-2"
                            />{" "}
                            Lowest Cost Shipping
                          </span>
                          <span className="flex items-center">
                            <img
                              src={Right}
                              alt="Check"
                              className="w-3 h-3 mr-2"
                            />{" "}
                            7-Day Payment Cycle from the delivery date
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container bg-[#fcf2fc] mx-auto py-4 px-4">
              <h1 className="font-[500] text-[44px] leading-[44px] tracking-[0.35px] text-center flex items-center justify-center mb-2">
                Frequently Asked Questions
              </h1>

              <p className="font-[300] text-[18px] leading-[24px] tracking-[0.35px] text-center text-gray-600 flex items-center justify-center mb-12">
                Find everything you need to know about joining, teaching, <br />
                and growing on Swasti Bharat.
              </p>

              <div className="w-[100%] flex flex-col xl:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex w-[100%] h-[420px] flex-col items-center">
                  <img
                    alt="Illustration of a person sitting on a bench with question marks and lightbulbs around them"
                    className="w-[393px] h-[370px] mb-4"
                    src={Person}
                  />
                </div>

                <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[55%] h-auto mx-auto">
                  {/* Navigation Buttons */}
                  <div className="absolute bottom-[20px] left-[-20px] transform -translate-x-1/2 flex flex-row gap-4 z-10">
  <button title="btn" className="custom-prev bg-gray-200 p-3 rounded-full shadow-lg flex items-center justify-center w-12 h-12">
    <ChevronLeft className="w-6 h-6" />
  </button>
  <button title="btn" className="custom-next bg-gray-200 p-3 rounded-full shadow-lg flex items-center justify-center w-12 h-12">
    <ChevronRight className="w-6 h-6" />
  </button>
</div>

                  {/* Swiper Component */}
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView="auto"
                    pagination={{ clickable: true }}
                    navigation={{
                      prevEl: ".custom-prev",
                      nextEl: ".custom-next",
                    }}
                    centeredSlides={false}
                  >
                    {data.map((item, index) => (
                      <SwiperSlide key={item.id} className="w-[270px]">
                        <div
                          className={`p-6 rounded-[32px] h-[351px] mx-auto 
                ${
                  index === 0
                    ? "bg-transparent shadow-none"
                    : "bg-white shadow-lg"
                }`}
                        >
                          <div className="flex justify-center mb-4">
                            <div className="bg-gradient-to-b from-[#78285d] to-[#a13e77] text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-semibold">
                              {index + 1}
                            </div>
                          </div>
                          <h2 className="text-center text-lg font-semibold mb-3">
                            {item.title}
                          </h2>
                          <p className="text-center text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <footer className="pt-[50px] font-['Public_Sans'] w-[100%] bg-[#78285e]">
              <div className="container mx-auto px-4">
                <div className="grid md:items-start grid-cols-1 lg:grid-cols-4 gap-8">
                  {/* Logo and Social Icons */}
                  <div className=" flex flex-col md:items-start">
                    {/* <h2 className="font-[16px] mb-4 text-white">Logo</h2> */}
                    <div className="bg-[#82396b] mb-[20px] w-[240px] text-white p-4 rounded-lg flex items-center space-x-4">
                      <img
                        alt="Decorative image of a meditating figure"
                        className="h-12 w-12"
                        height="50"
                        src={Logo}
                        width="50"
                      />
                      <div>
                        <p className="text-orange-400">
                          Swasth Bharat <span className="text-white">with</span>
                        </p>
                        <p className="text-xl font-bold">Swasti Bharat</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      {[faFacebookF, faTwitter, faInstagram, faYoutube].map(
                        (icon, index) => (
                          <a
                            key={index}
                            href="#"
                            className="bg-white w-[35px] h-[35px] flex items-center justify-center rounded-full text-orange-400 text-xl shadow-lg"
                          >
                            <FontAwesomeIcon icon={icon} />
                          </a>
                        )
                      )}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="flex flex-col md:items-start">
                    <h2 className="font-[16px] mb-4 text-white">Quick Link</h2>
                    <ul className="space-y-2">
                      {["Home", "About Us", "Services", "Product"].map(
                        (link, index) => (
                          <li key={index}>
                            <a
                              href="#"
                              className="text-orange-400 flex items-center gap-2"
                            >
                              <FontAwesomeIcon
                                icon={faChevronRight}
                                className="text-orange-400"
                              />
                              {link}
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Policy */}
                  <div className="flex flex-col md:items-start">
                    <h2 className="font-[16px] mb-4 text-white">Policy</h2>
                    <ul className="space-y-2">
                      {[1, 2].map((item, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="text-orange-400 flex items-center gap-2"
                          >
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              className="text-orange-400"
                            />
                            People Saying About Footer.
                          </a>
                          <p className="text-sm text-gray-300">8 Nov, 2021</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact */}
                  <div className="flex flex-col md:items-start">
                    <h2 className="font-[16px] mb-4 text-start text-white">
                      Contact
                    </h2>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          className="h-[25px] w-[25px] text-orange-400"
                        />
                        <span className="text-white">
                          Shikohabad, Uttar Pradesh
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="h-[25px] w-[25px] text-orange-400"
                        />
                        <span className="text-white">
                          connect@swastibharat.com
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="h-[25px] w-[25px] text-orange-400"
                        />
                        <span className="text-white">91+585-656-658</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* 
                <div className="text-center text-gray-300">
                  © 2023 All rights reserved
                </div> */}
              </div>
              {/* /* ✅ New Bottom Section (100% width, 83px height) */}
              <div className="w-full h-[83px] flex flex-col items-center overflow-hidden relative">
                {/* Copyright text at the upper center */}
                <div className="absolute top-10 text-center text-gray-300 w-full">
                  © 2023 All rights reserved
                </div>

                {/* Multiple Image Containers (each 174px width, 83px height) */}
                <div className="flex mt-5">
                  {images.map((imgSrc, index) => (
                    <div
                      key={index}
                      className="w-[174px] h-[83px] flex items-center justify-center shadow-lg relative"
                    >
                      <img
                        src={imgSrc}
                        alt={`Sample ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
