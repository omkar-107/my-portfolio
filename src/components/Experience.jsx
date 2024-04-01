// In your component file, you don't need a separate CSS file
import React from 'react';
import workHistory from '../assets/ExData.js';

function Experience() {
    return (
        <div id="Experience">
            <section className='my-28 px-5' id='projects'>
                <header className='text-3xl font-bold pt-10 pb-6 text- border-b-2 border-gray-300'>
                    Experience
                </header>
                <div className='main-cont mt-4'>
                    <section id="cd-timeline" className="cd-container">
                        {workHistory && workHistory.map((work, index) => (
                            <div className={`cd-timeline-block flex justify-center `} key={index}>
                                
                                <div className="cd-timeline-content bg-gray-900 text-white rounded-lg p-4 shadow-md md:w-1/2 sm:w-screen bg-gray m-4 ">
                                    <h1 className="uppercase font-bold text-2xl flex items-center justify-center m-2">
                                        {work?.companyName}
                                      
                                    </h1>
                                    <h4 className="uppercase font-bold text-base text-indigo-400">{work?.role}</h4>

                                    <div className="timeline-content-info bg-gray-900 text-white rounded-md p-2 text-sm mt-3">
                                        <h5>{work.duration}</h5>
                                    </div>
                                    <div className='pl-2 mt-4'>
                                        {work?.workDes && work.workDes.map((x, idx) => (
                                            <h4 className='text-base py-1 leading-snug' key={idx}>
                                                <span className="text-indigo-400 mr-2">-</span> {x}
                                            </h4>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </section>
        </div>
    );
}

export default Experience;
