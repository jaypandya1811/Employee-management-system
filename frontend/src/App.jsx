import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Employeelist from './Employeelist'
import Employeeform from './Employeeform'

function App() {
  const [reload,setreload] = useState(false);

  const refreshcomponent =  () => {
    setreload(!reload);
  }; 

  return(
    <>
    <h1 className='md:text-3xl sm:text-2xl text-xl font-bold w-auto text-center py-8'>
      Employee Management Sytem
    </h1>
    <Employeelist reload={reload} onRefresh={refreshcomponent}></Employeelist>
    <Employeeform onRefresh={refreshcomponent}></Employeeform>
    </>
  )
}

export default App