import { CardInfoStyle } from './CardInfoStyle';
import { useTranslation } from 'react-i18next';

interface EducationItem {
    id: number;
    school: string;
    degree: string;
    year: string;
    icon: string;
}

const EducationTimeline = () => {
    const { t } = useTranslation();
    const educationData = t('cardInfo.educationData', { returnObjects: true }) as EducationItem[];

    return (
        <div style={CardInfoStyle.wrapper}>
            {educationData.map((item: EducationItem, idx: number) => (
                <div key={item.id} style={CardInfoStyle.timelineItem}>
                    {/* Timeline column */}
                    <div style={CardInfoStyle.timelineCol}>
                        {/* Dot */}
                        <div style={CardInfoStyle.dot} />
                        {/* Line */}
                        {idx < educationData.length - 1 && (
                            <div style={CardInfoStyle.line} />
                        )}
                    </div>

                    {/* Content */}
                    <div style={{
                        ...CardInfoStyle.contentWrapper,
                        paddingBottom: idx < educationData.length - 1 ? '32px' : '0',
                    }}>
                        <div style={CardInfoStyle.card}>
                            {/* Year badge */}
                            <span style={CardInfoStyle.yearBadge}>
                                <span>{item.icon}</span>
                                {item.year}
                            </span>

                            <h3 style={CardInfoStyle.schoolTitle}>
                                {item.school}
                            </h3>
                            <p style={CardInfoStyle.degreeText}>
                                {item.degree}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EducationTimeline;