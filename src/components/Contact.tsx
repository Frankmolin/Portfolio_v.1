import React from 'react';
import emailjs from 'emailjs-com';
import getRandomPastelColor from '../utils/randColor';

const Contact = () => {
  const REDES = [
    { red: "correo", link: "Frankmolinaj9604@hotmail.com" },
    { red: "linkedin", link: "https://www.linkedin.com/in/franco-molina-jensen-26943b246" }
  ]
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_bfc4izv', 'template_km2s5wa', e.currentTarget, '0MddiGPCBQX1AcBeM')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      }, (error) => {
        console.error('Error sending email:', error.text);
      });

    e.currentTarget.reset();
  };
  const randColor = getRandomPastelColor()
  return (
    <div id='contact' className="flex flex-col gap-10 items-center p-8 bg-light dark:bg-dark">
      <form className="flex flex-col gap-4 sm:w-1/2" onSubmit={handleSubmit}>
        <h1 className="text-3xl text-center font-bold mb-4 text-dark dark:text-light">Contacto</h1>

        <input
          type="email"
          name="from_mail"
          className="px-4 py-2 bg-white rounded focus:outline-none focus:ring-2 focus:ring-white transition-all dark:bg-secondary dark:text-light"
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="from_name"
          className="px-4 py-2  bg-white rounded focus:outline-none focus:ring-2 focus:ring-white transition-all dark:bg-secondary dark:text-light"
          placeholder="Nombre"
          required
        />
        <textarea
          name="message"
          className="px-4 py-2 bg-white rounded focus:outline-none focus:ring-2 focus:ring-white transition-all dark:bg-secondary dark:text-light"
          rows={5}
          placeholder="Mensaje"
          required
        ></textarea>
        <button
          type="submit"
          style={{ backgroundColor: randColor }}
          className="w-full  self-center px-4 py-2 text-dark  rounded filter hover:brightness-90 dark:hover:brightness-110 transition-all duration-300"
        >
          Enviar
        </button>
      </form>
      <div className='self-start text-sm'>
        <ul>
          {REDES.map(({ red, link }) => (
            <li >
              <strong className="capitalize">
                {red}: {" "}
              </strong>
              {
                link.includes("https://")
                  ?
                  <a href={link} className='hover:underline text-primary transition-all' target='_blank'>
                    {link}
                  </a>
                  :
                  link}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default Contact;



