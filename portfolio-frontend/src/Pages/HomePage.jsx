import React from "react";


const HomePage = () => {
    
    return (
        <section className="my-[5rem] flex flex-col gap-3 2xl:mx-[18rem]">
            <h1 className="text-base">Hi, my name is</h1>
            <h2 className="text-[#ccd6f6] text-3xl">Satyabrata Biswal.</h2>
            <h3 className="text-[#8892b0] text-3xl">I build things for the web.</h3>
            <p className="text-[#a8b2d1] text-base/6 text-lg 2xl:w-1/2">I'm a focused software engineer specializing MERN stack building exceptional 
                digital experiences and web applications that leads to the success of the overall product.
            </p>
            <a className="border-2 py-2 mt-3 rounded-[4px] text-center text-xl w-2/5 min-[600px]:w-1/5" href="#project">Projects</a>
        </section>
    )
}

export default HomePage;