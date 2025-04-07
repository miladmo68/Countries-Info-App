import React, { useContext } from "react";
import { AppContext } from "../appProvider/AppContext";

const CountryDetaile = () => {
  const { selectedCountry, favorites, setFavorites } = useContext(AppContext);

  if (!selectedCountry || !selectedCountry.name) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-500">
          Loading country details...
        </h1>
      </div>
    );
  }

  const handleFavorite = () => {
    setFavorites([...favorites, selectedCountry]);
  };
  // console.log(favorites);
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={selectedCountry.flags?.png || ""}
            alt={`${selectedCountry.name?.common || "Country"} flag`}
            className="w-24 h-16 object-cover rounded"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              {selectedCountry.name?.common}
            </h1>
            <p className="text-lg text-gray-600 italic">
              {selectedCountry.name?.official}
            </p>
          </div>
        </div>

        <p className="text-lg text-gray-700 mb-2">
          <strong>Capital:</strong> {selectedCountry.capital?.[0] || "N/A"}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Region:</strong> {selectedCountry.region || "N/A"}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Population:</strong>
          {selectedCountry.population?.toLocaleString() || "N/A"}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Area:</strong>{" "}
          {selectedCountry.area?.toLocaleString() || "N/A"} km²
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Languages:</strong>{" "}
          {selectedCountry.languages
            ? Object.values(selectedCountry.languages).join(", ")
            : "N/A"}
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <strong>Timezones:</strong>{" "}
          {selectedCountry.timezones?.join(", ") || "N/A"}
        </p>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleFavorite}
            className="py-2 px-6 bg-teal-500 hover:bg-teal-600 text-white rounded-full text-lg font-semibold shadow-md transition duration-300"
          >
            Add to Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryDetaile;
