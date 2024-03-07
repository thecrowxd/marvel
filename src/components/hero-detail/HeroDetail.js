import React, { useState, useEffect } from "react"
import axios from "axios"
import HeroBiography from "../hero-biography/HeroBiography"
import HeroComics from "../hero-comics/HeroComics"
import { useParams } from "react-router-dom"

const HeroDetail = () => {
	let { id } = useParams()

	const [data, setData] = useState({})
	useEffect(() => {
		getHero(id)
	}, [id])

	const getHero = async (id) => {
		let params = {
			apikey: "04b766e96108765bef572f15145cc06b",
			hash: "410a0ab18e84084e95ca0f296a0bb51b",
			ts: 1709578881,
			limit: 1,
			id: id,
		}

		try {
			const response = await axios.get(
				"http://gateway.marvel.com/v1/public/characters",
				{ params }
			)

			if (response?.data?.code === 200 && response?.data?.data?.results) {
				setData(response?.data?.data?.results[0])
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<>
			<HeroBiography data={data} />
			<HeroComics id={id} />
		</>
	)
}

export default HeroDetail
