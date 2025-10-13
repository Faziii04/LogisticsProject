import { Link } from "react-router-dom"
import { useState } from "react"
import "./login.css"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate login process
        setTimeout(() => {
            setIsLoading(false)
            // Redirect to user dashboard or handle login
            console.log("Login attempt:", { email, password })
        }, 1500)
    }

    return (
        <main className="login-main">
            <div className="login-container">
                <div className="login-header">
                    <h1 className="login-title">Welcome Back</h1>
                    <p className="login-subtitle">Sign in to your DevHub account</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-options">
                        <label className="checkbox-container">
                            <input type="checkbox" className="checkbox" />
                            <span className="checkbox-text">Remember me</span>
                        </label>
                        <a href="#" className="forgot-password">Forgot password?</a>
                    </div>

                    <button 
                        type="submit" 
                        className={`login-button ${isLoading ? 'loading' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <div className="login-footer">
                    <p className="signup-prompt">
                        Don't have an account? 
                        <a href="#" className="signup-link"> Create one here</a>
                    </p>
                    <div className="back-to-welcome">
                        <Link to="/" className="back-link">← Back to Welcome</Link>
                    </div>
                </div>

                <div className="divider">
                    <span className="divider-text">or continue with</span>
                </div>

                <div className="social-login">
                    <button className="social-button github">
                        <span className="social-icon">⚡</span>
                        GitHub
                    </button>
                    <button className="social-button google">
                        <span className="social-icon">🌐</span>
                        Google
                    </button>
                </div>
            </div>
        </main>
    )
}