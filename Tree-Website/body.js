

import { FirstBodyTree } from './firstbody';
import './index.css';
import { SecondBodyTree } from './secondbody';
import { ThirdBodyTree } from './thirdbody';
export function BodyTreeComponent(){

        
        
    return(
        <>
            <div className='bodyComponent'>
                <FirstBodyTree />
                <hr style={{width:'95%'}} />
                <SecondBodyTree />
                <hr style={{width:'95%'}} />
                <ThirdBodyTree />
            </div>
        </>
    )
}