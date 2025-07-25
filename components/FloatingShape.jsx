import React from 'react'

const FloatingShape = () => {
  const shapes = [
    {
      id: 1,
      size: "w-72, h-72",
      position: "top-20 left-10",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      size: "w-96, h-96",
      position: "top-1/3 right-10",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      id: 3,
      size: "w-64, h-64",
      position: "bottom-20 left-1/4",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      size: "w-80, h-80",
      position: "bottom-1/3 right-1/4",
      gradient: "from-green-400 to-cyan-500"
    }
  ]
  return (
    <div className='fixed inset-0 overflow-hidden pointer-event-none z-10'>
    {
      shapes.map((shape, index) =>{
        return <div key={index} className={`absolute ${shape.size} ${shape.position} bg-gradient-to-r ${shape.gradient} rounded-full`}/>
      })
    }
    </div>
  )
}

export default FloatingShape;
