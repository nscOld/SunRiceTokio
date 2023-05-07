import { ReactElement, useState, useEffect } from 'react';
import AnimeCard from '../../shared/components/anime-card/';
import Loading from '../../shared/components/loading/';
import { IAnimeCard } from '../../shared/types/Anime';
import qs from 'qs';


interface IPage {
	page: {
		limit: number;
		offset: number;
	},
	sort?: string;
}

const Trending = (): ReactElement<any> => {
	const [trendingAnimes, setTrendingAnimes] = useState<IAnimeCard[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const getTrendingAnimes = async () => {
		const query: IPage = {
			page: {
				limit: 18,
				offset: 0
			},
			
		}

        
		const api = 'https://kitsu.io/api/edge/';
		const url = `${api}trending/anime?${qs.stringify(query)}`;

		const res = await fetch(url);
		const data = await res.json();
		
		setTrendingAnimes(data.data);
		setLoading(false);
	}

	useEffect(() => {
		getTrendingAnimes();
	}, [])

	return (
		<div className="container-trend">
			<h2 className="title-trend">Trending Anime</h2>
			<ul className="container-trend-anime">
				{loading && <Loading />}
				{!loading && trendingAnimes.map((anime) => (
					<AnimeCard anime={anime} key={anime.id} />
				))}
			</ul>
		</div>
	);
}

export default Trending;
