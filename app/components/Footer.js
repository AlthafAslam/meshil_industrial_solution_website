import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.column}>
                    <h3 className={styles.footerTitle}>Meshil Industrial</h3>
                    <p className={styles.footerText}>
                        Pioneering industrial robotics and safety solutions across Saudi Arabia.
                    </p>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Company</h4>
                    <ul className={styles.linkList}>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/solutions">Our Projects</a></li>
                        <li><a href="/careers">Careers</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Services</h4>
                    <ul className={styles.linkList}>
                        <li><a href="/solutions">Robotic Integration</a></li>
                        <li><a href="/solutions">Safety Consultation</a></li>
                        <li><a href="/solutions">Machine Vision</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Contact</h4>
                    <p className={styles.footerText}>Industrial Area Phase 2,<br />Riyadh, Saudi Arabia</p>
                    <p className={styles.footerText}>+966 11 000 0000</p>
                </div>
            </div>
            <div className={`container ${styles.copyright}`}>
                <p>© 2024 Meshil Industrial Solutions. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
