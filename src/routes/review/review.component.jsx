import './review.styles.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectReverseReviewList } from '../../store/review/review.selector';
import LoadMoreButton from '../../components/loadMoreButton/loadMoreButton.component';
import MovieCard from '../../components/movieCard/movieCard.component';
import Footer from '../../components/footer/footer.component';
import SubHeadTitle from '../../components/subHeadTitle/subHeadTitle.component';


const Review = () => {
  // Manages the number of movie card shown on page
  const [reviewItems, setReviewItems] = useState(9);

  const reversedReviewList = useSelector(selectReverseReviewList);
  const filteredReviewList = reversedReviewList.slice(0,reviewItems);

  // Handles the Load More button
  const onClickHandler = (event) => {
    const newVal = 9 + reviewItems;
    setReviewItems(newVal);
  }

  return (
    <div className='review-container'>
      <SubHeadTitle title={'Reviews'}/>
      <div className='review-card-container'>
        {filteredReviewList.map((review) => {
          return (
          <MovieCard reviewItem={review} key={review.id}/>
          )
        })}
      </div>
      <div className='load-more-container'>
        {
          (reversedReviewList.length < reviewItems) ? null : <LoadMoreButton onClickHandler={onClickHandler} />
        }
      </div>
      <Footer />
    </div>
  )
}

export default Review;