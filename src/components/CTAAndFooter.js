"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Footer = styled.footer`
  background: #1a202c;
  color: white;
  padding: 3rem 0 1rem;

  @media (max-width: 768px) {
    padding: 2.5rem 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0 1rem;
  }
`;

const Container = styled.div`
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

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }
`;

const FooterSection = styled(motion.div)`
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: white;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  p,
  a {
    color: #a0aec0;
    text-decoration: none;
    line-height: 1.8;
    font-size: 0.95rem;
    display: block;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #667eea;
  }
`;

const BrandSection = styled(FooterSection)`
  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18px;
    height: 18px;
  }

  &:hover {
    transform: translateY(-2px);

    svg {
      transform: translate(-50%, calc(-50% - 2px));
    }
  }

  &.facebook:hover {
    background: #1877f2;
  }

  &.twitter:hover {
    background: #1da1f2;
  }

  &.instagram:hover {
    background: linear-gradient(
      45deg,
      #f09433,
      #e6683c,
      #dc2743,
      #cc2366,
      #bc1888
    );
  }

  &.linkedin:hover {
    background: #0077b5;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #2d3748;
  color: #a0aec0;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    padding-top: 1.5rem;
  }
`;

const Logo = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const CTAAndFooter = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const services = [
    { name: "Web Design", href: "#services" },
    { name: "Branding", href: "#services" },
    { name: "Digital Marketing", href: "#services" },
    { name: "SEO Optimization", href: "#services" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#contact" },
  ];

  const resourceLinks = [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Support", href: "#" },
  ];

  return (
    <Footer>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FooterContent>
            <BrandSection variants={itemVariants}>
              <Logo>PixelHatch</Logo>
              <p>
                We&apos;re a creative digital agency dedicated to hatching
                innovative digital solutions that help businesses grow and
                succeed in the digital world.
              </p>
              <SocialLinks>
                <SocialLink
                  href="#"
                  className="facebook"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconBrandFacebook size={20} stroke={2} />
                </SocialLink>
                <SocialLink
                  href="#"
                  className="twitter"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconBrandTwitter size={20} stroke={2} />
                </SocialLink>
                <SocialLink
                  href="#"
                  className="instagram"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconBrandInstagram size={20} stroke={2} />
                </SocialLink>
                <SocialLink
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconBrandLinkedin size={20} stroke={2} />
                </SocialLink>
              </SocialLinks>
            </BrandSection>

            <FooterSection variants={itemVariants}>
              <h3>Services</h3>
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(service.href.substring(1));
                  }}
                >
                  {service.name}
                </a>
              ))}
            </FooterSection>

            <FooterSection variants={itemVariants}>
              <h3>Company</h3>
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      scrollToSection(link.href.substring(1));
                    }
                  }}
                >
                  {link.name}
                </a>
              ))}
            </FooterSection>

            <FooterSection variants={itemVariants}>
              <h3>Resources</h3>
              {resourceLinks.map((link, index) => (
                <a key={index} href={link.href}>
                  {link.name}
                </a>
              ))}
            </FooterSection>
          </FooterContent>

          <FooterBottom>
            <motion.p variants={itemVariants}>
              &copy; 2025 PixelHatch. All rights reserved. | Privacy Policy |
              Terms of Service
            </motion.p>
          </FooterBottom>
        </motion.div>
      </Container>
    </Footer>
  );
};

export default CTAAndFooter;
