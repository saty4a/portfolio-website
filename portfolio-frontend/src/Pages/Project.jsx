import React from "react";
import ProjectCard from "../Components/ProjectCard";
import notes from "../assets/notes-png.png";
import todo from "../assets/todo.png";
import weather from "../assets/weather-png.png";
import hotel from "../assets/hotel-png.png"


const Project = () => {
  const projects = [
    {
      img: notes,
      title: "Notes website",
      desc: "A notes app that can keep all your personalized data, which you can add, delete and edit. which also comes with your own server",
      link: "https://github.com/saty4a/notes-app",
    },
    {
      img: todo,
      title: "To do website",
      desc: "A To do app that can keep all your to do list, which you can add, delete, edit and change status to. which also comes with login and signup and stores your data for future use, made with NextJS, TypeScript, Redux-toolkit and firebase",
      link:"https://github.com/saty4a/to-do-app",
    },
    {
      img: weather,
      title: "Weather website",
      desc: "A weather app that show you weather of different cities, made with reactJS and nodeJS for server",
      link: "https://github.com/saty4a/weather-app-reactjs",
    },
    {
      img: hotel,
      title: "hotel website",
      desc: "A hotel website that helps you book a room and gives a personlized view of the services of hotel, made with html, css, JS and NodeJs for it's own server.",
      link: "https://github.com/saty4a/hotel-website/tree/main"
    },
  ];
  return (
    <section id="project">
      <h2 className="reveal text-3xl py-3 text-start md:text-center">
        Some Things I've Built
      </h2>
      {projects &&
        projects.map((data, index) => (
          <ProjectCard projectData={data} key={index} />
        ))}
    </section>
  );
};

export default Project;
