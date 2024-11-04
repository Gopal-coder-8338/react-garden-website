import './index.css';

export function AboutTreeComponent() {

    return(
        <>
            <div className='aboutDetails'>
                <div>
                    <h1>About Page</h1>
                    <h5>NAME - Gopal Krushna Sahu</h5>
                    <h5>EMAIL - gopalkrushna0000gmail.com</h5>
                </div>
                <div>
                    <h4>I'M A FRONTEND DEVELOPER</h4>
                    <img src="./gopal.jpg" width='290' height='380' className='aboutImg mt-4' />
                </div>
            </div>
        </>
    )
}