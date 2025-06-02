import React, { useState, useEffect } from "react"
import Header from "../components/header/Header"
import axios from "axios"
import InputSearch from "../components/input-search/InputSearch"
import TotalResultsSearch from "../components/total-results-search/TotalResultsSearch"
import HeroCard from "../components/hero-card/HeroCard"

const Home = () => {
	let timeout

	const [data, setData] = useState([])
	useEffect(() => {
		getHeroes()
	}, [])

	const getHeroes = async (name) => {
		let params = {
			apikey: "04b766e96108765bef572f15145cc06b",
			hash: "410a0ab18e84084e95ca0f296a0bb51b",
			ts: 1709578881,
			limit: 50,
		}

		if (name !== "") {
			params.nameStartsWith = name
		}

		try {
			const response = await axios.get(
				"http://gateway.marvel.com/v1/public/characters",
				{ params }
			)

			if (response?.data?.code === 200 && response?.data?.data) {
				setData(response.data.data)
			}
		} catch (error) {
			console.error(error)
		}
	}

	const handleInputSearch = (val) => {
		clearTimeout(timeout)
		timeout = setTimeout(function () {
			getHeroes(val)
		}, 500)
	}

	return (
		<>
			<Header />
			<div className="container mt-4">
				<InputSearch handleInputSearch={handleInputSearch} />
				<TotalResultsSearch totalAmount={data.count} />
				<div className="flex flex-wrap">
					{data?.results?.map((hero) => (
						<HeroCard data={hero} key={hero.id} />
					))}
				</div>
			</div>
		</>
	)
}

export default Home
