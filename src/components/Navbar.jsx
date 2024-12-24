// src/components/Navbar.jsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-xl font-bold">US Gov Info</Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/executive" className="hover:text-blue-200">Executive</Link>
          <Link to="/legislative" className="hover:text-blue-200">Legislative</Link>
          <Link to="/judicial" className="hover:text-blue-200">Judicial</Link>
          <Link to="/agencies" className="hover:text-blue-200">Agencies</Link>
          <Link to="/states" className="hover:text-blue-200">States</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link to="/executive" className="block px-4 py-2 hover:bg-blue-800">Executive</Link>
          <Link to="/legislative" className="block px-4 py-2 hover:bg-blue-800">Legislative</Link>
          <Link to="/judicial" className="block px-4 py-2 hover:bg-blue-800">Judicial</Link>
          <Link to="/agencies" className="block px-4 py-2 hover:bg-blue-800">Agencies</Link>
          <Link to="/states" className="block px-4 py-2 hover:bg-blue-800">States</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;