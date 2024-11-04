import { useState } from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import { useCart } from "../CartContext";


export function SecondBody7AddButton() {
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
                            <h5 className="accordianheader">Caladium Plants (2)</h5>
                            <span style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}></span> {/* Accordion icon */}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    {isExpanded && (
                        <>
                            <AccordionItemPanel>
                                <div className="accordianitemdetails" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                                    <div>
                                        <h6>Caladium Red Ruffle Plant
                                        </h6>
                                        <p>&#8377;299</p>                       
                                    </div>
                                    <div style={{ position: 'relative', width: '90px', height: '90px' }}>
                                        <img src="./secondbodyimg21.jpg" height='100' width='100' alt="Plant combo" style={{ display: 'block', borderRadius: '10px' }} />
                                        <button className="secondAddButton" onClick={() => handleAddToCart({
                                            name: 'Caladium Red Ruffle Plant',
                                            price: 299,
                                            image: "./secondbodyimg21.jpg"
                                        })}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                            <AccordionItemPanel>
                                <div className="accordianitemdetails" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                                    <div>
                                        <h6>Caladium Bicolor Plant</h6>
                                        <p>&#8377;279</p>
                                    </div>
                                    <div style={{ position: 'relative', width: '90px', height: '90px' }}>
                                        <img src="./secondbodyimg22.jpg" height='100' width='100' alt="Plant combo" style={{ display: 'block', borderRadius: '10px' }} />
                                        <button className="secondAddButton" onClick={() => handleAddToCart({
                                            name: 'Caladium Bicolor Plant',
                                            price: 279,
                                            image: "./secondbodyimg22.jpg"
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