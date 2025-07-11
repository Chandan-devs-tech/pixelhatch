"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const TestimonialsContainer = styled.section`
  padding: 5rem 0;
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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="2" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.25rem;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
  }
`;

const FallbackAvatar = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1rem;
`;

const AuthorInfo = styled.div`
  h4 {
    font-weight: 600;
    margin-bottom: 0.2rem;
    color: white;
    font-size: 1rem;

    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }

  p {
    opacity: 0.8;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }
`;

const TestimonialsSection = () => {
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

    const element = document.getElementById("testimonials");
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
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const testimonials = [
    {
      text: "PixelHatch completely transformed our online presence. Their creative approach and attention to detail exceeded our expectations. Our website traffic increased by 300% within the first month!",
      author: "Sarah Mitchell",
      position: "CEO, TechStart Inc.",
      image: "/images/testimonial-01.webp",
    },
    {
      text: "Working with PixelHatch was a game-changer for our brand. They understood our vision perfectly and delivered a stunning website that truly represents who we are as a company.",
      author: "John Davis",
      position: "Founder, Creative Studio",
      image: "/images/testimonial-02.webp",
    },
    {
      text: "The team at PixelHatch is incredibly professional and talented. They took our outdated website and turned it into a modern, responsive masterpiece that our customers love.",
      author: "Emma Lee",
      position: "Marketing Director, RetailCorp",
      image: "/images/testimonial-03.webp",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <TestimonialsContainer id="testimonials">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <SectionTitle variants={itemVariants}>
            What Our Clients Say
          </SectionTitle>

          <SectionSubtitle variants={itemVariants}>
            Don&apos;t just take our word for it - hear from our satisfied
            clients
          </SectionSubtitle>

          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <TestimonialText>
                  &ldquo;{testimonial.text}&rdquo;
                </TestimonialText>
                <TestimonialAuthor>
                  <AuthorAvatar>
                    {imageErrors[index] ? (
                      <FallbackAvatar>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])

                          .join("")}
                      </FallbackAvatar>
                    ) : (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        sizes="50px"
                        style={{ objectFit: "cover" }}
                        onError={() => handleImageError(index)}
                      />
                    )}
                  </AuthorAvatar>
                  <AuthorInfo>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.position}</p>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </motion.div>
      </Container>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;
