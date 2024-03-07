import React, { useState, useEffect, useRef } from "react"
import "./hero-comics.css"
import axios from "axios"
import ComicCard from "../comic-card/ComicCard"
import Draggable from "../../utils/Draggable"

const HeroComics = (props) => {
	const [data, setData] = useState([])
	useEffect(() => {
		const getComics = async () => {
			if (!props.id) return false

			let params = {
				apikey: "04b766e96108765bef572f15145cc06b",
				hash: "410a0ab18e84084e95ca0f296a0bb51b",
				ts: 1709578881,
			}

			try {
				const response = await axios.get(
					"http://gateway.marvel.com/v1/public/characters/" +
						props.id +
						"/comics",
					{ params }
				)

				if (
					response?.data?.code === 200 &&
					response?.data?.data?.results
				) {
					setData(response?.data?.data.results)
				}
			} catch (error) {
				console.error(error)
			}
		}

		getComics()
	}, [props.id])
	const journalRef = useRef(null)

	return (
		<div className="hero-comics-wrapper">
			<h2>COMICS</h2>
			<Draggable innerRef={journalRef} rootClass={"drag"}>
				<div className="flex hero-comics-list" ref={journalRef}>
					{data?.map((comic, index) => (
						<ComicCard
							key={index}
							title={comic.title}
							thumbnail={
								comic.thumbnail?.path +
								"." +
								comic.thumbnail?.extension
							}
							year={comic.dates?.[0].date}
						/>
					))}
				</div>
			</Draggable>
		</div>
	)
}

export default HeroComics
