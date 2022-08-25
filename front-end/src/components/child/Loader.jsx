import React from 'react'
import './Loader.css'
const Loader = () => {
  return (
    <div className='container'>
        <div className='dot-falling'></div>
        <span className='load-title'>Đang xử lý...</span>
    </div>
  )
}

export default Loader