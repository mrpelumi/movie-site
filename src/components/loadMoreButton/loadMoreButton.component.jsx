import './loadMoreButton.styles.scss';

const LoadMoreButton = ({onClickHandler}) => {

  return (
    <button className='load-more-button' onClick={onClickHandler}>Load More</button>
  )
}

export default LoadMoreButton;