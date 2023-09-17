import Cards from './Cards'
import Filter from './Filter'
import style from './Main.module.scss'

const Main = (props) => {

	return (
		<main className={style.main}>
			<div className="container">
				< Filter
					likeFilter={props.likeFilter}
					filter={props.filter} />

				<Cards
					cards={props.cards}
					like={props.like}
					buttons={props.buttons}
					isLikedArrayCardsEmpty={props.isLikedArrayCardsEmpty} />
			</div>
		</main >
	)
}

export default Main