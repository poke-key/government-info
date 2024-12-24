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