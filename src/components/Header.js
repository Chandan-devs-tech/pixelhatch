"use client";

import styled from "styled-components";
import { useState, useEffect } from "react";
import Image from "next/image";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${(props) =>
    props.$scrolled ? "rgba(30, 58, 138, 0.95)" : "rgba(30, 58, 138, 0.8)"};
  backdrop-filter: blur(20px);
  z-index: 1000;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.$scrolled
      ? "0 4px 30px rgba(30, 58, 138, 0.3)"
      : "0 2px 20px rgba(30, 58, 138, 0.1)"};

  @media (max-width: 1024px) {
    padding: 0.9rem 0;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 0;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 0;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
  }
`;

const LogoImage = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 75px;
    height: 75px;
  }

  @media (max-width: 480px) {
    width: 65px;
    height: 65px;
  }
`;

const Logo = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.9rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.5rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.li`
  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    position: relative;

    padding: 0.6rem 1.2rem;
    border-radius: 25px;

    &:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
    }

    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 50%;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    &:hover::after {
      width: 80%;
    }

    @media (max-width: 1024px) {
      font-size: 1.1rem;
      padding: 0.5rem 1rem;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <HeaderContainer $scrolled={scrolled}>
      <NavContainer>
        <LogoContainer onClick={scrollToTop}>
          <LogoImage>
            <Image
              src="/images/pixel-hatch-logo.png"
              alt="PixelHatch Logo"
              fill
              sizes="90px"
              style={{ objectFit: "contain" }}
              priority
            />
          </LogoImage>
          <Logo>PixelHatch</Logo>
        </LogoContainer>

        <NavLinks>
          <NavLink>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
          </NavLink>
          <NavLink>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
            >
              Services
            </a>
          </NavLink>
          <NavLink>
            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("testimonials");
              }}
            >
              Testimonials
            </a>
          </NavLink>
          <NavLink>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </NavLink>
        </NavLinks>

        <MobileMenuButton>☰</MobileMenuButton>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
