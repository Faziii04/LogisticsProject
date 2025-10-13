import { Link } from "react-router-dom"
import "./welcome.css"

export default function Welcome() {
    return(
        <main className="welcome-main">
            <div className="hero-section">
                <h1 className="hero-title">Welcome to DevHub Nills</h1>
                <p className="hero-subtitle">Your gateway to seamless development collaboration</p>
                
                <div className="login-section">
                    <p className="login-prompt">
                        Ready to dive in? It looks like you're not logged in yet. 
                        Let's get you connected to your personalized dashboard where you can 
                        manage projects, collaborate with teammates, and track your progress.
                    </p>
                    
                    <button className="login-button">
                        <Link to="/login" className="login-link">
                            Access Your Account
                        </Link>
                    </button>
                    
                    <div className="additional-info">
                        <p>New to DevHub? <span className="highlight">Sign up</span> takes less than 2 minutes!</p>
                        <p className="stats">Join 50,000+ developers already using our platform</p>
                    </div>
                </div>
            </div>
            
            <div className="content-section">
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Fast Setup</h3>
                        <p>Get started in minutes with our streamlined onboarding process</p>
                    </div>
                    <div className="feature-card">
                        <h3>Secure Platform</h3>
                        <p>Enterprise-grade security to protect your projects and data</p>
                    </div>
                    <div className="feature-card">
                        <h3>Team Collaboration</h3>
                        <p>Work together seamlessly with built-in team collaboration tools</p>
                    </div>
                </div>
            </div>
        </main>
    )
}