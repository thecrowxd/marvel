import React, { useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HeroView from "./views/HeroView"
import HomeView from "./views/HomeView"
import FavoritesView from "./views/FavoritesView"
import { FavoritesContext } from "./contexts/FavoritesContext"

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeView />,
	},
	{
		path: "favorites/",
		element: <FavoritesView />,
	},
	{
		path: "hero/:id",
		element: <HeroView />,
	},
])

function App() {
	const [favorites, setFavorites] = useState([])

	return (
		<FavoritesContext.Provider value={{ favorites, setFavorites }}>
			<RouterProvider router={router} />
		</FavoritesContext.Provider>
	)
}
export default App
