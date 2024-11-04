import { Link } from "react-router-dom";
import { FooterTreeComponent } from "../footer";
import { Rating100 } from "../../utils/helper";


export function Garden3TreeComponent() {

    return(
        <>
            <div className="garden1Detail">
                <div>
                    <img src="./garden8.jpg" width='450' height='450' />
                </div>
                <div className="p-5"> 
                    <h4>Celebrate Auspicious Occasions with Monks in Jade garden</h4>
                    <Rating100 />
                    <div style={{display:'flex'}}>
                      <h5 className="mt-2 bg-dark text-center text-white p-2 m-1">Sold out</h5>
                      <h3 style={{color:'grey'}} className="mt-2 text-center p-2 text-decoration-line-through">477</h3>
                      <h3 className="mt-2 text-center text-danger p-2">&#8377;279</h3>
                    </div>
                    <div>
                        <p>(MRP Inclusive of all taxes)</p>
                        <ul>
                            <li>Shipping ₹49 for entire order</li>
                            <li>Dispatch in 3 days</li>
                            <li>Country of origin: India</li>
                        </ul>
                        <span className="d-flex align-items-center"><span>
                            <select className="form-select" disabled>
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
                            <Link to='/gardening'  className="btn btn-danger w-50 p-2 m-1">Back to home</Link>
                            </span>
                    </div>
                </div>
            </div>
            <FooterTreeComponent />
        </>
    )
}