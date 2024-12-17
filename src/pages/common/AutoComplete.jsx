import React, { useState } from "react";

const AutoComplete = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [businessDetails, setBusinessDetails] = useState(null);

  const handleSearchChange = async (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 2) {
      try {
        const response = await fetch(
          `http://localhost:5001/autocomplete?input=${value}`
        );
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error("Error fetching autocomplete suggestions", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionSelect = async (placeId) => {
    try {
      const response = await fetch(
        `http://localhost:5001/getAddressDetails?placeId=${placeId}`
      );
      const data = await response.json();
      setBusinessDetails(data);
      setSuggestions([]);
    } catch (error) {
      console.error("Error fetching business details", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <div className="w-full max-w-2xl p-8 bg-white shadow-xl rounded-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Business Search
        </h1>

        {/* Search Bar with Autocomplete */}
        <div className="relative mb-6">
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search for a business"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {suggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-300 shadow-lg rounded-lg max-h-60 overflow-y-auto z-10">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.place_id}
                  onClick={() => handleSuggestionSelect(suggestion.place_id)}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  {suggestion.description}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Business Details Form */}
        {businessDetails && (
          <div className="mt-8 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Business Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600">Business Name</label>
                <input
                  type="text"
                  value={businessDetails.name}
                  readOnly
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">Phone Number</label>
                <input
                  type="text"
                  value={businessDetails.phoneNumber}
                  readOnly
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">Website</label>
                <input
                  type="text"
                  value={businessDetails.website}
                  readOnly
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">Business Status</label>
                <input
                  type="text"
                  value={businessDetails.businessStatus}
                  readOnly
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">Rating</label>
                <input
                  type="text"
                  value={businessDetails.rating}
                  readOnly
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">Street</label>
                <input
                  type="text"
                  value={businessDetails.address?.street}
                  readOnly
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">Street Number</label>
                <input
                  type="text"
                  value={businessDetails.address?.streetNumber}
                  readOnly
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">City</label>
                <input
                  type="text"
                  value={businessDetails.address?.city}
                  readOnly
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">State</label>
                <input
                  type="text"
                  value={businessDetails.address?.state}
                  readOnly
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">Country</label>
                <input
                  type="text"
                  value={businessDetails.address?.country}
                  readOnly
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">Zip Code</label>
                <input
                  type="text"
                  value={businessDetails.address?.zipCode}
                  readOnly
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center text-blue-400">
          <a href="/">back to login</a>
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;
