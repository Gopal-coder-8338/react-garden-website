import { BodyTreeComponent } from "./body";
import { FooterTreeComponent } from "./footer";
//import { HeaderTreeComponent } from "./header";


export function HomeTreeComponent(){

    return(
        <>
            <div className="homeComponent">
                <div style={{marginTop:'8%'}}><BodyTreeComponent /></div>
                <div><FooterTreeComponent /></div>
            </div>
        </>
    )
}