import styles from '../styles/styles.css';
import Header from './Header';
import Home from './Home';
import SearchEngine from './SearchEngine';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchShowsData, clearShowsArray } from '../actions';
import { useDispatch } from 'react-redux';

export default () => {
	const dispatch = useDispatch();

	const onSearchSubmit = async (term) => {
		dispatch(clearShowsArray());
		dispatch(fetchShowsData(term));
	};

	return (
		<div className="appDiv">
			<BrowserRouter>
				<Header onSearchSubmit={onSearchSubmit} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" exact element={<SearchEngine />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};
