import React from 'react'
import RightContent from './RightContent.Jsx'
import LeftContent from './LeftContent.jsx'

const Page1Content = (props) => {
  return (
    <div className='px-18 flex gap-10  items-center h-[90vh]  pb-16 pt-6'>
        
        <LeftContent /> 
        <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
