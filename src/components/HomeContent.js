import {
	SiJavascript,
	SiReactrouter,
	SiReact,
	SiRedux,
	SiSass,
} from 'react-icons/si';
import { CgScreen } from 'react-icons/cg';
import { Link } from 'react-router-dom';

export default () => {
	return (
		<div className="contentDiv">
			<p>
				This app is an overhaul of a previous project I made a while back when I
				was learning the basics of vanilla {<SiJavascript color="#F7E018" />}{' '}
				JavaScript. I wanted to include that project in my portfolio but I felt
				like it doesn't represent what I can do today. So I decided to make a
				version 2 of{' '}
				<a target="_blank" href="https://show-search.vercel.app/">
					that
				</a>{' '}
				project, adding transitions between screens, changing the design so it
				behaves better across different screen sizes and looks better.
			</p>
			<p>
				For this version of the project I'm using {<SiReact color="#61DBFB" />}{' '}
				React, Axios, {<SiRedux color="#764ABC" />} Redux, Redux-Thunk and{' '}
				{<SiReactrouter color="#D0021B" />} React-Router and plain{' '}
				{<SiSass color="#CB6799" />} SCSS for the styling.
			</p>
			<p>
				Click on Search Engine or{' '}
				<Link to="/search" className="links">
					here
				</Link>{' '}
				to begin
			</p>
			<p>
				Powered By <CgScreen /> Tv Maze API
			</p>
		</div>
	);
};
