import React from "react"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import FavoriteHeart from "./FavoriteHeart"

test("renders the content", () => {
	const component = render(<FavoriteHeart />)

	const icon = component.getByAltText("Hero favorite")
	expect(icon.getAttribute("src")).toBe("no-favorite.png")
})
