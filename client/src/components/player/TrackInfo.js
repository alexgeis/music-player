import styles from "./TrackInfo.module.css";

export const TrackInfo = ({ title, artist = "", album = "" }) => {
	return (
		<div className={styles.trackInfoWrapper}>
			<h1 className={styles.title}>{title}</h1>
			<h1 className={styles.artist}>{artist}</h1>
			<h1 className={styles.album}>{album}</h1>
		</div>
	);
};
