import React, { useState } from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi';

const SearchWidget = (props) => {
	const [isSearchbarOpen, setIsSearchbarOpen] = useState('sbOpen');
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<form
			className="sbForm"
			onSubmit={(e) => {
				e.preventDefault();
				props.onSearchSubmit(searchTerm);
			}}
		>
			<input
				type="text"
				value={searchTerm}
				onKeyUp={(e) => {
					if (e.key === 'Enter') e.target.blur();
				}}
				onChange={(e) => setSearchTerm(e.target.value)}
				className={`searchbar ${isSearchbarOpen}`}
				placeholder={props.plHolder || 'Search a Tv Show'}
			/>
			<button className="sbButton">
				<GiMagnifyingGlass className="sbButton" />
			</button>
		</form>
	);
};

export default SearchWidget;
