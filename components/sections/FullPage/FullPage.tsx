import Link from 'next/link'
import React from 'react'
import Button from '@/components/ui/Button/Button'
import Image from 'next/image'
import './FullPage.css';
import { HeroSectionProps } from '@/types';

const FullPage = () => {
  return (
    <>
       {/* <!-- Hero Section --> */}
    <section className="hero">
        <div className="hero-container">
            <h1 className="hero-title">
                <span className="hero-neo">NEO</span><span className="hero-nexus">NEXUS</span>
            </h1>
            <p className="hero-subtitle">The quantum leap in team collaboration. Connect minds, sync realities, achieve impossible.</p>
            <div className="hero-buttons">
                <a href="#" className="btn-primary">Initialize System</a>
                <a href="#" className="btn-secondary">View Documentation</a>
            </div>
        </div>
    </section>

    {/* <!-- Stats Section --> */}
    <section className="stats fade-up " id="stats">
        <div className="stats-container">
            <div className="stats-grid">
                <div className="stat-item">
                    <span className="stat-number">50K+</span>
                    <span className="stat-label">Active Users</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">99.9%</span>
                    <span className="stat-label">Uptime</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">500M+</span>
                    <span className="stat-label">Tasks Processed</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">180+</span>
                    <span className="stat-label">Countries</span>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Features Section --> */}
    <section className="features fade-up " id="features">
        <div className="features-container">
            <div className="section-header">
                <h2 className="section-title">Core Systems</h2>
                <p className="section-subtitle">Advanced modules designed for maximum efficiency and seamless integration</p>
            </div>
            
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon">⚡</div>
                    <h3>Quantum Processing</h3>
                    <p>Experience lightning-fast data processing with our quantum-inspired algorithms that handle complex workflows in microseconds.</p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">🔮</div>
                    <h3>Neural Networks</h3>
                    <p>AI-powered decision making that learns from your team's patterns and optimizes collaboration in real-time.</p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">🌐</div>
                    <h3>Holographic Interface</h3>
                    <p>Immersive 3D workspace that transcends traditional boundaries, bringing remote teams into a shared reality.</p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">🛡️</div>
                    <h3>Quantum Encryption</h3>
                    <p>Military-grade security protocols with quantum encryption that makes your data literally impossible to breach.</p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">🚀</div>
                    <h3>Hyperdrive Sync</h3>
                    <p>Instantaneous synchronization across all devices and platforms with zero latency, no matter the distance.</p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">🎯</div>
                    <h3>Mind Reading Analytics</h3>
                    <p>Predictive analytics so advanced, it anticipates your team's needs before they even know what they need.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Pricing Section --> */}
    <section className="pricing fade-up " id="pricing">
        <div className="pricing-container">
            <div className="section-header">
                <h2 className="section-title">Access Levels</h2>
                <p className="section-subtitle">Choose your gateway to the future of collaboration</p>
            </div>
            
            <div className="pricing-grid">
                <div className="pricing-card">
                    <div className="plan-name">Initiate</div>
                    <div className="plan-price">$49</div>
                    <div className="plan-period">per neural link</div>
                    <ul className="plan-features">
                        <li>Basic quantum processing</li>
                        <li>5 holographic workspaces</li>
                        <li>Standard encryption</li>
                        <li>Community support matrix</li>
                        <li>Reality sync enabled</li>
                    </ul>
                    <a href="#" className="btn-secondary">Enter System</a>
                </div>
                
                <div className="pricing-card featured">
                    <div className="plan-name">Nexus</div>
                    <div className="plan-price">$149</div>
                    <div className="plan-period">per neural link</div>
                    <ul className="plan-features">
                        <li>Advanced quantum algorithms</li>
                        <li>Unlimited holo-workspaces</li>
                        <li>Quantum encryption fortress</li>
                        <li>Priority neural support</li>
                        <li>Mind-reading analytics</li>
                        <li>Hyperdrive sync protocol</li>
                    </ul>
                    <a href="#" className="btn-primary">Jack In</a>
                </div>
                
                <div className="pricing-card">
                    <div className="plan-name">Transcend</div>
                    <div className="plan-price">$399</div>
                    <div className="plan-period">per neural link</div>
                    <ul className="plan-features">
                        <li>Infinite processing power</li>
                        <li>Custom reality matrices</li>
                        <li>Temporal encryption layers</li>
                        <li>Direct neural interface</li>
                        <li>Predictive consciousness</li>
                        <li>Quantum entanglement sync</li>
                    </ul>
                    <a href="#" className="btn-secondary">Ascend</a>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Contact Section --> */}
    <section className="contact fade-up " id="contact">
        <div className="contact-container">
            <div className="section-header">
                <h2 className="section-title">Initialize Contact</h2>
                <p className="section-subtitle">Send a transmission through the neural network</p>
            </div>
            
            <div className="contact-form-wrapper">
                <div className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Neural ID</label>
                        <input type="text" id="name" name="name" placeholder="Enter your designation" required/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Quantum Address</label>
                        <input type="email" id="email" name="email" placeholder="your.id@nexusflow.com" required/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="message">Transmission</label>
                        <textarea id="message" name="message" rows={5} placeholder="Compose your message to the network..." required></textarea>
                    </div>
                    
                    <button type="submit" className="btn-primary btn-submit">Transmit Message</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default FullPage