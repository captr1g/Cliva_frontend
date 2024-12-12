import React from "react";
export default function Nav() {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-black">
      <div className="text-2xl font-bold">Cliva</div>
      <div className="flex space-x-4">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
