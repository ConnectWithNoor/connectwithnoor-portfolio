import { SocialMedia, NavigationDots } from '..';

type Props = {
  idName: string;
  children: React.ReactNode;
  className?: string;
};

function SectionWrapper({ idName, children, className }: Props) {
  return (
    <section id={idName} className={`app__container ${className}`}>
      <SocialMedia />

      <div className='app__wrapper app__flex'>
        {children}

        <div className='copyright'>
          <p className='p-text'>Made with 💜</p>
          <p className='p-text'>
            @{new Date().getFullYear().toString()} Noor Muhammad
          </p>
        </div>
      </div>

      <NavigationDots active={idName} />
    </section>
  );
}

export default SectionWrapper;
