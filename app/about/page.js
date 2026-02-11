import Link from 'next/link';
import styles from './about.module.css';

export const metadata = {
    title: 'About Us | Meshil Industrial',
    description: 'A leader in industrial robotics and safety systems, Meshil Industrial is dedicated to driving the technological evolution of Saudi Arabia.',
};

export default function About() {
    return (
        <>
            <section className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>About Meshil Industrial Solutions</h1>
                    <p className={styles.subtitle}>
                        A leader in industrial robotics and safety systems, Meshil Industrial is dedicated to driving the technological evolution of the Kingdom of Saudi Arabia’s industrial sector.
                    </p>
                </div>
            </section>

            <section className={styles.section} style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Our Vision & Core Values</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>🛡️</span>
                            <h3 className={styles.valueTitle}>Safety First</h3>
                            <p>Our robotics solutions are designed with human safety as the paramount priority.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>🎯</span>
                            <h3 className={styles.valueTitle}>Unmatched Precision</h3>
                            <p>Engineering excellence through high-end robotic integration and testing.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>🤝</span>
                            <h3 className={styles.valueTitle}>Local Partnership</h3>
                            <p>Supporting Saudi businesses with localized expertise and 24/7 support.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.statsSection}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        <div>
                            <div className={styles.statNumber}>99%</div>
                            <div className={styles.statLabel}>Efficiency Gain</div>
                        </div>
                        <div>
                            <div className={styles.statNumber}>150+</div>
                            <div className={styles.statLabel}>Projects Completed</div>
                        </div>
                        <div>
                            <div className={styles.statNumber}>ISO</div>
                            <div className={styles.statLabel}>Certified Operations</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Our Journey</h2>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineYear}>2015</div>
                            <div className={styles.timelineContent}>
                                <h3>Company Foundation</h3>
                                <p>Meshil Industrial Solutions was founded in Riyadh with a focus on localized safety equipment distribution.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineYear}>2018</div>
                            <div className={styles.timelineContent}>
                                <h3>Robotics Division Launch</h3>
                                <p>Expansion into advanced robotics, partnering with global leaders to bring cutting-edge automation to the Saudi market.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineYear}>2021</div>
                            <div className={styles.timelineContent}>
                                <h3>National Scale-up</h3>
                                <p>Opened new operation centers in Dammam and Jeddah to support the booming industrial regions of the Kingdom.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineYear}>2024</div>
                            <div className={styles.timelineContent}>
                                <h3>Vision 2030 Catalyst</h3>
                                <p>Recognized as a key contributor to the Kingdom's industrial diversification goals under Saudi Vision 2030.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.quoteSection}>
                <div className="container">
                    <blockquote className={styles.quote}>
                        "Our technology doesn't just automate tasks; it elevates the potential of the Saudi workforce."
                    </blockquote>
                    <div className={styles.author}>— CEO, Meshil Industrial</div>
                </div>
            </section>
        </>
    );
}
