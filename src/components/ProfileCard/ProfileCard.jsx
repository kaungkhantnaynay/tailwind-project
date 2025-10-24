import React from 'react'
import Avatar from '/images/image-jeremy.png'

function ProfileCard({ timeframe, setTimeframe }) {
    return (
      <div className='bg-Navy-900 text-white rounded-2xl overflow-hidden h-99 w-72 md:w-40 flex flex-col'>
        <div className='bg-Purple-600 p-6 rounded-b-2xl h-94'>
          <img src={Avatar} alt="img" className='w-14 h-14 rounded-full border-2 border-white mb-4'/>
          <p className='text-sm text-gray-300 mt-10'>Report for</p>
          <h1 className='text-2xl font-light leading-tight'>Jeremy<br />Robson</h1>
        </div>
        <div className='bg-Navy-900 flex justify-between md:flex-col text-gray-300 p-6 md:space-y-3'>
          <ul>
            <li className='text-gray-400'>Daily</li>
            <li className='text-white'>Weekly</li>
            <li className='text-gray-400'>Monthly</li>
          </ul>
        </div>
      </div>
    )
}

export default ProfileCard
