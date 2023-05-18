import React from 'react'

export const ReadOnlyRow = ({contact ,setSelectedEditRow ,deleteTodo , i}) => {
   // console.log("content ", contact)
    return (
        <div className='flex justify-between'>
            <label className='font-mono'>{contact.name}</label>
            {/* <label>{contact.day}</label> */}
            <div className='flex gap-0.5'>
                <button type="button" onClick={(event) => { setSelectedEditRow(event, contact, i) }} className='font-mono text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2 py-1.5 text-center dark:bg-blue-200 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Edit</button>
                <button type="button" onClick={(event) => { deleteTodo(event, i) }} className='font-mono text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2 py-1.5 text-center dark:bg-blue-200 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Delete</button>
            </div>

        </div>
    )
}
