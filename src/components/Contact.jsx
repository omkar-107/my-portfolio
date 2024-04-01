import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {  RESUME_PATH } from '../assets/root.link.js'
const Contact = () => {
    const [state, handleSubmit] = useForm("xnqepeqj");
   
  return (
  
    
    <section className='my-28' id='contact'>
        {state.succeeded && <p>Thanks for mailing!</p>
    }
      <header className='px-5 text-2xl font-bold pt-10'>
        <h2>Contact Me</h2>
        <p className='text-base font-thin'>I'd love to hear your thoughts!</p>
      </header>
      <div className='md:mx-6 flex flex-col flex-wrap md:flex-row justify-between mt-3'>
        <div className='md:w-6/12 md:px-0 p-5 my-5'>
          <div>
            <p className='font-bold'>Omkar Salunkhe</p>
            <p className='font-thin'>Sangli, Maharashtra</p>
            <a href={`mailto: salunkheomkar107@gmail.com`} className='border-b-2 mt-3 inline-block border-gray-500'>
            salunkheomkar107@gmail.com
            </a>
          </div>
          <a className='border-b-2 mt-3 inline-block border-gray-500' href={RESUME_PATH} target='_blank' rel='noreferrer'>
            Resume
          </a>
          <div className='flex flex-row flex-wrap mt-7 justify-center'>
            <div className='mr-4'>
              <a href={`https://www.linkedin.com/in/omkar-salunkhe-bb912a256/`} target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/linkedin.svg' alt='' width='24px' height='24px' className='mr-1' />
                  LinkedIn
                </span>
              </a>
            </div>

            <div className='mr-4'>
              <a href={`https://github.com/omkar-107`} target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/github.svg' alt='' width='24px' height='24px' className='mr-1' />
                  GitHub
                </span>
              </a>
            </div>

           
          </div>
        </div>

        <div className='bg-gray px-5 py-10 md:py-8 sm:p-8 my-2 md:rounded-lg shadow-lg  justify-between w-full  md:w-6/12 '>
          <form className='flex flex-col space-y-3 m-auto w-full' name='contact' onSubmit={handleSubmit}>
            <input type='hidden' name='form-name' value='contact' />

            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' className='bg-gray rounded-md border-2'  required></input>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' className='bg-gray rounded-md border-2' required></input>
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' cols='25' rows='5' className='bg-gray rounded-md border-2' required></textarea>
            <button type='submit' className='border border-gray-500 p-2 rounded-lg w-auto mr-auto shadow-md'>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className='relative md:bottom-56 mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm' onClick={() => window.scroll(0, 0)}>
        {/* <picture>
          <source srcSet='./images/rocket-320.webp 320w, ./images/rocket.webp 768w' type='image/webp' />
          <source srcSet='./images/rocket.png' sizes='(min-width: 768px) 50vw, 100vw' type='image/png' />
          <img width='500px' height='500px' loading='lazy' alt='red rocket flying' />
        </picture> */}
        <img src="./images/rocket.webp" alt="img" className='cursor-pointer'/>
      </div>


      <footer>
  <p>&copy; 2024 Omkar Salunkhe. All rights reserved.</p>
</footer>

    </section>
  );
};

export default Contact;