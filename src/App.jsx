import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Courses from './components/Courses';
import Units from './components/Units';
import Testimonials from './components/Testimonials';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-lime-400 selection:text-slate-950 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Courses />
        <Units />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}