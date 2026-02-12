import Image from 'next/image';
import Link from 'next/link';
import styles from './solutions.module.css';

export const metadata = {
    title: 'Industrial Solutions | Meshil Industrial',
    description: 'Turnkey industrial automation solutions including robotic automation, safety engineering, and control systems.',
};

export default function Solutions() {
    const coreSolutions = [
        {
            icon: 'precision_manufacturing',
            title: 'Robotic Duct Inspection',
            description: 'Advanced micro-robots navigate your entire duct system, capturing HD video footage to identify blockages, contamination, and structural issues before cleaning begins.',
            features: [
                'Complete system visibility',
                'Identify hidden problems',
                'Document before/after results',
                'No guesswork involved',

            ]
        },
        {
            icon: 'cleaning_services',
            title: 'Intensive Deep Cleaning',
            description: 'Powerful robotic cleaning removes years of accumulated dust, debris, mold, bacteria, and pest remnants that block airflow and compromise your indoor air quality.',
            features: [
                'Eliminates allergens and pathogens',
                'Restores optimal airflow',
                'Reduces airborne diseases',
                'Improves HVAC efficiency'
            ]
        },
        {
            icon: 'eco',
            title: 'Professional Disinfection',
            description: 'Hospital-grade disinfection treatment eliminates harmful bacteria, viruses, and mold spores throughout your ductwork, creating a healthier environment for employees and guests.',
            features: [
                'Kills 99.9% of pathogens',
                'Prevents illness spread',
                'Safe for occupied spaces',
                'Long-lasting protection'
            ]
        },
        {
            icon: 'build',
            title: 'Inspected video footage',
            description: 'Comprehensive service level agreements to ensure zero downtime for your critical operations.',
            features: [
                '',
                '',
                '',
                ''
            ]
        },
        {
            icon: 'build',
            title: 'Maintenance & Support',
            description: 'Comprehensive service level agreements to ensure zero downtime for your critical operations.',
            features: [
                '24/7 Technical Support',
                'Preventive Maintenance',
                'Spare Parts Management',
                'Remote Diagnostics'
            ]
        }
    ];

    const industries = [
        'Oil & Gas',
        'Chemical Processing',
        'Automotive Manufacturing',
        'Food & Beverage',
        'Pharmaceuticals',
        'Logistics & Warehousing'
    ];

    const automationAndFieldInstrumentation = [
        'Cooling Towers',
        'Air Handling Units',
        'Pumps & Motors',
        'Valves & Actuators',
        'Flow Meters',
        'Level Transmitters',
        'Pressure Transmitters',
        'Temperature Sensors',
        'Control Panels',
        'SCADA Systems',
        'PLC Programming',
        'HMI Development',
        'Safety Systems',
        'Robotic Automation',
        'Vision Systems',
        'Data Acquisition',
        'Remote Monitoring',
        'System Integration',
        'Maintenance & Support',
        'Spare Parts Management',
        'Remote Diagnostics'
    ];

    const commercialSolutions = [
        'Raised access floors',
        'Fire Alarm Systems',
        'Security Systems',
        'Industrial lighting',
        'Modular office systems',
        'Cable Management Systems',
        'HVLC fans',
        'Smart access control',
        'CCTV Systems',
        'Data Center Solutions',
        'Electrical Solutions',
        'Plumbing Solutions',
        'Maintenance & Support',
        'Spare Parts Management',
        'Remote Diagnostics'
    ];

    return (
        <>
            <section className={styles.hero}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <Image
                        src="/images/hero-bg.jpg"
                        alt="Industrial Solutions Background"
                        fill
                        style={{ objectFit: 'cover', opacity: 0.1 }}
                        priority
                    />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(235, 197, 75, 0.1)', borderRadius: '50px', border: '1px solid rgba(235, 197, 75, 0.2)', marginBottom: '2rem' }}>
                        <span style={{ color: '#EBC54B', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Turnkey Solutions</span>
                    </div>
                    <h1 className={styles.title}>Industrial Robotics & Safety Engineering</h1>
                    <p className={styles.subtitle}>
                        Based in Saudi Arabia, Meshil provides turnkey industrial automation solutions. We combine advanced robotics with world-class safety protocols to optimize your manufacturing ecosystem.
                    </p>
                    <Link href="#contact" className="btn btn-primary">
                        Discuss Your Project <span className="material-icons-outlined">arrow_forward</span>
                    </Link>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span style={{ color: 'var(--accent-color)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem' }}>What We Offer</span>
                        <h2 className={styles.sectionTitle}>Core Solutions</h2>
                    </div>
                    <div className={styles.grid}>
                        {coreSolutions.map((solution, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.cardIcon}>
                                    <span className="material-icons-outlined">{solution.icon}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{solution.title}</h3>
                                <p className={styles.cardText}>{solution.description}</p>
                                <ul className={styles.featureList}>
                                    {solution.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <span className="material-icons-outlined" style={{ fontSize: '1.25rem', color: 'var(--accent-color)' }}>check_circle</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.industriesSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Industry-Specific Expertise</h2>
                    <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
                        We deliver tailored solutions across diverse industrial domains, ensuring compliance with both local and international standards.
                    </p>
                    <div className={styles.industries}>
                        {industries.map((industry, index) => (
                            <div key={index} className={styles.industryTag}>
                                <span className="material-icons-outlined">factory</span>
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.industriesSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Automation & Field instrumentation</h2>

                    <div className={styles.industries}>
                        {automationAndFieldInstrumentation.map((industry, index) => (
                            <div key={index} className={styles.industryTag}>
                                <span ><p> ✓</p></span>
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.industriesSection}>
                <div className="container">
                    <h4 className={styles.sectionTitle}>Commercial Solutions</h4>
                    {/* <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
                        We deliver tailored solutions across diverse industrial domains, ensuring compliance with both local and international standards.
                    </p> */}
                    <div className={styles.industries}>
                        {commercialSolutions.map((industry, index) => (
                            <div key={index} className={styles.industryTag}>
                                {/* <span className="material-icons-outlined">factory</span> */}
                                <span><p>✦</p></span>
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className={styles.sectionTitle} style={{ color: 'white', marginBottom: '1.5rem' }}>Ready to Transform Your Operations?</h2>
                        <p style={{ color: '#cbd5e1', fontSize: '1.125rem', marginBottom: '2.5rem' }}>
                            Connect with our engineering team to discuss your automation requirements and receive a customized solution proposal.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="#contact" className="btn btn-primary">
                                Schedule Consultation <span className="material-icons-outlined">calendar_today</span>
                            </Link>
                            <Link href="/technology" className="btn btn-outline">
                                View Technology <span className="material-icons-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}
