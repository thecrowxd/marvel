import React from "react"
import "./hero-card.css"
import { Link } from "react-router-dom"
import FavoriteHeart from "../favorite-heart/FavoriteHeart"
import Triangle from "../../images/triangle.png"
const HeroCard = React.memo((props) => {
	return (
		<div className="hero-card-wrapper">
			<Link to={`/hero/${props.data.id}`}>
				<div
					className="hero-card-thumbnail"
					style={{
						backgroundImage: `url(${props.data?.thumbnail?.path}.${props.data?.thumbnail?.extension})`,
					}}
				></div>
			</Link>
			<div className="hero-card-name">
				<div className="hero-card-texts flex justify-content-space-between align-items-center">
					<div>{props.data.name}</div>
					<div>
						<FavoriteHeart data={props.data} />
					</div>
				</div>
			</div>
			<div className="triangle">
				<img src={Triangle} alt="triangle"></img>
			</div>
			<div className="hero-card-red-rectangle" />
		</div>
	)
}

export default HeroCard
