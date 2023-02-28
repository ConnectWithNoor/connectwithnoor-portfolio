import { Navbar } from './{components}';
import {
  About,
  Footer,
  Header,
  Skills,
  Testinomials,
  Projects,
} from './{sections}';

import './page.scss';

export default function Home() {
  return (
    <main className='app'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Testinomials />
      <Footer />
    </main>
  );
}
