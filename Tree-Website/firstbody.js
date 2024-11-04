import { Link } from 'react-router-dom';
import './index.css';

export function FirstBodyTree(){
    function leftClick(){
        var left = document.querySelector('.scroll_img');
        left.scrollBy(-380 , 0)
    }
    function rightClick(){
        var left = document.querySelector('.scroll_img');
        left.scrollBy(380 , 0)
    }
    return(
        <>
            <div>
            <h3 className='firstHeading' style={{textAlign:'left', fontWeight:'bold'}}>What's on your choice?</h3>
                    <div className='scroll_btn'>
                        <button onClick={leftClick} className='scroll_btn_left icon bi bi-arrow-left'></button>
                        <button onClick={rightClick} className='scroll_btn_right icon bi bi-arrow-right'></button>
                    </div>
                    <div className="cover">
                        <div className="scroll_img">
                            <Link to='gardening'><div className='child'>
                                <img src="./image1.jpeg" className='child_img' />
                                <p>GARDENING</p>
                            </div></Link>
                            <Link to="plant">
                                <div className='child'>
                                <img src="./image2.jpeg" className='child_img' />
                                <p>PLANTS</p>
                                </div>
                            </Link>
                            <Link to="seed">
                            <div className='child'><img src="./image3.jpeg" className='child_img' /><p>SEEDS</p></div>
                            </Link>
                            <Link to="bulb">
                            <div className='child'><img src="./image4.jpeg" className='child_img' /><p>BULBS</p></div>
                            </Link>
                            <Link to="pot">
                            <div className='child'><img src="./image5.jpeg" className='child_img' /><p>POTS</p></div>
                            </Link>
                            <Link to="fertilizer">
                            <div className='child'><img src="./image6.jpeg" className='child_img' /><p>FERTILIZERS</p></div>
                            </Link>
                            <div className='child'><img src="./image7.jpeg" className='child_img' /><p>CORPORATE</p></div>
                            <Link to="pabble">
                            <div className='child'><img src="./image8.jpeg" className='child_img' /><p>PABBLES</p></div>
                            </Link>
                            
                        </div>
                    </div>
                </div>
        </>
    )
}