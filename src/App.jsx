import React, { useState, useEffect } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  Menu,
  Search,
  X,
} from 'lucide-react';
import Header from './img/Header.jpg'
import logo from './img/logo.png'
import Phi from './img/Phi.jpeg'
import Eco from './img/economic-growth-is-still-our-best-hope.jpg'
import CircularButtonSection from './components/CircularButtonSection';
import { motion } from "framer-motion";


// import { cn } from "@/lib/utils"; // Removed problematic import

// Replaced cn with a simple utility function
const cn = (...classes) => classes.filter(Boolean).join(' ');

const TheGameOfYourLifePage = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };


  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };


  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const testimonials = [
    {
      id: 1,
      color: "bg-red-500",
      text: "Lorem ipsum dolor sit amet...",
      name: "Lorem Ipsum",
      role: "Lorem ipsum dolor sit",
    },
    {
      id: 2,
      color: "bg-green-500",
      text: "Lorem ipsum dolor sit amet...",
      name: "Lorem Ipsum",
      role: "Lorem ipsum dolor sit",
    },
    {
      id: 3,
      color: "bg-blue-500",
      text: "Lorem ipsum dolor sit amet...",
      name: "Lorem Ipsum",
      role: "Lorem ipsum dolor sit",
    },
  ];

  useEffect(() => {
    function handleResize() {
      setIconSize(window.innerWidth >= 768 ? 24 : 20); // md breakpoint at 768px
    }
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    // Initial calls
    handleResize();
    handleScroll();

    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    // Cleanup both listeners on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);


  return (
    <div className="bg-white text-back">
      {/* Navigation Bar */}
      <nav
        className={`bg-white shadow-md py-3 md:py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-opacity-90 backdrop-blur-md" : "bg-opacity-100"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          {/* Logo */}
          <div className="z-10 flex-shrink-0">
            <a href="#" className="block">
              <img src={logo} alt="Logo" className="h-16 sm:h-20 lg:h-24" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex absolute md:relative left-1/2 transform -translate-x-1/2 md:translate-x-0 flex-grow justify-center space-x-4 lg:space-x-6">
            <a
              href="#"
              className="text-base lg:text-xl font-semibold text-indigo-700 hover:text-indigo-900 transition-colors duration-200"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-base lg:text-xl font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="text-base lg:text-xl font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              SERVICES
            </a>
            <a
              href="#"
              className="text-base lg:text-xl font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              CONTACT
            </a>
          </div>

          {/* Search Bar */}
          <div className="ml-auto z-10 flex-shrink-0 hidden md:flex">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="SEARCH"
                className="bg-[#1D0749] text-white placeholder-white font-semibold rounded-md pl-8 pr-2 py-1 sm:pl-10 sm:pr-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-24 sm:w-auto"
              />
              <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none text-white">
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-4 z-20">
            <button
              onClick={toggleMenu}
              className="text-[#1D0749] focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                // Close Icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white shadow-md overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"
            }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col items-center">
            <a
              href="#"
              className="block text-lg font-semibold text-indigo-700 hover:text-indigo-900 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </a>
            <a
              href="#"
              className="block text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </a>
            <a
              href="#"
              className="block text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              SERVICES
            </a>
            <a
              href="#"
              className="block text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </a>

            {/* Mobile Search */}
            <div className="w-full mt-2">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="SEARCH"
                  className="bg-[#1D0749] text-white placeholder-white font-semibold rounded-md pl-8 pr-2 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white">
                  <Search className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <header
        className="min-h-screen py-20 md:py-32 flex flex-col items-center justify-center text-center relative overflow-hidden pt-[120px] md:pt-[150px]" // Adjusted padding-top
        style={{ marginTop: isScrolled ? '64px' : '0' }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${Header})` }}
        ></div>

        <div className="container mx-auto px-4 relative z-10 text-left"> {/* Adjusted text-align to left here */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-white bg-gradient-to-r from-pink-500 to-violet-500" // Removed text-left from here
          >
            THE GAME OF YOUR LIFE
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl mb-8 text-white"> {/* Adjusted text size */}
            A PHILOSOPHY FOR PERSONAL GROWTH
          </p>
          <button
            className="bg-[#1d0747] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg transition-all duration-300 text-base md:text-lg flex items-center justify-center" // Centered button on smaller screens, added flex utilities
          >
            Start Now
          </button>
        </div>
      </header>

      <div className='bg-[#1D0749] w-full p-6 md:p-10'> {/* Adjusted padding */}
      </div>

      {/* The 13 Life Foundations */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12"> {/* Adjusted gap */}
          <motion.div
            className="md:w-1/2 flex justify-center order-first md:order-none" // Order for mobile then desktop
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <CircularButtonSection />
          </motion.div>

          <motion.div
            className="md:w-1/2 text-center md:text-left" // Adjusted text alignment
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">THE 13 LIFE FOUNDATIONS</h2> {/* Adjusted text size */}
            <p className="text-base md:text-lg text-black"> {/* Adjusted text size */}
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About The Philosophy */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-500 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12"> {/* Adjusted gap */}
          {/* Text Section */}
          <motion.div
            className="md:w-1/2 text-center md:text-left order-last md:order-first" // Order for mobile then desktop
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeft}
          >
            <h2 className="text-4xl md:text-[52px] lg:text-6xl w-full font-bold mb-4">ABOUT THE PHILOSOPHY</h2> {/* Adjusted text size */}
            <p className="text-base md:text-lg text-black mb-6 md:mb-8"> {/* Adjusted text size and margin */}
              &quot;The Game of Your Life&quot; is a framework for personal growth.
              It invites you to see your life not as a series of obligations, but
              as a game—with rules, levels, challenges, and infinite room for
              creativity.
            </p>

            {/* Motion Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1d0747] text-white rounded-lg transition-all duration-300 px-6 py-2 text-base md:text-lg border" // Adjusted padding and text size
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="md:w-1/2 p-1 md:p-2 border-2 md:border-4 border-black rounded-xl mb-8 md:mb-0 md:translate-y-[-15%] lg:translate-y-[-30%]" // Adjusted padding, border, and translateY for better positioning
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeRight}
          >
            <motion.div
              className="w-full h-auto rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={Phi}
                alt="About Philosophy"
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Start Your Journey */}
      <section
        className="relative bg-black py-16 md:py-24 flex items-center justify-center min-h-[400px]"
        style={{
          backgroundImage: `url(${Eco})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Animated Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="bg-white p-6 md:p-8 lg:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between max-w-full md:max-w-[90%] mx-auto rounded-md" // Adjusted padding, max-width, and added rounded-md
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            {/* Text */}
            <motion.div
              className="text-center md:text-left mb-6 md:mb-0"
              variants={fadeUp}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1d0749] mb-1 md:mb-2"> {/* Adjusted text size and margin */}
                START YOUR JOURNEY
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-0.5 md:mb-1"> {/* Adjusted text size and margin */}
                Where are you in the game?
              </p>
              <p className="text-sm md:text-md lg:text-lg text-[#1d0749] font-semibold"> {/* Adjusted text size */}
                Take the First Step
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full md:w-auto" // Adjusted space-y and space-x
              variants={fadeUp}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#22014a] text-white text-sm md:text-base px-6 py-2 md:px-8 md:py-3 rounded-md shadow-md hover:bg-[#1d0749] transition-colors duration-300 w-full sm:w-auto" // Adjusted padding and text size
              >
                Start Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-[#22014a] border-2 border-[#22014a] text-sm md:text-base px-6 py-2 md:px-8 md:py-3 rounded-md shadow-md hover:bg-[#22014a] hover:text-white transition-colors duration-300 w-full sm:w-auto" // Adjusted padding and text size
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-r from-pink-100 to-blue-100 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-[62px] font-bold mb-6 md:mb-8 text-center">TESTIMONIALS</h2> {/* Adjusted text size and margin */}
          <p className="text-base md:text-lg text-black text-center mb-8 md:mb-12"> {/* Adjusted text size and margin */}
            Take a look at what our amazing members have said.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full md:max-w-4xl lg:max-w-none mx-auto"> {/* Adjusted grid and max-width */}
            {testimonials.map((item, i) => (
              <motion.div
                key={item.id}
                className="relative bg-white rounded-t-3xl rounded-b-none shadow-md w-full py-8 px-6 flex flex-col items-center text-center pb-20 hover:shadow-xl hover:scale-105 transition-all duration-300 mx-auto" // Added mx-auto for centering on smaller screens
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                {/* Numbered Circle */}
                <div className={`absolute top-[-12px] w-8 h-8 ${item.color} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
                  {item.id}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">{item.text}</p> {/* Adjusted text size */}

                {/* Avatar */}
                <div className="absolute bottom-[-48px] left-1/2 transform -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden"> {/* Adjusted size */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-red-500 p-0.5">
                    <img
                      src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740"
                      alt="Avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Name and Role */}
                <div className="mt-16 flex flex-col items-center">
                  <h3 className="text-red-500 font-bold text-base md:text-lg mb-1">{item.name}</h3> {/* Adjusted text size */}
                  <p className="text-red-500 text-xs md:text-sm">{item.role}</p> {/* Adjusted text size */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="relative overflow-hidden min-h-[700px] md:min-h-[500px]"> {/* Added min-height for better spacing */}
        <div className="absolute top-0 left-0 w-full h-[200px] md:h-[300px] bg-[#22014a] z-0"></div> {/* Adjusted height */}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24 flex flex-col md:flex-row justify-center items-center"> {/* Adjusted padding and alignment */}

          {/* Contact Form (White Card) */}
          <motion.div
            className="bg-white p-6 pb-[7%] md:p-8 lg:p-[5%] rounded-md w-full max-w-lg md:max-w-[45%] shadow-xl z-20 mx-auto md:mx-0" // Adjusted padding, max-width and added mx-auto
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 md:mb-8 text-[#1d0749] text-center md:text-left">CONTACT US</h2> {/* Adjusted text size and alignment */}
            <form className="space-y-4 md:space-y-6"> {/* Adjusted space-y */}
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full border-0 border-b-2 border-[#1d0749] focus:outline-none text-gray-700 placeholder-gray-500 py-2 focus:ring-0 focus:border-[#1d0749] pb-2 md:pb-3
              transition duration-300 ease-in-out
              focus:scale-[1.01] focus:shadow-lg text-sm md:text-base" // Adjusted padding, scale and text size
                style={{ boxShadow: "0 1px 0 0 #1d0749" }}
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full border-0 border-b-2 border-[#1d0749] focus:outline-none text-gray-700 placeholder-gray-500 py-2 focus:ring-0 focus:border-[#1d0749] pb-2 md:pb-3
              transition duration-300 ease-in-out
              focus:scale-[1.01] focus:shadow-lg text-sm md:text-base" // Adjusted padding, scale and text size
                style={{ boxShadow: "0 1px 0 0 #1d0749" }}
              />
              <textarea
                placeholder="Your Message Here"
                rows={3}
                className="w-full border-0 border-b-2 border-[#1d0749] focus:outline-none text-gray-700 placeholder-gray-500 py-2 resize-none focus:ring-0 focus:border-[#1d0749] pb-2 md:pb-3
              transition duration-300 ease-in-out
              focus:scale-[1.01] focus:shadow-lg text-sm md:text-base" // Adjusted padding, scale and text size
                style={{ boxShadow: "0 1px 0 0 #1d0749" }}
              />
              <motion.button
                type="submit"
                className="bg-[#22014a] text-white text-sm px-6 py-2 font-semibold tracking-wider w-full md:text-base md:px-8 md:py-3" // Adjusted padding and text size
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(34, 1, 74, 0.5)" }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Card (Black Card) */}
          <motion.div
            className="relative md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 mt-8 md:mt-0 z-30
          bg-[#201f21] text-white p-6 md:p-10 shadow-2xl rounded-md w-full max-w-sm md:w-[30%] lg:w-[25%] mx-auto md:mx-0" // Adjusted padding, width, and max-width, added mx-auto
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(32, 31, 33, 0.7)" }}
            style={{ cursor: "pointer" }}
          >
            <ul className="space-y-4 md:space-y-6"> {/* Adjusted space-y */}
              <li>
                <h3 className="font-bold text-sm md:text-md flex items-center gap-2 md:gap-3"> {/* Adjusted text size and gap */}
                  <span className="text-yellow-400">
                    <Phone className="w-4 h-4 md:w-5 md:h-5" /> {/* Adjusted icon size */}
                  </span>
                  CALL US
                </h3>
                <p className="mt-1 md:mt-2 text-sm md:text-md text-gray-300">+123 456 7890</p> {/* Adjusted text size and margin */}
              </li>
              <li>
                <h3 className="font-bold text-sm md:text-md flex items-center gap-2 md:gap-3"> {/* Adjusted text size and gap */}
                  <span className="text-pink-500">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5" /> {/* Adjusted icon size */}
                  </span>
                  LOCATION
                </h3>
                <p className="mt-1 md:mt-2 text-sm md:text-md text-gray-300">Lorem ipsum dolor sit amet,</p> {/* Adjusted text size and margin */}
              </li>
              <li>
                <h3 className="font-bold text-sm md:text-md flex items-center gap-2 md:gap-3"> {/* Adjusted text size and gap */}
                  <span className="text-blue-400">
                    <Mail className="w-4 h-4 md:w-5 md:h-5" /> {/* Adjusted icon size */}
                  </span>
                  EMAIL
                </h3>
                <p className="mt-1 md:mt-2 text-sm md:text-md text-gray-300">Gameofthelife@gmail.com</p> {/* Adjusted text size and margin */}
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#22014a] text-white py-12 md:py-16 lg:py-20"> {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 md:gap-12"> {/* Adjusted gap and alignment */}

          {/* Left Section - Logo/Infographic */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
            <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full flex items-center justify-center overflow-hidden mb-4"> {/* Adjusted sizes */}
              {/* Placeholder for the complex infographic image */}
              <img
                src={logo}
                alt="The Game Of Your Life Infographic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right w-full lg:w-auto"> {/* Adjusted alignment and width */}
            {/* Top Navigation */}
            <nav className="mb-6 md:mb-8 w-full"> {/* Adjusted margin */}
              <ul className="flex flex-col md:flex-row justify-center lg:justify-end items-center md:space-x-4 lg:space-x-6 space-y-2 md:space-y-0"> {/* Adjusted space-x and space-y, and alignment */}
                <li className="relative group">
                  <a href="#" className="font-bold text-white text-sm md:text-base lg:text-lg hover:text-gray-300 transition-colors duration-200"> {/* Adjusted text size */}
                    HOME
                  </a>
                  <span className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-[80%] h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
                </li>
                <li className="hidden md:block text-gray-500 text-sm md:text-base">|</li> {/* Adjusted text size */}
                <li>
                  <a href="#" className="font-bold text-white text-sm md:text-base lg:text-lg hover:text-gray-300 transition-colors duration-200"> {/* Adjusted text size */}
                    THE 13 LIFE FOUNDATION
                  </a>
                </li>
                <li className="hidden md:block text-gray-500 text-sm md:text-base">|</li> {/* Adjusted text size */}
                <li>
                  <a href="#" className="font-bold text-white text-sm md:text-base lg:text-lg hover:text-gray-300 transition-colors duration-200"> {/* Adjusted text size */}
                    ABOUT
                  </a>
                </li>
                <li className="hidden md:block text-gray-500 text-sm md:text-base">|</li> {/* Adjusted text size */}
                <li>
                  <a href="#" className="font-bold text-white text-sm md:text-base lg:text-lg hover:text-gray-300 transition-colors duration-200"> {/* Adjusted text size */}
                    TESTIMONIALS
                  </a>
                </li>
                <li className="hidden md:block text-gray-500 text-sm md:text-base">|</li> {/* Adjusted text size */}
                <li>
                  <a href="#" className="font-bold text-white text-sm md:text-base lg:text-lg hover:text-gray-300 transition-colors duration-200"> {/* Adjusted text size */}
                    CONTACT US
                  </a>
                </li>
              </ul>
            </nav>

            {/* Contact Information */}
            <div className="flex flex-col md:flex-row justify-center lg:justify-end items-center gap-2 md:gap-4 lg:gap-8 mb-6 md:mb-8 text-xs md:text-sm text-gray-300 w-full"> {/* Adjusted gap, text size and alignment */}
              <div className="flex flex-col items-center md:items-end">
                <span className="font-semibold text-white">CALL US</span>
                <span>+123 456 7890</span>
              </div>
              <div className="hidden md:block h-8 w-[1px] bg-gray-500"></div> {/* Adjusted height */}
              <div className="flex flex-col items-center md:items-end">
                <span className="font-semibold text-white">LOCATION</span>
                <span>Lorem ipsum dolor sit amet,</span>
              </div>
              <div className="hidden md:block h-8 w-[1px] bg-gray-500"></div> {/* Adjusted height */}
              <div className="flex flex-col items-center md:items-end">
                <span className="font-semibold text-white">EMAIL</span>
                <span>Gameofthelife@gmail.com</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex w-full justify-center lg:justify-end space-x-3 md:space-x-4">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-[#22014a] hover:bg-gray-200 transition-colors duration-200"
              >
                <Facebook size={iconSize} className="transform -translate-y-[1px]" />
              </a>

              {/* Twitter (X) */}
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-[#22014a] hover:bg-gray-200 transition-colors duration-200"
              >
                <Twitter size={iconSize} className="transform -translate-y-[1px]" />
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-[#22014a] hover:bg-gray-200 transition-colors duration-200"
              >
                <Instagram size={iconSize} />
              </a>

              {/* WhatsApp (MessageCircle) */}
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-[#22014a] hover:bg-gray-200 transition-colors duration-200"
              >
                <MessageCircle size={iconSize} className="transform -translate-y-[1px]" />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-[#22014a] hover:bg-gray-200 transition-colors duration-200"
              >
                <Linkedin size={iconSize} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
};

export default TheGameOfYourLifePage;

