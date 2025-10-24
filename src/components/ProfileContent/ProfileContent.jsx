import React from 'react'
import Ellipsis from '/images/icon-ellipsis.svg'

function ProfileContent({title, hours, last, color}) {
  return (
    <div className={`rounded-2xl `} style={{background:color}}>
      <div className='h-8'></div>
      <div className='bg-Navy-900 p-6 rounded-2xl relative top-2 text-white'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-lg font-medium'>{title}</h2>
          <img src={Ellipsis} alt="ellipsis" className='w-4' />
        </div>
        <div className='flex justify-between items-end md:flex-col md:items-start'>
          <h3 className='text-4xl font-light'>{hours}hrs</h3>
          <p className='text-sm text-gray-400'>Last Week - {last}hrs</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileContent
