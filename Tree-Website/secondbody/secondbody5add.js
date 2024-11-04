import { useState } from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import { useCart } from "../CartContext";


export function SecondBody5AddButton() {

    const [isExpanded, setIsExpanded] = useState(true); // Keep accordion open initially
    const {addItemToCart} = useCart();

    const handleAddToCart = (item) => {
        // Functionality for adding the item to the cart
        addItemToCart(item);
        alert(`${item.name} added to cart`);
    };

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    return(
        <>
            <Accordion allowZeroExpanded={true} preExpanded={['item-1']}>
                <AccordionItem uuid="item-1" isDisabled={!isExpanded}>
                    <AccordionItemHeading>
                        <AccordionItemButton
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                            onClick={toggleAccordion}
                        >
                            <h5 className="accordianheader">Gift Plants (3)</h5>
                            <span style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}></span> {/* Accordion icon */}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    {isExpanded && (
                        <>
                            <AccordionItemPanel>
                                <div className="accordianitemdetails" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                                    <div>
                                        <h6>2 Layer Lucky Bamboo with Ceramic Pot
                                        </h6>
                                        <p>&#8377;339</p>                       
                                    </div>
                                    <div style={{ position: 'relative', width: '90px', height: '90px' }}>
                                        <img src="./secondbodyimg10.jpg" height='100' width='100' alt="Plant combo" style={{ display: 'block', borderRadius: '10px' }} />
                                        <button className="secondAddButton" onClick={() => handleAddToCart({
                                            name: 'Lucky Bamboo with Ceramic Pot',
                                            price: 339,
                                            image : "./secondbodyimg10.jpg"
                                        })}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                            <AccordionItemPanel>
                                <div className="accordianitemdetails" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                                    <div>
                                        <h6>2 Layer Lucky Bamboo plant</h6>
                                        <p>&#8377;239</p>
                                    </div>
                                    <div style={{ position: 'relative', width: '90px', height: '90px' }}>
                                        <img src="./secondbodyimg11.jpg" height='100' width='100' alt="Plant combo" style={{ display: 'block', borderRadius: '10px' }} />
                                        <button className="secondAddButton" onClick={() => handleAddToCart({
                                            name: 'Lucky Bamboo plant',
                                            price: 239,
                                            image: "./secondbodyimg11.jpg"
                                        })}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                            <AccordionItemPanel>
                            <div className="accordianitemdetails" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                                    <div>
                                        <h6>5 Layer Braided Lucky Bamboo</h6>
                                        <p>&#8377;1199</p>
                                    </div>
                                    <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                                        <img src="./secondbodyimg12.jpg" height='100' width='100' alt="Plant combo" style={{ display: 'block', borderRadius: '10px' }} />
                                        <button className="secondAddButton" onClick={() => handleAddToCart({
                                            name:'Braided Lucky Bamboo',
                                            price: 1199,
                                            image: "./secondbodyimg12.jpg"
                                        })}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion>


            <Accordion allowZeroExpanded={true} preExpanded={['item-1']}>
                <AccordionItem uuid="item-1" isDisabled={!isExpanded}>
                    <AccordionItemHeading>
                        <AccordionItemButton
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                            onClick={toggleAccordion}
                        >
                            <h5 className="accordianheader">Plants for National Festivals (4)</h5>
                            <span style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}></span> {/* Accordion icon */}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    {isExpanded && (
                        <>
                            <AccordionItemPanel>
                                <div className="accordianitemdetails" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                                    <div>
                                        <h6>Duranta Erecta - Golden Dewdrop Plant
                                        </h6>
                                        <p>&#8377;199</p>                       
                                    </div>
                                    <div style={{ position: 'relative', width: '90px', height: '90px' }}>
                                        <img src="./secondbodyimg13.jpg" height='100' width='100' alt="Plant combo" style={{ display: 'block', borderRadius: '10px' }} />
                                        <button className="secondAddButton" onClick={() => handleAddToCart({
                                            name: 'Golden Dewdrop Plant',
                                            price: 199,
                                            image:"./secondbodyimg13.jpg"
                                        })}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                            <AccordionItemPanel>
                                <div className="accordianitemdetails" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                                    <div>
                                        <h6>Areca Palm Indoor Plant </h6>
                                        <p>&#8377;229</p>
                                    </div>
                                    <div style={{ position: 'relative', width: '90px', height: '90px' }}>
                                        <img src="./secondbodyimg14.jpg" height='100' width='100' alt="Plant combo" style={{ display: 'block', borderRadius: '10px' }} />
                                        <button className="secondAddButton" onClick={()=>handleAddToCart({
                                            name:'Areca Palm Indoor Plant',
                                            price:229,
                                            image: "./secondbodyimg14.jpg"
                                        })}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                            <AccordionItemPanel>
                            <div className="accordianitemdetails" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                                    <div>
                                        <h6>Clerodendrum incisum - Clerodendrum macrosiphon</h6>
                                        <p>&#8377;449</p>
                                    </div>
                                    <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                                        <img src="./secondbodyimg15.jpg" height='100' width='100' alt="Plant combo" style={{ display: 'block', borderRadius: '10px' }} />
                                        <button className="secondAddButton" onClick={() => handleAddToCart({
                                            name: 'Clerodendrum macrosiphon',
                                            price: 449,
                                            image: "./secondbodyimg15.jpg"
                                        })}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion>
        </>
    )
}