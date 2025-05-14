import React from "react";
import { Link } from "react-router-dom";

function CreateTrip() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Create New Trip</h1>
        <Link to="/">
          <button className="px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400 transition-colors">
            Back to Home
          </button>
        </Link>
      </div>
      {/* Add your trip creation form here */}
    </div>
  );
}

export default CreateTrip;
