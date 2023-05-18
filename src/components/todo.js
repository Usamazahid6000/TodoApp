import React, { useState, useRef, useEffect } from 'react'
import { ToDosList } from './ToDosList'
import { Sidebar } from './Sidebar';
import Select from "react-select";

const options = [
    { value: "sunday", label: "sunday" },
    { value: "monday", label: "monday" },
    { value: "tuesday", label: "tuesday" },
    { value: "wednesday", label: "wednesday" },
    { value: "thursday", label: "thursday" },
    { value: "friday", label: "friday" },
    { value: "saturday", label: "saturday" },

]
export const Todo = () => {
    const [ToDo, setToDoData] = useState({ name: "", day: "" })
    const [toDosList, setAddToDosList] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const [sortByDay, setSortByDay] = useState('')
    const selectInputRef = useRef();
    const handleAddFormChange = (event, isSelect) => {
        // console.log('event',event);
        // console.log('isSelect',isSelect);
        if (isSelect) {
            const fieldValue = event.value;
          //  console.log('fieldValue',fieldValue);
            const fieldName = isSelect
           // console.log('fieldName',fieldName);
            const newFormData = { ...ToDo };
            newFormData.day = fieldValue;
            return setToDoData(newFormData);

        }
        event.preventDefault();
        const fieldValue = event.target.value;
        const fieldName = event.target.getAttribute("name");
        const newFormData = { ...ToDo };
        // Create a dynamic value in the Object . 
        newFormData[fieldName] = fieldValue;
        setToDoData(newFormData);

    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        const newContacts = [...toDosList, ToDo];
        setToDoData({...ToDo,name : ''
        })
        // selectInputRef.current.clearValue()   
        // selectInputRef.current.select.clearValue();
        setAddToDosList(newContacts);
    };

    // handle edit submit
    const handleEditFormSubmit = (event, currentIndex, changedValue) => {

      //  console.log('changedValue',changedValue);
        let { name, day } = changedValue
        event.preventDefault();
        const newContact = {
            name, day
        };
        const newContacts = [...toDosList];
        newContacts[currentIndex] = newContact
        setAddToDosList(newContacts);
    };

    // delete row
    const deleteTodo = (event, index) => {
        event.preventDefault();
        const newContacts = [...toDosList];
        newContacts.splice(index, 1)
        setAddToDosList(newContacts);
    }

    const daySelected = (day) => {
     //   console.log('day',day);
        let { value } = day
        setSortByDay(value)
    }

    const resetFilter = () => {
        setSortByDay('')
    }

    useEffect(() => {
        let list = [...toDosList]
        let filterlist = list.filter(ele => ele.day == sortByDay)
        setFilteredList(filterlist)
    }, [sortByDay])
    return (
        <div className='flex h-screen'>
            <Sidebar daySelected={daySelected} sortByDay={sortByDay} resetFilter={resetFilter} />
            <div className='container mx-auto bg-zinc-300 mt-3 flex flex-col items-center py-8 bg-gradient-to-t from-cyan-200 to-blue-300'>
                <div className='min-w-[50%] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' >
                    <h2 className='font-mono font-bold'>Add a Todo</h2>
                    <form onSubmit={handleAddFormSubmit} className='flex items-center flex-col w-full'>
                        <div className='flex w-full justify-between'>
                            <input
                                className='border px-3 text-grey-darkest'
                                type="text"
                                name="name"
                                value={ToDo.name}
                                required="required"
                                placeholder="Enter a Todo name"
                                onChange={handleAddFormChange}
                            />
                            <Select
                                ref={selectInputRef}
                                defaultValue={ToDo.day}
                                styles={{"width" : '140px'}}
                                onChange={(newValue) => { handleAddFormChange(newValue, 'day')}}
                                options={options}
                            />
                        </div>  
                        <button type="submit" className='text-white bg-blue-500 my-1 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-23 px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Add</button>
                    </form>
                </div>
                {sortByDay ? <ToDosList toDosList={filteredList} handleEditFormSubmit={handleEditFormSubmit} deleteTodo={deleteTodo} sortByDay={sortByDay} /> :
                    <ToDosList toDosList={toDosList} handleEditFormSubmit={handleEditFormSubmit} deleteTodo={deleteTodo} sortByDay={sortByDay}  />
                }

            </div>
        </div>

    )
}
