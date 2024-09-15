import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import SectionTitle from "@/components/SectionTitle";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonial";
import React from "react";

const Home = () => {
  return (
    <div className="w-[100vw] bg-primary relative left-0 top-0 min-h-[100vh] flex flex-col justify-center items-center">
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <SectionTitle title={"Testimonials"} />
      <Testimonials />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
