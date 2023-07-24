import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
// const BASE_URL = 'https://yt-api.p.rapidapi.com';

const options = {
	params: {
		maxResults: '50',
	},
	headers: {
		'X-RapidAPI-Key': '04bec53da0mshc93e6b024958e18p1d0aebjsn0d20bc4e78c1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
	},
};

// const options = {
// 	headers: {
// 		'X-RapidAPI-Key': '04bec53da0mshc93e6b024958e18p1d0aebjsn0d20bc4e78c1',
// 		'X-RapidAPI-Host': 'yt-api.p.rapidapi.com',
// 	},
// };

export const FetchFromApi = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);

	return data;
};
