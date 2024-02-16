import './movieCard.styles.scss';

import { useNavigate } from 'react-router-dom';

import StarRating from '../starRating/starRating.component';

const MovieCard = ({reviewItem}) => {
  const {id, title, director, rating, image } = reviewItem;

  const navigate = useNavigate();

  const goToSingleReviewPage = () => {
    return navigate(`/review/${id}`)
  }
  
  return (
    <div className='movie-card-container'>
      <div className='movie-img-container'>
        <img onClick={goToSingleReviewPage} src={image} alt="article" />
      </div>
      <div className='movie-title-container'>
        <h3 onClick={goToSingleReviewPage}>{title}</h3>
        <p>{director}</p>
        <StarRating rating={rating} />
      </div>
    </div>
  )
}

export default MovieCard;
