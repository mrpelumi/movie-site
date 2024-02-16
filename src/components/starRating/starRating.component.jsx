import { floor } from 'lodash';
import './starRating.styles.scss';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const StarRating = ({rating, headerVal=false}) => {
  const arr = Array(floor(rating)).fill(0);
  return (
    <div className='star-icon-container'>
      <span >
        {arr.map((val,idx) => {
          return (headerVal ? <StarIcon className='header-star-rating' sx={{fontSize:44, color:'#b39600'}} key={idx}/> : <StarIcon sx={{ color: '#b39600', fontSize: 30}} key={idx} /> ) 
        })}
      </span>
      <span>
        {Number.isInteger(Number(rating))? null : (headerVal ? <StarHalfIcon className='header-star-rating' sx={{fontSize:44, color:'#b39600'}} /> : <StarHalfIcon sx={{ color: '#b39600', fontSize: 30 }} />  )}
      </span>
      
    </div>
  )
}

export default StarRating;