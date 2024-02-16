import './headerCard.styles.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectReviewItem } from '../../store/review/review.selector';
import { selectArticleItem } from '../../store/article/article.selector';
import StarRating from '../starRating/starRating.component';


const HeaderCard = ({reviewHeader=false}) => {
  const reviewItem = useSelector(selectReviewItem);
  const articlesItem = useSelector(selectArticleItem);


  const navigate = useNavigate();

  const goToSingleReviewPage = () => {
    return navigate(`/review/${reviewItem.id}`)
  }

  const goToSingleArticlePage = () => {
    return navigate(`/blog/${articlesItem.id}`)
  }

  return (
    reviewHeader ? (
      <div className='header-card-container'>
      <div className='header-img-container'>
        {
          reviewItem ? <img src={ reviewItem.image} onClick={goToSingleReviewPage} alt='header-card'/> : 
          <img src="" onClick={goToSingleReviewPage} alt='header-card'/>
        }
      </div>
      <div className='header-text-container'>
        {/* change to link to review page */}
        <h3 onClick={goToSingleReviewPage}>{reviewItem && reviewItem.title}</h3> 
        <div>
          {reviewItem ? <StarRating rating={reviewItem.rating} headerVal={reviewHeader}/> : null}
        </div>
        <p>{reviewItem && reviewItem.brief_description}</p>
      </div>
    </div>
    ) : (
      // for blog header
      <div className='header-card-container'>
      <div className='header-img-container'>
        {
          articlesItem ? <img src={articlesItem.image} onClick={goToSingleArticlePage} alt='header-card'/> : 
          <img src="" onClick={goToSingleArticlePage} alt='header-card'/>
        }
      </div>
      <div className='header-text-container'>
        {/* change to link to blog page */}
        <h3 onClick={goToSingleArticlePage}>{articlesItem && articlesItem.title}</h3> 
        <p>{articlesItem && articlesItem.brief_description}</p>        
        <p>{articlesItem && articlesItem.date}</p>        
      </div>
    </div>
    )
    
  )
}

export default HeaderCard;