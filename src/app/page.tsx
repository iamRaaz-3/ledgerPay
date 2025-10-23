"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import CountdownBanner from "./components/CountdownBanner";
import HeroSection from "./components/HeroSection";
import CustomerLogos from "./components/CustomerLogos";
import StatsSection from "./components/StatsSection";
import ComplianceSection from "./components/ComplianceSection";
import LeaveAttendance from "./components/LeaveAttendance";
import EmployeePortal from "./components/EmployeePortal";
import EffortlessPayroll from "./components/EffortlessPayroll";
import Integrations from "./components/Integrations";
import CustomizeSection from "./components/CustomizeSectons";
import AdvancedFeatures from "./components/AdvancedFeatures";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(30px)";
      section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
    
    <Navbar />
      <div className="pt-16">
        <CountdownBanner />
        <HeroSection />
        <CustomerLogos />
        <StatsSection />

        <EffortlessPayroll />

        <ComplianceSection />
        <LeaveAttendance />
        <EmployeePortal />
        <Integrations />
        <CustomizeSection />
        <AdvancedFeatures />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

// 'use client'
// import type { Variants } from "framer-motion"

// import { useEffect } from 'react'
// import { motion } from 'framer-motion'

// import Navbar from './components/Navbar'
// import CountdownBanner from './components/CountdownBanner'
// import HeroSection from './components/HeroSection'
// import CustomerLogos from './components/CustomerLogos'
// import StatsSection from './components/StatsSection'
// import ComplianceSection from './components/ComplianceSection'
// import LeaveAttendance from './components/LeaveAttendance'
// import EmployeePortal from './components/EmployeePortal'
// import EffortlessPayroll from './components/EffortlessPayroll'
// import Integrations from './components/Integrations'
// import CustomizeSection from './components/CustomizeSectons'
// import AdvancedFeatures from './components/AdvancedFeatures'
// import Testimonials from './components/Testimonials'
// import Footer from './components/Footer'

// // Animation configuration
// const fadeIn: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// }

// export default function Page() {
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting&& entry.target instanceof HTMLElement) {
//           entry.target.style.opacity = '1'
//           entry.target.style.transform = 'translateY(0)'
//         }
//       })
//     }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })

//     const sections = document.querySelectorAll('section')
//     sections.forEach((section) => {
//       section.style.opacity = '0'
//       section.style.transform = 'translateY(30px)'
//       section.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
//       observer.observe(section)
//     })

//     return () => {
//       sections.forEach((section) => observer.unobserve(section))
//     }
//   }, [])

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <div className="pt-16">
//         <motion.section
//           variants={fadeIn}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <CountdownBanner />
//         </motion.section>

//         <HeroSection />
//         <CustomerLogos />
//         <StatsSection />
//         <EffortlessPayroll />
//         <ComplianceSection />
//         <LeaveAttendance />
//         <EmployeePortal />
//         <Integrations />
//         <CustomizeSection />
//         <AdvancedFeatures />
//         <Testimonials />
//         <Footer />
//       </div>
//     </div>
//   )
// }
