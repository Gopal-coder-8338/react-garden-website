import { Link } from "react-router-dom";
import { FooterTreeComponent } from "../footer";
import { Rating80 } from "../../utils/helper";


export function Pot6TreeComponent(){

    return(
        <>
            <div className="plant1Details d-flex justify-content-between p-4 m-3">
                <div>
                    <img src="./pot6.jpg" style={{cursor:'pointer'}} width='450' height='450' />
                </div>
                <div>
                    <h5>5.9 inch (15 cm) Warli Painting Cup Marble Finish Round Ceramic Pot (White) (set of 2)</h5>
                    <Rating80 />
                    <div style={{display:'flex'}}>
                      <h5 className="mt-2 bg-dark text-center text-white p-2 m-1">SAVE 20%</h5>
                      <h3 style={{color:'grey'}} className="mt-2 text-center p-2 text-decoration-line-through">659</h3>
                      <h3 className="mt-2 text-center text-danger p-2">&#8377;629</h3>
                    </div>
                    <div>
                        <p>(MRP Inclusive of all taxes)</p>
                        <ul>
                            <li>Shipping free for entire order</li>
                            <li>Dispatch in 1 hour</li>
                            <li>Country of origin: India</li>
                        </ul>
                        <span className="d-flex align-items-center"><span>
                            <select>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                            </span>
                            <Link to='/pot' className="btn btn-danger p-2 m-4">Back to plant</Link>
                            </span>
                    </div>
                </div>
            </div>
            <FooterTreeComponent />
        </>
    )
}