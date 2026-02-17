import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getSolutionBySlug, automationAndFieldInstrumentation, commercialSolutions } from '../../lib/solutionsData';
import WhatsAppButton from '../../components/WhatsAppButton';
import styles from '../solutions.module.css';

export async function generateStaticParams() {
    const allSolutions = [...automationAndFieldInstrumentation, ...commercialSolutions];
    return allSolutions.map((solution) => ({
        slug: solution.slug,
    }));
}

export default function SolutionDetail({ params }) {
    const { slug } = params;
    const solution = getSolutionBySlug(slug);

    if (!solution) {
        notFound();
    }

    return (
        <section className={styles.section} style={{ paddingTop: '8rem', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="container">
                <Link href="/solutions" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    <span className="material-icons-outlined">arrow_back</span>
                    Back to Solutions
                </Link>

                <div className={styles.grid} style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative', height: '400px', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                        <Image
                            src={solution.image}
                            alt={solution.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        // Fallback image if the specific solution image is missing/broken (optional, dependent on next/image behavior)
                        />
                        {/* Overlay for better text contrast if needed, though this is an image block */}
                    </div>

                    <div>
                        <h1 className={styles.sectionTitle} style={{ textAlign: 'left', marginBottom: '1.5rem' }}>{solution.title}</h1>
                        <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
                            {solution.description}
                        </p>
                        <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
                            We provide top-tier {solution.title.toLowerCase()} services tailored to your industrial needs, ensuring efficiency, safety, and reliability. Contact us today for a customized quote.
                        </p>

                        <WhatsAppButton title={solution.title} className="btn btn-primary" />
                    </div>
                </div>
            </div>
        </section>
    );
}

