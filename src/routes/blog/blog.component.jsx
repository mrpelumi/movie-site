import './blog.styles.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectReverseArticleList } from '../../store/article/article.selector';
import ArticleCard from '../../components/articleCard/articleCard.component';
import LoadMoreButton from '../../components/loadMoreButton/loadMoreButton.component';
import Footer from '../../components/footer/footer.component';
import SubHeadTitle from '../../components/subHeadTitle/subHeadTitle.component';

const Blog = () => {
  const [articleItems, setArticleItems] = useState(6);
  const reversedArticleList = useSelector(selectReverseArticleList);
  
  const filteredArticleList = reversedArticleList.slice(0,articleItems);

  // Handles the Load More button
  const onClickHandler = (event) => {
    const newVal = 6 + articleItems;
    setArticleItems(newVal);
  }

  return (
    <div className='blog-container'>
      <SubHeadTitle title={'Blog'} />
      <div className='blog-card-container'>
        {filteredArticleList.map((article) => {
          return (
            <ArticleCard articleItem={article} key={article.id}/>
          )
        })}
      </div>
      <div className='load-more-container'>
        {
          (reversedArticleList.length < articleItems) ? null : <LoadMoreButton onClickHandler={onClickHandler} />
        }
      </div>
      <Footer />
    </div>
  )
};

export default Blog;
