import '../index.css';

function NewTask({input, handleChange, handleSubmit}) {
    return (
        <form action="submit">
            <input type="text" placeholder='Describe a task' value={input} onChange={handleChange}/>
            <button onClick={handleSubmit}>Add</button>
        </form>
    );
}

export default NewTask;