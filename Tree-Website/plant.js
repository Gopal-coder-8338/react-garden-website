import { Link } from "react-router-dom";
import { LoadingSpinner, Rating100, Rating80, Rating99 } from "../utils/helper";
import { FooterTreeComponent } from "./footer";
import { useEffect, useState } from "react";


export function PlantTreeComponent() {

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
            <div className="d-flex justify-content-between">
            <h3>About_Plants</h3>
            <Link to="/" className="btn btn-link p-2"><b>Back</b></Link>
            </div>
            
            <p className="p-2">Plants are everywhere, but did you know that they have a lot more to offer than just pretty flowers? These green wonders are essential to our survival, 
                and they have some seriously cool tricks up their sleeves.</p>
            <div className='thirdBody mt-5'>
                
                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="/plant1Details"><img src='./plant1.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377; 499</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>Barbados cherry tree<br />Malpighia emarginata - Plant</p>
                    </div>
                </div>
                

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/plant2Details"><img src='./plant2.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>14% OFF UPTO &#8377; 359</b>
                        </div>
                    </div>
                    <div>
                        <Rating99 />
                        <p style={{fontWeight:'500'}}>Parijat Tree, Parijatak, Night<br />Flowering Jasmine - Plant</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/plant3Details"><img src='./plant3.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377; 169</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Money Plant, Scindapsus<br /> (Green) - Plant</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/plant4Details"><img src='./plant4.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>&#8377; 280 OFF ABOVE &#8377;359</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>Pomegranate, Annar<br />Anar - Plant</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                     <Link to="/plant5Details"><img src='./plant5.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>13% OFF UPTO &#8377;339</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>Aptenia, Heartleaf Ice -<br /> Succulent Plant</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/plant6Details"><img src='./plant6.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>30% OFF SALE &#8377;699</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Independence Day Special<br />Pune, Delhi, Haryana</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="/plant7Details"><img src='./plant7.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377; 459</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Anthurium (Pink) - Plant<br />Raygada, Mumbai</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/plant8Details"><img src='./plant8.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377;259</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>Pentas (any color) - plant<br /></p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/plant9Details"><img src='./plant9.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>20% OFF UPTO &#8377;259</b>
                        </div>
                    </div>
                    <div>
                        <Rating99 />
                        <p style={{fontWeight:'500'}}>Rhoeo Plant, Rhoeo discolor <br />(Tricolor, Variegated) - Plant</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="/plant10Details"><img src='./plant10.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377; 359</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Banana - G9, Kela - Plant<br />Roulkela, Kerla</p>
                    </div>
                </div>
            </div>
            <FooterTreeComponent />
        </>
            )}
        </>
    )
}