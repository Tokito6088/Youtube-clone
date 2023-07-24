import React, { useEffect } from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ selectedcategory, setSelectedCategory }) => {
	return (
		<Stack
			style={{ scrollbarWidth: 'none' }}
			direction='row'
			sx={{
				overflowY: 'auto',
				height: { sx: 'auto', md: '95%' },
				flexDirection: { md: 'column' },
			}}>
			{categories.map((item) => (
				<button
					className='category-btn'
					style={{ background: item.name === selectedcategory && '#e3e3e213', color: 'white' }}
					key={item.name}
					onClick={() => {
						setSelectedCategory(item.name);
					}}>
					<span style={{ color: item.name === selectedcategory ? 'white' : 'white' }}>{item.icon}</span>
					<span style={{ opacity: item.name === selectedcategory ? '1' : '0.8' }}>{item.name}</span>
				</button>
			))}
		</Stack>
	);
};
export default SideBar;
