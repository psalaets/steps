import { useState } from 'react'
import { Steps } from './components/steps/Steps';
import './App.css'

function App() {
  const [steps] = useState(initialSteps);

  return (
    <>
      <Steps steps={steps} />
    </>
  )
}

export default App

function initialSteps() {
  return [
    {
      type: 'merge',
      name: 'Merge Employees with Demographics',
      hasError: false,
      data: {
        count: 100
      }
    },
    {
      type: 'update',
      name: 'Update User',
      hasError: true,
      data: {},
    },
    {
      type: 'notify',
      name: 'Notify User',
      hasError: false,
      data: {},
    },
    {
      type: 'merge',
      name: 'Merge Employees with Demographics',
      hasError: false,
      data: {
        count: 100
      }
    },
    {
      type: 'update',
      name: 'Update User',
      hasError: true,
      data: {},
    },
    {
      type: 'notify',
      name: 'Notify User',
      hasError: false,
      data: {},
    },
    {
      type: 'merge',
      name: 'Merge Employees with Demographics',
      hasError: false,
      data: {
        count: 100
      }
    },
    {
      type: 'update',
      name: 'Update User',
      hasError: true,
      data: {},
    },
    {
      type: 'notify',
      name: 'Notify User',
      hasError: false,
      data: {},
    },
    {
      type: 'merge',
      name: 'Merge Employees with Demographics',
      hasError: false,
      data: {
        count: 100
      }
    },
    {
      type: 'update',
      name: 'Update User',
      hasError: true,
      data: {},
    },
    {
      type: 'notify',
      name: 'Notify User',
      hasError: false,
      data: {},
    }
  ]
    .map((step, index) => ({
      ...step,
      id: String(index + 1),
      stepNumber: index + 1,
    }));
}