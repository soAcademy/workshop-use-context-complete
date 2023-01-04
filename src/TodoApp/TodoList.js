import TodoItem from "./TodoItem"

const TodoList = ({
    handleToggleTask,
    items
}) => {
    console.log('TodoList re-rendered')
    const renderedItems = 
        () => {
            console.log('TodoItem re-created')
        return (<ul>
            {items.map(item => (
                <TodoItem key={item.id} item={item} handleToggleTask={handleToggleTask} />
            ))}
        </ul>)}
    return <div>{renderedItems()}</div>
}

export default TodoList