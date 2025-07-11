// "use client";

// import { createGlobalStyle } from "styled-components";

// const GlobalStyles = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   html {
//     scroll-behavior: smooth;
//   }

//   body {
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//       sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     line-height: 1.6;
//     color: #333;
//     background-color: #ffffff;
//   }

//   h1, h2, h3, h4, h5, h6 {
//     font-weight: 600;
//     line-height: 1.2;
//     margin-bottom: 1rem;
//   }

//   p {
//     margin-bottom: 1rem;
//   }

//   a {
//     text-decoration: none;
//     color: inherit;
//   }

//   button {
//     border: none;
//     outline: none;
//     cursor: pointer;
//     font-family: inherit;
//   }

//   input, textarea {
//     border: none;
//     outline: none;
//     font-family: inherit;
//   }

//   img {
//     max-width: 100%;
//     height: auto;
//   }

//   /* Container for centering content */
//   .container {
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 0 2rem;

//     @media (max-width: 768px) {
//       padding: 0 1rem;
//     }
//   }
// `;

// export default GlobalStyles;

"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    color: #333;
    background-color: #ffffff;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #1a202c;
  }

  h1 {
    font-size: 2.5rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  h2 {
    font-size: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.6rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.7;
    color: #4a5568;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.3s ease;
  }

  input, textarea, select {
    border: none;
    outline: none;
    font-family: inherit;
    transition: all 0.3s ease;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Custom scrollbar for webkit browsers */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
  }

  /* Focus styles for accessibility */
  button:focus-visible,
  a:focus-visible,
  input:focus-visible,
  textarea:focus-visible {
    outline: 2px solid #667eea;
    outline-offset: 2px;
  }

  /* Selection styles */
  ::selection {
    background: rgba(102, 126, 234, 0.2);
    color: #1a202c;
  }

  ::-moz-selection {
    background: rgba(102, 126, 234, 0.2);
    color: #1a202c;
  }

  /* Container utility class */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
      padding: 0 1.5rem;
    }
    
    @media (max-width: 480px) {
      padding: 0 1rem;
    }
  }

  /* Animation utilities */
  .fade-in {
    opacity: 0;
    animation: fadeIn 0.6s ease forwards;
  }

  .slide-up {
    transform: translateY(30px);
    opacity: 0;
    animation: slideUp 0.6s ease forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Smooth transitions for theme changes */
  * {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }

  /* Mobile touch improvements */
  @media (max-width: 768px) {
    /* Increase touch targets */
    button, a {
      min-height: 44px;
      min-width: 44px;
    }

    /* Prevent text size adjust on orientation change */
    html {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    /* Remove tap highlight on mobile */
    * {
      -webkit-tap-highlight-color: transparent;
    }
  }

  /* Print styles */
  @media print {
    * {
      background: white !important;
      color: black !important;
      box-shadow: none !important;
    }

    .no-print {
      display: none !important;
    }

    a, a:visited {
      text-decoration: underline;
    }

    abbr[title]:after {
      content: " (" attr(title) ")";
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    * {
      border-color: currentColor;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Loading state utility */
  .loading {
    pointer-events: none;
    opacity: 0.6;
  }

  /* Error state utility */
  .error {
    color: #e53e3e;
    border-color: #e53e3e;
  }

  /* Success state utility */
  .success {
    color: #38a169;
    border-color: #38a169;
  }

  /* Gradient text utility */
  .gradient-text {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export default GlobalStyles;
