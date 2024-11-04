import { Link } from "react-router-dom";
import { FooterTreeComponent } from "../footer";
import { Rating100 } from "../../utils/helper";


export function Port4TreeComponent(){

    return(
        <>
            <div className="plant1Details d-flex justify-content-between p-4 m-3">
                <div>
                    <img src="./pot4.jpg" style={{cursor:'pointer'}} width='450' height='450' />
                </div>
                <div>
                    <h5>5.7 inch (14 cm) Ronda No. 14.5 Round Plastic Planter (Mix Color) - Pack of 6</h5>
                    <Rating100 />
                    <div style={{display:'flex'}}>
                      <h5 className="mt-2 bg-danger text-center text-white p-2 m-1">Fix Amount</h5>
                      <h3 style={{color:'grey'}} className="mt-2 text-center p-2 text-decoration-line-through">599</h3>
                      <h3 className="mt-2 text-center text-danger p-2">&#8377;599</h3>
                    </div>
                    <div>
                        <p>(MRP Inclusive of all taxes)</p>
                        <ul>
                            <li>Shipping free for entire order</li>
                            <li>Dispatch in 1 hour</li>
                            <li>State of origin: Jammu Kasmir</li>
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