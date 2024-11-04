import { useEffect, useState } from "react";
import { LoadingSpinner, OfferMenu, OfferMenu2 } from "../../utils/helper";
import { FooterTreeComponent } from "../footer";
import { SecondBody4AddButton } from "./secondbody4add";


export function SecondBody4TreeComponent() {
    const [isLoading , setIsLoading] = useState(true);

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
                        <h5><strong>Plants By Red or White Rose</strong></h5>
                        <p>For Home, Balcony<br/> Please keep Green</p>
                        
                    </div>
                    <div className='rate'>
                        <h5>
                            <span className="bi bi-star-fill text-success"></span> 3.8
                        </h5>
                        <hr style={{marginTop:'0px'}} />
                        <p >1.5K+ rating</p>
                    </div>
                </div>
                <div>
                    <strong><span className='bi bi-scooter'> 30-35 MINS</span> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &#8377;399 for one
                    </strong>
                </div>
                <div className='second1-menu-para-img'>
                    <img src="./image24.jpg" height='230' width='240' />
                </div>
                <div className='second-menu-offer-chat'>
                <div className='offer-menu-item'><OfferMenu /></div>
                <div className='offer-menu-item'><OfferMenu2 /></div>
                
                
                </div>
                <SecondBody4AddButton />
            </div>
        </div>
            
        <FooterTreeComponent />
    </>
       )}
       </>
    )
}