"use client";

import MatrixRain from "./MatrixRain/MatrixRain";
import Particles  from "./Particles/Particles";
import  DataStreams  from "./DataStreams/DataStreams";
import  MouseEffects  from "./MouseEffects/MouseEffects";
import  CyberText  from "./CyberText/CyberText";
import  FadeUpObserver  from "./ScrollEffects/FadeUpObserver";
import  StatsCounter  from "./ScrollEffects/StatsCounter";
import "./EnhancedBackground.css";



export default function EnhancedBackground() {
 
  return (
    <>
      <div className="cyber-bg">
        <div className="cyber-gradient"></div>
        <CyberText />
        <div className="matrix-rain" id="matrixRain"></div>
         <MatrixRain containerId="matrixRain" />
      </div>

      <div className="particles" id="particlesContainer"></div>
      <Particles containerId="particlesContainer" />
      <div className="data-streams" id="dataStreams"></div>
      <DataStreams containerId="dataStreams" />

      <MouseEffects/>

      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      <div className="grid-overlay">
        <div className="grid-lines"></div>
        <div className="grid-glow"></div>
      </div>

      <div className="scanlines"></div>
      <FadeUpObserver />
      <div className="noise-overlay"></div>
      <StatsCounter />
    </>
  );
}
