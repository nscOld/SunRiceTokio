import {TfiNa} from 'react-icons/tfi';
import './styles.css';

interface ImageProps {
  url: string | null;
  alt: string;
  size: 'poster' | 'cover';
}

interface ISizes {
  poster: {
    width: string;
    height: string;
  }
  cover: {
    width: string;
    height: string;
  }
}

const sizes: ISizes = {
  poster: {
    width: '284px',
    height: '402px',
    
  },
  cover: {
    width: '100%',
    height: '156px',
  }
}

const Image = ({ url, alt, size }: ImageProps) => {
  const imageSize = size === 'poster' ? sizes.poster : sizes.cover;
  
  return url
    ? <img src={url} alt={alt}  className='photo-anime-page'/>
    : <div
      style={{ width: imageSize.width, height: imageSize.height }}
      className={size === 'poster' ? 'error-image-poster' : 'error-image-cover'}
     >
     <TfiNa className='ico-n'/>
     Image not found 
    </div>
}

export default Image;