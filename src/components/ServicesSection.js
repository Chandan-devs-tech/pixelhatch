"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ServicesContainer = styled.section`
  padding: 5rem 0;
  background: #f8fafc;

  @media (max-width: 1024px) {
    padding: 4rem 0;
  }

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    max-width: 960px;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }

  @media (max-width: 320px) {
    padding: 0 0.75rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #1a202c;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 2.25rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.1rem;
  color: #64748b;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 1.05rem;
    max-width: 550px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    max-width: 450px;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    max-width: 100%;
    padding: 0 0.5rem;
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
    padding: 0 0.25rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-top: 1.5rem;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    max-width: 100%;
  }

  @media (max-width: 320px) {
    gap: 0.75rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 390px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 1024px) {
    border-radius: 14px;
  }

  @media (max-width: 768px) {
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    border-radius: 10px;
  }

  @media (max-width: 320px) {
    border-radius: 8px;
  }
`;

const ServiceImageContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  height: 250px;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  border-radius: 16px 16px 0 0;
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.03);
  }

  @media (max-width: 1024px) {
    border-radius: 14px 14px 0 0;
  }

  @media (max-width: 768px) {
    border-radius: 12px 12px 0 0;
  }

  @media (max-width: 480px) {
    border-radius: 10px 10px 0 0;
  }

  @media (max-width: 320px) {
    border-radius: 8px 8px 0 0;
  }
`;

const ServiceImageFallback = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 16px 16px 0 0;

  @media (max-width: 1024px) {
    border-radius: 14px 14px 0 0;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    border-radius: 12px 12px 0 0;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    border-radius: 10px 10px 0 0;
    font-size: 0.95rem;
  }

  @media (max-width: 320px) {
    border-radius: 8px 8px 0 0;
    font-size: 0.9rem;
  }
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 1.375rem;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1.125rem;
  }

  @media (max-width: 320px) {
    padding: 1rem;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.375rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1a202c;
  line-height: 1.3;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 0.7rem;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.65rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 320px) {
    font-size: 1.15rem;
    margin-bottom: 0.55rem;
  }
`;

const ServiceDescription = styled.p`
  color: #64748b;

  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 1024px) {
    font-size: 0.925rem;
    line-height: 1.55;
    -webkit-line-clamp: 3;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
    -webkit-line-clamp: 3;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    line-height: 1.45;
    -webkit-line-clamp: 3;
  }

  @media (max-width: 320px) {
    font-size: 0.85rem;
    line-height: 1.4;
    -webkit-line-clamp: 2;
  }
`;

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("services");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleImageError = (index) => {
    setImageErrors((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const services = [
    {
      image: "/images/web-design.webp",
      title: "Web Design",
      description:
        "Creating beautiful, user-friendly websites that captivate your audience and drive conversions with modern design principles.",
    },
    {
      image: "/images/branding.webp",
      title: "Branding",
      description:
        "Developing compelling brand identities that tell your story and connect with your target audience effectively.",
    },
    {
      image: "/images/digital-marketing.webp",
      title: "Digital Marketing",
      description:
        "Strategic digital marketing campaigns that increase your online presence and grow your business with data-driven approaches.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <ServicesContainer id="services">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <SectionTitle variants={itemVariants}>Our Services</SectionTitle>

          <SectionSubtitle variants={itemVariants}>
            We offer comprehensive digital solutions to help your business
            thrive in the digital landscape
          </SectionSubtitle>

          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
              >
                <ServiceImageContainer>
                  {imageErrors[index] ? (
                    <ServiceImageFallback>{service.title}</ServiceImageFallback>
                  ) : (
                    <ServiceImage
                      src={service.image}
                      alt={service.title}
                      onError={() => handleImageError(index)}
                      loading="lazy"
                    />
                  )}
                </ServiceImageContainer>
                <ServiceContent>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceContent>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </motion.div>
      </Container>
    </ServicesContainer>
  );
};

export default ServicesSection;
