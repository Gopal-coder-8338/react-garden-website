import { Link } from "react-router-dom";
import { LoadingSpinner, Rating100, Rating80, Rating99 } from "../utils/helper";
import { FooterTreeComponent } from "./footer";
import { useEffect, useState } from "react";


export function BulbTreeComponent(){

    const [isLoading , setIsLoading] = useState(true);
    
    useEffect(()=> {
        setTimeout(() =>{
            setIsLoading(false);
        },500)
    },[]);
    return(
        <>
        {isLoading ? (
            <LoadingSpinner />
        ) : (
            <>
            <div className="d-flex justify-content-between w-75">
            <h3 style={{marginTop:'8%'}}>About_Flower_Bulbs </h3>
            <Link to="/" className="btn btn-link p-2"><b>Back</b></Link>
            </div>
            <p className="p-2 w-75">Winters are the perfect time for flower bulb shopping.
                 Bulbs ideally should be grown in late fall or early winters so that tey can give you beautiful flowers in the coming spring.</p>
            <div className='thirdBody mt-5'>
                
                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="/bulb1Details"><img src='./bulb1.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEM AT &#8377; 159</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>Zephyranthes Lily, Rain Lily (Random color) - Bulbs</p>
                    </div>
                </div>
                

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/bulb2Details"><img src='./bulb2.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEM AT &#8377; 159</b>
                        </div>
                    </div>
                    <div>
                        <Rating99 />
                        <p style={{fontWeight:'500'}}>Zephyranthes Lily, Rain Lily <br /> (Pink) - Bulbs (set of 10)</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/bulb3Details"><img src='./bulb3.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEM AT &#8377; 159</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Rajnigandha, Tuberose <br /> - Bulbs (set of 10)</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/bulb4Details"><img src='./bulb4.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>18% OFF SALE &#8377; 920</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>Radiant Allium - 20 Bulbs <br />Pack</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                     <Link to="/bulb5Details"><img src='./bulb5.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>30% OFF SALE &#8377;285</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>Chincherinchee, Ornithogalum <br /> (Yellow) -Bulbs</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/bulb6Details"><img src='./bulb6.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>30% OFF SALE &#8377;699</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Calla Lily (Red, Balck) - Bulbs</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="/bulb7Details"><img src='./bulb7.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>40% OFF SALE &#8377; 859</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Serene Ixia (16 Bulbs Pack)</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/bulb8Details"><img src='./bulb8.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377;199</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>Chincherinchee, Ornithogalum (Orange) - Bulbs</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/bulb9Details"><img src='./bulb9.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>10% OFF UPTO &#8377; 359</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Daffodil Bridal Crown (White) -<br /> Bulbs (set of 5)</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="/bulb10Details"><img src='./bulb10.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>10% OFF SALE &#8377;959</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Muscari, Grape Hyacinth -<br /> (18 Bulbs Pack)</p>
                    </div>
                </div>
            </div>
            <FooterTreeComponent />
        </>
        )}
        </>
    )
}