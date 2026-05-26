import { Link } from "react-router-dom"
import CardInfo from "../../Components/CardInfo/CardInfo"
import CardItem from "../../Components/CardItem/CardItem"
import { styles, sectionBadge, sectionTitle, sectionDivider } from "./AboutStyle"
import { Colors } from "../../DesignSystem/Colors"
import { useAbout } from "../../../ViewModel/useAbout"
import ChatBubbleItem from "../../Components/ChatBubbleItem/ChatBubbleItem"
import { useTranslation } from "react-i18next"

const About = () => {
    const { highlightedId, btnHover, setBtnHover, opentIndex, setOpentIndex } = useAbout();
    const { t } = useTranslation()

    const skillsData = t('aboutPage.skillsData', { returnObjects: true }) as any[];
    const projectsData = t('aboutPage.projectsData', { returnObjects: true }) as any[];
    const educationData = t('aboutPage.educationData', { returnObjects: true }) as any[];
    const awardsData = t('aboutPage.awardsData', { returnObjects: true }) as any[];
    const clientFAQs = t('aboutPage.clientFAQs', { returnObjects: true }) as any[];

    return (
        <section id="about" style={styles.mainSection}>
            <div style={styles.contentContainer}>

                {/* Hero Header */}
                <div style={styles.headerContainer}>
                    <h1 style={styles.headerTitle}>
                        {t('aboutPage.greeting')}<span style={styles.headerSpan}>{t('aboutPage.nameIntro')}</span>
                    </h1>
                    <p style={styles.headerText}>
                        {t('aboutPage.introText')}
                    </p>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <button
                            style={{
                                ...styles.contactBtn,
                                transform: btnHover ? 'scale(1.03) translateY(-2px)' : 'none',
                                boxShadow: btnHover ? `0 8px 30px ${Colors.cyanGlow}` : `0 4px 20px ${Colors.cyanGlow}`,
                            }}
                            onMouseEnter={() => setBtnHover(true)}
                            onMouseLeave={() => setBtnHover(false)}
                        >
                            {t('aboutPage.contactMe')}
                        </button>
                    </Link>
                </div>

                {/* Education section */}
                <div style={styles.sectionWrapper}>
                    <div style={sectionBadge}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                        </svg>
                        {t('aboutPage.badges.education')}
                    </div>
                    <h2 style={sectionTitle}>{t('aboutPage.titles.academicBackground')}</h2>
                    <div style={sectionDivider} />
                    <div style={{ width: '100%' }}>
                        <CardInfo />
                    </div>
                </div>

                {/* Skills section */}
                <div style={styles.sectionWrapper}>
                    <div style={sectionBadge}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                        </svg>
                        {t('aboutPage.badges.skills')}
                    </div>
                    <h2 style={sectionTitle}>{t('aboutPage.titles.technicalSkills')}</h2>
                    <div style={sectionDivider} />

                    <div style={styles.gridContainer}>
                        {skillsData.map((item: any) => (
                            <CardItem
                                key={item.id}
                                title={item.title}
                                des={item.des}
                                responsibilities={item.responsibilities}
                                variant="note"
                                containerStyle={{}}
                            />
                        ))}
                    </div>
                </div>

                {/* Experience section */}
                <div style={styles.sectionWrapper}>
                    <div style={sectionBadge}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 6h-2.18c.07-.44.18-.88.18-1.34C18 2.54 15.96.5 13.5.5c-1.3 0-2.41.53-3.25 1.35L9 3.08 7.75 1.85C6.91.53 5.8 0 4.5 0 2.04 0 0 2.04 0 4.5c0 .46.11.9.18 1.34H0v13c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM13.5 2.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H10l1.22-1.22c.42-.42.99-.66 1.58-.66l.7-.12zM2 4.5C2 3.67 2.67 3 3.5 3c.58 0 1.1.23 1.5.62L6.22 4.9 6.5 5H5l-.08-.01C3.9 4.94 2 4.18 2 4.5z" />
                        </svg>
                        {t('aboutPage.badges.experience')}
                    </div>
                    <h2 style={sectionTitle}>{t('aboutPage.titles.professionalHistory')}</h2>
                    <div style={sectionDivider} />

                    <div style={styles.listContainer}>
                        {projectsData.map((item: any) => {
                            const trimmedTitle = item.title.trim();
                            const isSelected = highlightedId === trimmedTitle;
                            return (
                                <div
                                    key={item.id}
                                    id={trimmedTitle}
                                    style={{
                                        width: '100%',
                                        borderRadius: '16px',
                                        transition: 'all 0.5s ease',
                                        boxShadow: isSelected ? `0 0 25px ${Colors.cyanGlow}` : 'none',
                                        border: isSelected ? `1px solid ${Colors.cyan}` : '1px solid transparent',
                                    }}
                                >
                                    <CardItem
                                        title={item.title}
                                        des={item.des}
                                        responsibilities={item.responsibilities}
                                        time={item.time}
                                        containerStyle={{}}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Certificates & Specialized Courses, Languages */}
                <div style={styles.sectionWrapper}>
                    <div style={sectionBadge}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="m9 12 2 2 4-4" />
                        </svg>
                        {t('aboutPage.badges.certificates')}
                    </div>
                    <h2 style={sectionTitle}>{t('aboutPage.titles.coursesAndLanguages')}</h2>
                    <div style={sectionDivider} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0', width: '100%' }}>
                        {educationData.map((item: any, idx: number) => (
                            <div key={item.id} style={{ display: 'flex', gap: '16px', position: 'relative' }}>
                                {/* Timeline column */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '32px', flexShrink: 0 }}>
                                    {/* Dot */}
                                    <div style={{
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        backgroundColor: Colors.cyan,
                                        boxShadow: `0 0 10px ${Colors.cyanGlow}`,
                                        marginTop: '18px',
                                        flexShrink: 0,
                                        zIndex: 1,
                                    }} />
                                    {/* Line */}
                                    {idx < educationData.length - 1 && (
                                        <div style={{
                                            width: '1px',
                                            flex: 1,
                                            background: `linear-gradient(to bottom, ${Colors.cyanBorder}, transparent)`,
                                            marginTop: '6px',
                                        }} />
                                    )}
                                </div>

                                {/* Content */}
                                <div style={{
                                    flex: 1,
                                    paddingBottom: idx < educationData.length - 1 ? '32px' : '0',
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '6px',
                                        padding: '14px 18px',
                                        borderRadius: '12px',
                                        background: Colors.glassSurface,
                                        border: `1px solid ${Colors.glassBorder}`,
                                        transition: 'border-color 0.3s ease',
                                    }}>
                                        {/* Badge */}
                                        <span style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            padding: '3px 10px',
                                            backgroundColor: Colors.cyanDim,
                                            border: `1px solid ${Colors.cyanBorder}`,
                                            borderRadius: '99px',
                                            fontSize: '11px',
                                            fontWeight: 700,
                                            color: Colors.cyan,
                                            letterSpacing: '0.06em',
                                            width: 'fit-content',
                                            marginBottom: '4px',
                                        }}>
                                            <span>{item.id === "edu_lang_02" ? "🌐" : "📜"}</span>
                                            {item.des}
                                        </span>

                                        <h3 style={{
                                            fontSize: 'clamp(14px, 1.8vw, 16px)',
                                            fontWeight: 700,
                                            margin: 0,
                                            color: Colors.textPrimary,
                                            fontFamily: "'Inter', sans-serif",
                                        }}>
                                            {item.title}
                                        </h3>

                                        <ul style={{
                                            margin: '6px 0 0 0',
                                            paddingLeft: '20px',
                                            color: Colors.textSecondary,
                                            fontSize: '13px',
                                            lineHeight: 1.6,
                                            fontFamily: "'Inter', sans-serif",
                                        }}>
                                            {item.responsibilities.map((resp: string, rIdx: number) => (
                                                <li key={rIdx} style={{ marginBottom: '4px' }}>{resp}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Awards section */}
                <div style={styles.sectionWrapper}>
                    <div style={sectionBadge}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        {t('aboutPage.badges.awards')}
                    </div>
                    <h2 style={sectionTitle}>{t('aboutPage.titles.honorsAndRecognition')}</h2>
                    <div style={sectionDivider} />

                    <div style={styles.gridContainer2Col}>
                        {awardsData.map((item: any) => (
                            <CardItem
                                key={item.id}
                                title={item.title}
                                des={item.des}
                                responsibilities={item.responsibilities}
                                variant="note"
                                containerStyle={{}}
                            />
                        ))}
                    </div>
                </div>
                <div id="FAQ" style={styles.sectionWrapper}>
                    <div style={sectionBadge}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        {t('aboutPage.badges.faq')}
                    </div>
                    <h2 style={sectionTitle}>{t('aboutPage.titles.frequentlyAskedQuestions')}</h2>
                    <div style={sectionDivider} />

                    <div style={styles.faqContainer}>
                        {clientFAQs.map((faq: any, index: number) => (
                            <ChatBubbleItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={opentIndex === index}
                                onToggle={() => setOpentIndex(opentIndex === index ? null : index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About