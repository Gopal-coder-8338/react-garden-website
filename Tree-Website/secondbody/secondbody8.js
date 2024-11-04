import { useEffect, useState } from "react";
import { LoadingSpinner, OfferMenu2, OfferMenu3 } from "../../utils/helper";
import { FooterTreeComponent } from "../footer";
import { SecondBody8AddButton } from "./secondbody8add";


export function SecondBody8TreeComponent(){
    const [isLoading , setIsLoading] = useState(true);

    useEffect(()=> {
        setTimeout(()=>{
            setIsLoading(false);
        },400);
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
                            <h5><strong>Plants By Type</strong></h5>
                            <p>For God, Temple<br/> Please keep Green</p>
                            
                        </div>
                        <div className='rate'>
                            <h5>
                                <span className="bi bi-star-fill text-success"></span> 3.5
                            </h5>
                            <hr style={{marginTop:'0px'}} />
                            <p >1.3K+ rating</p>
                        </div>
                    </div>
                    <div>
                        <strong><span className='bi bi-scooter'> 20-25 MINS</span> 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &#8377;99 for one kg
                        </strong>
                    </div>
                    <div className='second1-menu-para-img'>
                        <img src="./image28.jpg" height='200' width='240' />
                    </div>
                    <div className='second-menu-offer-chat'>
                    <div className='offer-menu-item'><OfferMenu2 /></div>
                    <div className='offer-menu-item'><OfferMenu3 /></div>
                    </div>
                    <SecondBody8AddButton />
                </div>
            </div>
                
            <FooterTreeComponent />
        </>
        )}
        </>
    )
}