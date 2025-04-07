import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../appProvider/AppContext";

const CountryItem = ({ country }) => {
  const { setSelectedCountry, setFavorites, favorites } =
    useContext(AppContext);

  const handleDetail = () => {
    setSelectedCountry(country);
  };

  const handleFavorite = () => {
    setFavorites([...favorites, country]);
  };
  //   console.log(favorites);
  return (
    <li className="bg-white shadow-md rounded-2xl w-full max-w-sm p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <img
        src={country.flags?.png}
        alt={`${country.name.common} flag`}
        className="w-20 h-14 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {country.name.common}
      </h2>

      {/* Short Details */}
      <p className="text-gray-600 text-sm">
        <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
      </p>
      <p className="text-gray-600 text-sm">
        <strong>Region:</strong> {country.region}
      </p>
      <p className="text-gray-600 text-sm">
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <Link
          to="/CountryDetaile"
          onClick={handleDetail}
          className="py-2 px-5 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-sm font-semibold transition duration-300"
        >
          Details
        </Link>
        <button
          onClick={handleFavorite}
          className="py-2 px-5 bg-sky-500 hover:bg-sky-600 text-white rounded-full text-sm font-semibold transition duration-300"
        >
          Add to Favorites
        </button>
      </div>
    </li>
  );
};

export default CountryItem;
