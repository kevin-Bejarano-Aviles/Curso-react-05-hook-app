import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHook";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../../src/hooks/useFetch')
jest.mock('../../../src/hooks/useCounter');
describe('Pruebasen <MultipleCustomHooks/>', () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })        

    beforeEach(()=>{
        jest.clearAllMocks()
    })//? antes de cada prueba

    test('debe de mostrar el componente por  defecto', () => {

        useFetch.mockReturnValue({
            data:null,
            isLoading:true,
            hasError:null
        });

        render(<MultipleCustomHooks/>);
        
        expect( screen.getByText('Loading...') );
        expect( screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button',{name:'Next quote'});

        expect(nextButton.disabled).toBeTruthy();

        // screen.debug();
    })

    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data:[{
                author:'kevin',
                quote:'Hola mundo'
            }],
            isLoading:false,
            hasError:null
        });

        render(<MultipleCustomHooks/>);
        // screen.debug()
        expect(screen.getByText('Hola mundo')).toBeTruthy();
        expect(screen.getByText('kevin')).toBeTruthy();

        // const nextButton = screen.getByRole('button',{name:'Next quote'});
        // expect(nextButton.disabled).toBeFalsy();
    })
    
    test('debe de llamar la function de incrementar', () => {
        

        useFetch.mockReturnValue({
            data:[{
                author:'kevin',
                quote:'Hola mundo'
            }],
            isLoading:false,
            hasError:null
        });
        render(<MultipleCustomHooks/>);

        const nextButton = screen.getByRole('button',{name:'Next quote'});
        fireEvent.click(nextButton)

        expect(mockIncrement).toHaveBeenCalled
    })
    
})
