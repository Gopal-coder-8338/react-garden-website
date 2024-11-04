import { Link } from "react-router-dom";
import { LoadingSpinner, Rating80, Rating99 } from "../utils/helper";
import { FooterTreeComponent } from "./footer";
import { useEffect, useState } from "react";


export function PabbleTreeComponent(){
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{ 
        setTimeout(()=>{
            setIsLoading(false);
        },500)
    },[]);
    return(
        <>
        {isLoading ? (
            <LoadingSpinner />
        ) : (
            <>
            <h3>Trending Pebbles <Link to="/" className="btn btn-link p-2"><b>Back</b></Link></h3>
            <p className="p-2 w-75">Looking to add a touch of beauty and sophistication to your garden or home decor?
                 Look no further than our Trending Pebbles collection! </p>
            <div className='thirdBody mt-5'>
                
                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="/pabble1Details"><img src='./pabble1.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>20% OFF SALE &#8377; 149</b>
                        </div>
                    </div>
                    <div>
                        <Rating99 />
                        <p style={{fontWeight:'500'}}>Chips Pebbles (Black, Small, Polished) - 1 kg</p>
                    </div>
                </div>
                

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/pabble2Details"><img src='./pabble2.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>20% OFF SALE &#8377; 99</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Marble Chips Pebbles - 1 kg<br /> (Mix Color, Small, Polished) </p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/pabble3Details"><img src='./pabble3.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>20% OFF SALE &#8377; 149</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Stone Sand (Dark Pink) - 1 kg</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/pabble4Details"><img src='./pabble4.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>20% OFF SALE &#8377; 249</b>
                        </div>
                    </div>
                    <div>
                        <Rating99 />
                        <p style={{fontWeight:'500'}}>Onex Pebbles (Aqua Green<br /> Color, Medium) - 1 kg</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/pabble5Details"><img src='./pabble5.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>20% OFF SALE &#8377; 99</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Natural Chips Pebbles (Red,<br /> Small, Unpolished) - 1 kg</p>
                    </div>
                </div>

                
            </div>
            <FooterTreeComponent />
        </>
        )}
        </>
    )
}