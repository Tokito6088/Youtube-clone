import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchFromApi } from '../utils/api';
import Videos from './Videos';

const SearchFeed = () => {
	const { searchTerm: query } = useParams();

	const [data, setData] = useState([]);

	useEffect(() => {
		FetchFromApi(`search?part=snippet&q=${query}`).then((data) => setData(data?.items));
	}, [query]);
	return <Videos videos={data} />;
};

export default SearchFeed;
