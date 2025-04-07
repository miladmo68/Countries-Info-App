import React, { useContext } from "react";
import { AppContext } from "../appProvider/AppContext";
import { Link } from "react-router-dom";

const CountryItem = ({ country }) => {
  const { setSelectedCountry, favorites, setFavorites } =
    useContext(AppContext);

  const handleRemove = (id) => {
    setFavorites(favorites.filter((c) => c.cca3 !== id));
  };

  return (
    <li className="bg-white shadow-md rounded-2xl w-full max-w-sm p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      {/* Country Flag */}
      <img
        src={country.flags?.png}
        alt={`${country.name?.common || "Country"} flag`}
        className="w-20 h-14 object-cover rounded mb-4"
      />

      {/* Country Name */}
      <h2 className="text-xl font-bold text-gray-800">
        {country.name?.common}
      </h2>

      {/* Short details */}
      <p className="text-gray-600 text-sm">
        <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
      </p>
      <p className="text-gray-500 text-xs">
        <strong>Region:</strong> {country.region || "N/A"}
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => handleRemove(country.cca3)}
          className="py-2 px-5 bg-sky-500 hover:bg-sky-600 text-white rounded-full text-sm font-semibold transition duration-300"
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default CountryItem;
