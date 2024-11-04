import { Link } from "react-router-dom";
import { LoadingSpinner, Rating100, Rating80, Rating99 } from "../utils/helper";
import { FooterTreeComponent } from "./footer";
import { useEffect, useState } from "react";


export function PotTreeComponent(){
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
            <h3>About Planters <Link to="/" className="btn btn-link p-2"><b>Back</b></Link></h3>
            <p className="p-2 w-75">Many types of planters also come with attractive features.
                 They have an open drainage system, perforated holes,
                 and special coatings to prevent warping and rotting.</p>
            <div className='thirdBody mt-5'>
                
                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="/pot1Details"><img src='./pot1.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEM AT &#8377; 599</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>12 inch (30 cm) Grower Round<br /> Plastic Pot (set of 3)</p>
                    </div>
                </div>
                

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/pot2Details"><img src='./pot2.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEM AT &#8377; 949</b>
                        </div>
                    </div>
                    <div>
                        <Rating99 />
                        <p style={{fontWeight:'500'}}>5.7 inch (14 cm) Apple Round Ceramic Pots - Pack of 2</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/pot3Details"><img src='./pot3.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEM AT &#8377; 699</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>7.9 inch (20 cm) Bello Railing<br /> D Shape plastic Planter (White)</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/pot4Details"><img src='./pot4.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>FIX RATE &#8377; 559</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>5.7 inch (14 cm) Ronda No. 14.5 Round Plastic Planter (Mix Color) </p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                     <Link to="/pot5Details"><img src='./pot5.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEM SALE AT &#8377;509</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>3 inch (8 cm) Handi Shape<br /> Round Ceramic Pots - Pack of 5</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/pot6Details"><img src='./pot6.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>30% OFF SALE &#8377;659</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>5.9 inch (15 cm) Warli Painting Cup Marble Finish Ceramic Pot </p>
                    </div>
                </div>

                
            </div>
            <FooterTreeComponent />
        </>
        )}
        </>
    )
}