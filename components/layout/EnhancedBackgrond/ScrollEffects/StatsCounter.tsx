"use client";

import { useEffect } from "react";

export interface StatsCounterProps {}

export default function StatsCounter({}: StatsCounterProps) {
  const statsObserverOptions = {
    threshold: 0.5,
  };

  const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
      const targetText = stat.textContent || '';
      const digits = targetText.replace(/[^\d]/g, '');
      
      if (digits.length === 0) return;

      const target = parseInt(digits);
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

  useEffect(() => {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
          }
        });
      }, statsObserverOptions);

      observer.observe(statsSection);

      return (): void => {
        observer.disconnect();
      };
    }
  }, []);

  return null;
}