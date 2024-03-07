import React from "react"
import "@testing-library/jest-dom"
import { fireEvent, render } from "@testing-library/react"
import InputSearch from "./InputSearch"

test("renders the content and change input", () => {
	const mockHandler = jest.fn()
	const component = render(<InputSearch handleInputSearch={mockHandler} />)

	const icon = component.getByAltText("search hero")
	expect(icon.getAttribute("src")).toBe("loupe.png")
	let input = component.getByPlaceholderText("SEARCH A CHARACTER...")
	fireEvent.change(input, { target: { value: "a" } })
	expect(mockHandler.mock.calls).toHaveLength(1)
})
