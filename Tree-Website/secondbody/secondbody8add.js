import { useState } from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import { useCart } from "../CartContext";


export function SecondBody8AddButton() {
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
                            <h5 className="accordianheader">Bonsai Plants (2)</h5>
                            <span style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}></span> {/* Accordion icon */}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    {isExpanded && (
                        <>
                            <AccordionItemPanel>
                                <div className="accordianitemdetails" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                                    <div>
                                        <h6>Crassula Ovata Bonsai 5 Years</h6>
                                        <p>&#8377;999</p>                       
                                    </div>
                                    <div style={{ position: 'relative', width: '90px', height: '90px' }}>
                                        <img src="./secondbodyimg23.jpg" height='100' width='100' alt="Plant combo" style={{ display: 'block', borderRadius: '10px' }} />
                                        <button className="secondAddButton" onClick={() => handleAddToCart({
                                            name:'Crassula Ovata Bonsai 5 Years',
                                            price:999,
                                            image: "./secondbodyimg23.jpg"
                                        })}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                            <AccordionItemPanel>
                                <div className="accordianitemdetails" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                                    <div>
                                        <h6>Ficus S Shape - 5 years</h6>
                                        <p>&#8377;899</p>
                                    </div>
                                    <div style={{ position: 'relative', width: '90px', height: '90px' }}>
                                        <img src="./secondbodyimg24.jpg" height='100' width='100' alt="Plant combo" style={{ display: 'block', borderRadius: '10px' }} />
                                        <button className="secondAddButton" onClick={() => handleAddToCart({
                                            name: "Ficus S Shape - 5 years",
                                            price:899,
                                            image: "./secondbodyimg24.jpg"  
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