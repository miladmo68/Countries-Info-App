import React, { createContext, useState } from "react";

// Create context
export const AppContext = createContext();

// AppProvider component
export const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <AppContext.Provider
      value={{
        countries,
        setCountries,
        country,
        setCountry,
        selectedCountry,
        setSelectedCountry,
        favorites,
        setFavorites,
        search,
        setSearch,
        Loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
