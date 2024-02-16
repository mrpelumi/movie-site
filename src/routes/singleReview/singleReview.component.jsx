import './singleReview.styles.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectReverseReviewList } from '../../store/review/review.selector';
import StarRating from '../../components/starRating/starRating.component';
import Footer from '../../components/footer/footer.component';


const SingleReview = () => {
  const {id} = useParams();
  
  const reviewList = useSelector(selectReverseReviewList);

  const filteredReviewItem = reviewList.filter(reviewItem => reviewItem.id === Number(id));

  return(
    <>
      {filteredReviewItem.map(review => {
        const {id, title, rating, brief_description, director, description, image} = review;
        return (
          <div className='review-item-container' key={id}>
            <div className='review-header-container'>
              <h3>{title}</h3>
              <StarRating rating={rating} />
              <p>{brief_description}</p>
              <hr />
              
            </div>
            <div className='review-item-img-container'>
              <img src={image} alt="" />
            </div>
            <div className='review-item-text-container'>
              <p>Directed by: <span>{director}</span></p>
              <p>{description}</p>
            </div>
          </div>
        )
      })}
      <Footer />
    </>
  )
}

export default SingleReview;