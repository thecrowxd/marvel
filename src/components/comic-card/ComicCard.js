import React from "react"
import "./comic-card.css"

const ComicCard = (props) => {
	let year = new Date(props.year).getFullYear()

	return (
		<div className="comic-card-wrapper">
			<div>
				<img
					src={props.thumbnail}
					className="comic-card-thumbnail"
					alt="comic card"
				></img>
			</div>
			<div>
				<p className="comic-card-title">{props.title}</p>
			</div>
			<div>
				<p className="comic-card-year">{year}</p>
			</div>
		</div>
	)
}

export default ComicCard
