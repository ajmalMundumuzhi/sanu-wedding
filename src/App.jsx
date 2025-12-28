import './App.css'
import Background from './components/Background';
import Hero from './components/Hero';
import Groom from './components/Groom';
import Calender from './components/Calender';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative min-h-screen">
      {/* 1. The Fixed Background */}
      <Background />

      {/* 2. The Scrollable Content Layer */}
      <div className="relative z-10">
        <section id="hero" className="max-h-screen">
          <Hero />
        </section>

        <section id="groom" className="max-h-screen py-15">
          <Groom />
        </section>

        <section id="location" className=" py-10">
          <Location />
        </section>

        <section id="calendar" className="">
          <Calender />
        </section>

        <section className='mb-2 mt-2'>
          <Footer />
        </section>

      </div>
    </main>
  );
}

export default App;