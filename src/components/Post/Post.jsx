import React from 'react';
import styles from './styles/Post.module.scss';

const Post = () => {
	return (
	<article className={styles.post__container}>
		<ul className={styles.post__tag__wrapper}>
			<li className={styles.post__tag}>Tag1</li>
			<li className={styles.post__tag}>Tag1</li>
			<li className={styles.post__tag}>Tag1</li>
		</ul>
		<h2 className={styles.post__title}>Titulo del Articulo</h2>
		<span className={styles.post__date}>02.01.2023</span>
		<main className={styles.post__content}>
			<p className={styles.post__paragraph}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae reprehenderit commodi, quod dolor totam dicta dolorum maiores quia assumenda accusantium perferendis saepe corrupti obcaecati consequatur id at maxime deserunt blanditiis accusamus? Possimus quisquam, consectetur laboriosam harum blanditiis officia expedita nisi fuga a unde cumque neque nihil. Ipsam officiis enim temporibus.</p>
			<p className={styles.post__paragraph}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aperiam velit voluptas harum, eveniet excepturi ducimus quia necessitatibus omnis, quae mollitia? Minus explicabo dolore nam optio, provident dolor commodi saepe, pariatur enim autem voluptatibus exercitationem! Iusto quae corporis quasi provident.</p>
			<p className={styles.post__paragraph}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut consequatur odit necessitatibus est incidunt suscipit eligendi quae asperiores in aut officiis cupiditate sequi, aliquam magnam a accusamus. Nisi similique cumque nulla fugit quibusdam? Nemo quia tempora veniam, excepturi iste aliquid ducimus quisquam quo esse dolor officiis laboriosam hic eum possimus.</p>
			<p className={styles.post__sign}>The Jack of all trades<br/>L. A. Mendez</p>
		</main>

	</article >
	);
};

export default Post;
