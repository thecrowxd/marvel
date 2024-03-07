import React from "react"
import "./hero-biography.css"
import FavoriteHeart from "../favorite-heart/FavoriteHeart"

const HeroBiography = (props) => {
	return (
		<div className="bg-black flex hero-biography-wrapper">
			<div>
				<img
					src={
						props.data?.thumbnail?.path +
						"." +
						props.data?.thumbnail?.extension
					}
					className="hero-biography-image"
					alt="detail hero"
				></img>
			</div>
			<div className="p-5 hero-biography-name-wrapper">
				<div className="flex justify-content-space-between align-items-center">
					<div>
						<h3 className="hero-biography-name">
							{props.data.name}
						</h3>
					</div>
					<div>
						<FavoriteHeart data={props.data} />
					</div>
				</div>
				<p>{props.data.description}</p>
			</div>
		</div>
	)
}

export default HeroBiography
