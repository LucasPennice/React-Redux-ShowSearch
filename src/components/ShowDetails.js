import { AiFillCaretDown } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default ({ isDetailsOpen, setIsDetailsOpen }) => {
	const clickedShow = useSelector((state) => state.clickedShow);
	const [detailsClass, setDetailsClass] = useState('showDetailsComponent');
	const { image, genres, name, score, site, status, summary } = clickedShow;
	const [isOpacity, setIsOpacity] = useState(1);
	const [timeoutId, setTimeoutId] = useState(null);

	const toggleVisibility = (isOpen, setIsOpen, setClass, openClass) => {
		if (isOpen === false) {
			setIsOpen(true);
			setClass(openClass);
		} else {
			setIsOpacity(0);
			const id = setTimeout(() => {
				setIsOpen(false);
				setIsOpacity(1);
			}, 200);
			setTimeoutId(id);
		}
	};

	useEffect(() => {
		return () => {
			clearTimeout(timeoutId);
		};
	}, [timeoutId]);

	const clearString = (text) => {
		let clean = '';
		if (summary !== null) {
			let dontCopy = false;
			for (let i = 0; i < text.length; i++) {
				if (text[i] === '<') {
					dontCopy = true;
				}
				if (dontCopy === false) {
					clean += text[i];
				}
				if (text[i] === '>') {
					dontCopy = false;
				}
			}
		} else {
			clean = 'N/A';
		}
		return clean;
	};

	const cleanSummary = clearString(summary);

	const isShowGood = () => {
		const showScore = Math.round(score * 100);
		if (showScore < 40) return '#E63946';
		else if (showScore > 60) return '#3DDC97';
		else return '#FFEC51';
	};

	const renderGenres = (genres) => {
		return genres.map((genre) => {
			return (
				<span
					className="genre"
					key={genre}
					className="genreDetail animateDetail"
				>
					{genre}
				</span>
			);
		});
	};
	return (
		<div className={detailsClass} style={{ opacity: isOpacity }}>
			<div className="showDetailsContainer">
				<p className="detailTitle animateDetail">
					<a href={site} target="_blank">
						{name}
					</a>
				</p>
				<p className="animateDetail showScore">
					<span style={{ color: `${isShowGood()}` }}>
						{Math.round(score * 100)}
					</span>

					<span>/100</span>
				</p>

				<img src={image} className="detailsImage" />

				<p className="genreDetailContainer">{renderGenres(genres)}</p>

				<button
					className="closeDetailsBtn"
					onClick={() => {
						toggleVisibility(
							isDetailsOpen,
							setIsDetailsOpen,
							setDetailsClass,
							'showDetailsComponent'
						);
					}}
				>
					x
				</button>

				<p className="animateDetail">Status:{status}</p>
				<p className="animateDetail">{cleanSummary}</p>
			</div>
		</div>
	);
};
