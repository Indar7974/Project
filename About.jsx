import React from 'react';
import "./About.css"

const About = () => {
  return (
    <div className="kush">
        <div className="">
            <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/236/321/small_2x/movie-trendy-banner-vector.jpg"
            alt="loading..."
            className="in"
            />
            <h1 className="ku">Movie Zone</h1>
            <p className="">
            Discover the world of movies and TV shows. From latest blockbusters to hidden gems - all in one place.
            </p>

                <div className="text-left bg-gray-800 p-6 rounded-2xl shadow-lg p-3">
                    <h2 className="text-2xl font-semibold mb-4">Features:</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>🔍 Search movies and Web-series</li>
                        <li>🎞️ Watch trailers</li>
                        <li>⭐ View ratings & reviews</li>
                        <li>📌 Create and manage your Watchlist</li>
                    </ul>

                    <div className="mt-6">
                        <p><span className="font-semibold">Version:</span> 10.2.9</p>
                        <p><span className="font-semibold">Developers:</span> Indarjeet Singh Kushwah / Ajay Rathore</p>
                        <p><span className="font-semibold">Contact:</span> <a href="Kushwahindarhwyyc@2251" className="text-blue-400 underline">7975658935</a></p>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default About;
