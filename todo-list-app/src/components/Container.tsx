import React  from "react";
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

const Container = () =>{
    return(
        <div>
            Container!
            <FormTodo />
            <TaskList/>
        </div>
    );
} ;

export default Container