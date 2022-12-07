import styles from "./TrackInfoAndTimeBox.module.css";

export const TrackInfoAndTimeBox = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};
