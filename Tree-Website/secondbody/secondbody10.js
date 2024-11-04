import { useEffect, useState } from "react";
import { LoadingSpinner, OfferMenu, OfferMenu2, OfferMenu3 } from "../../utils/helper";
import { FooterTreeComponent } from "../footer";
import { SecondBody10AddButton } from "./secondbody10add";


export function SecondBody10TreeComponent(){
    const [isLoading , setIsLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=> {
            setIsLoading(false);
        },500);
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
                            <h5><strong>Red Plant</strong></h5>
                            <p>For God, Temple<br/> Please keep Green</p>
                            
                        </div>
                        <div className='rate'>
                            <h5>
                                <span className="bi bi-star-fill text-success"></span> 3.2
                            </h5>
                            <hr style={{marginTop:'0px'}} />
                            <p >1.4K+ rating</p>
                        </div>
                    </div>
                    <div>
                        <strong><span className='bi bi-scooter'> 15-20 MINS</span> 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &#8377;199 for one kg
                        </strong>
                    </div>
                    <div className='second1-menu-para-img'>
                        <img src="./image1.jpeg" height='200' width='240' />
                    </div>
                    <div className='second-menu-offer-chat'>
                    <div className='offer-menu-item'><OfferMenu /></div>
                    <div className='offer-menu-item'><OfferMenu2 /></div>
                    </div>
                    <SecondBody10AddButton />
                </div>
            </div>
                
            <FooterTreeComponent />
        </>
        )}
        </>
    )
}