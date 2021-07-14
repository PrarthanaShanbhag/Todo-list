import React, { useState, useEffect } from 'react';
import todo from '../images/todo.svg';
import './todo.css'



const Todo = () => {
    const uselocalstorage = () => {
        let list = localStorage.getItem('lists');
        if (list) {
            return JSON.parse(localStorage.getItem('lists'));
        } else {
            return [];
        }
    }

    const [input, setInput] = useState('');
    const [item, setItem] = useState(uselocalstorage());
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);



    const addItem = () => {
        if (!input) {
            alert('Please input the value');
        } else if (input && !toggleSubmit) {
            setItem(item.map((elem) => {
                if (elem.id === isEditItem) {
                    return { ...elem, name: input }
                }
                return elem;


            }))
            setToggleSubmit(true);

            setInput('');

            setIsEditItem(null);

        }
        else {
            const allInputData = { id: new Date().getTime().toString(), name:input }
            setItem([...item, allInputData]);
            setInput('')
        }
        
    }

    const keypress = (event) => {
        if (event.key === "Enter") {
            if (!input) {
                alert('Please input the value');
            } else if (input && !toggleSubmit) {
                setItem(item.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: input }
                    }
                    return elem;
    
    
                }))
                setToggleSubmit(true);
    
                setInput('');
    
                setIsEditItem(null);
    
            }
            else {
                const allInputData = { id: new Date().getTime().toString(), name:input }
                setItem([...item, allInputData]);
                setInput('')
            }
            
        }
    }



    const deleteItem = (ind) => {
        const updateditems = item.filter((ele) => {
            return ind !== ele.id;

        });

        setItem(updateditems);
    }

    const removeAll = () => {
        setItem([]);
    }

    const editItem = (id) => {
        let newEditItem = item.find((elem) => {
            return elem.id === id
        });
        setToggleSubmit(false);

        setInput(newEditItem.name);

        setIsEditItem(id);

    }

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(item))
    }, [item]);

    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src={todo} alt='todo' />

                        <figcaption>Add Your Items Here ✍ : </figcaption>

                    </figure>
                    <div className='addItems'>
                        <input type='text' id='input' class="form-control is-invalid" autocomplete="off" placeholder='Add Items...'

                            value={input}
                            onChange={(event) => {
                                setInput(event.target.value);

                            }}
                            onKeyPress={keypress}
                        />
                        {
                            toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i> :
                                <i className="far fa-edit add-btn" title="Update Item" onClick={addItem}></i>
                        }
                    </div>
                    <div className='showItems'>
                        {
                            item.map((ele) => {
                                return (
                                    <div className='eachItem' key={ele.id} >
                                        <h3>{ele.name}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" title="Edit Item" onClick={() => editItem(ele.id)
                                            }></i>
                                            <i className="far fa-trash-alt add-btn" title="Delete Item"
                                                onClick={() => deleteItem(ele.id)}></i>
                                        </div>

                                    </div>

                                )
                            })
                        }

                    </div>
                    {/* clear all button  */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span><strong>CHECK LIST</strong>  </span> </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Todo
