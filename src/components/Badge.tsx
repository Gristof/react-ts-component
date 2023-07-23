import styles from "./Badge.module.css";

export interface BadgeProps {
	text: string;
	filled?: boolean;
}

export const Badge = ({ text, filled }: BadgeProps) => {
	const filledClass = filled ? styles.filled : "";
	return <small className={`${styles.badge} ${filledClass}`}>{text}</small>;
};
