"use client";

import parse from "html-react-parser";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState('<h1 className="text-2xl">Hello World</h1>');

  return (
    <div className="flex">
      <textarea
        className="w-1/2 h-screen p-4 border-r bg-black text-white"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <div
        key={code} // This key will force React to re-render the div each time `code` changes
        className="w-1/2 h-screen p-4 bg-white text-black"
      >
        {parse(code)}
      </div>
    </div>
  );
}
