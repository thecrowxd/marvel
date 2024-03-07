import React from "react"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import ComicCard from "./ComicCard"

test("renders the content", () => {
	const component = render(
		<ComicCard
			title="Maestro: World War M (2022) #5"
			thumbnail={
				"http://i.annihil.us/u/prod/marvel/i/mg/d/90/62d0454381496.jpg"
			}
			year={"2022-07-20T00:00:00-0400"}
		/>
	)

	component.getByText("Maestro: World War M (2022) #5")
	const icon = component.getByAltText("comic card")
	expect(icon.getAttribute("src")).toBe(
		"http://i.annihil.us/u/prod/marvel/i/mg/d/90/62d0454381496.jpg"
	)
})
