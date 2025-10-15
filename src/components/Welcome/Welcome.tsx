import { Link } from "react-router-dom";
import { useState } from "react";
import "./welcome.css";

export default function LogisticsLanding() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <main className="logistics-main">
            <header className="header">
                <div className="container">
                    <div className="logo">
                        <span className="logo-icon">🚛</span>
                        <span className="logo-text">LogiFlow Bolivia</span>
                    </div>
                    <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                        <a href="#soluciones" onClick={() => setMobileMenuOpen(false)}>Soluciones</a>
                        <a href="#beneficios" onClick={() => setMobileMenuOpen(false)}>Beneficios</a>
                        <a href="#nosotros" onClick={() => setMobileMenuOpen(false)}>Nosotros</a>
                        <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
                    </nav>
                    <div className="header-right">
                        <button className="login-btn">
                            <Link to="/login">Iniciar Sesión</Link>
                        </button>
                        <button className={`burger-btn ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>

            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Transforme la Logística de su Empresa en <span className="highlight">Bolivia</span></h1>
                        <p>Gestione el transporte y almacenamiento en La Paz, Santa Cruz, Cochabamba y todo el territorio nacional. Seguimiento en tiempo real, rutas optimizadas y control total de su cadena de suministro.</p>
                        <button className="cta-btn">Comenzar Ahora</button>
                    </div>
                    <div className="hero-visual">
                        <div className="visual-box">
                            <span className="visual-icon">🇧🇴</span>
                            <span className="visual-text">Rutas Bolivia</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features" id="soluciones">
                <div className="container">
                    <h2>¿Por Qué Elegir LogiFlow?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">📦</div>
                            <h3>Seguimiento en Tiempo Real</h3>
                            <p>Rastree cada envío en todo el territorio boliviano con actualizaciones instantáneas.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🗺️</div>
                            <h3>Rutas Optimizadas</h3>
                            <p>Algoritmos adaptados a la geografía de Bolivia para reducir tiempos hasta en 40%.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔒</div>
                            <h3>Seguro y Confiable</h3>
                            <p>Seguridad empresarial con 99.9% de disponibilidad garantizada.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="benefits" id="beneficios">
                <div className="container">
                    <div className="benefit-row">
                        <div className="benefit-text">
                            <h3>Visibilidad Completa de la Cadena de Suministro</h3>
                            <p>Monitoree todos los aspectos de sus operaciones desde un panel único. Información en tiempo real sobre inventario, envíos y rendimiento de entregas.</p>
                            <button className="outline-btn">Conocer Más</button>
                        </div>
                        <div className="benefit-image">
                            <div className="visual-box">
                                <span className="visual-icon">📊</span>
                                <span className="visual-text">Panel de Control</span>
                            </div>
                        </div>
                    </div>

                    <div className="benefit-row reverse">
                        <div className="benefit-image">
                            <div className="visual-box">
                                <span className="visual-icon">🤖</span>
                                <span className="visual-text">IA Rutas</span>
                            </div>
                        </div>
                        <div className="benefit-text">
                            <h3>Optimización Inteligente de Rutas</h3>
                            <p>Algoritmos de IA adaptados a la geografía boliviana para encontrar las mejores rutas. Ahorre combustible y tiempo de entrega.</p>
                            <button className="outline-btn">Conocer Más</button>
                        </div>
                    </div>

                    <div className="benefit-row">
                        <div className="benefit-text">
                            <h3>Integración con sus Sistemas</h3>
                            <p>Conecte fácilmente con transportistas, proveedores y clientes. API-first para integración con sus sistemas existentes.</p>
                            <button className="outline-btn">Conocer Más</button>
                        </div>
                        <div className="benefit-image">
                            <div className="visual-box">
                                <span className="visual-icon">🔗</span>
                                <span className="visual-text">Integración API</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="clients">
                <div className="container">
                    <h2>Empresas Bolivianas que Confían en Nosotros</h2>
                    <div className="clients-grid">
                        <div className="client-box">EMPRESA</div>
                        <div className="client-box">EMPRESA</div>
                        <div className="client-box">EMPRESA</div>
                        <div className="client-box">EMPRESA</div>
                        <div className="client-box">EMPRESA</div>
                        <div className="client-box">EMPRESA</div>
                        <div className="client-box">EMPRESA</div>
                        <div className="client-box">EMPRESA</div>
                    </div>
                    <p className="clients-text">Más de 500+ empresas bolivianas confían en LogiFlow</p>
                </div>
            </section>

            <section className="cta" id="contacto">
                <div className="container">
                    <div className="cta-content">
                        <h2>¿Listo para Optimizar su Logística?</h2>
                        <p>Únase a cientos de empresas bolivianas que ya optimizan sus operaciones con LogiFlow. Comience hoy mismo.</p>
                        <div className="testimonial">
                            <div className="testimonial-icon">💬</div>
                            <div className="testimonial-text">
                                <p>"LogiFlow cambió completamente nuestra gestión logística. Redujimos costos en 35% y mejoramos tiempos de entrega significativamente."</p>
                                <span>— María González, Directora de Logística, Santa Cruz</span>
                            </div>
                        </div>
                    </div>
                    <div className="cta-form">
                        <h3>Comience Hoy</h3>
                        <form>
                            <input type="text" placeholder="Nombre Completo" required />
                            <input type="email" placeholder="Correo Electrónico" required />
                            <input type="tel" placeholder="Teléfono" required />
                            <select required>
                                <option value="">Tamaño de Empresa</option>
                                <option value="1-10">1-10 empleados</option>
                                <option value="11-50">11-50 empleados</option>
                                <option value="51-200">51-200 empleados</option>
                                <option value="200+">200+ empleados</option>
                            </select>
                            <button type="submit" className="submit-btn">Iniciar Prueba Gratuita</button>
                            <p className="form-note">Sin tarjeta • 14 días gratis • Cancele cuando quiera</p>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <div className="logo">
                                <span className="logo-icon">🚛</span>
                                <span className="logo-text">LogiFlow Bolivia</span>
                            </div>
                            <p>Conectando Bolivia con logística inteligente</p>
                        </div>
                        <div className="footer-links">
                            <div className="link-col">
                                <h4>Soluciones</h4>
                                <a href="#">Transporte Terrestre</a>
                                <a href="#">Carga Aérea</a>
                                <a href="#">Almacenamiento</a>
                                <a href="#">Última Milla</a>
                            </div>
                            <div className="link-col">
                                <h4>Empresa</h4>
                                <a href="#">Nosotros</a>
                                <a href="#">Carreras</a>
                                <a href="#">Blog</a>
                                <a href="#">Contacto</a>
                            </div>
                            <div className="link-col">
                                <h4>Recursos</h4>
                                <a href="#">Casos de Éxito</a>
                                <a href="#">Documentación</a>
                                <a href="#">Soporte</a>
                                <a href="#">API</a>
                            </div>
                            <div className="link-col">
                                <h4>Legal</h4>
                                <a href="#">Privacidad</a>
                                <a href="#">Términos</a>
                                <a href="#">Cookies</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2025 LogiFlow Bolivia. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
