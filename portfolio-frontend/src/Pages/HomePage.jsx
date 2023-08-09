import React from "react";


const HomePage = () => {
    
    return (
        <section  className=" my-[5rem] flex flex-col gap-3 2xl:mx-[18rem]">
            <h1 className="fade-in-done text-base" style={{"animation-delay": "100ms"}}>Hi, my name is</h1>
            <h2 className="fade-in-done text-[#ccd6f6] text-3xl" style={{"animation-delay": "200ms"}}>Satyabrata Biswal.</h2>
            <h3 className="fade-in-done text-[#8892b0] text-3xl" style={{"animation-delay": "300ms"}}>I build things for the web.</h3>
            <p className="fade-in-done text-[#a8b2d1] text-base/6 text-lg 2xl:w-1/2" style={{"animation-delay": "400ms"}}>I'm a focused software engineer specializing MERN stack building exceptional 
                digital experiences and web applications that leads to the success of the overall product.
            </p>
            <a className="fade-in-done border-2 py-2 mt-3 rounded-[4px] text-center text-xl w-2/5 min-[600px]:w-1/5 transition ease-in duration-300 hover:translate-x-6 hover:ease-in" style={{"animation-delay": "500ms"}} href="#project">Projects</a>
        </section>
    )
}

export default HomePage;