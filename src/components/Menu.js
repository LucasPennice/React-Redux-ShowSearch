import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiHome, FiMail } from 'react-icons/fi';

export default () => {
	const [contactMenuClass, setContactMenuClass] = useState('hide');
	const [tinyMenuClass, setTinyMenuClass] = useState('hide');
	const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);
	const [isOpacity, setIsOpacity] = useState(1);
	const toggleVisibility = (isOpen, setIsOpen, setClass, openClass) => {
		//Makes the Menu hide smoothly
		if (isOpen === false) {
			setIsOpen(true);
			setClass(openClass);
		} else {
			setIsOpen(false);
			setIsOpacity(0);
			setTimeout(() => {
				setClass('hide');
				setIsOpacity(1);
			}, 400);
		}
	};

	return (
		<div>
			{/* //Shows on screens bigger than 1000px */}
			<div className="linksContainer">
				<Link to="/" className="links">
					Home
				</Link>
				<a
					className="links"
					onClick={() => {
						toggleVisibility(
							isContactMenuOpen,
							setIsContactMenuOpen,
							setContactMenuClass,
							'contactMenu'
						);
					}}
				>
					Contact
				</a>
			</div>
			{/* //Menu that pops up when clicking on Contact */}
			<div className={contactMenuClass} style={{ opacity: isOpacity }}>
				<a href="https://github.com/LucasPennice" target="_blank">
					<AiFillGithub /> GitHub
				</a>
				<a>
					<FiMail /> <span>lucaspennice@gmail.com</span>
				</a>
				<a
					href="https://www.linkedin.com/in/lucas-pennice-22a2081b3"
					target="_blank"
				>
					<AiFillLinkedin /> Linked In
				</a>
			</div>
			{/* //Icon that shows on smaller screens */}
			<div
				className="tinyMenuIcon"
				onClick={() => {
					toggleVisibility(
						isContactMenuOpen,
						setIsContactMenuOpen,
						setTinyMenuClass,
						'tinyMenu'
					);
				}}
			>
				<MdOutlineMenuOpen className="icon" />
			</div>
			{/* //Same menu as larger screens but it includes home button */}
			<div className={tinyMenuClass} style={{ opacity: isOpacity }}>
				<Link to="/" className="links">
					<FiHome />
					<span> </span>
					Home
				</Link>
				<p></p>
				<a href="https://github.com/LucasPennice" target="_blank">
					<AiFillGithub /> GitHub
				</a>
				<a>
					<FiMail /> <span>lucaspennice@gmail.com</span>
				</a>
				<a
					href="https://www.linkedin.com/in/lucas-pennice-22a2081b3"
					target="_blank"
				>
					<AiFillLinkedin /> Linked In
				</a>
			</div>
		</div>
	);
};
