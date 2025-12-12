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
    <h1 className='text-3xl font-bold mx-93 py-8'>
      Employee CRUD system using Django's drf
    </h1>
    <Employeelist reload={reload} onRefresh={refreshcomponent}></Employeelist>
    <Employeeform onRefresh={refreshcomponent}></Employeeform>
    </>
  )
}

export default App