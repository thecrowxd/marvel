import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import axios from "axios"
import React from "react"
import HeroComics from "./HeroComics"

test("should pass", async () => {
	const axioGetSpy = jest.spyOn(axios, "get").mockResolvedValue({
		config: {},
		data: {
			data: {
				results: [
					{
						title: "Maestro: World War M (2022) #5",
						thumbnail: {
							extension: "jpg",
							path: "http://i.annihil.us/u/prod/marvel/i/mg/d/90/62d0454381496",
						},
						dates: [
							{
								date: "2022-07-20T00:00:00-0400",
								type: "onsaleDate",
							},
						],
					},
				],
			},
			code: 200,
		},
	})
	render(<HeroComics id={1016823} />)
	expect(
		await screen.findByText("Maestro: World War M (2022) #5")
	).toBeInTheDocument()
	axioGetSpy.mockRestore()
})
