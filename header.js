import { useEffect, useState } from "react";
import {  handleScrollTop, LoadingSpinner } from "../utils/helper";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './index.css'; // Import the CSS file
import { SearchTreeComponent } from "./search";
import { HomeTreeComponent } from "./home";
import { BodyTreeComponent } from "./body";
import { FooterTreeComponent } from "./footer";
import {Garden1TreeComponent} from "./garden/garden1"
import { GardeningTreeComponent , Garden2TreeComponent } from "./gardening";
import { GardenTowTreeComponent } from "./garden/garden2";
import { Garden3TreeComponent } from "./garden/garden3";
import { Garden4TreeComponent } from "./garden/garden4";
import { Garden5TreeComponent } from "./garden/garden5";
import { Garden6TreeComponent } from "./garden/garden6";
import { Garden7TreeComponent } from "./garden/garden7";
import { Garden13TreeComponent } from "./garden/garden13";
import { Garden9TreeComponent } from "./garden/garden9";
import { Garden10TreeComponent } from "./garden/garden10";
import { Garden11TreeComponent } from "./garden/garden11";
import { Garden12TreeComponent } from "./garden/garden12";
import { PlantTreeComponent } from "./plant";
import { Plant1TreeComponent } from "./plant/plant1";
import { Plant2TreeComponent } from "./plant/plant2";
import { Plant3TreeComponent } from "./plant/plant3";
import { Plant4TreeComponent } from "./plant/plant4";
import { Plant5TreeComponent } from "./plant/plant5";
import { Plant6TreeComponent } from "./plant/plant6";
import { Plant7TreeComponent } from "./plant/plant7";
import { Plant8TreeComponent } from "./plant/plant8";
import { Plant9TreeComponent } from "./plant/plant9";
import { Plant10TreeComponent } from "./plant/plant10";
import { SeedTreeComponent } from "./seed";
import { Seed1TreeComponent } from "./seed/seed1";
import { Seed2TreeComponent } from "./seed/seed2";
import { Seed3TreeComponent } from "./seed/seed3";
import { Seed4TreeComponent } from "./seed/seed4";
import { Seed5TreeComponent } from "./seed/seed5";
import { Seed6TreeComponent } from "./seed/seed6";
import { Seed7TreeComponent } from "./seed/seed7";
import { Seed8TreeComponent } from "./seed/seed8";
import { Seed9TreeComponent } from "./seed/seed9";
import { Seed10TreeComponent } from "./seed/seed10";
import { BulbTreeComponent } from "./bulb";
import { Bulb1TreeComponent } from "./bulb/bulb1";
import { Bulb2TreeComponent } from "./bulb/bulb2";
import { Bulb3TreeComponent } from "./bulb/bulb3";
import { Bulb4TreeComponent } from "./bulb/bulb4";
import { Bulb5TreeComponent } from "./bulb/bulb5";
import { Bulb6TreeComponent } from "./bulb/bulb6";
import { Bulb7TreeComponent } from "./bulb/bulb7";
import { Bulb8TreeComponent } from "./bulb/bulb8";
import { Bulb9TreeComponent } from "./bulb/bulb9";
import { Bulb10TreeComponent } from "./bulb/bulb10";
import { PotTreeComponent } from "./pot";
import { Pot1TreeComponent } from "./pot/pot1";
import { Pot2TreeComponent } from "./pot/pot2";
import { Pot3TreeComponent } from "./pot/pot3";
import { Port4TreeComponent } from "./pot/pot4";
import { Pot5TreeComponent } from "./pot/pot5";
import { Pot6TreeComponent } from "./pot/pot6";
import { FertilizerTreeComponent } from "./fertilizer";
import { Fertilizer1TreeComponent } from "./fertilizer/ferlitizer1";
import { Fertilizer2TreeComponent } from "./fertilizer/fertilizer2";
import { Fertilizer3TreeComponent } from "./fertilizer/fertilizer3";
import { PabbleTreeComponent } from "./pabble";
import { Pabble1TreeComponent } from "./pabble/pabble1";
import { Pabble2TreeComponent } from "./pabble/pabble2";
import { Pabble3TreeComponent } from "./pabble/pabble3";
import { Pabble4TreeComponent } from "./pabble/pabble4";
import { Pabble5TreeComponent } from "./pabble/pabble5";
import { SecondBody1TreeComponent } from "./secondbody/secondbody1";
import { SecondBody2TreeComponent } from "./secondbody/secondbody2";
import { SecondBody3TreeComponent } from "./secondbody/secondbody3";
import { SecondBody4TreeComponent } from "./secondbody/secondbody4";
import { SecondBody5TreeCompnent } from "./secondbody/secondbody5";
import { SecondBody6TreeComponent } from "./secondbody/secondbody6";
import { SecondBody7TreeComponent } from "./secondbody/secondbody7";
import { SecondBody8TreeComponent } from "./secondbody/secondbody8";
import { SecondBody9TreeComponent } from "./secondbody/secondbody9";
import { SecondBody10TreeComponent } from "./secondbody/secondbody10";
import { SecondBodyAddButton } from "./secondbody/secondbody1add";
import { useCart } from "./CartContext";
import { CartComponent } from "./CartComponent";
import { AboutTreeComponent } from "./about";



