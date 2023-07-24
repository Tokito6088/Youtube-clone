import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import logo from '../images/yt-logo-mobile.png';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
	const [lastScrollY, setLastScrollY] = useState();
	const [show, setShow] = useState('top');

	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	const controlNavbar = () => {
		if (window.scrollY > 300) {
			if (window.scrollY > lastScrollY) {
				setShow('hide');
			} else {
				setShow('show');
			}
		} else {
			setShow('top');
		}
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);
		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	}, [lastScrollY]);

	return (
		<Stack direction='row' alignItems='center' p={2} sx={{ position: 'sticky', backgroundColor: '#161617', top: 0, justifyContent: 'space-between' }} className={show}>
			<Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
				<img className='logo' src={logo} alt='' height={25} />
				<span className='logo-txt' style={{ color: '#fff', fontWeight: '700', fontSize: '20px' }}>
					We<span style={{ color: '#ff0000' }}>Tube</span>
				</span>
			</Link>
			<SearchBar />
		</Stack>
	);
};

export default Navbar;
