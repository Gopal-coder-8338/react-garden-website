import { Link } from 'react-router-dom';
import { Rating100, Rating80, Rating99 } from '../utils/helper';
import './index.css';


export function SecondBodyTree(){
    function leftClickImg(){
        var left = document.querySelector('.scroll_img1');
        left.scrollBy(-380 , 0)
    }
    function rightClickImg(){
        var left = document.querySelector('.scroll_img1');
        left.scrollBy(380 , 0)
    }
    return(
        <>
            <div>
                <h3 className='second_heading' style={{textAlign:'left', fontWeight:'bold'}}>Top rating flower bockets</h3>
                    <div>
                        <div className='scroll_btn'>
                            <button onClick={leftClickImg} className='scroll_btn_left icon bi bi-arrow-left'></button>
                            <button onClick={rightClickImg} className='scroll_btn_right icon bi bi-arrow-right'></button>
                        </div>
                        <div className="cover">
                            <div className="scroll_img1">
                                <Link to="plantsLocation"><div className='child_rating'><img src="./image23.jpg" className='child_img_rating' /><p>ITEMS AT &#8377; 279</p><Rating80 /></div></Link>
                                <Link to="plantsFeature"><div className='child_rating'><img src="./image22.jpg" className='child_img_rating' /><p>40% OFF UPTO &#8377; 150</p><Rating99 /></div></Link>
                                <Link to="plantRedFeature">
                                <div className='child_rating'>
                                    <img src="./image21.jpg" className='child_img_rating' />
                                    <p>ITEMS AT &#8377; 99</p>
                                    <Rating99 />
                                </div>
                                </Link>
                                <Link to="plantsWhiteRose">
                                <div className='child_rating'>
                                    <img src="./image24.jpg" className='child_img_rating' />
                                    <p>&#8377; 149 OFF ABOVE &#8377;399</p><Rating100 /></div>
                                </Link>
                                <Link to="plantsGift"><div className='child_rating'><img src="./image25.jpg" className='child_img_rating' /><p>50% OFF UPTO &#8377;120</p><Rating80 /></div></Link>
                                <Link to="topPlant"><div className='child_rating'><img src="./image26.png" className='child_img_rating' /><p>20% OFF</p><Rating99 /></div></Link>
                                <Link to="caladiumPlant"><div className='child_rating'><img src="./image27.jpg" className='child_img_rating' /><p>ITEMS AT &#8377; 199</p><Rating99 /></div></Link>
                                <Link to="plantsType"><div className='child_rating'><img src="./image28.jpg" className='child_img_rating' /><p>ITEMS AT &#8377; 99</p><Rating80 /></div></Link>

                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}