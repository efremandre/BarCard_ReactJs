import style from './Favorite.module.scss'

const Favorite = (props) => {
	return (
		<div className={style.favorite}>
			<button className={style.favorite__close}>x</button>
			<h2 className={style.favorite__title}>Your favorite drinks</h2>
			<ul className={style.favorite__list}></ul>
		</div>
	)
}

export default Favorite