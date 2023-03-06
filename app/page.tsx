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
      {/* @ts-expect-error Server Component */}
      <About />
      {/* @ts-expect-error Server Component */}
      <Projects />
      {/* @ts-expect-error Server Component */}
      <Skills />
      {/* @ts-expect-error Server Component */}
      <Testinomials />
      <Footer />
    </main>
  );
}

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // 60 mins
