import React from "react"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import HeroBiography from "./HeroBiography"

test("renders the content", () => {
	const data = {
		thumbnail: {
			path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
			extension: "jpg",
		},
		name: "Abomination (Emil Blonsky)",
		description:
			"Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.",
	}

	const component = render(<HeroBiography data={data} />)

	const icon = component.getByAltText("detail hero")
	expect(icon.getAttribute("src")).toBe(
		"http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04.jpg"
	)
	component.getByText("Abomination (Emil Blonsky)")
	component.getByText(
		"Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk."
	)
})
