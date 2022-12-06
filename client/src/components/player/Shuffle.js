import styles from "./Shuffle.module.css";

export const Shuffle = ({ src, onClick }) => {
	return (
		<img
			className={styles.shuffle}
			src={src}
			onClick={onClick}
			alt="shuffle music icon"
		/>
	);
};
