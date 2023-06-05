export const CreateTodo = ({ onCreate }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const title = e.target.todo.value;

        if (e.target.todo.value) {
            onCreate((prevTodos) => [
                ...prevTodos,
                {
                    title,
                    completed: false,
                    id: Date.now()
                }
            ]);
            
            e.target.reset();
        }
    };

    return (
        <form className="testing" onSubmit={handleSubmit} autoComplete="off">
            <input className="testing" placeholder="Градация пк запчастей" name="todo" />
            <input className="testing0" type="submit" value="Добавить" />
        </form>
    );
};