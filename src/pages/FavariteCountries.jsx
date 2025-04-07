import React, { useContext } from "react";
import { AppContext } from "../appProvider/AppContext";

import CountryFaivarite from "../components/CountryFaivarite";

const FavariteCountries = () => {
  const { favorites } = useContext(AppContext);
  console.log(favorites);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 flex justify-center">
        Favorite Countries
      </h1>
      <ul className="space-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {favorites.map((country) => (
          <CountryFaivarite key={country.cca3} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default FavariteCountries;
