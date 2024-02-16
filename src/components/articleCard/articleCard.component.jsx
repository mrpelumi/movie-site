import './articleCard.styles.scss';
import { useNavigate } from 'react-router-dom';


const ArticleCard = ({articleItem}) => {
  const { id, image, title, brief_description, date} = articleItem;

  const navigate = useNavigate();

  const goToSingleArticlePage = () => {
    return navigate(`/blog/${id}`)
  }

  return (
    <div className='article-card-container'>
      <div className='article-img-container'>
        <img onClick={goToSingleArticlePage} src={image} alt="" />
      </div>
      <div className='article-text-container'>
        <h3 onClick={goToSingleArticlePage}>{title}</h3>
        <p>{brief_description}</p>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default ArticleCard;