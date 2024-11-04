import { Link } from "react-router-dom";
import { FooterTreeComponent } from "../Tree-Website/footer";
import '../index.css';

import '../index.css';

export const handleScrollTop = () => {
    window.scrollTo({
        top:0,
        behavior:'smooth',
    });
};

export const Rating99 = () => {
    return(
        <>
            <span style={{color:'#333',fontWeight:'bold'}}>
            <span className='bi bi-star-fill text-warning me-1'></span>
            <span className='bi bi-star-fill text-warning me-1'></span>
            <span className='bi bi-star-fill text-warning me-1'></span>
            <span className='bi bi-star-fill text-warning me-2'></span>
            99 reviews
            </span>
        </>
    )
}
export const Rating80 = () => {
    return(
        <>
            <span style={{color:'#333',fontWeight:'bold'}}>
                <span className='bi bi-star-fill text-warning me-1'></span>
                <span className='bi bi-star-fill text-warning me-1'></span>
                <span className='bi bi-star-fill text-warning me-1'></span>
                <span className='bi bi-star-half text-warning me-2'></span>
                80 reviews
            </span>
        </>
    )
}
export const Rating100 = () => {
    return(
        <>
            <span style={{color:'#333',fontWeight:'bold'}}>
                <span className='bi bi-star-fill text-warning me-1'></span>
                <span className='bi bi-star-fill text-warning me-1'></span>
                <span className='bi bi-star-fill text-warning me-1'></span>
                <span className='bi bi-star-fill text-warning me-2'></span>
                <span className='bi bi-star-fill text-warning me-2'></span>
                200 reviews
            </span>
        </>
    )
}

export const OfferMenu = ({onClick}) => {
    return(
        <>
            <div onClick={onClick} style={{cursor:'pointer'}} className="second-menu-off">

                <div className="second-menu-offbox">
                    <div>
                        <strong>
                            <img src="./offer1.jpg" /> Extra 15% off
                        </strong>
                    </div>
                    <div style={{marginTop:'5px'}}>
                        <p style={{color:'rgb(65,63,63)',fontSize:'10px'}}> |&nbsp; APPLICABLE OVER & ABOVE COUPONS</p>
                    </div>
                </div>  

            </div>
        </>
    )
}
export const OfferMenu2 = () => {
    return(
        <>
            <div className="second-menu-off">

                <div className="second-menu-offbox">
                    <div>
                        <strong>
                            <img src="./offer2.jpg" /> 60% OFF UPTO &#8377;120
                        </strong>
                    </div>
                    <div style={{marginTop:'5px'}}>
                        <p style={{color:'rgb(65,63,63)',fontSize:'10px'}}> |&nbsp; USE TRYNEW | ABOVE &#8377;199</p>
                    </div>
                </div>


            </div>
        </>
    )
}
export const OfferMenu3 = () => {
    return(
        <>
            <div className="second-menu-off">

                <div className="second-menu-offbox">
                    <div>
                        <strong>
                            <img src="./offer2.jpg" /> FLAT &#8377;100 OFF
                        </strong>
                    </div>
                    <div style={{marginTop:'5px'}}>
                        <p style={{color:'rgb(65,63,63)',fontSize:'10px'}}> |&nbsp; USE FLAT100 | ABOVE &#8377;299</p>
                    </div>
                </div>


            </div>
        </>
    )
}
export const OfferMenu4 = () => {
    return(
        <>
            <div className="second-menu-off">

                <div className="second-menu-offbox">
                    <div>
                        <strong>
                            <img src="./offer2.jpg" /> FLAT &#8377;125 OFF
                        </strong>
                    </div>
                    <div style={{marginTop:'5px'}}>
                        <p style={{color:'rgb(65,63,63)',fontSize:'10px'}}> |&nbsp; USE FLAT100 | ABOVE &#8377;399</p>
                    </div>
                </div>


            </div>
        </>
    )
}
export const OfferMenu5 = () => {
    return(
        <>
            <div className="second-menu-off">

                <div className="second-menu-offbox">
                    <div>
                        <strong>
                            <img src="./offer2.jpg" /> FLAT &#8377;150 OFF
                        </strong>
                    </div>
                    <div style={{marginTop:'5px'}}>
                        <p style={{color:'rgb(65,63,63)',fontSize:'10px'}}> |&nbsp; USE DELICIOUS | ABOVE &#8377;499</p>
                    </div>
                </div>


            </div>
        </>
    )
}

export const LoadingSpinner = () => {
    
    return(
        <div className="spinner-container">
            <div className="loading-spinner"></div>
        </div>
    )
}