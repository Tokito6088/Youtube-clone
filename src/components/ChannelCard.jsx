import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
	return (
		<Box
			sx={{
				boxShadow: 'none',
				borderRadius: '20px',
				textAlign: 'center',
				width: {
					sm: '300px',
					xs: '93vw',
				},
				marginTop: { sm: marginTop },
			}}>
			<Link to={`/channel/${channelDetail?.id?.channelId ? channelDetail?.id?.channelId : channelDetail?.id}`}>
				<CardContent sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'column' }, justifyContent: { md: 'center', xs: 'space-around' }, alignItems: 'center', textAlign: 'center', color: '#fff' }}>
					<CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} sx={{ borderRadius: '50%', height: { md: '180px', xs: '100px' }, width: { md: '180px', xs: '100px' }, mb: 2, border: '1px solid #e3e3e3' }} />
					<div className='details'>
						<Typography>
							{channelDetail?.snippet?.title}
							<CheckCircle sx={{ fontSize: '17px', color: '#8e8e8e', ml: '5PX' }} />
						</Typography>
						{channelDetail?.statistics ? (
							<Typography variant='subtitle2' color='#8e8e8e'>
								{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
							</Typography>
						) : (
							''
						)}
					</div>
				</CardContent>
			</Link>
		</Box>
	);
};

export default ChannelCard;
