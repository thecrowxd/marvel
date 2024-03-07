import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import axios from "axios"
import React from "react"
import HeroDetail from "./HeroDetail"

test("should pass", async () => {
	const axioGetSpy = jest.spyOn(axios, "get").mockResolvedValue({
		data: {
			config: {},
			data: {
				results: [
					{
						id: 1009146,
						name: "Abomination (Emil Blonsky)",
						description:
							"Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.",
					},
				],
			},
			code: 200,
		},
	})
	render(<HeroDetail />)
	expect(
		await screen.findByText("Abomination (Emil Blonsky)")
	).toBeInTheDocument()
	axioGetSpy.mockRestore()
})
