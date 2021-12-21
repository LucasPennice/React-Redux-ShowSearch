import React, { useState } from 'react';
import LoadingScreen from './LoadingScreen';
import ShowDetails from './ShowDetails';
import { useSelector, useDispatch } from 'react-redux';
import { setClickedShow } from '../actions';
import SearchSomethingIcon from './SearchSomethingIcon';

export default () => {
	const dispatch = useDispatch();
	const showsArray = useSelector((state) => state.showsArray);
	const [isDetailsOpen, setIsDetailsOpen] = useState(false);

	const displayShowDetails = (id) => {
		showsArray.map((showInfo) => {
			if (showInfo.show.id === id) {
				dispatch(setClickedShow(showInfo));
				setIsDetailsOpen(true);
			}
		});
	};
	let delay = 0;
	const URL =
		'https://media.istockphoto.com/photos/question-mark-picture-id536553455';
	const RenderShows = (showsArray) => {
		return showsArray.map(({ show }) => {
			const { id, image } = show;
			delay += 0.1;
			const showCover = image ? image.original : URL;
			return (
				<div
					onClick={() => displayShowDetails(id)}
					key={id}
					id={id}
					className="card"
					style={{
						background: `url(${showCover})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						animationDelay: `${delay}s`,
					}}
				></div>
			);
		});
	};
	return (
		<div className="searchComponentDiv">
			{/* <LoadingScreen /> */}
			<div className="searchContentDiv">
				{showsArray.length !== 0 ? (
					RenderShows(showsArray)
				) : (
					<SearchSomethingIcon />
				)}
			</div>
			{isDetailsOpen === true ? (
				<ShowDetails
					isDetailsOpen={isDetailsOpen}
					setIsDetailsOpen={setIsDetailsOpen}
				/>
			) : (
				<div></div>
			)}
		</div>
	);
};
