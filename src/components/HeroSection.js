"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    #1e3a8a 0%,
    #1e40af 25%,
    #1d4ed8 50%,
    #2563eb 75%,
    #3b82f6 100%
  );
  color: white;
  position: relative;
  overflow: hidden;
  padding-top: 80px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 25% 25%,
        rgba(59, 130, 246, 0.15) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 75% 75%,
        rgba(37, 99, 235, 0.15) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 50% 50%,
        rgba(29, 78, 216, 0.1) 0%,
        transparent 70%
      );
    opacity: 0.8;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="2" height="2" patternUnits="userSpaceOnUse"><path d="M 2 0 L 0 0 0 2" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.3"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    min-height: 90vh;
    padding-top: 60px;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background: white;
  color: #667eea;
  padding: 1rem 2.5rem;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.8rem;
    font-size: 0.95rem;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.2),
    rgba(37, 99, 235, 0.2)
  );
  border-radius: 50%;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1);
`;

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <HeroContainer id="home">
      <FloatingElements>
        <FloatingShape
          style={{
            width: "120px",
            height: "120px",
            top: "20%",
            left: "10%",
          }}
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
            rotate: 360,
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            x: { duration: 0.5 },
            y: { duration: 0.5 },
          }}
        />
        <FloatingShape
          style={{
            width: "80px",
            height: "80px",
            top: "15%",
            right: "20%",
            background:
              "linear-gradient(135deg, rgba(37, 99, 235, 0.25), rgba(29, 78, 216, 0.25))",
          }}
          animate={{
            x: mousePosition.x * -0.015,
            y: mousePosition.y * -0.015,
            rotate: -360,
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            x: { duration: 0.7 },
            y: { duration: 0.7 },
          }}
        />
        <FloatingShape
          style={{
            width: "200px",
            height: "200px",
            top: "60%",
            right: "15%",
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.2))",
          }}
          animate={{
            x: mousePosition.x * -0.025,
            y: mousePosition.y * -0.025,
            rotate: -360,
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            x: { duration: 0.8 },
            y: { duration: 0.8 },
          }}
        />
        <FloatingShape
          style={{
            width: "60px",
            height: "60px",
            top: "70%",
            left: "15%",
            background:
              "linear-gradient(135deg, rgba(29, 78, 216, 0.3), rgba(59, 130, 246, 0.3))",
          }}
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
            scale: [1, 1.3, 1],
          }}
          transition={{
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 0.3 },
            y: { duration: 0.3 },
          }}
        />
        <FloatingShape
          style={{
            width: "140px",
            height: "140px",
            top: "80%",
            right: "60%",
            background:
              "linear-gradient(135deg, rgba(37, 99, 235, 0.25), rgba(30, 64, 175, 0.25))",
          }}
          animate={{
            x: mousePosition.x * 0.018,
            y: mousePosition.y * 0.018,
            rotate: 360,
          }}
          transition={{
            rotate: { duration: 35, repeat: Infinity, ease: "linear" },
            x: { duration: 0.6 },
            y: { duration: 0.6 },
          }}
        />
      </FloatingElements>

      <HeroContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroTitle variants={itemVariants}>
            Hatch Your Digital Dreams
          </HeroTitle>

          <HeroSubtitle variants={itemVariants}>
            We&apos;re PixelHatch, a creative digital agency that transforms
            ideas into stunning digital experiences. From web design to branding
            and digital marketing, we bring your vision to life.
          </HeroSubtitle>

          <CTAButton
            variants={itemVariants}
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </CTAButton>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
