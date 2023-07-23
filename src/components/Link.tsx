import { ReactNode } from "react";
import styles from "./Link.module.css";

export interface LinkProps {
	text: string;
	variant: "primary" | "secondary";
	href: string;
	filled?: boolean;
	icon?: ReactNode;
}

export const Link = ({ text, variant, href, filled, icon }: LinkProps) => {
	const filledClass = filled ? styles.filled : "";
	return (
		<a href={href} className={`${styles.link} ${styles[variant]} ${filledClass}`}>
			<span>{text}</span>
			{icon}
		</a>
	);
};
