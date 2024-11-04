import { Link } from "react-router-dom";
import { FooterTreeComponent } from "../footer";
import { Rating100, Rating99 } from "../../utils/helper";


export function Plant1TreeComponent() {


    return(
        <>
            <div className="plant1Details d-flex justify-content-between p-4 m-3">
                <div>
                    <img src="./plant1.jpg" style={{cursor:'pointer'}} width='450' height='450' />
                </div>
                <div>
                    <h2>Barbados cherry tree Malpighia emarginata - Plant</h2>
                    <Rating100 />
                    <div style={{display:'flex'}}>
                      <h5 className="mt-2 bg-danger text-center text-white p-2 m-1">Save 10%</h5>
                      <h3 style={{color:'grey'}} className="mt-2 text-center p-2 text-decoration-line-through">499</h3>
                      <h3 className="mt-2 text-center text-danger p-2">&#8377;449/KG</h3>
                    </div>
                    <div>
                        <p>(MRP Inclusive of all taxes)</p>
                        <ul>
                            <li>Shipping ₹29 for entire order</li>
                            <li>Dispatch in 1 hour</li>
                            <li>State of origin: Jammu Kasmir</li>
                        </ul>
                        <span className="d-flex align-items-center"><span>
                            <select>
                                <option>0 kg</option>
                                <option>1 kg</option>
                                <option>2 kg</option>
                                <option>3 kg</option>
                                <option>4 kg</option>
                                <option>5 kg</option>
                                <option>6 kg</option>
                                <option>7 kg</option>
                                <option>8 kg</option>
                                <option>9 kg</option>
                                <option>10 kg</option>
                            </select>
                            </span>
                            <Link to='/plant' className="btn btn-danger p-2 m-3">Back to plant</Link>
                            </span>
                    </div>
                </div>
            </div>
            <FooterTreeComponent />
        </>
    )
}