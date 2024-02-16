import './singleArticle.styles.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectReverseArticleList } from '../../store/article/article.selector';

import Footer from '../../components/footer/footer.component';

const SingleArticle = () => {
  const {id} = useParams();

  const articleList = useSelector(selectReverseArticleList);

  const filteredArticleItem = articleList.filter(articleItem => articleItem.id === Number(id));

  console.log(filteredArticleItem);

  return (
    <>
      {
        filteredArticleItem.map(article => {
          const {id, title, date, brief_description, description, image} = article;

          return(
            <div className='review-item-container' key={id}>
             <div className='review-header-container'>
              <h3>{title}</h3>
              <p>{brief_description}</p>
              <hr />
              
            </div>
            <div className='review-item-img-container'>
              <img src={image} alt="" />
            </div>
            <div className='review-item-text-container'>
              <p>Written: <span>{date}</span></p>
              <p>{description}</p>
            </div> 
            </div>
          )
        })
      }
      <Footer />
    </>
  )
}

export default SingleArticle;