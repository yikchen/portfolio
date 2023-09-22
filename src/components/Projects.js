import React from "react";
import AnimatiionPng from '../assets/Animation.png';
import AnimeWeb from '../assets/AnimeWeb.png';
import LoaWeb from '../assets/LostArkWeb.png';

const Projects = () => {
    return (
        <div name = 'projects' className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Project</p>
                    <p className= 'py-6'>Some of my recent projects</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div style = {{backgroundImage: `url(${AnimatiionPng})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        
                        {/* hover effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font bold text-white tracking-wider">
                                Animation Project
                            </span>
                            <div>
                                <a href="https://www.youtube.com/watch?v=W4ZTa1c5kjk">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>

                                <a href="https://github.com/yikchen/PersonalWork">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style = {{backgroundImage: `url(${AnimeWeb})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        
                        {/* hover effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font bold text-white tracking-wider">
                                Animation Project
                            </span>
                            <div>
                                <a href="https://yicpersonalaniweb.netlify.app">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>

                                <a href="https://github.com/yikchen/PersonalWork">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style = {{backgroundImage: `url(${LoaWeb})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        
                        {/* hover effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Animation Project
                            </span>
                            <div>
                                <a href="https://lostarkjour.netlify.app">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>

                                <a href="https://github.com/yikchen/PersonalWork">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Projects;