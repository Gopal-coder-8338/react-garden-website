import { Link } from "react-router-dom";
import { Rating80 } from "../../utils/helper";
import { FooterTreeComponent } from "../footer";

export function Garden4TreeComponent() {

    return(
        <>
            <div className="garden1Detail">
                <div>
                    <img src="./garden4.jpg" width='450' height='450' />
                </div>
                <div className="p-5"> 
                    <h2>Top 4 Die Hard Succulents Pack</h2>
                    <Rating80 />
                    <div style={{display:'flex'}}>
                      <h5 className="mt-2 bg-danger text-center text-white p-2 m-1">Save 45%</h5>
                      {/* <h3 style={{color:'grey'}} className="mt-2 text-center p-2 text-decoration-line-through">375</h3>
                      <h3 className="mt-2 text-center text-danger p-2">&#8377;150</h3> */}
                      <h3 className="mt-2 text-center text-danger p-2">149 OFF ABOVE &#8377;399</h3>
                    </div>
                    <div>
                        <p>(MRP Inclusive of all taxes)</p>
                        <ul>
                            <li>Shipping ₹29 for entire order</li>
                            <li>Dispatch in 5 days</li>
                            <li>Country of origin: India</li>
                        </ul>
                        <span className="d-flex align-items-center"><span>
                            <select >
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
                            <Link to='/gardening' className="btn btn-danger w-50 p-2 m-2">Back to home</Link>
                            </span>
                    </div>
                </div>
            </div>
            <FooterTreeComponent />
        </>
    )
}