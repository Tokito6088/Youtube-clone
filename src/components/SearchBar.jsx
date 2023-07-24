import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
	const [query, setQuery] = useState('');

	const navigate = useNavigate();

	const searchQuery = (e) => {
		if (e.key === 'Enter' && query.length) {
			navigate(`/search/${query}`);
		}
	};

	return (
		<Paper className='main-div' component='form' sx={{ backgroundColor: 'transparent', borderRadius: '0', borderBottom: '1px solid #5e5b5b', pl: 2, boxShadow: 'none', mr: { sm: 5 } }}>
			<input type='text' className='search-bar' placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={searchQuery} />
			<IconButton onClick={() => navigate(`/search/${query}`)} type='submit' sx={{ p: '10px', color: 'white' }}>
				<Search />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
