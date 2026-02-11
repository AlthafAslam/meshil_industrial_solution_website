import Link from 'next/link';
import styles from './solutions.module.css';

export const metadata = {
    title: 'Industrial Solutions | Meshil Industrial',
    description: 'Turnkey industrial automation solutions including robotic automation, safety engineering, and control systems.',
};

export default function Solutions() {
    const solutions = [
        {
            title: "🤖 Robotic Duct Inspection",
            description: "Advanced micro-robots navigate your entire duct system, capturing HD video footage to identify blockages, contamination, and structural issues before cleaning begins.",
            features: ["Complete system visibility", "Identify hidden problems", "Document before/after results", "No guesswork involved"]
        },
        {
            title: "🌪️ Intensive Deep Cleaning",
            description: "Powerful robotic cleaning removes years of accumulated dust, debris, mold, bacteria, and pest remnants that block airflow and compromise your indoor air quality.",
            features: ["Eliminates allergens and pathogens", "Restores optimal airflow", "Reduces airborne diseases", "Improves HVAC efficiency"]
        },
        {
            title: "🛡️ Professional Disinfection",
            description: "Specialized sealant coating prevents future contamination buildup, extends system cleanliness, and maintains peak HVAC performance for longer periods between cleanings.",
            features: ["Kills 99.9% of pathogens", "Prevents illness spread", "Safe for occupied spaces", "Long-lasting protection"]
        },
        {
            title: "💧 Protective Sealant Application",
            description: "Advanced PLC programming, HMI development, and SCADA implementation for centralized industrial oversight.",
            features: ["Prevents dust accumulation", "Extends cleaning intervals", "Protects duct integrity", "Maintains air quality"]
        },
        {
            title: "🔧 Expert Maintenance",
            description: "Scheduled maintenance programs keep your HVAC ducts consistently clean and efficient, preventing problems before they start and ensuring year-round optimal air quality and performance.",
            features: ["Preventive care approach", "Customized maintenance schedules", " Reduces emergency repairs", "Maximizes system lifespan"]
        },
        {
            title: "📹 Video Documentation Service",
            description: "Receive comprehensive before-and-after video reports of your entire duct system, providing transparency and proof of the thorough cleaning and improvement achieved.",
            features: ["Full transparency guaranteed", "Visual proof of results", "Compliance documentation", "Shareable reports"]
        }
    ];

    const industries = ["Oil & Gas", "Chemical", "Automotive", "F&B", "Pharma", "Logistics"];

    return (
        <>
            <section className={styles.header}>
                <div className="container">
                    <h1 className={styles.sectionTitle}>Industrial Robotics & Safety Engineering</h1>
                    <p className={styles.subtitle}>
                        Based in Saudi Arabia, Meshil provides turnkey industrial automation solutions. We combine advanced robotics with world-class safety protocols to optimize your manufacturing ecosystem.
                    </p>
                    <Link href="#contact" className="btn btn-primary" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)' }}>
                        Discuss Your Project
                    </Link>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Our Core Solutions</h2>
                    <div className={styles.grid}>
                        {solutions.map((sol, index) => (
                            <div key={index} className={styles.card}>
                                <h3 className={styles.cardTitle}>{sol.title}</h3>
                                <p className={styles.cardText}>{sol.description}</p>
                                <ul className={styles.featureList}>
                                    {sol.features.map((feature, idx) => (
                                        <li key={idx}><span className={styles.checkIcon}>✓</span> {feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section} style={{ backgroundColor: 'var(--light-gray)' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Industry-Specific Expertise</h2>
                    <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem', color: '#666' }}>
                        We deliver tailored solutions across diverse industrial domains, ensuring compliance with both local and international standards.
                    </p>
                    <div className={styles.industries}>
                        {industries.map((ind, index) => (
                            <span key={index} className={styles.industryTag}>{ind}</span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
