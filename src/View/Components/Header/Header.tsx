import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headerstyle } from "./HeaderStyle";
import { DotGrid } from "../Dot";
import { Link } from "react-router-dom";
import { HeaderNav } from "./HeaderData";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
    { code: "en", flag: "🇺🇸", label: "English" },
    { code: "vi", flag: "🇻🇳", label: "Tiếng Việt" },
];

const GlobeIcon = () => (
    <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
    <svg
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
            transition: "transform 0.25s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
        }}
    >
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

const CheckIcon = () => (
    <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const Header = () => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const [gridHover, setGridHover] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [langHover, setLangHover] = useState<string | null>(null);
    const langRef = useRef<HTMLDivElement>(null);

    // Close lang popup on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(e.target as Node)) {
                setLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const currentLang = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

    return (
        <motion.header
            className="header"
            style={Headerstyle.HeaderWrapper}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <Link to="/" style={Headerstyle.LogoLink}>
                <motion.div layout style={Headerstyle.LogoContainer}>
                    <img
                        src="https://ik.imagekit.io/gw4av6kyj/New%20Folder/logo.png"
                        alt="Logo"
                        style={Headerstyle.LogoImg}
                    />
                </motion.div>
            </Link>

            <AnimatePresence mode="popLayout">
                {open && (
                    <motion.div
                        className="containerText"
                        layout
                        style={Headerstyle.ContainerText}
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <div style={Headerstyle.NavListWrapper}>
                            {HeaderNav.map((item, index) => (
                                <Link to={item.path} key={index} style={{ textDecoration: "none" }}>
                                    <span style={Headerstyle.NavLink}>
                                        {t(`nav.${item.key}`)}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div layout className="dot" style={Headerstyle.ContainerButton}>

                {/* ── Language Switcher ── */}
                <div ref={langRef} style={Headerstyle.LangWrapper}>
                    <button
                        style={{
                            ...Headerstyle.LangButton,
                            ...(langOpen
                                ? {
                                      borderColor: "rgba(0,216,255,0.35)",
                                      backgroundColor: "rgba(0,216,255,0.08)",
                                      color: "#00d8ff",
                                  }
                                : {}),
                        }}
                        onClick={() => setLangOpen((v) => !v)}
                        aria-label="Switch language"
                    >
                        <GlobeIcon />
                        <span>{currentLang.flag}</span>
                        <span>{currentLang.code.toUpperCase()}</span>
                        <ChevronIcon open={langOpen} />
                    </button>

                    <AnimatePresence>
                        {langOpen && (
                            <motion.div
                                style={Headerstyle.LangPopup}
                                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                                transition={{ duration: 0.18, ease: "easeOut" }}
                            >
                                <div style={Headerstyle.LangPopupHeader}>
                                    {t("lang.label")}
                                </div>
                                {LANGUAGES.map((lang) => {
                                    const isActive = i18n.language === lang.code;
                                    const isHovered = langHover === lang.code;
                                    return (
                                        <button
                                            key={lang.code}
                                            style={{
                                                ...(isActive
                                                    ? Headerstyle.LangOptionActive
                                                    : Headerstyle.LangOption),
                                                ...(isHovered && !isActive
                                                    ? {
                                                          backgroundColor: "rgba(255,255,255,0.05)",
                                                          color: "#e8edf5",
                                                      }
                                                    : {}),
                                            }}
                                            onClick={() => {
                                                i18n.changeLanguage(lang.code);
                                                setLangOpen(false);
                                            }}
                                            onMouseEnter={() => setLangHover(lang.code)}
                                            onMouseLeave={() => setLangHover(null)}
                                        >
                                            <span style={{ fontSize: "17px", lineHeight: 1 }}>
                                                {lang.flag}
                                            </span>
                                            <span style={{ flex: 1 }}>{lang.label}</span>
                                            {isActive && <CheckIcon />}
                                        </button>
                                    );
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* ── Contact Button ── */}
                <button style={Headerstyle.ButtonContact}>
                    <Link to="/contact" style={Headerstyle.ButtonContactLink}>
                        <span>{t("nav.contact")}</span>
                    </Link>
                </button>

                {/* ── Dot Grid Toggle ── */}
                <button
                    className="buttonDot"
                    style={Headerstyle.ButtonDot}
                    onClick={() => setOpen(!open)}
                    onMouseEnter={() => setGridHover(true)}
                    onMouseLeave={() => setGridHover(false)}
                >
                    <DotGrid hovered={gridHover} open={open} />
                </button>
            </motion.div>
        </motion.header>
    );
};

export default Header;