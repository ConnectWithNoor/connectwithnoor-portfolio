import React from 'react';

function NavigationDots({ active }: { active: string }) {
  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(
        (item, index) => (
          <a
            href={`#${item}`}
            className='app__navigation-dot'
            key={item + index}
            style={active === item ? { background: '#313bac' } : {}}
          />
        )
      )}
    </div>
  );
}

export default NavigationDots;
