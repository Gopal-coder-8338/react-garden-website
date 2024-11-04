
import { Link } from 'react-router-dom';
import { Rating100, Rating80, Rating99 } from '../utils/helper';
import { FooterTreeComponent } from './footer';
import './index.css';

export function ThirdBodyTree(){
    
    return(
        <>
            <h3 className='thirdHeadeing'>Gardens with online plant delivery</h3>
            <div className='thirdBody mt-5'>
                <div>
                    <div className='card' style={{width:'200px'}}>
                        <Link to="plantRedFeature"><img src='./image21.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377; 99</b>
                        </div>
                    </div>
                    <div>
                        <Rating99 />
                        <p style={{fontWeight:'500'}}>Desert Rose Plant<br />Kolkata, tamilnadu</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="plantsFeature"><img src='./image22.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>40% OFF UPTO &#8377; 150</b>
                        </div>
                    </div>
                    <div>
                        <Rating99 />
                        <p style={{fontWeight:'500'}}>Desert Rose Plant<br />Hyderabad, Odisha</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="plantsLocation"><img src='./image23.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377; 279</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Desert Rose Plant<br />Odisha, Delhi</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="plantsWhiteRose"><img src='./image24.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>&#8377; 149 OFF ABOVE &#8377;399</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>Desert Rose Plant<br />Mumbai, Delhi, Chennai</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="plantsGift"><img src='./image25.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>50% OFF UPTO &#8377;120</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Desert Rose Plant<br />Kolkata, Tamilnadu, UP</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="topPlant"><img src='./image26.png' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>20% OFF SALE</b>
                        </div>
                    </div>
                    <div>
                        <Rating99 />
                        <p style={{fontWeight:'500'}}>Desert Rose Plant<br />Pune, Delhi, Haryana</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="caladiumPlant"><img src='./image27.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377; 199</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Desert Rose Plant<br />Raygada, Mumbai, Andra</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="plantsType"><img src='./image28.jpg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377; 99</b>
                        </div>
                    </div>
                    <div>
                        <Rating100 />
                        <p style={{fontWeight:'500'}}>Desert Rose Plant<br />Mumbai, Kerla, Bihar</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="whitePlant"><img src='./image7.jpeg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>50% OFF UPTO &#8377;120</b>
                        </div>
                    </div>
                    <div>
                        <Rating99 />
                        <p style={{fontWeight:'500'}}>Desert Rose Plant<br />Kerla, Tamilnadu, Bangalore</p>
                    </div>
                </div>

                <div>
                    <div className='card' style={{width:'200px'}}>
                    <Link to="RedRose12"><img src='./image1.jpeg' className='card-img-top' /></Link>
                        <div className='card-header'>
                            <b>ITEMS AT &#8377; 199</b>
                        </div>
                    </div>
                    <div>
                        <Rating80 />
                        <p style={{fontWeight:'500'}}>Desert Rose Plant<br />Roulkela, Kerla</p>
                    </div>
                </div>
            </div>
            
        </>
        
    )
}