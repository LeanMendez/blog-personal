import React from 'react';
import styles from './styles/Footer.module.scss';

const Footer = () => {
	return (
	<div className={styles.footer__container} >
		<ul className={styles.footer__articles__container}>
			<li>Aca van las diferentes entradas del blog</li>
			<li>Aca van las diferentes entradas del blog</li>
			<li>Aca van las diferentes entradas del blog</li>
			<li>Aca van las diferentes entradas del blog</li>
			<li>Aca van las diferentes entradas del blog</li>
			<li>Aca van las diferentes entradas del blog</li>
		</ul>
		<section className={styles.footer__suscribe__container}>
			<span className={styles.footer__suscribe__text}>SUBSCRIBE</span>
		</section>
	</div >
	);
};

export default Footer;
