import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Input from '../../Components/Input/Input';
import { ContactStyle } from './ContactStyle';
import { useContact } from '../../../ViewModel/useContact';
import { useTranslation } from 'react-i18next';

const SocialLink = ({ label, href }: { label: string; href: string }) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                ...ContactStyle.socialLink,
                color: isHover ? "#ffffff" : "#94a3b8",
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {label}
        </a>
    );
};

const EmailLink = ({ email }: { email: string }) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <a
            href={`mailto:${email}`}
            style={{
                ...ContactStyle.infoValue,
                color: isHover ? "#60a5fa" : "#f1f5f9",
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {email}
        </a>
    );
};

const Contact = () => {
    const { t } = useTranslation();
    const {
        email, name, message, isLoading, submitted, isFormValid, errors,
        handleChangeField, handleSend
    } = useContact();

    const [searchParams] = useSearchParams();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    useEffect(() => {
        const project = searchParams.get('project');
        if (project) {
            handleChangeField('message', `${t('contactPage.projectTemplate')}"${project}".`);
        }
    }, [searchParams, t]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 768;

    return (
        <div style={{
            ...ContactStyle.container,
            flexDirection: isMobile ? "column" : "row",
            marginTop: isMobile ? "80px" : "140px",
            minHeight: isMobile ? "auto" : "600px",
            borderRadius: isMobile ? "16px" : "24px",
        }}>
            {/* Left Panel */}
            <div style={{
                ...ContactStyle.leftPanel,
                width: isMobile ? "100%" : "40%",
                padding: isMobile ? "32px 24px" : "48px 40px",
            }}>
                <div style={ContactStyle.leftTop}>
                    <h2 style={ContactStyle.heading}>{t('contactPage.heading')}</h2>
                    <p style={ContactStyle.subheading}>
                        {t('contactPage.subheading')}
                    </p>

                    <div style={ContactStyle.infoList}>
                        <div style={ContactStyle.infoItem}>
                            <h3 style={ContactStyle.infoLabel}>{t('contactPage.emailLabel')}</h3>
                            <EmailLink email="t.huy030826@gmail.com" />
                        </div>
                        <div style={ContactStyle.infoItem}>
                            <h3 style={ContactStyle.infoLabel}>{t('contactPage.phoneLabel')}</h3>
                            <span style={ContactStyle.infoValue}>093.222.4895</span>
                        </div>
                        <div style={ContactStyle.infoItem}>
                            <h3 style={ContactStyle.infoLabel}>{t('contactPage.locationLabel')}</h3>
                            <span style={ContactStyle.infoValue}>{t('contactPage.location')}</span>
                        </div>
                    </div>
                </div>

                <div style={ContactStyle.socialLinks}>
                    <SocialLink label="LinkedIn" href="https://www.linkedin.com/in/tan-huy-673408342/" />
                    <SocialLink label="GitHub" href="https://github.com" />
                    <SocialLink label={t('contactPage.resume')} href="#" />
                </div>
            </div>

            {/* Right Panel: Contact Form */}
            <div style={{
                ...ContactStyle.rightPanel,
                padding: isMobile ? "32px 24px" : "48px 60px",
            }}>
                <Input
                    title={t('contactPage.form.nameLabel')}
                    placeholder={t('contactPage.form.namePlaceholder')}
                    titleStyle={ContactStyle.inputTitle}
                    value={name}
                    onChangeText={(val) => handleChangeField("name", val)}
                    errorMessage={submitted ? errors.name : undefined}
                />

                <Input
                    title={t('contactPage.form.emailLabel')}
                    placeholder={t('contactPage.form.emailPlaceholder')}
                    titleStyle={ContactStyle.inputTitle}
                    value={email}
                    onChangeText={(val) => handleChangeField("email", val)}
                    errorMessage={submitted ? errors.email : undefined}
                />

                <Input
                    title={t('contactPage.form.messageLabel')}
                    placeholder={t('contactPage.form.messagePlaceholder')}
                    statusCountText={true}
                    maxLength={200}
                    multiline={true}
                    titleStyle={ContactStyle.inputTitle}
                    value={message}
                    onChangeText={(val) => handleChangeField("message", val)}
                    errorMessage={submitted ? errors.message : undefined}
                />

                <button
                    onClick={handleSend}
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                    style={{
                        ...ContactStyle.buttonBase,
                        background: isFormValid
                            ? (isLoading ? "var(--accent)" : "var(--accent)")
                            : "var(--border)",
                        color: isFormValid ? "#ffffff" : "var(--text)",
                        cursor: isLoading ? "wait" : (isFormValid ? "pointer" : "not-allowed"),
                        opacity: isLoading ? 0.7 : (isFormValid ? (isButtonHovered ? 0.9 : 1) : 0.6),
                        transform: isButtonHovered && isFormValid && !isLoading ? "translateY(-1px)" : "none",
                        boxShadow: isButtonHovered && isFormValid && !isLoading ? "0 4px 12px rgba(0,0,0,0.15)" : "none",
                    }}
                    disabled={!isFormValid || isLoading}
                >
                    {isLoading ? t('contactPage.form.sending') : t('contactPage.form.send')}
                </button>
            </div>
        </div>
    );
};

export default Contact;