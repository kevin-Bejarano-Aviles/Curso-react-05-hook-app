const { render, screen } = require("@testing-library/react")
const { TodoApp } = require("../../src/08-useReducer/TodoApp");
const { useTodo } = require("../../src/hooks/useTodo");


jest.mock('../../src/hooks/useTodo');
describe('Pruebas en <TodoApp/>',()=>{

    useTodo.mockReturnValue({
        todos:[
            {id:1,description:'Todo #1',done:false},
            {id:2,description:'Todo #2',done:true},
        ],
        todosCount:2,
        pendinggTodosCount:1,
        handleDeleteTodo:jest.fn(),
        handleToggleTodo:jest.fn(),
        handleNewTodo:jest.fn()
    });


    test('debe de mostrar el componente correctamenete', () => {
        render(<TodoApp/>);
        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
        // screen.debug();
    });

    
})