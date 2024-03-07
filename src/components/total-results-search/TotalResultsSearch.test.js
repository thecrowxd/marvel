import React from "react"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import TotalResultsSearch from "./TotalResultsSearch"

test("renders the content", () => {
	const component = render(<TotalResultsSearch totalAmount={5} />)

	component.getByText("5 results")
})
