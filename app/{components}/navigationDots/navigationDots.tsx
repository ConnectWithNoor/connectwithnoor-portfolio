import { NavList } from '@/app/{utils}/constants';

function NavigationDots({ active }: { active: string }) {
  return (
    <div className='app__navigation'>
      {NavList.map((item, index) => (
        <a
          href={`#${item}`}
          className='app__navigation-dot'
          key={item + index}
          style={active === item ? { background: '#313bac' } : {}}
        />
      ))}
    </div>
  );
}

export default NavigationDots;
