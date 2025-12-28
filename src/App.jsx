import './App.css'
import Background from './components/Background';
import Hero from './components/Hero';
import Groom from './components/Groom';
import Calender from './components/Calender';
import Location from './components/Location';

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
        <section id="location" className=" py-20">
          <Location />
        </section>

        <section id="groom" className="min-h-screen py-20">
          <Groom />
        </section>

        <section id="calendar" className="min-h-screen py-20">
          <Calender />
        </section>

      </div>
    </main>
  );
}

export default App;