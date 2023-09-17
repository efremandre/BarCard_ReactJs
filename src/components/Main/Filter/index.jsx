import style from "./Filter.module.scss"

const Filter = (props) => {

	return (
		<div className={style.filter}>
			<div className='container'>
				<div className={style.filter__wrapper}>
					<button className={style.filter__button} onClick={() => { props.likeFilter() }}>
						<svg className={style.card__svg} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path className={style.card__svgPath} d="M12 8.22892C12.234 7.10892 13.547 1.99992 17.382 1.99992C19.602 1.99992 22 3.55092 22 7.00292C22 10.9099 18.373 15.4729 12 19.6319C5.627 15.4729 2 10.9099 2 7.00292C2 3.51892 4.369 1.99792 6.577 1.99792C10.5 1.99792 11.722 7.12392 12 8.22892ZM0 7.00292C0 11.0709 3.06 16.4839 12 21.9999C20.94 16.4839 24 11.0709 24 7.00292C24 -0.959077 14.352 -2.02508 12 3.26592C9.662 -1.99608 0 -1.00408 0 7.00292Z" fill={props.filter ? 'red' : '#fff'} />
							<path d="M12 8.22892C12.234 7.10892 13.547 1.99992 17.382 1.99992C19.602 1.99992 22 3.55092 22 7.00292C22 10.9099 18.373 15.4729 12 19.6319C5.627 15.4729 2 10.9099 2 7.00292C2 3.51892 4.369 1.99792 6.577 1.99792C10.5 1.99792 11.722 7.12392 12 8.22892Z" fill={props.filter ? 'red' : ''} />
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Filter