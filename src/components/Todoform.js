import React, { useState } from 'react';

function Todoform(props) {
    const [Input, setInput] = useState('')

    const handleChange = (e)=>{
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*1000),
            text: Input
        });
        setInput(' ')
    }
    return (
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input className='todo-input' type="text" value={Input} name="" id="" onChange={handleChange} placeholder='Add task' />
                <button  type='submit' className='todo-button'>Add ToDo</button>           
            </form>
        </div>
    )
}

export default Todoform;
