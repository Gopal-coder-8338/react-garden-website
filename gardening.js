import { Link } from "react-router-dom";
import { LoadingSpinner, Rating100, Rating80, Rating99 } from "../utils/helper";
import { FooterTreeComponent } from "./footer";
import './index.css';

import { useEffect, useState } from "react";
import { ToastNotification } from "./ToastNotification";


export function GardeningTreeComponent(){

    const [toastMessage , setToastMessage] = useState('');
   
    const [isLoading , setIsLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(()=>{
            setIsLoading(false)
        },500)
    },[]);
    return(
        <>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <> 
            <div className="d-flex justify-content-between w-75">
            <h3>Gardening </h3>
            <Link to='/' className="btn btn-link p-2"><b>Back</b></Link>
            </div>
            <p className="p-2">Gardening is not just an activity – for some, it is a stress release. For others, it is an escape into a world filled with hope and joy.</p>
            <div className='thirdBody mt-5'>
                
            <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/garden1Details"><img src='./garden1.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377; 99</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Celebrate Auspicious occations<br />with Monks in Jade garden</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/garden2Details"><img src='./garden2.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377; 279</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>4 Money Plant in hanging<br /> basket.</p>
                    </div>
                </div>
                    

                
                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/garden3Details"><img src='./garden8.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377; 279</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Celebrate Auspicious occations<br />with Monks in Jade garden</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/garden4Details"><img src='./garden4.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>&#8377; 149 OFF ABOVE &#8377;399</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>Top 4 Die Hard Succulents<br />Pack, Chennai</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                     <Link to="/garden5Details"><img src='./garden5.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>50% OFF UPTO &#8377;2250</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>Attractive Arrangement of Air Plants </p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/garden6Details"><img src='./garden6.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>20% OFF SALE</b>
                        </div>
                    </div>
                    <div>
                        <Rating99 />
                        <p style={{fontWeight:'500'}}>Best 3 Aromatic Plants Pack<br />Pune, Delhi, Haryana</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="/garden7Details"><img src='./garden7.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377; 199</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Bright green terrarium pack<br />Raygada, Mumbai</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/garden8Details"><img src='./garden13.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377; 949</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>DIY Meditating Buddha -<br /> Miniature Gardenn</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/garden9Details"><img src='./garden9.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>50% OFF UPTO &#8377;549</b>
                        </div>
                    </div>
                    <div>
                        <Rating99 />
                        <p style={{fontWeight:'500'}}>Celebrate Years of together<br />with Dada - Dadi Garden</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="/garden10Details"><img src='./garden10.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377; 199</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Best 4 Classic Air Plants Pack<br />Roulkela, Kerla</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="/garden11Details"><img src='./garden11.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377; 199</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Charming Flowering and <br />Foliage Plants in Balcony</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="/garden12Details"><img src='./garden12.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377; 1199</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>DIY Feel Relaxed in the Garden<br />-Miniature Garden</p>
                    </div>
                </div>
                    {toastMessage && (
                        <ToastNotification message={toastMessage} onClose={() => setToastMessage('')} />
                    )}
            </div>
            <FooterTreeComponent />
        </>
            )}
        </>
    )
}
