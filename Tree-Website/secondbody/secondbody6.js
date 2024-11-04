import { useEffect, useState } from "react";
import { LoadingSpinner, OfferMenu, OfferMenu2, OfferMenu3, OfferMenu4, OfferMenu5 } from "../../utils/helper";
import { FooterTreeComponent } from "../footer";
import { SecondBody6AddButton } from "./secondbody6add";


export function SecondBody6TreeComponent(){
    const [isLoading ,setIsLoading] = useState(true);

    useEffect(()=> {
        setTimeout(()=> {
            setIsLoading(false);
        },300);
    },[]);
    return(
        <>
        {isLoading ? (
            <LoadingSpinner />
        ) : (
            <>
            <div id='secondmenu1' className='secondmenu1'>
                <div className='second-menu-para'>
                    <div className='second1-menu-para'>
                        <div>
                            <h5><strong>Top Plants</strong></h5>
                            <p>For Home, Balcony<br/> Please keep Green</p>
                            
                        </div>
                        <div className='rate'>
                            <h5>
                                <span className="bi bi-star-fill text-success"></span> 3.8
                            </h5>
                            <hr style={{marginTop:'0px'}} />
                            <p >1.7K+ rating</p>
                        </div>
                    </div>
                    <div>
                        <strong><span className='bi bi-scooter'> 25-30 MINS</span> 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &#8377;199 for one
                        </strong>
                    </div>
                    <div className='second1-menu-para-img'>
                        <img src="./image26.png" height='200' width='240' />
                    </div>
                    <div className='second-menu-offer-chat'>
                    <div className='offer-menu-item'><OfferMenu /></div>
                    <div className='offer-menu-item'><OfferMenu2 /></div>
                    <div className='offer-menu-item'><OfferMenu3 /></div>
                    <div className='offer-menu-item'><OfferMenu4 /></div>
                    <div className='offer-menu-item'><OfferMenu5 /></div>
                    </div>
                    <SecondBody6AddButton />
                </div>
            </div>
                
            <FooterTreeComponent />
        </>
        )}
        </>
    )
}