import React from 'react';
import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import { Spa } from '@mui/icons-material';
import Spinner from './Spinner';

const Videos = ({ videos }) => {
	return (
		<>
			{videos.length > 0 ? (
				<Stack direction={{ sm: 'row', xs: 'column' }} flexWrap='wrap' justifyContent='center' alignItems='center' gap={2}>
					{videos.map((item, index) => (
						<Box key={index}>
							{item.id.channelId && <ChannelCard channelDetail={item} />}
							{item.id.videoId && <VideoCard video={item} />}
						</Box>
					))}
				</Stack>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default Videos;
