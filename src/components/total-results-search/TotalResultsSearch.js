import React from "react"
import "./total-results-search.css"

const TotalResultsSearch = (props) => {
	let totalAmount = props.totalAmount || 0

	return <h4 className="total-results-h4">{totalAmount} results</h4>
}

export default TotalResultsSearch
