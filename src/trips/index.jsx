import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import {
  MapPin,
  CalendarDays,
  DollarSign,
  Sparkles,
  Users,
} from "lucide-react";
import { selectBudget, travelers } from "../constants/Plan";

function CreateTrip() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [place, setPlace] = useState(null);
  const [days, setDays] = useState("");
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [packageType, setPackageType] = useState(null);

  const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API;

  useEffect(() => {
    if (!apiKey) {
      setError(
        "Google Places API key is not configured. Please add VITE_GOOGLE_PLACES_API to your .env file"
      );
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setIsScriptLoaded(true);
    script.onerror = () => setError("Failed to load Google Places API script");
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md shadow-sm"
          role="alert"
        >
          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-red-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800">
                <strong>Error: </strong>
                <span className="block sm:inline">{error}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isScriptLoaded) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 rounded-lg w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded-lg w-1/2"></div>
          <div className="mt-8 h-12 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-br from-blue-50 via-white to-pink-50 rounded-3xl shadow-lg p-10 border border-gray-100">
        <div className="space-y-8">
          <div className="text-center">
            <Sparkles className="mx-auto h-10 w-10 text-primary mb-2 animate-bounce" />
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Plan Your Dream Trip
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Get a personalized travel plan based on your preferences and
              interests.
            </p>
          </div>

          <div className="space-y-10">
            {/* Destination */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  Where would you like to go?
                </h3>
              </div>
              <GooglePlacesAutocomplete
                apiKey={apiKey}
                selectProps={{
                  value: place,
                  onChange: setPlace,
                  placeholder: "Search for a destination...",
                  styles: {
                    control: (base) => ({
                      ...base,
                      padding: "0.5rem",
                      borderRadius: "0.75rem",
                      borderColor: "#d1d5db",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
                      fontSize: "1.1rem",
                    }),
                  },
                }}
              />
            </div>

            {/* Days */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <CalendarDays className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  How many days would you like to stay?
                </h3>
              </div>
              <input
                type="number"
                min={1}
                value={days}
                onChange={(e) => setDays(e.target.value)}
                placeholder="Enter number of days"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-lg"
              />
            </div>

            {/* Budget */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  What is your budget?
                </h3>
              </div>
              <p className="text-gray-500 mb-4">
                The budget is allocated for activities and dining purposes.
              </p>
              <div className="flex flex-wrap gap-4">
                {selectBudget.map((item, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedBudget(index)}
                    className={`flex flex-col items-center px-6 py-4 rounded-xl border-2 transition-all duration-200 shadow-sm
                      ${
                        selectedBudget === index
                          ? "border-primary bg-primary/10"
                          : "border-gray-200 bg-white hover:border-primary"
                      }`}
                  >
                    <span className="text-2xl mb-2">{item.icon}</span>
                    <span className="font-semibold text-lg text-gray-900">
                      {item.title}
                    </span>
                    <span className="text-gray-500 text-sm">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Travellers */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  How many people are travelling with you?
                </h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {travelers.map((item, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setPackageType(item.packageType)}
                    className={`flex flex-col items-center px-6 py-4 rounded-xl border-2 transition-all duration-200 shadow-sm
                      ${
                        packageType === item.packageType
                          ? "border-primary bg-primary/10"
                          : "border-gray-200 bg-white hover:border-primary"
                      }`}
                  >
                    <span className="text-2xl mb-2">{item.icon}</span>
                    <span className="font-semibold text-lg text-gray-900">
                      {item.title}
                    </span>
                    <span className="text-gray-500 text-sm">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-dark transition-all text-lg"
                disabled={!place || !days || selectedBudget === null}
              >
                <Sparkles className="h-5 w-5" />
                Create My Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
