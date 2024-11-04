import { useState } from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import { useCart } from "../CartContext";

export function SecondBody3AddButton() {

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
                            <h5 className="accordianheader">Adenium Plants (3)</h5>
                            <span style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}></span> {/* Accordion icon */}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    {isExpanded && (
                        <>
                            <AccordionItemPanel>
                                <div className="accordianitemdetails" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                                    <div>
                                        <h6>Adenium Red (Grafted) - Adenium obesum, Desert Rose Plant
                                        </h6>
                                        <p>&#8377;360</p>                       
                                    </div>
                                    <div style={{ position: 'relative', width: '90px', height: '90px' }}>
                                        <img src="./secondbodyimg4.jpg" height='100' width='100' alt="Plant combo" style={{ display: 'block', borderRadius: '10px' }} />
                                        <button className="secondAddButton" onClick={() => handleAddToCart({
                                            name: "Adenium obesum",
                                            price:360,
                                            image:"./secondbodyimg4.jpg"
                                        })}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                            <AccordionItemPanel>
                                <div className="accordianitemdetails" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                                    <div>
                                        <h6>Adenium Yellow Desire(Grafted) - Adenium Obesum, Desert Rose Plant</h6>
                                        <p>&#8377;549</p>
                                    </div>
                                    <div style={{ position: 'relative', width: '90px', height: '90px' }}>
                                        <img src="./secondbodyimg5.jpg" height='100' width='100' alt="Plant combo" style={{ display: 'block', borderRadius: '10px' }} />
                                        <button className="secondAddButton" onClick={() => handleAddToCart({
                                            name: 'Desert Rose Plant',
                                            price:549,
                                            image: "./secondbodyimg5.jpg"
                                        })}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                            <AccordionItemPanel>
                            <div className="accordianitemdetails" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                                    <div>
                                        <h6>Adenium Velvet Dream (Grafted) - Adenium obesum</h6>
                                        <p>&#8377;449</p>
                                    </div>
                                    <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                                        <img src="./secondbodyimg6.jpg" height='100' width='100' alt="Plant combo" style={{ display: 'block', borderRadius: '10px' }} />
                                        <button className="secondAddButton" onClick={() => handleAddToCart({
                                            name: 'Adenium obesum',
                                            price:449,
                                            image: "./secondbodyimg6.jpg"
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