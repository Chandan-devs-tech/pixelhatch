"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";

const ContactContainer = styled.section`
  padding: 5rem 0;
  background: white;

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

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const ContactInfo = styled(motion.div)`
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1a202c;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.6rem;
    }
  }

  p {
    color: #64748b;
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 1.1rem;
  }
`;

const ContactText = styled.span`
  color: #1a202c;
  font-weight: 500;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ContactForm = styled(motion.div)`
  background: #f8fafc;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    margin-bottom: 1.25rem;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #1a202c;
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #667eea;
  }

  &::placeholder {
    color: #a0aec0;
  }

  ${(props) =>
    props.error &&
    `
    border-color: #ef4444;
    &:focus {
      border-color: #ef4444;
    }
  `}

  @media (max-width: 480px) {
    padding: 0.7rem;
    font-size: 16px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  resize: vertical;
  min-height: 120px;
  background: white;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #667eea;
  }

  &::placeholder {
    color: #a0aec0;
  }

  @media (max-width: 480px) {
    padding: 0.7rem;
    font-size: 16px;
  }
`;

const ErrorText = styled.span`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);

  &:hover {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: #10b981;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      reset();

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const contactItems = [
    {
      icon: <IconMail size={20} stroke={2} />,
      text: "hello@pixelhatch.com",
    },
    {
      icon: <IconPhone size={20} stroke={2} />,
      text: "+1 (555) 123-4567",
    },
    {
      icon: <IconMapPin size={20} stroke={2} />,
      text: "123 Creative Street, Design City, DC 12345",
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <ContactContainer id="contact">
      <Container>
        <ContactContent>
          <ContactInfo
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <h3>Let&#39;s Start Your Project</h3>
            <p>
              Ready to transform your digital presence? Get in touch with us
              today and let&#39;s discuss how we can help bring your vision to
              life.
            </p>

            <ContactDetails>
              {contactItems.map((item, index) => (
                <ContactItem
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <ContactIcon>{item.icon}</ContactIcon>
                  <ContactText>{item.text}</ContactText>
                </ContactItem>
              ))}
            </ContactDetails>
          </ContactInfo>

          <ContactForm
            variants={formVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {isSubmitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                🎉 Thank you for your message! We&#39;ll get back to you soon.
              </SuccessMessage>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  error={errors.name}
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                />
                {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  error={errors.email}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="project">Project Details</Label>
                <TextArea
                  id="project"
                  placeholder="Tell us about your project..."
                  {...register("project", {
                    required: "Project details are required",
                    minLength: {
                      value: 10,
                      message: "Please provide more details about your project",
                    },
                  })}
                />
                {errors.project && (
                  <ErrorText>{errors.project.message}</ErrorText>
                )}
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={isLoading}
                whileHover={isLoading ? {} : { scale: 1.02 }}
                whileTap={isLoading ? {} : { scale: 0.98 }}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </SubmitButton>
            </form>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactContainer>
  );
};

export default ContactSection;
