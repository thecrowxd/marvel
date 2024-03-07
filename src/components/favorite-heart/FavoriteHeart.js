import React, { useContext } from "react"
import NoFavorite from "../../images/no-favorite.png"
import Favorite from "../../images/favorite.png"
import "./favorite-heart.css"
import { FavoritesContext } from "../../contexts/FavoritesContext"

const FavoriteHeart = (props) => {
	const { favorites, setFavorites } = useContext(FavoritesContext)

	let favoriteIcon = ""

	let found = favorites?.find((favorite) => favorite.id === props.data.id)
	if (found) {
		favoriteIcon = Favorite
	} else {
		favoriteIcon = NoFavorite
	}

	const handleFavorite = (evt) => {
		let id = parseInt(evt.currentTarget.getAttribute("data-id"))
		const found = favorites?.find((favorite) => favorite.id === id)
		if (found) {
			setFavorites((favorites) =>
				favorites.filter((item) => item.id !== id)
			)
		} else {
			setFavorites((favorites) => [...favorites, props.data])
		}
	}

	return (
		<img
			src={favoriteIcon}
			className={`cursor-pointer ${
				favoriteIcon === Favorite
					? "favorite-heart"
					: "no-favorite-heart"
			}`}
			alt="Hero favorite"
			data-id={props.data?.id}
			onClick={(evt) => handleFavorite(evt)}
		/>
	)
}

export default FavoriteHeart
