import { Link } from "react-router-dom";
import { LoadingSpinner, Rating100, Rating80, Rating99 } from "../utils/helper";
import { FooterTreeComponent } from "./footer";
import { useEffect, useState } from "react";


export function SeedTreeComponent(){
    const [isLoading , setIsLoading] = useState(true);

    useEffect(()=> {
        setTimeout(()=> {
            setIsLoading(false)
        },500)
    },[]);
    return(
        <>
        {isLoading ? (
            <LoadingSpinner />
        )  : (
            <>
            <div className="d-flex justify-content-between align-items-center w-75">
            <h3 style={{marginTop:'8%'}}>Hybrid_Flowering_Seeds </h3>
            <Link to="/" className="btn btn-link p-2"><b>Back</b></Link>
            </div>
            <p className="p-2">Hybrid seeds simply mean a crossover between one, two, or multiple inbred plants. When seeds are crossbred,
                 then the resultant breed will bear some traits of both the plants and some newer traits.</p>
            <div className='thirdBody mt-5'>
                
                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="/seed1Details"><img src='./seed1.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>50% OFF UPTO &#8377; 149</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>Pansy F1 Black Blotch -<br /> Flower Seeds</p>
                    </div>
                </div>
                

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/seed2Details"><img src='./seed2.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>50% OFF UPTO &#8377; 149</b>
                        </div>
                    </div>
                    <div>
                        <Rating99 />
                        <p style={{fontWeight:'500'}}>Sunflower Large Bloom -<br /> Flower Seeds</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/seed3Details"><img src='./seed3.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>50% OFF UPTO &#8377; 149</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Mesembryanthemum, Ice Plant Mixed Color - Flower Seeds</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/seed4Details"><img src='./seed4.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>50% OFF UPTO &#8377; 149</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>Gomphrena Haageana <br /> Strawberry - Flower Seeds</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                     <Link to="/seed5Details"><img src='./seed5.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>10% OFF UPTO &#8377;1177</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>Robinia Pseudoacacia, <br />Black Locust - 0.5 kg Seeds</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/seed6Details"><img src='./seed6.jpg' className='card-img-top' /></Link>
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
                    <Link to="/seed7Details"><img src='./seed7.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>10% OFF SALE &#8377; 1177</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Lantana Camara - 0.5 kg Seeds</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/seed8Details"><img src='./seed8.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377;1499</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>Bauhinia Variegated, Kachnar,<br /> Orchid Tree - 0.5 kg Seeds</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="/seed9Details"><img src='./seed9.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>50% OFF UPTO &#8377; 149</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Hollyhock Malva -<br /> Flower Seeds</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="/seed10Details"><img src='./seed10.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>50% OFF SALE &#8377;149</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Portulaca F1 Hybrid Mixed<br /> Color - Flower Seeds</p>
                    </div>
                </div>
            </div>
            <FooterTreeComponent />
        </>
        )}
        </>
    )
}