import React, { useState } from 'react'
import { EditableRow } from './EditableRow'
import { ReadOnlyRow } from './ReadOnlyRow'

export const ToDosList = ({ toDosList, handleEditFormSubmit, deleteTodo, sortByDay }) => {
    const [editContent, setEditContact] = useState({})
    const [editRowIndex, setEditRowIndex] = useState(null)


   // console.log('editContent',editContent);

    const handleEditRowSubmit = (event) => {
        handleEditFormSubmit(event, editRowIndex, editContent)
        setEditContact({});
        setEditRowIndex(null)
    }

    const handleEditFormChange = (event) => {
        event.preventDefault();
        setEditContact({ ...editContent, name: event.target.value })
    }

    const setSelectedEditRow = (event, row, index) => {
        event.preventDefault();
        setEditContact(row);
        setEditRowIndex(index)
    }

    return (
        <form onSubmit={handleEditRowSubmit} className='min-w-[50%] bg-white shadow-md rounded px-3 pt-3 pb-3 mb-4'>
            <div className='flex justify-between'>
                <h4 className='font-mono'>Tasks {toDosList.length}</h4>
                {sortByDay && <h4 className='font-mono'>Sorted by {sortByDay}</h4>}
            </div>

            {toDosList.map((contact, i) => {
                return (
                    <div key={i} className="py-1.5 px-4 my-1 rounded-lg border-b border-gray-200 dark:border-gray-600 bg-slate-400">
                        {editRowIndex == i ?
                            <EditableRow handleEditFormChange={handleEditFormChange} editContent={editContent} i={i} />
                            :
                            <ReadOnlyRow contact={contact} setSelectedEditRow={setSelectedEditRow} deleteTodo={deleteTodo} i={i} />
                        }

                    </div>
                )
            }
            )}
        </form>
    )
}
