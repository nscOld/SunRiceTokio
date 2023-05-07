import { useThemeContext } from '../../contexts/ThemeContext';
import { IAnimeCard } from '../../types/Anime';
import { IoStarSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Image from '../image';
import './styles.css';

type AnimeCardProps = { anime: IAnimeCard }

const AnimeCard = ({ anime }: AnimeCardProps) => {
  const { theme } = useThemeContext();
  
	return (
		
		  
			<li className={`anime-card ${theme}`}>
				<Link to={`/anime/${anime.id}`}>
		  <Image 
		  
		    url={anime.attributes.posterImage ? anime.attributes.posterImage.small : null}
			
				alt={anime.attributes.canonicalTitle}
				size="poster"
				
				
		  />
</Link>
			<h2 className="anime-title">
				{anime.attributes.canonicalTitle}
			</h2>


      
        
		
		</li>
		  
		
	);
}

export default AnimeCard;