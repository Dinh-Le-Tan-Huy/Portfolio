import { useState, useEffect } from "react";
import { styles } from "./FooterStyle";


const links = [
    { label: 'Email', href: 'mailto:t.huy030826@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tan-huy-673408342/' },
    { label: 'Instagram', href: 'https://www.instagram.com/t.huy0308/' },
    { label: 'Github', href: 'https://github.com/Dinh-Le-Tan-Huy' },
    { label: 'Facebook', href: 'https://www.facebook.com/HuyLe0326/' },
];

const Footer = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 768;

    return (
        <footer style={styles.footer}>
            <div style={isMobile ? styles.topRowMobile : styles.topRow}>
                <h2 style={styles.name}>Huy Lê Developer</h2>
                <div style={isMobile ? styles.linkListMobile : styles.linkList}>
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            style={styles.link}
                            onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
            <hr style={styles.divider} />
            <div style={isMobile ? styles.bottomRowMobile : styles.bottomRow}>
                <p style={styles.copyright}>© All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;