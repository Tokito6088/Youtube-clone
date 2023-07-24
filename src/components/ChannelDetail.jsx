import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Card } from '@mui/material';
import Videos from './Videos';
import ChannelCard from './ChannelCard';

import { FetchFromApi } from '../utils/api';

const ChannelDetail = () => {
	const [channelDetail, setChannelDetail] = useState();
	const [videos, setVideos] = useState([]);
	const [bg, setBg] = useState('');

	const { id } = useParams();

	useEffect(() => {
		const fetchResults = async () => {
			const data = await FetchFromApi(`channels?part=snippet&id=${id}`);

			setChannelDetail(data?.items[0]);

			const videosData = await FetchFromApi(`search?channelId=${id}&part=snippet&order=date`);

			setVideos(videosData?.items);
		};

		fetchResults();
	}, [id]);

	useEffect(() => {
		setBg(channelDetail?.brandingSettings?.image?.bannerExternalUrl);
	}, [channelDetail]);

	return (
		<Box minHeight='95vh'>
			<Box>
				<Card
					sx={{
						height: { xs: '140px', sm: '300px' },
						background: `url(${bg})`,
						zIndex: 10,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				/>
				<ChannelCard channelDetail={channelDetail} marginTop='-93px' />
				<Videos videos={videos} />
			</Box>
		</Box>
	);
};

export default ChannelDetail;
