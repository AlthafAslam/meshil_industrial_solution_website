import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
    title: 'Meshil Industrial Solutions',
    description: 'Engineering Tomorrow’s Industrial Excellence. Pioneering industrial robotics and safety solutions across Saudi Arabia.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main style={{ minHeight: 'calc(100vh - 300px)', paddingTop: 'var(--header-height)' }}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
