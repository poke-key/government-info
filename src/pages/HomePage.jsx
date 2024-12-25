// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import InstitutionCard from '../components/InstitutionCard';

const HomePage = () => {
 const institutions = [
   {
     title: "Executive Branch",
     description: "Led by the President of the United States, responsible for implementing and enforcing federal laws.",
     link: "/executive"
   },
   {
     title: "Congress", 
     description: "The legislative branch consisting of the Senate and House of Representatives.",
     link: "/congress"
   },
   {
     title: "Supreme Court",
     description: "The highest court in the nation, interpreting the Constitution and federal laws.",
     link: "/supreme-court"
   },
   {
     title: "FBI",
     description: "Federal Bureau of Investigation, the domestic intelligence and security service.",
     link: "/fbi"
   },
   {
     title: "Department of Homeland Security",
     description: "Responsible for public security, focusing on anti-terrorism, border security, and disaster prevention.",
     link: "/dhs"
   },
   {
     title: "U.S. States",
     description: "Information about all 50 states and their governments.",
     link: "/states"
   },
   {
     title: "Department of Defense",
     description: "Responsible for national security and the U.S. Armed Forces.",
     link: "/dod"
   },
   {
     title: "Department of State",
     description: "Leads America's foreign policy and diplomatic relations.",
     link: "/state"
   },
   {
     title: "CIA",
     description: "Central Intelligence Agency, focusing on foreign intelligence and national security.",
     link: "/cia"
   },
   {
     title: "Department of Treasury",
     description: "Manages federal finances, tax collection, and economic policy.",
     link: "/treasury"
   },
   {
     title: "Department of Justice",
     description: "Enforces federal law and administers justice.",
     link: "/justice"
   },
   {
     title: "Federal Reserve",
     description: "Central bank of the United States, managing monetary policy.",
     link: "/fed"
   },
   {
     title: "Department of Energy",
     description: "Oversees energy policy, nuclear security, and scientific research.",
     link: "/energy"
   },
   {
     title: "NASA",
     description: "National Aeronautics and Space Administration, leading space exploration and research.",
     link: "/nasa"
   },
   {
     title: "Department of Education",
     description: "Oversees federal education policy and administers federal educational assistance.",
     link: "/education"
   },
   {
     title: "Department of Agriculture",
     description: "Develops and executes federal policies on farming, agriculture, and food.",
     link: "/agriculture"
   },
   {
     title: "Environmental Protection Agency",
     description: "Protects human health and the environment through regulations and enforcement.",
     link: "/epa"
   },
   {
     title: "Social Security Administration",
     description: "Administers social security benefits and services for Americans.",
     link: "/ssa"
   }
 ];

 return (
   <div className="min-h-screen bg-gray-50">
     <Navbar />
     <SearchBar />
     
     <main className="container mx-auto py-8 px-4">
       <h1 className="text-4xl font-bold text-center mb-8">
         United States Government Institutions
       </h1>
       
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {institutions.map((institution, index) => (
           <InstitutionCard
             key={index}
             title={institution.title}
             description={institution.description}
             link={institution.link}
           />
         ))}
       </div>
     </main>
     
     <footer className="bg-gray-800 text-white py-8 mt-12">
       <div className="container mx-auto px-4 text-center">
         <p>© 2024 US Government Information Portal</p>
         <p className="mt-2 text-gray-400">
           Educational resource for understanding US government institutions
         </p>
       </div>
     </footer>
   </div>
 );
};

export default HomePage;