import { Navbar } from './{components}';
import {
  About,
  Footer,
  Header,
  Skills,
  Testinomials,
  Work,
} from './{sections}';

import './page.scss';

export default function Home() {
  return (
    <main className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testinomials />
      <Footer />
    </main>
  );
}
