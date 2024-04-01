import React from 'react';
import projects from '../assets/projectData.js';



const Project = () => {
  return (
    <div id="Projects">
      <section className='my-28 px-5' id='projects'>
        <header className='text-3xl font-bold pt-10 pb-6 border-b-2'>
          <h2>Projects</h2>
        </header>
        <div className='mt-10 space-y-24 '>
          {projects.map((project, index) => (
            <article className='flex flex-wrap md:justify-between md:items-center' key={index}>
              <picture className={index % 2 === 0 ? 'w-full md:w-6/12 shadow-lg ' : 'w-full md:w-6/12 shadow-lg md:order-1'}>
                <img className='rounded-2xl' src={project.image} alt={project.title} />
              </picture>
              <div className='flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 bg-gray p-4 m-4 rounded-lg '>
                <h3 className='uppercase font-bold text-lg flex'>{project.title}</h3>
                <p className='flex'>{project.description}</p>
                <div className='flex overflow-auto space-x-3 pb-2 md:flex-wrap'>
                  {project.tools.map((disc, index) => (
                    <span className='border border-gray-500 px-2 py-1 rounded-lg mt-2 text-sm' key={index}>
                      {disc}
                    </span>
                  ))}
                </div>
                <div className='w-auto flex space-x-5 relative '>
                  <a href={project.github} target='_blank' rel='noreferrer'>
                    <img src='./images/github.svg' alt='link to github page' width='24px' height='24px' />
                  </a>
                  <a href={project.link} target='_blank' rel='noreferrer'>
                    <img src='./images/external-link.svg' alt='link to live website' width='24px' height='24px' />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className='mx-5'>
        <a href={`https://github.com/omkar-107`} target='_blank' rel='noreferrer' className='bg-gray block shadow-lg uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-auto'>
          <span>See more on Github</span>
        </a>
      </div>
    </div>
  );
};

export default Project;