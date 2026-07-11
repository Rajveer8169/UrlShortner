import Urlform from "../components/Urlform"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          URL Shortener
        </h1>

        <p className="mt-3 text-center text-gray-500">
          Paste your long URL below and generate a short, shareable link.
        </p>

        <Urlform/>
        
      </div>
    </div>
  )
}

export default HomePage