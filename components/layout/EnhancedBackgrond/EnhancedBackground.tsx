"use client";

import { useEffect } from "react";
import "./EnhancedBackground.css";

const characters =
	"01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

function generateColumn(): string {
	const charCount = Math.floor(Math.random() * 20 + 10);

	let text = "";
	for (let i = 0; i < charCount; i++) {
		text += characters[Math.floor(Math.random() * characters.length)] + " ";
	}
	return text;
}

export default function EnhancedBackground() {
	useEffect(() => {
		// MATRIX RAIN
		const matrixRain = document.getElementById("matrixRain");
		if (!matrixRain) return;

		matrixRain.innerHTML = "";

		const columns = Math.floor(window.innerWidth / 20);

		for (let i = 0; i < columns; i++) {
			const column = document.createElement("div");
			column.className = "matrix-column";

			column.style.left = `${i * 20}px`;
			column.style.animationDuration = `${Math.random() * 5 + 10}s`;
			column.style.animationDelay = `${Math.random() * 5}s`;

			column.textContent = generateColumn();

			matrixRain.appendChild(column);
		}

		// FLOATING PARTICLES
		const particlesContainer = document.getElementById("particlesContainer");
		if (!particlesContainer) return;

		particlesContainer.innerHTML = "";

		const particleCount = 50;

		for (let i = 0; i < particleCount; i++) {
			const particle = document.createElement("div");
			particle.className = "particle";

			particle.style.left = `${Math.random() * 100}%`;
			particle.style.animationDelay = `${Math.random() * 20}s`;
			particle.style.animationDuration = `${Math.random() * 10 + 20}s`;

			particlesContainer.appendChild(particle);
		}

    // DATA STREAMS
    const dataStreams = document.getElementById("dataStreams");
    if (!dataStreams) return;

    dataStreams.innerHTML = "";

    const streamCount = 10;

    for (let i = 0; i < streamCount; i++) {
      const stream = document.createElement("div");
      stream.className = "data-stream";

      stream.style.top = `${Math.random() * 100}%`;
      stream.style.left = "-300px";
      stream.style.animationDelay = `${Math.random() * 5}s`;
      stream.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;

      dataStreams.appendChild(stream);
    }
    // Random cyber text effects
  const cyberTexts = ['CONNECTING...', 'DATABASE CONNECTING...', 'LINK ESTABLISHED', 'TERMINAL INITIALIZED', 'ASYNC CONNECTION ACTIVE', 'DATA STREAM INITIALIZED', 'DATABASE CONNECTION ESTABLISHED', 'MATRIX LOADED'];

  setInterval(() => {
    const randomText = cyberTexts[Math.floor(Math.random() * cyberTexts.length)];
    const tempElement = document.createElement('div');
    tempElement.textContent = randomText;
    tempElement.style.cssText = `
      position: fixed;
      top: ${Math.random() * 100}vh;
      left: ${Math.random() * 70}vw;
      color: var(--primary-cyan);
      font-size: 0.8rem;
      font-weight: 700;
      z-index: 1000;
      opacity: 0.7;
      pointer-events: none;
      animation: fadeOut 3s ease-out forwards;
      text-shadow: 0 0 10px var(--primary-cyan);
    `;
    document.body.appendChild(tempElement);

    setTimeout(() => {
      document.body.removeChild(tempElement);
    }, 3000);
  }, 1000);

  // Interactive mouse glow effect (throttled for performance)
  let mouseTimer: ReturnType<typeof setTimeout> | null = null;

  const handleMouseMove = (e: MouseEvent): void => {
    if (mouseTimer) return;
    mouseTimer = setTimeout(() => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Move orbs slightly
      const orbs = document.querySelectorAll<HTMLElement>(".orb");
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.02;
        const x = (mouseX - window.innerWidth / 2) * speed;
        const y = (mouseY - window.innerHeight / 2) * speed;
        orb.style.transform = `translate(${x}px, ${y}px)`;
      });

      // Particle glow effect (desktop only)
      if (window.innerWidth > 768) {
        const particles =
          document.querySelectorAll<HTMLElement>(".particle");
        particles.forEach((particle) => {
          const rect = particle.getBoundingClientRect();
          const particleX = rect.left + rect.width / 2;
          const particleY = rect.top + rect.height / 2;
          const distance = Math.sqrt(
            Math.pow(mouseX - particleX, 2) +
              Math.pow(mouseY - particleY, 2)
          );
          if (distance < 150) {
            const brightness = 1 - distance / 150;
            particle.style.boxShadow = `
              0 0 ${20 + brightness * 30}px
              rgba(0, 255, 255, ${0.5 + brightness * 0.5})
            `;
            particle.style.transform = `
              scale(${1 + brightness * 0.5})
            `;
          } else {
            particle.style.boxShadow = "";
            particle.style.transform = "";
          }
        });
      }
      mouseTimer = null;
    }, 16);
  };

  document.addEventListener("mousemove", handleMouseMove);

  // Cursor glow effect (desktop only)
  let cursorGlow: HTMLDivElement | null = null;
  const handleCursorGlow = (e: MouseEvent): void => {
    if (!cursorGlow) return;
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
    cursorGlow.style.opacity = "1";
  };
  const handleMouseLeave = (): void => {
    if (!cursorGlow) return;
    cursorGlow.style.opacity = "0";
  };
  if (window.innerWidth > 768) {
    console.log("Cursor glow effect enabled Width=", window.innerWidth);
    cursorGlow = document.createElement("div");
    cursorGlow.style.cssText = `
      position: fixed;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: radial-gradient(
        circle,
        rgba(0, 255, 255, 0.1) 0%,
        transparent 70%
      );
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease;
      opacity: 0;
    `;

    document.body.appendChild(cursorGlow);
    document.addEventListener("mousemove", handleCursorGlow);
    document.addEventListener("mouseleave", handleMouseLeave);
  }
    // CLEANUP (VERY IMPORTANT)

  const cleanup = (): void => {
    document.removeEventListener("mousemove", handleMouseMove);

    document.removeEventListener("mousemove", handleCursorGlow);

    document.removeEventListener("mouseleave", handleMouseLeave);

    if (cursorGlow) {
      document.body.removeChild(cursorGlow);
    }
  }


  // Smooth scrolling
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href') ;
      // Only prevent default and scroll if href is more than just '#'
      if (href && href.length > 1) {
        e.preventDefault();
        if (href === '#top') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        } else {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      }
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
      nav.style.background = 'rgba(15, 15, 35, 0.35)';
      nav.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.2)';
    } else {
      nav.style.background = 'rgba(15, 15, 35, 0.6)';
      nav.style.boxShadow = 'none';
    }
  });

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
  });

  // Stats counter animation
  const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
      const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
      let count = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          clearInterval(timer);
          count = target;
        }
        const suffix = stat.textContent.replace(/[\d]/g, '');
        stat.textContent = Math.floor(count) + suffix;
      }, 20);
    });
  };

  // Trigger stats animation when section is visible
  const statsObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
          statsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  const statsSection = document.querySelector('.stats');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }
  
	}, []);

	return (
		<>
			<div className="cyber-bg">
				<div className="cyber-gradient"></div>
				<div className="matrix-rain" id="matrixRain"></div>
			</div>

			<div className="particles" id="particlesContainer"></div>
			<div className="data-streams" id="dataStreams"></div>

			<div className="orb orb1"></div>
			<div className="orb orb2"></div>
			<div className="orb orb3"></div>

			<div className="grid-overlay">
				<div className="grid-lines"></div>
				<div className="grid-glow"></div>
			</div>

			<div className="scanlines"></div>
			<div className="noise-overlay"></div>
		</>
	);
}