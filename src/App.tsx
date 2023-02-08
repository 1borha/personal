import React from 'react'
import './globalStyles/root.scss'
import CButton from './UI-Kit/button/CButton'
import CButtonGroup from './UI-Kit/buttonGroup/CButtonGroup'
import CCheckbox from './UI-Kit/checkbox/CCheckbox'

/**
 * @return {JSX.Element}
 */
const App = (): JSX.Element => {
  return (
    <div style={{ width: '1900px', height: '100px' }}>
      <CButtonGroup>
        <CButton onClick={() => console.log(1)} switchType="F" disabled={false}>
          Deed it well
        </CButton>
        <CButton onClick={() => console.log(1)} switchType="C" disabled={false}>
          Deed
        </CButton>
        <CButton onClick={() => console.log(1)} switchType="A" disabled={false}>
          Deed
        </CButton>
        <CButton onClick={() => console.log(1)} switchType="H" disabled={false}>
          Deed
        </CButton>
      </CButtonGroup>
      <CCheckbox onClick={() => console.log(1)} text={'hello'} value={true} />
    </div>
  )
}

export default App
