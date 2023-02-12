import React from 'react'
import './globalStyles/root.scss'
// import CButton from './UI-Kit/button/CButton'
// import CButtonGroup from './UI-Kit/buttonGroup/CButtonGroup'
import CCheckbox from './UI-Kit/checkbox/CCheckbox'

/**
 * @return {JSX.Element}
 */
const App = (): JSX.Element => {
  return (
    <div style={{ width: '1900px', height: '100px' }}>
      <CCheckbox onClick={() => console.log(1)} text={'hello'} value={true} />
    </div>
  )
}

export default App
