import React from "react";

const ProjectCard = ({projectData}) => {
    return (
        <div className="flex flex-col my-[3rem] gap-0 lg:flex-row gap-7 2xl:mx-[6rem]">
            <img src={projectData && projectData.img} className="w-[15rem] my-4 ms-0 2xl:ms-[5rem]" alt="projectImg" />
            <div className="flex flex-col gap-4 2xl:w-1/2">
            <p className="text-xl font-bold">{projectData && projectData.title}</p>
            <p className="text-lg">{projectData && projectData.desc}</p>
            <a href={`${projectData.link}`} target="_blank" className="py-2 px-2 w-3/6 text-center border-2 rounded-[4px] sm:w-2/5 lg:w-1/5">Show</a>
            </div>
        </div>
    )
}

export default ProjectCard;