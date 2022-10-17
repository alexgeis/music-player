import styles from "./Previous.module.css";

export const Previous = ({ src, onClick }) => {
	return (
		<img
			className={styles.previous}
			src={src}
			onClick={onClick}
			alt="previous song icon"
		/>
	);
};
