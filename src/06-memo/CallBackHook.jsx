import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";


export const CallBackHook = () => {
    const [couter, setCouter] = useState( 10 );

    const incrementFather = useCallback(
        ()=> {
            console.log('setCounter(counter+1)');
            setCouter(couter +1);    
        },
        [],
    )

    // const incrementFather = ()=>{
    //     setCouter( couter + 1);
    // };
    return (
        <>
            <h1>useCallback hook: {couter}</h1>
            <hr />

            <ShowIncrement increment = {incrementFather} />
        </>
    )
}

