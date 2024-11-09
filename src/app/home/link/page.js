"use client";

import { useState } from "react";

export default function LinkGenerator() {
  const [name, setName] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    const formattedName = name.replace(/ /g, "%20");
    setGeneratedLink(`https://elva-ega.zoejeton.com?to=${formattedName}`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // Reset button copied setelah 3 detik
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-10">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Generate Link</h1>
        <input
          type="text"
          placeholder="Enter the name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleGenerate}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Generate
        </button>
        {generatedLink && (
          <div className="mt-4 text-center">
            <p>Generated Link:</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <a
                href={generatedLink}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {generatedLink}
              </a>
              <button
                onClick={handleCopy}
                className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition-colors"
                title="Copy link"
              >
                {copied ? (
                  <span className="text-green-500">Copied!</span>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15.75H5.25a2.25 2.25 0 01-2.25-2.25v-9A2.25 2.25 0 015.25 2.25h9a2.25 2.25 0 012.25 2.25v3M15.75 8.25H18.75a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-3"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
