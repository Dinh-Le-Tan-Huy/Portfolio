import { Typewriter } from 'react-simple-typewriter'
import ChatBubbleItem from '../../Components/ChatBubbleItem/ChatBubbleItem'
import { styles, sectionBadge, sectionTitle, sectionDivider } from './HomeStyle'
import { useState, useEffect } from 'react'
import CardItem from '../../Components/CardItem/CardItem'
import CardInfo from '../../Components/CardInfo/CardInfo'
import { Colors } from '../../DesignSystem/Colors'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// Filter: highlight the most impactful / technically specific bullet points
const KEY_TECH_FILTER = /Helcim|Socket\.IO|Appstore|Mapbox|Flutter/i


export const Home = () => {
    const { t } = useTranslation()
    const hrFAQs = t('homePage.hrFAQs', { returnObjects: true }) as any[]
    const projectsData = t('projectsData', { returnObjects: true }) as any[]
    const skillsData = t('homePage.skillsData', { returnObjects: true }) as any[]
    const typewriterWords = t('homePage.typewriter', { returnObjects: true }) as string[]

    const [opentIndex, setOpentIndex] = useState<number | null>(null)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const navigate = useNavigate()
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const isMobile = windowWidth < 768

    return (
        <div style={styles.mainContainer}>

            {/* ════════════════════ HERO ════════════════════ */}
            <div style={styles.summaryContainer}>
                {/* Status badge */}
                <div style={styles.greetingTag}>
                    <span style={styles.greetingDot} />
                    {t('homePage.statusBadge')}
                </div>

                {/* Main heading */}
                <h1 style={styles.greetingTitle}>
                    {t('homePage.greeting1')}<span style={{ color: Colors.cyan }}>Huy</span>{t('homePage.greeting2')}<br />
                    {t('homePage.greeting3')}
                    <span style={styles.highlightText}>
                        <Typewriter
                            words={typewriterWords}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={75}
                            deleteSpeed={45}
                            delaySpeed={1800}
                        />
                    </span>
                </h1>

                {/* Summary description */}
                <p style={styles.summaryDescription}>
                    {t('homePage.summary')}
                </p>

                {/* CTA row */}
                <div style={styles.heroCtas}>
                    <a href="#FAQ" style={styles.heroBtnPrimary}>
                        {t('homePage.askMe')}
                    </a>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '13px',
                        color: Colors.textSecondary,
                    }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
                            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        {t('homePage.location')}
                    </span>
                </div>
            </div>

            {/* ════════════════════ EDUCATION ════════════════════ */}
            <div style={styles.educationSection}>
                <div style={sectionBadge}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                    </svg>
                    {t('homePage.badges.education')}
                </div>
                <h2 style={sectionTitle}>{t('homePage.titles.academicBackground')}</h2>
                <div style={sectionDivider} />
                <CardInfo />
            </div>

            {/* ════════════════════ TECHNICAL SKILLS ════════════════════ */}
            <div style={styles.skillsSection}>
                <div style={sectionBadge}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                    </svg>
                    {t('homePage.badges.skills')}
                </div>
                <h2 style={sectionTitle}>{t('homePage.titles.technicalSkills')}</h2>
                <div style={sectionDivider} />

                <div style={isMobile ? styles.skillsGridMobile : styles.skillsGridDesktop}>
                    {skillsData.map((skill: any) => (
                        <div key={skill.id} style={{ width: '100%' }}>
                            <CardItem
                                key={skill.id}
                                title={skill.title}
                                des={skill.des}
                                time={skill.time}
                                responsibilities={skill.responsibilities}
                                variant="note"
                                containerStyle={{
                                    maxWidth: '100%',
                                    minHeight: '160px',
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* ════════════════════ EXPERIENCES ════════════════════ */}
            <div style={styles.experiencesSection}>
                <div style={sectionBadge}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 6h-2.18c.07-.44.18-.88.18-1.34C18 2.54 15.96.5 13.5.5c-1.3 0-2.41.53-3.25 1.35L9 3.08 7.75 1.85C6.91.53 5.8 0 4.5 0 2.04 0 0 2.04 0 4.5c0 .46.11.9.18 1.34H0v13c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM13.5 2.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H10l1.22-1.22c.42-.42.99-.66 1.58-.66l.7-.12zM2 4.5C2 3.67 2.67 3 3.5 3c.58 0 1.1.23 1.5.62L6.22 4.9 6.5 5H5l-.08-.01C3.9 4.94 2 4.18 2 4.5z" />
                    </svg>
                    {t('homePage.badges.work')}
                </div>
                <h2 style={sectionTitle}>{t('homePage.titles.experience')}</h2>
                <div style={sectionDivider} />

                <div style={styles.experiencesInner}>
                    {projectsData.map((item) => (
                        <CardItem
                            key={item.id}
                            title={item.title}
                            des={item.des}
                            time={item.time}
                            responsibilities={item.responsibilities.filter(resp =>
                                KEY_TECH_FILTER.test(resp)
                            )}
                            onActionClick={() => navigate(`/About?project=${encodeURIComponent(item.title.trim())}`)}
                        />
                    ))}
                </div>
            </div>

            {/* ════════════════════ FAQs ════════════════════ */}
            <div id='FAQ' style={styles.faqSection}>
                <div style={sectionBadge}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-4h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z" />
                    </svg>
                    {t('homePage.badges.faqs')}
                </div>
                <h2 style={sectionTitle}>{t('homePage.titles.frequentlyAsked')}</h2>
                <div style={sectionDivider} />

                <div style={styles.faqContainer}>
                    {hrFAQs.map((faq: any, index: number) => (
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
    )
}
