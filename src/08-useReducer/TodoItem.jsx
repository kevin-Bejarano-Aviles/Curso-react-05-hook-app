

export const TodoItem = ({item, onDeleteTodo,onToggleTodo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
          className={`aling-self-center ${ (item.done) ? 'text-decoration-line-through':''}`}
          onClick={()=> onToggleTodo(item.id)}
          aria-label="span"
        >
          {item.description}
        </span>
        <button 
          className="btn btn-danger"
          onClick={()=> onDeleteTodo(item.id)}
        
        >Borrar</button>
    </li>
  )
}

