import React from 'react'

export const EditableRow = ({handleEditFormChange ,editContent}) => {
    console.log('editContent',editContent);
    return (
        <div className='flex justify-between'>
            <input
                className='border text-grey-darkest mx-4'
                type="text"
                required="required"
                name="fullName"
                value={editContent.name}
                onChange={handleEditFormChange}
            ></input>
            <button type="submit" className='font-mono text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2 py-1.5 text-center dark:bg-blue-200 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Save</button>
        </div>
    )
}
