import { Link } from "react-router-dom";
import { FooterTreeComponent } from "./footer";
import { LoadingSpinner, Rating80, Rating99 } from "../utils/helper";
import { useEffect, useState } from "react";


export function FertilizerTreeComponent() {
    const [isLoading , setIsLoading] = useState(true);

    useEffect(()=> {
        setTimeout(()=> {
            setIsLoading(false);
        },500)
    },[]);
    return(
        <>
        {isLoading ? (
            <LoadingSpinner />
        ) : (
            <>
           <div className="d-flex justify-content-between w-75 "> 
           <h3>Soil_and_Fertilizers </h3>
           <Link to="/" className="btn btn-link p-2"><b>Back</b></Link>
           </div>
            <p className="p-2 w-75">Just like humans need food for sustainability, 
                plants need soil and fertilizers that provide all the essential nutrients for them to grow. </p>
            <div className='thirdBody mt-5'>
                
                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="/fertilizer1Details"><img src='./fertilizer1.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEM AT &#8377; 299</b>
                        </div>
                    </div>
                    <div>
                        <Rating99 />
                        <p style={{fontWeight:'500'}}>Coco Peat Block -<br /> 4 kg (Expands Up to 60 - 70 L)</p>
                    </div>
                </div>
                

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/fertilizer2Details"><img src='./fertilizer2.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEM AT &#8377; 149</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Perlite - 500 g</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/fertilizer3Details"><img src='./fertilizer3.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEM AT &#8377; 240</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Sea Secret (Sea Weed Extract Granules, 500 g) (Set of 2)</p>
                    </div>
                </div>

                
            </div>
            <FooterTreeComponent />
        </>
        )}
        </>
    )
}