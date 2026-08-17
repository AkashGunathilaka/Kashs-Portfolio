type CharacterStatProps = {
    icon: string;
    label: string;
    level: number;
    maxLevel?: number;
};

export default function CharacterStat({
    icon,
    label,
    level,
    maxLevel = 7,
} : CharacterStatProps) {
    const percentage = (level / maxLevel) * 100;

    return (
        <div className="character-stat">
            <div className="character-stat-header">
                <span>{icon}</span>
                <span>{label}</span>
                <span>{level}/{maxLevel}</span>
            </div>
            <div className="character-stat-bar">
                <div className="character-stat-fill"
                style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    ) }