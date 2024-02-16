import './quoteHeader.styles.scss';
import { useSelector } from 'react-redux';
import {selectQuoteItem} from '../../store/quote/quote.selector';

const QuoteHeader = () => {
  const quoteItem = useSelector(selectQuoteItem);
  return (
    <div className='quote-text-container'>
      <p className='quote-text'>"{quoteItem && quoteItem.quote}"</p>
      <p className='quote-author'>-{quoteItem && quoteItem.author}</p>
    </div>
  )
}

export default QuoteHeader;

