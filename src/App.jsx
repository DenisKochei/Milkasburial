import React, { useState } from "react";

export default function App() {
  const [view, setView] = useState("menu"); // menu | livestream | tributes | eulogy | directions

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-1">
      <div className="w-full max-w-md bg-gradient-to-b from-gray-800 to-gray-700 p-1 rounded-2xl shadow-lg">
        <h1 className="text-xl font-bold text-center mb-6">
          Milka Chepchirchir Koech's Burial
        </h1>
        <p className="text-center text-sm mb-6">
          🌟 Explore all links related to the late Milka's legacy. 🌟
        </p>

        {/* MAIN MENU */}
        {view === "menu" && (
          <div className="space-y-4">
            {/* ✅ Image now shows only in home view */}
            <img
              className="w-40 mx-auto rounded-full h-40 mb-6"
              src="https://firebasestorage.googleapis.com/v0/b/comrade-trends.appspot.com/o/milka.jpg?alt=media&token=4bd86463-c7ae-4413-b634-0628c0929ce5"
              alt="Milka"
            />

            <button
              onClick={() => setView("livestream")}
              className="w-full px-4 py-3 rounded-full bg-gray-600 hover:bg-gray-500 transition"
            >
              Final Burial Livestream
            </button>

            <button
              onClick={() => setView("tributes")}
              className="w-full px-4 py-3 rounded-full bg-gray-600 hover:bg-gray-500 transition"
            >
              Write your tributes!
            </button>

            <button
              onClick={() => setView("eulogy")}
              className="w-full px-4 py-3 rounded-full bg-gray-600 hover:bg-gray-500 transition"
            >
              Eulogy
            </button>

            <button className="w-full px-4 py-3 rounded-full bg-gray-600 hover:bg-gray-500 transition">
              Milka’s Life Highlights
            </button>

            <button className="w-full px-4 py-3 rounded-full bg-gray-600 hover:bg-gray-500 transition">
              Friday Program
            </button>

            <button className="w-full px-4 py-3 rounded-full bg-gray-600 hover:bg-gray-500 transition">
              Family Video Tributes
            </button>

            <button className="w-full px-4 py-3 rounded-full bg-gray-600 hover:bg-gray-500 transition">
              Thursday Program
            </button>

            <button className="w-full px-4 py-3 rounded-full bg-gray-600 hover:bg-gray-500 transition">
              Life and Times of Milka
            </button>

            <button
              onClick={() => setView("directions")}
              className="w-full px-4 py-3 rounded-full bg-gray-600 hover:bg-gray-500 transition"
            >
              Directions
            </button>

            <button className="w-full px-4 py-3 rounded-full bg-gray-600 hover:bg-gray-500 transition">
              Thursday Livestream
            </button>
          </div>
        )}

        {/* LIVESTREAM VIEW */}
        {view === "livestream" && (
          <div className="flex flex-col items-center">
            <iframe
              src="https://www.youtube.com/embed/2YBYRYkWbT0"
              title="Burial Livestream"
             className="block w-full h-[500px] rounded-none border-0 m-0 p-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <button
              onClick={() => setView("menu")}
              className="mt-4 w-full px-4 py-3 rounded-full bg-red-600 hover:bg-red-500 transition"
            >
              Close Livestream
            </button>
          </div>
        )}

        {/* TRIBUTES VIEW */}
        {view === "tributes" && (
          <div className="flex flex-col items-center">
            <iframe
              src="https://app.sli.do/event/8ofQqj7S1TiWSqtNHMvou4"
              title="Slido Tribute Poll"
             className="block w-full h-[500px] rounded-none border-0 m-0 p-0"
              allowFullScreen
            ></iframe>

            <button
              onClick={() => setView("menu")}
              className="mt-4 w-full px-4 py-3 rounded-full bg-red-600 hover:bg-red-500 transition"
            >
              Close Tribute Poll
            </button>
          </div>
        )}

        {/* EULOGY VIEW */}
        {view === "eulogy" && (
          <div className="flex flex-col items-center">
            <iframe
              src="https://drive.google.com/file/d/10F3pPljDjpk6uuKdd4Z8s6NhM1U38FWv/view?usp=sharing"
              title="Eulogy PDF"
             className="block w-full h-[500px] rounded-none border-0 m-0 p-0"
              allow="autoplay"
            ></iframe>

            <button
              onClick={() => setView("menu")}
              className="mt-4 w-full px-4 py-3 rounded-full bg-red-600 hover:bg-red-500 transition"
            >
              Close Eulogy
            </button>
          </div>
        )}

        {/* DIRECTIONS VIEW */}
        {view === "directions" && (
          <div className="flex flex-col items-center">
            <iframe
              src="https://www.google.com/maps?q=0.52036,35.26978&hl=en&z=15&output=embed"
              title="Burial Directions"
             className="block w-full h-[500px] rounded-none border-0 m-0 p-0"
              allowFullScreen
            ></iframe>

            <a
              href="https://www.google.com/maps?q=0.52036,35.26978"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition text-center text-white"
            >
              Open in Google Maps
            </a>

            <button
              onClick={() => setView("menu")}
              className="mt-4 w-full px-4 py-3 rounded-full bg-red-600 hover:bg-red-500 transition"
            >
              Close Directions
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
