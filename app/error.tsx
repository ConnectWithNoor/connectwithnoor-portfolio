'use client'; // Error components must be Client components

import Image from 'next/image';
import { useEffect } from 'react';

import './page.scss';
import { SectionWrapper } from './{components}';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <SectionWrapper idName='error' className='app__primarybg'>
      <div className='app__error app__flex'>
        <div className='app__error-img'>
          <Image src='/error.png' alt='error-img' fill />
        </div>

        <div className='app__error-content'>
          <h2 className='head-text'>
            <span> Ahhh! </span>
            Something went wrong
          </h2>
          <p className='p-text'>
            Brace yourself till we get the error fixed. You may also refresh the
            page to try again.
          </p>
          <button
            className='p-text'
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
