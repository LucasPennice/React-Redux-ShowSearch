import SearchWidget from './SearchBar';
import { Route, Routes, Link } from 'react-router-dom';
import Menu from './Menu';
import { useLocation } from 'react-router';

export default ({ onSearchSubmit }) => {
	let { pathname } = useLocation();

	return (
		<div className="headerDiv">
			{pathname === '/search' ? (
				<Routes>
					<Route
						path="/search"
						exact
						element={<SearchWidget onSearchSubmit={onSearchSubmit} />}
					/>
				</Routes>
			) : (
				<Link to="/search" className="links">
					Search Engine
				</Link>
			)}

			<Menu />
		</div>
	);
};
