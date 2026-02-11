import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <Image
                        src="/images/hero-bg.jpg"
                        alt="Industrial Background"
                        fill
                        style={{ objectFit: 'cover', opacity: 0.1 }}
                        priority
                    />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className={styles.heroContent}>
                        <div>
                            <div className={styles.heroBadge}>
                                <span className={styles.heroBadgeDot}></span>
                                <span className={styles.heroBadgeText}>Innovation in Motion</span>
                            </div>
                            <h1 className={styles.heroTitle}>
                                Engineering <span style={{ color: 'var(--accent-color)' }}>Tomorrow’s</span> Industrial Excellence
                            </h1>
                            <p className={styles.heroText}>
                                Pioneering industrial robotics and safety solutions across Saudi Arabia. We empower manufacturing with intelligence, precision, and world-class standards.
                            </p>
                            <div className={styles.heroButtons}>
                                <Link href="/solutions" className="btn btn-primary">
                                    View Our Solutions <span className="material-icons-outlined">arrow_forward</span>
                                </Link>
                                <Link href="/technology" className="btn btn-outline">
                                    Technical Catalog
                                </Link>
                            </div>
                        </div>
                        <div className={styles.heroImageContainer}>
                            <div style={{ position: 'relative' }}>
                                <div style={{ position: 'absolute', inset: '-0.25rem', background: 'linear-gradient(to right, var(--accent-color), var(--primary-color))', borderRadius: '0.5rem', filter: 'blur(4px)', opacity: 0.25, zIndex: -1 }}></div>
                                <Image
                                    src="/images/hero-arm.jpg"
                                    alt="Robotic Arm"
                                    width={600}
                                    height={400}
                                    style={{ borderRadius: '0.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '1px solid rgba(255,255,255,0.1)' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Localization Section */}
            <section className={styles.section} id="vision">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
                        {/* Note: Simplified grid for mobile first, styles.heroContent handles logic if repurposed */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                            <div className={styles.localizationContent}>
                                <Image
                                    src="/images/drivig_localization.png"
                                    alt="Saudi Vision 2030"
                                    width={200}
                                    height={200}
                                    style={{ marginBottom: '1.5rem', margin: '0 auto 1.5rem 0' }}
                                />
                                <h2 className={styles.sectionTitle}>Driving Localization</h2>
                                <p className={styles.sectionSubtitle}>
                                    Meshil Industrial Solutions is proud to align with Saudi Vision 2030, contributing to the Kingdom's industrial diversification and digital transformation through localized expertise.
                                </p>
                            </div>
                            <div className={styles.grid}>
                                <div className={styles.card}>
                                    <span className="material-icons-outlined" style={{ fontSize: '2.25rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>factory</span>
                                    <h3 className={styles.cardTitle}>Industrialization</h3>
                                    <p className={styles.cardText}>
                                        Supporting the National Industrial Development and Logistics Program (NIDLP).
                                    </p>
                                </div>
                                <div className={styles.card}>
                                    <span className="material-icons-outlined" style={{ fontSize: '2.25rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>psychology</span>
                                    <h3 className={styles.cardTitle}>Tech Transfer</h3>
                                    <p className={styles.cardText}>
                                        Bringing global robotics expertise and training to the local Saudi workforce.
                                    </p>
                                </div>
                                <div className={styles.card}>
                                    <span className="material-icons-outlined" style={{ fontSize: '2.25rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>security</span>
                                    <h3 className={styles.cardTitle}>Safety Standards</h3>
                                    <p className={styles.cardText}>
                                        Elevating operational safety to match international industrial benchmarks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Preview */}
            <section className={styles.section} style={{ backgroundColor: '#F8FAFC' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '4rem' }}>
                        <span style={{ color: 'var(--accent-color)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem' }}>Our Expertise</span>
                        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                            <h2 className={styles.sectionTitle} style={{ fontSize: '3rem', margin: 0 }}>World-Class Industrial Solutions</h2>
                            <div style={{ height: '4px', width: '6rem', backgroundColor: 'var(--accent-color)', display: 'none' }}></div>
                        </div>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.card} style={{ padding: 0, overflow: 'hidden', border: '1px solid #E2E8F0', textAlign: 'left' }}>
                            <div style={{ position: 'relative', height: '16rem' }}>
                                <Image
                                    src="/images/gemini-hvac-service.png"
                                    alt="Robotic Automation"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary-color)' }}>HVAC Duct Cleaning</h4>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                    Custom-designed robotic arms and automated production lines tailored for the manufacturing sector.
                                </p>
                                <Link href="/solutions" style={{ color: 'var(--primary-color)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                    Learn More <span className="material-icons-outlined">chevron_right</span>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.card} style={{ padding: 0, overflow: 'hidden', border: '1px solid #E2E8F0', textAlign: 'left' }}>
                            <div style={{ position: 'relative', height: '16rem' }}>
                                <Image
                                    src="/images/gemini-commercial-solutions.png"
                                    alt="Commercial Solutions"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary-color)' }}>Integrated Safety</h4>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                    Advanced safety sensors, light curtains, and interlocking systems for high-risk industrial environments.
                                </p>
                                <Link href="/solutions" style={{ color: 'var(--primary-color)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                    Learn More <span className="material-icons-outlined">chevron_right</span>
                                </Link>
                            </div>
                        </div>

                        <div className={styles.card} style={{ padding: 0, overflow: 'hidden', border: '1px solid #E2E8F0', textAlign: 'left' }}>
                            <div style={{ position: 'relative', height: '16rem' }}>
                                <Image
                                    src="/images/gemini-automation-and-field-instrumentation.png"
                                    alt="Automation and Field Instrumentation"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary-color)' }}>Automation and Field Instrumentation</h4>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                    Comprehensive service level agreements to ensure zero downtime for your critical operations.
                                </p>
                                <Link href="/solutions" style={{ color: 'var(--primary-color)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                    Learn More <span className="material-icons-outlined">chevron_right</span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{ backgroundColor: 'var(--primary-color)', padding: '4rem 1.5rem', color: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <div style={{ color: 'var(--accent-color)', fontSize: '3rem', fontWeight: 'bold' }}>150+</div>
                            <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7, fontWeight: 500 }}>Projects Delivered</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ color: 'var(--accent-color)', fontSize: '3rem', fontWeight: 'bold' }}>45</div>
                            <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7, fontWeight: 500 }}>Safety Awards</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ color: 'var(--accent-color)', fontSize: '3rem', fontWeight: 'bold' }}>12k+</div>
                            <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7, fontWeight: 500 }}>Safe Work Hours</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ color: 'var(--accent-color)', fontSize: '3rem', fontWeight: 'bold' }}>100%</div>
                            <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7, fontWeight: 500 }}>Local Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className="container">
                    <div style={{ backgroundColor: 'white', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                        <div style={{ backgroundColor: 'var(--primary-color)', padding: '3rem', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 className={styles.ctaTitle}>Ready to upgrade your industrial facility?</h2>
                            <p className={styles.ctaText}>
                                Connect with our engineering experts today for a site assessment and customized roadmap for automation.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span className="material-icons-outlined" style={{ color: 'var(--accent-color)' }}>email</span>
                                    <span>solutions@meshil.com.sa</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span className="material-icons-outlined" style={{ color: 'var(--accent-color)' }}>location_on</span>
                                    <span>Riyadh Industrial City, KSA</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '3rem', backgroundColor: 'white' }}>
                            <form style={{ display: 'grid', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', opacity: 0.7 }}>Full Name</label>
                                    <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', opacity: 0.7 }}>Email Address</label>
                                    <input type="email" placeholder="john@company.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', opacity: 0.7 }}>Message</label>
                                    <textarea placeholder="Describe your industrial requirements..." rows="4" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}></textarea>
                                </div>
                                <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>Send Inquiry</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
