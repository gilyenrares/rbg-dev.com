import TechCard from '@/components/sections/TechCard/TechCard'
import './AccessPoint.css';

const AccessPoint = () => {
  return (
    <>
    {/* <!-- access Section --> */}
    <section className="access fade-up visible" id="access">
        <div className="access-container">
            <div className="section-header">
                <h2 className="section-title">Access Point Terminal</h2>
                <p className="section-subtitle">Choose your gateway to access the Nexus System</p>
            </div>
            
            <div className="access-grid">
                <div className="access-grid">
                    <TechCard
                        title="Return"
                        image="/images/svg-6.svg"
                        imageAlt="Return icon"
                        description="Back to main menu"
                        features={[
                        "Return to main page",
                        "5 holographic workspaces",
                        "Standard encryption",
                        "Community support matrix",
                        "Reality sync enabled",
                        ]}
                        buttonText="Return"
                        buttonStyle="btn--danger"
                        href="/"
                    />

                    <TechCard
                        title="Establish"
                        image="/images/cloud-server-active.svg"
                        imageAlt="Active server"
                        description="Login into Nexus to access"
                        features={[
                        "Your Nexus System Account",
                        "Your Website Dashboard",
                        "Statistics & Analytics",
                        "Database & Security",
                        "Nexus Utilities",
                        ]}
                        buttonText="Login"
                        buttonStyle="btn--primary"
                        href="/login"
                        featured
                    />

                    <TechCard
                        title="Initiate"
                        image="/images/cloud-server.svg"
                        imageAlt="Cloud server"
                        description="Signup for clients only if"
                        features={[
                        "You want a website from us",
                        "Project request approved",
                        "Add account to project",
                        "Access payments",
                        ]}
                        buttonText="Sign Up"
                        buttonStyle="btn--success"
                        href="/sign-up"
                    />
                </div>
            </div>
        </div>
    </section>

    
    </>
  )
}

export default AccessPoint