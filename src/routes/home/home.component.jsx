import './home.styles.scss';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { selectReviewFilteredList } from '../../store/review/review.selector';

import HeaderCard from '../../components/headerCard/headerCard.component';
import MovieCard from '../../components/movieCard/movieCard.component';
import SubHeadTitle from '../../components/subHeadTitle/subHeadTitle.component';
import { selectArticleFilteredList } from '../../store/article/article.selector';
import ArticleCard from '../../components/articleCard/articleCard.component';
import QuoteHeader from '../../components/quoteHeader/quoteHeader.component';
import Footer from '../../components/footer/footer.component';

const Home = () => {
  const filteredReviewList = useSelector(selectReviewFilteredList);
  const filteredArticleList = useSelector(selectArticleFilteredList);

  // Create Navigation objects
  const navigate = useNavigate();

  // to review page
  const goToReviewPage = () => {
    navigate('/review')
  }

  const goToBlogPage = () => {
    navigate('/blog')
  }

  return (
    <div className='home-container'>
      <h1 className='header-title'>Welcome Movie Nerds</h1>
      <HeaderCard reviewHeader={true} />
      <SubHeadTitle title={'Latest Reviews'} />
      
      <div className='review-card-container'>
        {filteredReviewList.map((reviewItem) => {
          return (
            <MovieCard reviewItem={reviewItem} key={reviewItem.id}/>
          )
        })}

        {/* come fix this later */}
      </div>
      <div className='see-all-container'>
        <a href='#' onClick={goToReviewPage}>see all movie reviews</a>
      </div>
      <SubHeadTitle title={'Blog'} />

      {/* Ensure blog header card returns the latest article */}
      <HeaderCard />
      <div className='blog-card-container'>
        {filteredArticleList.map((articleItem) => {
          return (
            <ArticleCard articleItem={articleItem} key={articleItem.id} />
          )
        })}
      </div>
      <div className='see-all-container'>
        <a href="#" onClick={goToBlogPage}>see all articles</a>                                    
      </div>
      <QuoteHeader />
      <Footer />
    </div>
  )
}

export default Home;