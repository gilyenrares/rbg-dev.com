import Link from 'next/link'
import React from 'react'
import Button from '@/components/ui/Button/Button'
import Image from 'next/image'
import './AccessPoint.css';
import { HeroSectionProps } from '@/types';

const AccessPoint = () => {
  return (
    <>
    {/* <!-- access Section --> */}
    <section className="access fade-up " id="access">
        <div className="access-container">
            <div className="section-header">
                <h2 className="section-title">Access Point Terminal</h2>
                <p className="section-subtitle">Choose your gateway to access the Nexus System</p>
            </div>
            
            <div className="access-grid">
                <div className="access-card">
                    <div className="option-name">Return</div>
                    <div className="option-price">
                        <Image
                            src="/images/svg-6.svg"
                            alt="Web page icon"
                            width={300}
                            height={300}
                        />
                        </div>
                    <div className="option-period mt-[50]">Back to main menu</div>
                    <ul className="option-features">
                        <li>Return to main page</li>
                        <li>5 holographic workspaces</li>
                        <li>Standard encryption</li>
                        <li>Community support matrix</li>
                        <li>Reality sync enabled</li>
                    </ul>
                    <Link href="#"><Button className="btn--clip" buttonSize='btn--wide' buttonStyle='btn--danger'>Return</Button></Link>
                </div>
                
                <div className="access-card featured">
                    <div className="option-name">Establish</div>
                    <div className="option-price">
                        <Image src="./images/cloud-server-active.svg" width={300} height={300} alt="Active Server" />
                    </div>
                    <div className="option-period">Login into Nexus to access</div>
                    <ul className="option-features">
                        <li>Your Nexus System Account </li>
                        <li>Your Website's Dashboard</li>
                        <li>Statistics, Analytics & Content</li>
                        <li>Database, Security & Encryption</li>
                        <li>Nexus System Utilities</li>
                    </ul>
                    <a href="#" className="btn-primary">Login</a>
                </div>
                
                <div className="access-card">
                    <div className="option-name">Initiate</div>
                    <div className="option-price"><Image src="./images/cloud-server.svg" width={300} height={300} alt="Active Server" /></div>
                    <div className="option-period">Signup for clients only if</div>
                    <ul className="option-features">
                        <li>You want a website from us</li>
                        <li>We taken your project request</li>
                        <li>Add account to existing project </li>
                        <li>You want access to Payments</li>
                    </ul>
                    <a href="#" ><Button className="btn--clip" buttonSize='btn--wide' buttonStyle='btn--success'>Sign Up</Button></a>
                </div>
            </div>
        </div>
    </section>

    
    </>
  )
}

export default AccessPoint