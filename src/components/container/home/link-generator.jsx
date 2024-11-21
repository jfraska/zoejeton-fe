"use client";

import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { getUrl } from "@/lib/utils";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function LinkGenerator({ url }) {
  const [name, setName] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    const formattedName = encodeURIComponent(name);
    setGeneratedLink(`${getUrl("/", url)}?to=${formattedName}`);
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
        <Input
          type="text"
          placeholder="Enter the name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <Button onClick={handleGenerate} className="w-full transition-colors">
          Generate
        </Button>
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
              <Button
                onClick={handleCopy}
                type="submit"
                variant="outline"
                className="py-2 px-4 rounded transition-colors"
                title="Copy link"
              >
                {copied ? (
                  <span className="text-green-500">Copied!</span>
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
