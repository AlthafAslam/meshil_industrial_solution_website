import Image from 'next/image';
import Link from 'next/link';
import styles from './technology.module.css';

export const metadata = {
    title: 'Technology & Automation | Meshil Industrial',
    description: 'Precision Engineering for the Future. 6-Axis Robotic Arms, Cobots, and Industry 4.0 solutions.',
};

export default function Technology() {
    return (
        <>
            <section className={styles.hero}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <Image
                        src="/images/hero-bg.jpg"
                        alt="Technology Background"
                        fill
                        style={{ objectFit: 'cover', opacity: 0.15 }}
                        priority
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, var(--primary-color) 100%)' }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(235, 197, 75, 0.1)', borderRadius: '50px', border: '1px solid rgba(235, 197, 75, 0.2)', marginBottom: '2rem' }}>
                        <span style={{ color: '#EBC54B', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Industry 4.0 Standard</span>
                    </div>
                    <h1 className={styles.title}>Precision Engineering for the Future</h1>
                    <p className={styles.intro}>
                        Pioneering Industry 4.0 in Saudi Arabia. We integrate advanced 3D robotic systems and smart automation workflows that redefine industrial efficiency and worker safety.
                    </p>

                    <div className={styles.specsGrid}>
                        <div className={styles.specItem}>
                            <span className={styles.specValue}>500kg</span>
                            <span className={styles.specLabel}>Payload Capacity</span>
                            <span className={styles.specDesc}>High-torque servo systems with dynamic stability</span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.specValue}>3.2m</span>
                            <span className={styles.specLabel}>Reach Radius</span>
                            <span className={styles.specDesc}>Extended workspace for versatile assembly</span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.specValue}>&lt;10ms</span>
                            <span className={styles.specLabel}>Control Logic</span>
                            <span className={styles.specDesc}>Real-time processing with low latency AI</span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.specValue}>IP67</span>
                            <span className={styles.specLabel}>Protection Rating</span>
                            <span className={styles.specDesc}>Certified for harsh industrial environments</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Advanced Core Features</h2>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>
                                <span className="material-icons-outlined" style={{ color: 'var(--accent-color)' }}>hub</span>
                                Multi-Axis Control
                            </h3>
                            <p className={styles.featureText}>
                                Integrated drive units with fiber-optic communication for zero-lag coordination across 6 or 7 axis systems.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>
                                <span className="material-icons-outlined" style={{ color: 'var(--accent-color)' }}>analytics</span>
                                Predictive AI
                            </h3>
                            <p className={styles.featureText}>
                                Onboard sensors monitor thermal and vibration profiles to predict component wear before failure occurs.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>
                                <span className="material-icons-outlined" style={{ color: 'var(--accent-color)' }}>bolt</span>
                                Efficient Braking
                            </h3>
                            <p className={styles.featureText}>
                                Regenerative power systems capture kinetic energy during deceleration, reducing overall facility power demand by 15%.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.safetySection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Smart Safety Integration</h2>
                    <div className={styles.safetyList}>
                        <div className={styles.safetyItem}>
                            <span className={`${styles.safetyIcon} material-icons-outlined`}>security</span>
                            <h3>SIL-3 Safety PLC</h3>
                            <p className={styles.featureText}>Control Architecture</p>
                        </div>
                        <div className={styles.safetyItem}>
                            <span className={`${styles.safetyIcon} material-icons-outlined`}>sensors</span>
                            <h3>Multi-Zonal Scanners</h3>
                            <p className={styles.featureText}>Laser Protective Systems</p>
                        </div>
                        <div className={styles.safetyItem}>
                            <span className={`${styles.safetyIcon} material-icons-outlined`}>pan_tool</span>
                            <h3>Automated Stop</h3>
                            <p className={styles.featureText}>Catastrophic Protocols</p>
                        </div>
                        <div className={styles.safetyItem}>
                            <span className={`${styles.safetyIcon} material-icons-outlined`}>radar</span>
                            <h3>Collision Avoidance</h3>
                            <p className={styles.featureText}>Proximity Sensors</p>
                        </div>
                    </div>

                    <div className={styles.compliance}>
                        <div className={styles.complianceItem}>
                            <h4>ISO 10218-1</h4>
                            <p>Safety Standard</p>
                        </div>
                        <div className={styles.complianceItem}>
                            <h4>SASO Certified</h4>
                            <p>KSA Compliance</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section} style={{ backgroundColor: '#F8FAFC', textAlign: 'center' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Ready to optimize your workflow?</h2>
                    <Link href="#contact" className="btn btn-primary">
                        Download Technical Catalog <span className="material-icons-outlined">download</span>
                    </Link>
                </div>
            </section>
        </>
    );
}
