import React from "react";
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png'
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';


const Skills = () => {
    return (
        <div name = 'skills' className="bg-[#0a192f] text-gray-300 w-full h-screen">
            {/* Containers */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Experience</p>
                    <p className="py-4">Skills that I know for Web development</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duaration-500">
                        <img className = 'w-20 mx-auto' src = {HTML} alt = 'HTML'/>
                        <p>HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duaration-500">
                        <img className = 'w-20 mx-auto' src = {CSS} alt = 'HTML'/>
                        <p>CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duaration-500">
                        <img className = 'w-20 mx-auto' src = {JavaScript} alt = 'HTML'/>
                        <p>JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duaration-500">
                        <img className = 'w-20 mx-auto' src = {Node} alt = 'HTML'/>
                        <p>Node JS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duaration-500">
                        <img className = 'w-20 mx-auto' src = {GitHub} alt = 'HTML'/>
                        <p>GitHub</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duaration-500">
                        <img className = 'w-20 mx-auto' src = {Tailwind} alt = 'HTML'/>
                        <p>Tailwind</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Skills;