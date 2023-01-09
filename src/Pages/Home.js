import React from "react";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Crousel from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <Crousel />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
