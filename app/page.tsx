import './globals.css';
import Hero from './hero';

export default function Home() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <Hero />
    </div>
  );
}
