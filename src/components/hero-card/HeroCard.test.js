import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import HeroCard from "./HeroCard"
import { MemoryRouter } from "react-router-dom"

test("renders the content", () => {
	const data = {
		thumbnail: {
			path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
			extension: "jpg",
		},
		name: "Abomination (Emil Blonsky)",
	}

	const component = render(
		<MemoryRouter>
			<HeroCard data={data} />
		</MemoryRouter>
	)
	component.getByText("Abomination (Emil Blonsky)")
	expect(document.querySelector(".hero-card-thumbnail")).toHaveStyle(
		`backgroundImage: url(http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04.jpg)`
	)
})
