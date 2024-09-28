import React from 'react'
import ResultModal from './ResultModal'
const TimerChallenge = ({title,targetTime}) => {
    const timerRef = React.useRef(null)
    const dialogRef = React.useRef(null)
   const[timeRemaining,setTimeRemaining]=React.useState(targetTime * 1000)
  const timerIsActivated = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if (timeRemaining <= 0) {
        clearInterval(timerRef.current)
      
        dialogRef.current.open()
    }

    const handleStart=()=>{
        timerRef.current=  setInterval(()=>{
            setTimeRemaining((prev)=>prev-10)
        },10)
      }

      const HandleStop=()=>{
         clearInterval(timerRef.current)
               dialogRef.current.open()
      }

      const handleReset=()=>{
        setTimeRemaining(targetTime * 1000)
      }
  return (
    <>
      <ResultModal ref={dialogRef} timeRemaining={timeRemaining} targetTime={targetTime}  handleReset={handleReset}/>
          <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerIsActivated? HandleStop:handleStart} >
              {timerIsActivated ? "stop":"Start"} Challenge
            </button>
        </p>
        <p>
            <button className={timerIsActivated?'active':undefined}>
               {timerIsActivated? 'Timer is Running':"Timer Inactive"} 
            </button>
        </p>
    </section >
</>

  )
}

export default TimerChallenge