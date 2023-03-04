import { useState } from 'react'
import RatingPoint from './component/RatingPoint'

const App = () => {
  const [submited, setSubmited] = useState(false)

  const handleSubmit = () => {
    setSubmited(true);
  }

  return (
    <div className='flex items-center justify-center w-screen h-screen text-white very-dark-blue'>
      <div className="w-11/12 p-8 rounded-xl card dark-blue md:w-6/12 lg:w-96">

        {
          submited
            ? (<div className='text-center flex flex-col gap-5'>
              <img src="/images/illustration-thank-you.svg" alt="" className='max-[100%] m-auto' />
              <p className='text-[#fb7413] Dark-Blue-2 max-w-max m-auto py-1 px-4 rounded-full text-md leading-7'>Your select 4 out of 5</p>
              <h2 className='text-3xl font-bold'>Thank You!</h2>
              <p className='text-[#7c8798]'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>)
            : (<>
              <img
                src="/images/icon-star.svg"
                alt="star"
                className='p-3 dark-blue rounded-full dark-blue'
              />
              <h1 className='text-2xl font-bold'>How did we do?</h1>
              <p className='text-[#959eac]'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
              <div className='flex justify-between my-6'>
                <RatingPoint number="1" />
                <RatingPoint number="2" />
                <RatingPoint number="3" />
                <RatingPoint number="3" />
                <RatingPoint number="4" />
              </div>
              <button className='primary w-full py-4 rounded-full' onClick={() => handleSubmit()}>SUBMIT</button>
            </>)
        }

      </div>
    </div>
  )
}

export default App