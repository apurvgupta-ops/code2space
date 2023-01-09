import React from "react";
import Connection from "../Components/Connection";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Crousel from "../Components/Slider";
import Testimonials from "../Components/Testimonials";
import Whyus from "../Components/Whyus";

const Home = () => {
  return (
    <div>
      <Crousel />
      <Connection />
      <Whyus />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
