import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./my-components/Header";
import { Todos } from "./my-components/Todos";
import { Footer } from "./my-components/Footer";
import { AddTodo } from "./my-components/AddTodo";

//react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos)); //storing on local
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
    // console.log(myTodo);
  };

  let [todos, setTodos] = useState(initTodo);

  //storing on local
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="todo-list" />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todoslist={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>

          {/* <Route exact path="/about">
            <About />
          </Route> */}
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
