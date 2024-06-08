import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    pgsql,
    html,
    css,
    reactjs,
    laravel,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    php,
    kalbe,
    rentcar,
    jpm,
    porto,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Front-End Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Postgree",
      icon: pgsql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Php",
      icon: php,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "MSIB Kalbe Farma",
      icon: kalbe,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - June 2024",
      points: [
        "Developing and maintaining web applications using Laravel and other related technologies.",
        "Collaborating with cross-functional teams including engineering to deploy on local server",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rofif proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rofif does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rofif optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "A comprehensive web-based platform that enables users to search, book, and manage car rentals from a variety of providers. This platform offers a transportation needs by streamlining the entire rental process. From searching for available vehicles to booking and managing rentals, and user-friendly experience.",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: rentcar,
    },
    {
      name: "JPM Web",
      description:
        "Digitalization of Weekly Production Schedule for PT Kalbe Farma Tbk.Optimizing PT Kalbe Farma Tbk's Weekly Production Schedule (JPM) by implementing advanced digital systems to increase efficiency, reduce errors, and enhance information access, thus boosting productivity and competitiveness in the pharmaceutical industry",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jpm,
    },
    {
      name: "3D Portofolio Website",
      description:
        "An innovative and interactive 3D portfolio website designed to showcase works and projects with stunning three-dimensional visualizations. Utilizing Three.js, TypeScript, and CSS, this website offers an immersive and modern user experience, allowing visitors to explore the portfolio in a unique and engaging way..",
      tags: [
        {
          name: "threejs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: porto,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };