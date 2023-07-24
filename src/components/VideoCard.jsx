import React from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Typography, Card, cardContent, CardMedia, CardContent, Box } from '@mui/material';
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle } from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';
import dayjs from 'dayjs';

const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	return (
		<Box sx={{ width: { md: '300px', sm: '300px', xs: '95vw' }, boxShadow: 'none', borderRadius: '4px' }}>
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width: '100%', height: 200 }} />
			</Link>
			<CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
				<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
					<Typography variant='subtitle1' fontWeight='bold' color='#fff'>
						{snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 60)}
					</Typography>
				</Link>
				<Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
					<Typography variant='subtitle2' fontWeight='bold' color='#8e8e8e'>
						{snippet?.channelTitle || demoChannelTitle.slice(0, 60)}
						<CheckCircle sx={{ fontSize: '12px', color: '#8e8e8e', ml: '5PX' }} />
					</Typography>
					<Typography sx={{ color: '#fff' }}>{dayjs(snippet?.publishTime).format('MMM D,YYYY')}</Typography>
				</Link>
			</CardContent>
		</Box>
	);
};

export default VideoCard;
