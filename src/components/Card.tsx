import { Badge, BadgeProps } from "./Badge";
import { Link, LinkProps } from "./Link";
import styles from "./Card.module.css";

interface CardProps {
	indicator?: string;
	badge?: BadgeProps;
	image?: {
		src: string;
		alt: string;
	};
	title: string;
	subtitle?: string;
	body: string;
	link: LinkProps;
}
export const Card = ({ body, link, title, badge, image, indicator, subtitle }: CardProps) => {
	return (
		<article className={`stack-lg ${styles.card}`}>
			{indicator && <small className={styles.indicator}>{indicator}</small>}
			{badge && <Badge text={badge.text} filled={badge.filled}></Badge>}
			{image && <img src={image.src} alt={image.alt} className={styles.image} />}
			<div className="stack-sm">
				<h3 className={styles.title}>{title}</h3>
				{subtitle && <small className={styles.subtitle}>{subtitle}</small>}
			</div>
			<p className={styles.body}>{body}</p>
			<Link filled={link.filled} variant={link.variant} text={link.text} href={link.href} icon={link.icon} />
		</article>
	);
};
