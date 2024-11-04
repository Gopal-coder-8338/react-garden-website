import { useEffect, useState } from "react";
import { LoadingSpinner, OfferMenu, OfferMenu2, OfferMenu3, OfferMenu5 } from "../../utils/helper";
import { FooterTreeComponent } from "../footer";
import { SecondBody5AddButton } from "./secondbody5add";


export function SecondBody5TreeCompnent(){
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
                            <h5><strong>Gift Plants</strong></h5>
                            <p>For Home, Balcony<br/> Please keep Green</p>
                            
                        </div>
                        <div className='rate'>
                            <h5>
                                <span className="bi bi-star-fill text-success"></span> 4.1
                            </h5>
                            <hr style={{marginTop:'0px'}} />
                            <p >1.3K+ rating</p>
                        </div>
                    </div>
                    <div>
                        <strong><span className='bi bi-scooter'> 30-40 MINS</span> 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &#8377;120 for one
                        </strong>
                    </div>
                    <div className='second1-menu-para-img'>
                        <img src="./image25.jpg" height='230' width='240' />
                    </div>
                    <div className='second-menu-offer-chat'>
                    <div className='offer-menu-item'><OfferMenu /></div>
                    <div className='offer-menu-item'><OfferMenu2 /></div>
                    <div className='offer-menu-item'><OfferMenu3 /></div>
                    <div className='offer-menu-item'><OfferMenu5 /></div>
                    </div>
                    <SecondBody5AddButton />
                </div>
            </div>
                
            <FooterTreeComponent />
        </>
        )}
        </>
    )
}