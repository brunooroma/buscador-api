import React from 'react'

const Tabla = ({data}) => {
  return (
    <div className='flex justify-center'>
    <table className='table p-4 bg-white rounded-lg shadow text-center'>
        <tbody>
            <tr>
                <th className='border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-purple-600'>Nombre Completo</th>
                <th className='border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-purple-600'>Usuario</th>
                <th className='border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-purple-600'>Mail</th>
            </tr>
            {data.map((item) => (
                <tr className='text-gray-700' key={item.id}>
                    <td className='border-b-2 p-4 dark:border-dark-5'>{item.name}</td>
                    <td className='border-b-2 p-4 dark:border-dark-5'>{item.username}</td>
                    <td className='border-b-2 p-4 dark:border-dark-5'>{item.email}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
  )
}

export default Tabla