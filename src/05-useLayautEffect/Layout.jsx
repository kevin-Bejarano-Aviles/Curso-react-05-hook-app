import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"


export const Layout = () => {
    
    const {counter,increment} = useCounter(1)
    const {data,isLoading,hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    // console.log({data,isLoading,hasError});
    // useEffect(() => {
        
    // }, [counter]);
    const { author,quote } = !!data && data[0]
   
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                isLoading
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    : (
                        <blockquote style={{display:"flex"}} className="blockquote text-end">
                            <p className="mb-1">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }
            

            <button 
                className="btn btn-primary"
                onClick={()=>increment()}>
                Next quote
            </button>
        </>
    )
}

