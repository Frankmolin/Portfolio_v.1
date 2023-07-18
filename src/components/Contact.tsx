import React from 'react';
import emailjs from 'emailjs-com';
import getRandomPastelColor from '../utils/randColor';

const Contact = () => {
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
    <div id='contact' className="flex flex-col items-center p-8 bg-light dark:bg-dark">
      <h1 className="text-3xl font-bold mb-4 text-dark dark:text-light">Contacto</h1>
      <form className="flex flex-col gap-4 sm:w-1/2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="from_name"
          className="px-4 py-2 bg-white rounded focus:outline-none focus:ring-2 focus:ring-primary dark:bg-secondary dark:text-light"
          placeholder="Nombre"
          required
        />
        <input
          type="email"
          name="from_mail"
          className="px-4 py-2 bg-white rounded focus:outline-none focus:ring-2 focus:ring-primary dark:bg-secondary dark:text-light"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          className="px-4 py-2 bg-white rounded focus:outline-none focus:ring-2 focus:ring-primary dark:bg-secondary dark:text-light"
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
    </div>
  );
};

export default Contact;



