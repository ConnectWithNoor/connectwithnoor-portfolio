'use client';

import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';

import { SectionWrapper } from '@/app/{components}';
import './footer.scss';
import { postContact } from '@/app/{api}/postContact';

function Footer() {
  const [{ email, fullName, message }, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const contact = {
      _type: 'contact',
      name: fullName,
      email,
      message,
    };

    const response = await postContact(contact);

    if (response._id) {
      setIsFormSubmitted(true);
    }

    setIsLoading(false);
  };

  return (
    <SectionWrapper idName='contact' className='app__whitebg'>
      <>
        <h2 className='head-text'>
          Take a <span>coffee</span> & <span>Connect</span> with me
        </h2>

        <div className='app__footer_cards'>
          <div className='app__footer-card'>
            <div>
              <Image src='/email.png' alt='email' fill />
            </div>
            <a href='mailto:email@yourmail.com' className='p-text'>
              email@yourmail.com
            </a>
          </div>

          <div className='app__footer-card'>
            <div>
              <Image src='/mobile.png' alt='mobile' fill />
            </div>
            <a href='tel: +1 (123) 456-789' className='p-text'>
              +1 (123) 456-789
            </a>
          </div>
        </div>

        {isFormSubmitted ? (
          <div>
            <h3 className='head-text'>Thank you for getting in touch</h3>
          </div>
        ) : (
          <form className='app__footer-form app__flex' onSubmit={handleSubmit}>
            <div className='app__flex'>
              <input
                className='p-text'
                required
                type='text'
                placeholder='Your Name'
                name='fullName'
                value={fullName}
                onChange={handleChange}
              />
            </div>

            <div className='app__flex'>
              <input
                className='p-text'
                type='text'
                required
                placeholder='Your Email'
                name='email'
                value={email}
                onChange={handleChange}
              />
            </div>

            <div>
              <textarea
                className='p-text'
                required
                placeholder='Your Message'
                value={message}
                name='message'
                onChange={handleChange}
              />
            </div>
            <button type='submit' className='p-text' disabled={isLoading}>
              {isLoading ? 'Sending' : 'Send Message'}
            </button>
          </form>
        )}
      </>
    </SectionWrapper>
  );
}

export default Footer;
