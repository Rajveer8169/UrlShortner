import { useState } from "react";
import { createShortUrl } from "../api/shortUrl.api";

const Urlform = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async () => {
    const data = await createShortUrl(url)
    setShortUrl(data);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="mt-8 space-y-4">
      <input
        type="url"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
        placeholder="https://example.com/very/long/url"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        required
      />

      <button
        onClick={handleSubmit}
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Shorten URL
      </button>
      {shortUrl && (
        <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-4">
          <p className="text-sm font-medium text-gray-600">Your Short URL</p>

          <div className="mt-2 flex items-center justify-between gap-3">
            <a
              href={shortUrl}
              target="_blank"
              rel="noreferrer"
              className="truncate text-blue-600 hover:underline"
            >
              {shortUrl}
            </a>

            <button
              onClick={handleCopy}
              className={`rounded-md px-4 py-2 text-sm font-medium text-white transition ${
                copied ? "bg-green-800" : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Urlform;
