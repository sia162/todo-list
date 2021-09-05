import React from 'react'
import {Todoitems} from "./Todoitems";

export const Todos = (props) => {
    let todostyle = {
        minHeight: "90vh"
    }

    return (
        <div className="container my-4" style={todostyle}>
            <h4 className="my-4">Todo List</h4>
           
           {props.todoslist.length===0 ? "no todos to display" : 
                props.todoslist.map((todo)=>{
                    return (
                    <Todoitems todo={todo} onDelete={props.onDelete} key={todo.sno}/>
                    )
                })
           }

        </div>
    )
}
