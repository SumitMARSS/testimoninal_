import Cards from "./Cards";
import './Testimonials.css'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { useState } from "react";


function Testimonials(props){
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);
    const n = reviews.length;
    console.log(n);


    function leftClickHandler(){
        if( index === 0){
            setIndex( n-1 );
        }
        else{
            setIndex( index-1 );
        }
    }
    function rightClickHandler(){
        if(index === n-1 ){
            setIndex(0);
        }
        else{
            setIndex( index+1 );
        }
    }

    function surpriseHandler(){
        let rand = Math.floor(Math.random()*n);
        setIndex(rand);
    }

    return (

        <div className="hero">

            <div className='image'>
                <img  src={reviews[index].image}/>
            </div>

            <div className="reviews">
                <Cards review={reviews[index]}/>
                <div className='btn-contain'>
                    <button onClick={leftClickHandler} >
                        <FaAngleDoubleLeft className='lfbutton'/>
                    </button>
                    <button onClick={rightClickHandler}>
                        <FaAngleDoubleRight className='rtbutton'/>
                    </button>
                </div>
                <div>
                    <button className='suscribe' onClick={surpriseHandler}>
                        Surprise Me
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Testimonials;