import { useState } from "react";
import { FooterTreeComponent } from "./footer";

export function SearchTreeComponent(){

    const [searchItem , setSearchItem] = useState('');

    const plants = [
        {name : 'Farewell Plant', img: "./gift.jpg"},
        {name : 'Tagar Plant', img: "./gift1.jpg"},
        {name : 'Elovera Plant', img: "./gift2.jpg"},
        {name : 'Magical Bamboo', img: "./gift3.png"},
        {name : 'Jade Plant', img: "./gift4.jpg"},
        {name : 'Abrus Plant', img: "./gift5.jpg"}
    ];
    const filteredPlants = plants.filter(plant => 
        plant.name.toLowerCase().includes(searchItem.toLowerCase())
        
    );
    return(
        <>
            <div className="searchDetails">
                <div>
                    <input type="text" className="searchTree" onChange={e => setSearchItem(e.target.value)} value={searchItem} placeholder="Search for gardens" />
                </div>
                <div className="searchImage">
                    {filteredPlants.map((plant, index)=> (
                        <div key={index} className="imageDiv">
                            <img src={plant.img} className="searchImageSet" alt={plant.name} />
                            <p>{plant.name}</p>
                            
                            </div>
                    ))}
                </div>
            </div>
            <FooterTreeComponent />
        </>
    )
}