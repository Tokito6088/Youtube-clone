import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Videos from './Videos';
import { FetchFromApi } from '../utils/api';
import Spinner from './Spinner';
import Comments from './Comments';

const VideoDetail = () => {
	const [videoDetail, setVideoDetail] = useState([]);
	const [videos, setVideos] = useState([]);
	const { id } = useParams();

	console.log(videoDetail);

	useEffect(() => {
		FetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data?.items[0]));

		FetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data?.items));
	}, [id]);

	if (!videoDetail?.snippet) return;

	const {
		snippet: { title, channelId, channelTitle },
		statistics: { viewCount, likeCount },
	} = videoDetail;

	return (
		<>
			{videos.length > 0 ? (
				<Box minHeight='95vh'>
					<Stack direction='column'>
						<Box flex={1}>
							<Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
								<ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
								<Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
									{title}
								</Typography>
								<Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2}>
									<Link to={`/channel/${channelId}`}>
										<Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff'>
											{channelTitle}
											<CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
										</Typography>
									</Link>
									<Stack direction='row' alignItems='center'>
										<Stack className='viewsBox' direction='row' sx={{ gap: '10px', cursor: 'pointer' }}>
											<VisibilityIcon />
											<Typography variant='body1' sx={{ color: '#fff', mr: '20px' }}>
												{parseInt(viewCount).toLocaleString()}
											</Typography>
										</Stack>
										<Stack className='viewsBox' direction='row' sx={{ gap: '10px', cursor: 'pointer' }}>
											<ThumbUpIcon />
											<Typography variant='body1'>{parseInt(likeCount).toLocaleString()}</Typography>
										</Stack>
									</Stack>
								</Stack>
							</Box>
						</Box>

						<Box px={2} py={{ xs: 5 }} justifyContent='center' alignItems='center'>
							<Videos videos={videos} direction='column' />
						</Box>
					</Stack>
					<Box>
						<Comments />
					</Box>
				</Box>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default VideoDetail;
