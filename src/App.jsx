/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import './App.scss'
import Main from './components/Main'

function App() {

	let [cards, setCards] = useState([])
	let [filter, setfilter] = useState(false)
	let [loading, setLoading] = useState(false)

	useEffect(() => {

		fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
			.then(response => {
				setLoading(true)
				return response.json()
			})
			.then(data => {
				setLoading(false)
				return setCards(data.drinks.map(c => !c.isLike ? { ...c, isLike: false } : c))
			})

	}, [])

	const like = (id) => {
		setCards(cards.map(c => (c.idDrink === id) ? { ...c, isLike: !c.isLike } : c))
	}

	const likeFilter = () => {
		setfilter(!filter)
	}

	let isLikedArrayCardsEmpty = false
	let filterCards = cards

	if (filter) {
		filterCards = cards.filter(c => c.isLike === filter)
		if (filterCards.length <= 0) isLikedArrayCardsEmpty = true
	}

	return (<>

		<header className='header'>
			<div className="container">
				<div className="header__body">
					<div className="header__title">
						<h1>Bar Card</h1>
						<p className="header__subtitle">Alcohol drinks menu</p>
					</div>
				</div>
			</div>
		</header>

		< Main
			loading={loading}
			cards={filterCards}
			like={like}
			likeFilter={likeFilter}
			filter={filter}
			isLikedArrayCardsEmpty={isLikedArrayCardsEmpty} />

		<footer className='footer'>
			<div className="container">
				<p className="footer__content">
					<a href="https://t.me/efremandre" target="_blank" title='created by efrenadre' rel="noopener noreferrer">created by efrenadre</a>
				</p>
			</div>
		</footer>
	</>
	)
}

export default App
