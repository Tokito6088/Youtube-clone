import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';
import { FetchFromApi } from '../utils/api';
import Spinner from './Spinner';

const Feed = () => {
	const [videos, setVideos] = useState([]);
	const [selectedcategory, setSelectedCategory] = useState('New');
	useEffect(() => {
		setVideos([]);
		FetchFromApi(`search?part=snippet&maxResults=50&q=${selectedcategory}`).then((data) => {
			setVideos(data?.items);
		});
	}, [selectedcategory]);
	return (
		<>
			{videos.length > 0 ? (
				<Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
					<Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }, alignItems: 'flex-start' }}>
						<SideBar selectedcategory={selectedcategory} setSelectedCategory={setSelectedCategory} />
					</Box>
					<Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2, marginTop: '10px' }}>
						<Videos videos={videos} />
					</Box>
				</Stack>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default Feed;
