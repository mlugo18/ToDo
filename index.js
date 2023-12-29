function App(){
    //component to set the initial state(values)// 
    const [todos, setTodos] = React.useState([
        {
            text: "learn react",
            isCompleted: false,
        },
        {
            text: "build todo app",
            isCompleted: false,
        }   
    ]);

    //part of the refactoring process; modified value to text
    const addTodo = text =>{
        const newTodos = [...todos, {text:text, isCompleted:false}];
        setTodos(newTodos);
    }

    //function to remove to do items and set the new list of values, function is called onClick of the line of the to do item
    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }

    //todos.map - loop to create a div for each of the items inside the todos component//
    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo,i) => 
                    <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)