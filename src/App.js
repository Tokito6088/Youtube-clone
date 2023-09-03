import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
import Feed from './components/Feed';
import './App.css';

const App = () => (
	<BrowserRouter>
		<Box sx={{ backgroundColor: '#242428' }}>
			<Navbar />
			<Routes>
				<Route path='/' element={<Feed />} />
				<Route path='video/:id' element={<VideoDetail />} />
				<Route path='channel/:id' element={<ChannelDetail />} />
				<Route path='/search/:searchTerm' element={<SearchFeed />} />
			</Routes>
		</Box>
	</BrowserRouter>
);

export default App;
