import styles from "./Next.module.css";

export const Next = ({ src, onClick }) => {
	return (
		<img
			className={styles.next}
			src={src}
			onClick={onClick}
			alt="next music icon"
		/>
	);
};
