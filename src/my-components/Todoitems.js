import React from 'react'

export const Todoitems = ({todo, onDelete}) => {
    return (
        <>
        <div>
           <h6 className="my-2">listitem- {todo.sno}</h6>
           <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           <button className="btn btn-sm btn-danger my-2" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
         <hr/>
         </>
    )
}
