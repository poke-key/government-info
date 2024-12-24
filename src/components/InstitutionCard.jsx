// src/components/InstitutionCard.jsx
import { Link } from 'react-router-dom';

const InstitutionCard = ({ title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="text-blue-600 hover:text-blue-800 font-medium"
      >
        Learn more →
      </Link>
    </div>
  );
};

export default InstitutionCard;