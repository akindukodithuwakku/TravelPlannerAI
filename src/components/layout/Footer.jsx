import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-center py-4 bg-gray-100 text-gray-500 border-t border-gray-200 mt-10 ">
      Made with ❤️ by{" "}
      <Link to="https://akindukodithuwakku.com">Akindu Kodithuwakku</Link>
    </div>
  );
}

export default Footer