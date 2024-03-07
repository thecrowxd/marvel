import React, { useState, useEffect, useContext } from "react"
import Header from "../components/header/Header"
import InputSearch from "../components/input-search/InputSearch"
import TotalResultsSearch from "../components/total-results-search/TotalResultsSearch"
import HeroCard from "../components/hero-card/HeroCard"
import { FavoritesContext } from "../contexts/FavoritesContext"

const FavoritesView = () => {
	let timeout
	const { favorites } = useContext(FavoritesContext)

	const [data, setData] = useState([])
	useEffect(() => {
		setData(favorites)
	}, [favorites])

	const filterFavorites = (name) => {
		setData(
			favorites.filter((item) =>
				item.name.toLowerCase().includes(name.toLowerCase())
			)
		)
	}

	const handleInputSearch = (val) => {
		clearTimeout(timeout)
		timeout = setTimeout(function () {
			filterFavorites(val)
		}, 500)
	}

	return (
		<>
			<Header />
			<div className="container mt-4">
				<h2>FAVORITES</h2>
				<InputSearch handleInputSearch={handleInputSearch} />
				<TotalResultsSearch totalAmount={data?.length} />
				<div className="flex flex-wrap">
					{data?.map((hero, index) => (
						<HeroCard data={hero} key={index} />
					))}
				</div>
			</div>
		</>
	)
}

export default FavoritesView
