import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/logo.png"
                        alt="Meshil Industrial Solutions"
                        width={240}
                        height={240}
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </Link>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/solutions" className={styles.navLink}>Solutions</Link>
                    <Link href="/technology" className={styles.navLink}>Technology</Link>
                    <Link href="/about" className={styles.navLink}>About Us</Link>
                </nav>
                <Link href="#contact" className="btn btn-primary">
                    Get Quote
                </Link>
            </div>
        </header>
    );
}
