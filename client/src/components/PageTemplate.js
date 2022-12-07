import styles from "./PageTemplate.module.css";

export const PageTemplate = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};
