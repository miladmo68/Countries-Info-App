import React, { useEffect, useContext } from "react";
import { AppContext } from "../appProvider/AppContext";
import CountryItem from "../components/CountryItem";
const Home = () => {
  const {
    countries,
    setCountries,
    country,
    Loading,
    setLoading,
    error,
    setError,
  } = useContext(AppContext);

  async function fetchCountries() {
    try {
      setLoading(true);
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      if (data && data.length > 0) {
        setLoading(false);
        setCountries(data);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error.message);
    }
  }
  console.log(countries);
  useEffect(() => {
    fetchCountries();
  }, []);

  if (error) {
    return (
      <div className="flex justify-center items-center ">
        <h1 className="text-3xl font-bold text-red-500">Error: {error}</h1>
      </div>
    );
  }
  if (Loading) {
    return (
      <div className="flex justify-center items-center ">
        <h1 className="text-3xl font-bold text-blue-500">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 flex justify-center pb-4">
        Countries Info
      </h1>
      <ul className="space-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {countries.map((country) => (
          <CountryItem key={country.flag} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
