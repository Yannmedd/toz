import { useState } from "react";
import { CreateTodo} from "./CreateTodo";
import { Todos } from "./Todos";


const defaultTodos = [
    {id: 1, title: "Процессор", completed: false },
    {id: 2, title: "Материнская плата", completed: false },
    {id: 3, title: "Оперативная память", completed: false },
    {id: 4, title: "Видеокарта", completed: false },
    {id: 5, title: "Блок питания", completed: false },
    {id: 6, title: "Жесткие диски", completed: false },
]

export default function Test() {
    const [todos, setTodos] = useState(defaultTodos);

    const onRemove = (id) => {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }

    return (
        <div className="Test">
            <CreateTodo onCreate={setTodos} />
            <Todos todos={todos} setTodos={setTodos} onRemove={onRemove} />
        </div>
    );
}