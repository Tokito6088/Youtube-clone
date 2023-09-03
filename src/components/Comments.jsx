import React, { useEffect, useState } from 'react';
import { FetchFromApi } from '../utils/api';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import { Stack, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const Comments = () => {
	const navigate = useNavigate();
	const { id: query } = useParams();

	console.log(query);
	const [data, setData] = useState([]);
	const [itemFillter, setItemFilter] = useState([]);
	const [likeButton, setLikeButton] = useState(false);
	const [disLikeButton, setDisLikeButton] = useState(false);

	useEffect(() => {
		FetchFromApi(`commentThreads?part=snippet&videoId=${query}&maxResults=100`).then((data) => setData(data.items));
	}, [query]);
	console.log(data);

	const navigateToChannel = (data) => {
		navigate(`channel/${data}`);
	};

	return (
		<>
			<h3 style={{ textAlign: 'center' }}>Comments</h3>
			{data?.map((item) => {
				return (
					<Stack key={item?.id} direction='row' sx={{ gap: '20px' }}>
						<Box className='userImage' sx={{ borderRadius: '50%', cursor: 'pointer' }}>
							<img onClick={() => navigate(`/channel/${item?.snippet?.topLevelComment?.snippet?.authorChannelId?.value}`)} style={{ borderRadius: '50%', marginTop: '20px' }} src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt='' />
						</Box>
						<div className='comments' style={{ fontSize: '17px' }}>
							<div className='commentInfo' style={{ display: 'flex', gap: '10px', marginBottom: '-25px' }}>
								<p style={{}}>@{item?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
								<p style={{ color: 'gray' }}>{dayjs(item?.snippet?.topLevelComment?.snippet?.updatedAt).format('DD,MMM,YYYY')}</p>
							</div>
							<p>{item?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
							<Stack direction='row' sx={{ gap: '10px', opacity: '0.6', cursor: 'pointer' }} className='Icons'>
								<div onClick={() => setLikeButton(!likeButton)} className='likes'>
									{!likeButton ? <ThumbUpOffAltIcon /> : <ThumbUpIcon />}
								</div>
								<div className='likesCount'>
									<span>{item?.snippet?.topLevelComment?.snippet?.likeCount}</span>
								</div>
								<div onClick={() => setDisLikeButton(!disLikeButton)} className='dislike'>
									{!disLikeButton ? <ThumbDownOffAltIcon /> : <ThumbDownAltIcon />}
								</div>
							</Stack>
						</div>
					</Stack>
				);
			})}
		</>
	);
};

export default Comments;
