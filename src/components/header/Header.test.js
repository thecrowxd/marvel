import React from "react"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Header from "./Header"
import { MemoryRouter } from "react-router-dom"

test("renders the content", () => {
	const component = render(
		<MemoryRouter>
			<Header />
		</MemoryRouter>
	)

	const logo = component.getByAltText("Marvel Logo")
	expect(logo.getAttribute("src")).toBe("logo.png")

	const heart = component.getByAltText("Favorites Amount")
	expect(heart.getAttribute("src")).toBe("favorites-total.png")
})
