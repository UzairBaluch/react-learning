import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
         <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between ">
        <h2 className="bg-white text-2xl font-semibold rounded-full h-10 flex w-10 justify-center items-center">
          {props.id+1}
        </h2>
        <div>
          <p className="text-xl leading-normal text-white mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A placeat
            minima, ut mollitia cumque nisi.
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full  ">
              {props.tag}
            </button>
            <button className=" bg-blue-600 text-white font-medium px-4 py-2 rounded-full">
              <i className="ri-arrow-right-line "></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
