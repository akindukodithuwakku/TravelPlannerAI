import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { MapPin, CalendarDays, Clock } from "lucide-react";

function CreateTrip() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [place, setPlace] = useState();

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API;

    if (!apiKey) {
      setError(
        "Google Places API key is not configured. Please add VITE_GOOGLE_PLACES_API to your .env file"
      );
      return;
    }

    // Load Google Places API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setIsScriptLoaded(true);
    script.onerror = () => setError("Failed to load Google Places API script");
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
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
            <div className="flex-shrink-0">
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
            </div>
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
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Tell us about your travel preferences
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              We'll create a personalized travel plan based on your preferences
              and interests.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Where would you like to go?
                </h3>
              </div>
              <div className="relative">
                <GooglePlacesAutocomplete
                  apiKey={import.meta.env.VITE_GOOGLE_PLACES_API}
                  selectProps={{
                    place,
                    onChange: (v) => {
                      setPlace(v);
                    },
                    className:
                      "w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200",
                    placeholder: "Search for a destination...",
                  }}
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold text-gray-900">
                How many days would you like to stay?
              </h3>
              <Input
                type="number"
                placeholder="Enter number of days"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
              />
            </div>

            <div className="flex items-center gap-2">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
