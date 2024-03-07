import React from "react"
import "./input-search.css"
import Loupe from "../../images/loupe.png"

const InputSearch = (props) => {
	return (
		<>
			<div className="flex align-items-end border-bottom-black pb-1">
				<div>
					<img src={Loupe} alt="search hero" />
				</div>
				<div className="w-100">
					<input
						type="text"
						name="text"
						placeholder="SEARCH A CHARACTER..."
						className="input-search ml-1"
						onChange={(e) =>
							props.handleInputSearch(e.target.value)
						}
					/>
				</div>
			</div>
		</>
	)
}

export default InputSearch
