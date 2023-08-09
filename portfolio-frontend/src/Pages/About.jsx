import React from "react";

const About = () => {
    return (
        <section id="about" className="text-base/6 text-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="mb-4 2xl:w-1/2 m-auto">
            <h2 className="text-3xl pb-3 font-bold text-start">About Me</h2>
            <p className="mb-3">Hello! My name is Satyabrata and
                I enjoy creating things that live on the
                internet. I'm a <span className="font-bold">Frontend Developer</span> building the
                Web Applications that leads to the success of the 
                overral product.
            </p> 
            <p className="mb-3">   
                I also like writing blog content related to the stuff that I 
                learned over the years in web development so it can help other
                people of the Dev Community. 
            </p> 
            <p className="mt-2 mb-6">
                I'm open to job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skiils and
                experience that don't hesitate to contact me.
            </p>
            <a className="py-2 px-2 border-2 rounded-[4px]" href="#contact">Contact Me</a>
            </div>
            <div className="2xl:w-1/2">
                <h2 className="font-bold text-3xl">Skills</h2>
                <ul className="flex flex-wrap gap-4 mt-0 lg:mt-3">
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                    <li>NextJS</li>
                    <li>TypeScript</li>
                    <li>Firebase</li>
                </ul>
            </div>
            </div>
        </section>
    )
}

export default About;