import { useState } from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import { useCart } from "../CartContext";


export function SecondBody9AddButton() {
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
                            <h5 className="accordianheader">Aquatic Plants (2)</h5>
                            <span style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}></span> {/* Accordion icon */}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    {isExpanded && (
                        <>
                            <AccordionItemPanel>
                                <div className="accordianitemdetails" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                                    <div>
                                        <h6>Lotus Pink Plant - Nymphaea Alba, Water Lily
                                        </h6>
                                        <p>&#8377;449</p>                       
                                    </div>
                                    <div style={{ position: 'relative', width: '90px', height: '90px' }}>
                                        <img src="./secondbodyimg27.jpg" height='100' width='100' alt="Plant combo" style={{ display: 'block', borderRadius: '10px' }} />
                                        <button className="secondAddButton" onClick={() => handleAddToCart({
                                            name: 'Lotus Pink Plant',
                                            price:449,
                                            image: "./secondbodyimg27.jpg"
                                        })}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                            <AccordionItemPanel>
                                <div className="accordianitemdetails" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                                    <div>
                                        <h6>Water Heliconia Yellow Plant</h6>
                                        <p>&#8377;329</p>
                                    </div>
                                    <div style={{ position: 'relative', width: '90px', height: '90px' }}>
                                        <img src="./secondbodyimg28.jpg" height='100' width='100' alt="Plant combo" style={{ display: 'block', borderRadius: '10px' }} />
                                        <button className="secondAddButton" onClick={() => handleAddToCart({
                                            name: 'Water Heliconia Yellow Plant',
                                            price:329,
                                            image: "./secondbodyimg28.jpg"
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