import React from "react";

const About =() => {
    return (
        <div name = 'about' className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className = 'text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hi, I'm Yiheng. This is my portfolio that I created for myself.</p>
                    </div>
                    <div>
                        <p>
                        New graduate college student with a desire to gain new knowledge and
                        experiences in software development or computer graphic/animation
                        industry. Looking for an opportunity to learn from the experienced
                        developers to enhance myself, and a chance for me to contribute my effort
                        to make impactful products for the users.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;