import {Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Blog from './routes/blog/blog.component';
import Review from './routes/review/review.component';
import About from './routes/about/about.component';
import SingleArticle from './routes/singleArticle/singleArticle.component';
import SingleReview from './routes/singleReview/singleReview.component';

import reviewJSON from './reviewJSON.json';
import articlesJSON from './articlesJSON.json';
import quotesJSON from './quotesJSON.json';

import { setArticlesList } from './store/article/article.reducer';
import { setQuotes } from './store/quote/quote.reducer';
import { setReviews } from './store/review/review.reducer';


function App() {
  const dispatch = useDispatch();

  // set Review Data
  useEffect(() => {
    const reviewResponse = async () => {
      dispatch(setReviews(reviewJSON))
    }
    reviewResponse();
  }, [])

  // Set Article Data
  useEffect(() => {
    const articleResponse = async () => {
      dispatch(setArticlesList(articlesJSON))
    }
    articleResponse();
  }, [])

  // set Quote Data
  useEffect(() => {
    const quoteResponse = async () => {
      dispatch(setQuotes(quotesJSON))
    }
    quoteResponse();
  }, [])
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='blog'>
          <Route index element={<Blog />} />
          <Route path=':id' element={<SingleArticle />} />
        </Route>
        <Route path='review'>
          <Route index  element={<Review />} />
          <Route path=':id' element={<SingleReview />} />
        </Route>
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
