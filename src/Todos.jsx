import {Reorder, AnimatePresence} from 'framer-motion';

const variants = {
    initial: {
        opacity: 0,
        height: 0,
    },
    animate: {
        opacity: 1,
        height: 'auto',
    },
    exit: {
        opacity: 0,
        height: 0,
    }
}

export const Todos = ({ todos = [], setTodos, onRemove }) => {
    return (
        <Reorder.Group as="ol" axys="y" values={todos} onReorder={setTodos} >
            <AnimatePresence initial={false}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onRemove={onRemove} />
            ))}
            </AnimatePresence>
        </Reorder.Group>
    );
};

const TodoItem = ({ todo, onRemove }) => {
    return (
        <Reorder.Item className="testing1" value={todo}
        whileDrag={{
            scale: 1.1,
            boxShadow: "rgba(0, 0, 0, 0.12) 0px 3px 5px, rgba(0, 0, 0, 0.24) 0px 3px 6px",
            
        }}
        onDoubleClick={ () => onRemove(todo.id)}
        {...variants}
        >
            <span className="testing">{todo.title}</span>
        </Reorder.Item>
    );
};
