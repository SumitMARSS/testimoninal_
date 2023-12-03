import './Cards.css';
import {  FaQuoteLeft , FaQuoteRight } from "react-icons/fa";

function Cards(props){
    let review = props.review;
    return (<div>
    
    <div className='card'>
        <div>
            <p className='name'>{review.name}</p>
            <p className='job' >{review.job}</p>
        </div>
        <div className='lfQuote'>
            <FaQuoteLeft />
        </div>
        <div>
            <p className='detail'>{review.text}</p>
        </div>
        <div className='rtQuote'>
            <FaQuoteRight />
        </div>
        
    </div>
    </div>
        )
}


export default Cards;