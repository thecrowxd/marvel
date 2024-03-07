import React, { useContext } from "react"
import { Link } from "react-router-dom"
import "./header.css"
import Logo from "../../images/logo.png"
import Favorites from "../../images/favorites-total.png"
import { FavoritesContext } from "../../contexts/FavoritesContext"

const Header = () => {
	const favoritesCtx = useContext(FavoritesContext)
	let favoritesAmount = favoritesCtx.favorites?.length || 0

	return (
		<div className="header-wrapper container">
			<nav>
				<div className="flex justify-content-space-between align-items-center">
					<div>
						<Link to="/">
							<img src={Logo} alt="Marvel Logo" />
						</Link>
					</div>
					<div className="flex align-items-center">
						<Link to="/favorites">
							<div>
								<img src={Favorites} alt="Favorites Amount" />
							</div>
						</Link>
						<div>{favoritesAmount}</div>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Header
