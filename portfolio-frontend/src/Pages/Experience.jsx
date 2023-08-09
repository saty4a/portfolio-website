import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="2xl:mx-[15rem]">
      <h2 className="text-3xl py-3 text-start md:text-center">Experience</h2>
      <h2 className="text-lg font-bold">Software Developer Intern</h2>
      <p className="text-lg mt-3">Itobuz Technologies, Kolkata</p>
      <p className="">Jan-july 2023</p>
      <p className="font-bold text-xl my-4">Food E-commerce</p>
      <ul className="flex flex-col gap-4 text-base/7">
        <li>
          Developed a fully responsive food delivery website and server that can
          handle 100 users simultaneously.
        </li>
        <li>
          Provided users with options to save 100 items in cart for later order
          and reduced 50% customer queries by setting of checks on item
          availability.
        </li>
        <li>
          proposed and implemented verification and real time updates for users while placing
          orders.
        </li>
        <li>
          Provided leadership and guide to team through close collaboration, knowledge shares and mentorship to deliver 
          high quality, interactive websites and to give a great demo of our project. 
        </li>
      </ul>
    </section>
  );
};

export default Experience;