export function HeaderTreeComponent() {
    
    const [isMenu, setIsMenu] = useState(false);
    const {cartCount} = useCart();
    const [isLoading , setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        },2000);
    },[]);  


    return (
        <>
            <BrowserRouter>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <div className="header">
                <div className="header_img">
                    <Link to='/'><img src="./tree-logo.jpg" width='50' height='50' alt="Tree Logo" /></Link>
                </div>
                <ul className="app__header-links">
                    <li>
                        <Link to='search'>
                            <span className="bi bi-search"></span> <span>Search</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                        <span className="bi bi-file-person"></span> <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span className="bi bi-person"></span> <span>Contact</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <span className="bi bi-cart"></span>[{cartCount}] <span>Cart</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                        <span className="bi bi-box-arrow-in-right"></span> <span>Login</span>
                        </Link>
                    </li>
                </ul>
                <div className="small_screen">
                    <i class="bi bi-justify" style={{fontSize:'29px'}} onClick={() => setIsMenu(true)}  />

                        {isMenu && (
                            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                                <i class="bi bi-x-lg overlay-close" onClick={() => setIsMenu(false)}></i>
                                <ul className="app__header-smallscreen ">
                                    <li>
                                        <Link to="search" onClick={() => {
                                            setIsMenu(false);
                                            handleScrollTop();
                                        }}>
                                            <span className="bi bi-search"></span> <span>Search</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about" onClick={() => {
                                            setIsMenu(false);
                                            handleScrollTop();
                                        }}>
                                            <span className="bi bi-file-person"></span> <span>About</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => {
                                            setIsMenu(false);
                                            handleScrollTop();
                                        }}>
                                            <span className="bi bi-person"></span> <span>Contact</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/cart" onClick={() => {
                                            setIsMenu(false);
                                            handleScrollTop();
                                        }}>
                                            <span className="bi bi-cart"></span>[{cartCount}] <span>Cart</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => {
                                            setIsMenu(false);
                                            handleScrollTop();
                                        }}>
                                            <span className="bi bi-box-arrow-in-right"></span> <span>Login</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                </div>
            </div>

            <Routes>    
                <Route path="/" element={<HomeTreeComponent />} />
                <Route path="collection" element={<BodyTreeComponent />} />
                <Route path='search' element={<SearchTreeComponent />} />
                <Route path="footer" element={<FooterTreeComponent />} />
                <Route path="gardening" element={<GardeningTreeComponent />} />
                <Route path="garden1Details" element={<Garden1TreeComponent />} />
                <Route path="garden2Details" element={<GardenTowTreeComponent />} />
                <Route path="garden3Details" element={<Garden3TreeComponent />} />
                <Route path="garden4Details" element={<Garden4TreeComponent />} />
                <Route path="garden5Details" element={<Garden5TreeComponent />} />
                <Route path="garden6Details" element={<Garden6TreeComponent />} />
                <Route path="garden7Details" element={<Garden7TreeComponent />} />
                <Route path="garden8Details" element={<Garden13TreeComponent />} />
                <Route path="garden9Details" element={<Garden9TreeComponent />} />
                <Route path="garden10Details" element={<Garden10TreeComponent />} />
                <Route path="garden11Details" element={<Garden11TreeComponent />} />
                <Route path="garden12Details" element={<Garden12TreeComponent />} />

                <Route path="plant" element={<PlantTreeComponent />} />
                <Route path="plant1Details" element={<Plant1TreeComponent />} />
                <Route path="plant2Details" element={<Plant2TreeComponent />} />
                <Route path="plant3Details" element={<Plant3TreeComponent />} />
                <Route path="plant4Details" element={<Plant4TreeComponent />} />
                <Route path="plant5Details" element={<Plant5TreeComponent />} />
                <Route path="plant6Details" element={<Plant6TreeComponent />} />
                <Route path="plant7Details" element={<Plant7TreeComponent />} />
                <Route path="plant8Details" element={<Plant8TreeComponent />} />
                <Route path="plant9Details" element={<Plant9TreeComponent />} />
                <Route path="plant10Details" element={<Plant10TreeComponent />} />

                <Route path="seed" element={<SeedTreeComponent />} />
                <Route path="seed1Details" element={<Seed1TreeComponent />} />
                <Route path="seed2Details" element={<Seed2TreeComponent />} />
                <Route path="seed3Details" element={<Seed3TreeComponent />} />
                <Route path="seed4Details" element={<Seed4TreeComponent />} />
                <Route path="seed5Details" element={<Seed5TreeComponent />} />
                <Route path="seed6Details" element={<Seed6TreeComponent />} />
                <Route path="seed7Details" element={<Seed7TreeComponent />} />
                <Route path="seed8Details" element={<Seed8TreeComponent />} />
                <Route path="seed9Details" element={<Seed9TreeComponent />} />
                <Route path="seed10Details" element={<Seed10TreeComponent />} />

                <Route path="bulb" element={<BulbTreeComponent />} />
                <Route path="bulb1Details" element={<Bulb1TreeComponent />} />
                <Route path="bulb2Details" element={<Bulb2TreeComponent />} />
                <Route path="bulb3Details" element={<Bulb3TreeComponent />} />
                <Route path="bulb4Details" element={<Bulb4TreeComponent />} />
                <Route path="bulb5Details" element={<Bulb5TreeComponent />} />
                <Route path="bulb6Details" element={<Bulb6TreeComponent />} />
                <Route path="bulb7Details" element={<Bulb7TreeComponent />} />
                <Route path="bulb8Details" element={<Bulb8TreeComponent />} />
                <Route path="bulb9Details" element={<Bulb9TreeComponent />} />
                <Route path="bulb10Details" element={<Bulb10TreeComponent />} />

                <Route path="pot" element={<PotTreeComponent />} />
                <Route path="pot1Details" element={<Pot1TreeComponent />} />
                <Route path="pot2Details" element={<Pot2TreeComponent />} />
                <Route path="pot3Details" element={<Pot3TreeComponent />} />
                <Route path="pot4Details" element={<Port4TreeComponent />} />
                <Route path="pot5Details" element={<Pot5TreeComponent />} />
                <Route path="pot6Details" element={<Pot6TreeComponent />} />

                <Route path="fertilizer" element={<FertilizerTreeComponent />} />
                <Route path="fertilizer1Details" element={<Fertilizer1TreeComponent />} />
                <Route path="fertilizer2Details" element={<Fertilizer2TreeComponent />} />
                <Route path="fertilizer3Details" element={<Fertilizer3TreeComponent />} />

                <Route path="pabble" element={<PabbleTreeComponent />} />
                <Route path="pabble1Details" element={<Pabble1TreeComponent />} />
                <Route path="pabble2Details" element={<Pabble2TreeComponent />} />
                <Route path="pabble3Details" element={<Pabble3TreeComponent />} />
                <Route path="pabble4Details" element={<Pabble4TreeComponent />} />
                <Route path="pabble5Details" element={<Pabble5TreeComponent />} />

                <Route path="plantsLocation" element={<SecondBody1TreeComponent />} />
                <Route path="plantsFeature" element={<SecondBody2TreeComponent />} />
                <Route path="plantRedFeature" element={<SecondBody3TreeComponent />} />
                <Route path="plantsWhiteRose" element={<SecondBody4TreeComponent />} />
                <Route path="plantsGift" element={<SecondBody5TreeCompnent />} />
                <Route path="topPlant" element={<SecondBody6TreeComponent />} />
                <Route path="caladiumPlant" element={<SecondBody7TreeComponent />} />
                <Route path="plantsType" element={<SecondBody8TreeComponent />} />
                <Route path="whitePlant" element={<SecondBody9TreeComponent />} />
                <Route path="RedRose12" element={<SecondBody10TreeComponent />} />

                <Route path="/cart" element={<CartComponent />} />
                <Route path="/about" element={<AboutTreeComponent />} />
            </Routes>



            <div id="margin-top"></div>
            <div className="scroll-top" onClick={() => handleScrollTop()}>
            <i class="bi bi-arrow-up"></i>
            </div>
                </>
            )}
            </BrowserRouter>
            
        </>
    )
}
