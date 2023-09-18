import style from './Cards.module.scss'

const Cards = (props) => {

	const li = !props.cards ? <div className={style.loading}>Loading...</div>
		: props.isLikedArrayCardsEmpty ? <div className={style.emptyCards}>Нет выбранных напитков</div>

			: props.cards.map(el => (
				<li className={style.card} key={el.idDrink}>
					<div className={style.card__item}>
						<div className={style.card__imagewrapper}>
							<img src={el.strDrinkThumb} alt={el.strDrink} />
						</div>
						<div className={style.card__description}>
							<div className={style.card__titlewrapper}>
								<h2 className={style.card__title}>{el.strDrink}</h2>
								<span className={style.card__id}>art. {el.idDrink}</span>
							</div>
							<div className={style.card__buttons}>
								<button className={style.card__like} onClick={() => props.like(el.idDrink)}>
									<svg className={style.card__svg} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path className={style.card__svgPath} d="M12 8.22892C12.234 7.10892 13.547 1.99992 17.382 1.99992C19.602 1.99992 22 3.55092 22 7.00292C22 10.9099 18.373 15.4729 12 19.6319C5.627 15.4729 2 10.9099 2 7.00292C2 3.51892 4.369 1.99792 6.577 1.99792C10.5 1.99792 11.722 7.12392 12 8.22892ZM0 7.00292C0 11.0709 3.06 16.4839 12 21.9999C20.94 16.4839 24 11.0709 24 7.00292C24 -0.959077 14.352 -2.02508 12 3.26592C9.662 -1.99608 0 -1.00408 0 7.00292Z" fill={el.isLike ? 'red' : '#fff'} />
										<path d="M12 8.22892C12.234 7.10892 13.547 1.99992 17.382 1.99992C19.602 1.99992 22 3.55092 22 7.00292C22 10.9099 18.373 15.4729 12 19.6319C5.627 15.4729 2 10.9099 2 7.00292C2 3.51892 4.369 1.99792 6.577 1.99792C10.5 1.99792 11.722 7.12392 12 8.22892Z" fill={el.isLike ? 'red' : ''} />
									</svg>
								</button>
							</div>
						</div>
					</div >
				</li >
			))

	return (
		<section className={style.barmenu}>
			<div className="container">
				<ul className={style.cards}>
					{li}
				</ul>
			</div>
		</section>
	)
}

export default Cards