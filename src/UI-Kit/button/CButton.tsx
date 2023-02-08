import React from 'react'
import { ICButtonProps } from '../../types/UI-Kit/button/ICButton'
import '../../globalStyles/typography.scss'
import './CButton.scss'

const CButton = ({
  onClick,
  children,
  name,
  value,
  style,
  className,
  switchType,
  disabled,
}: ICButtonProps): JSX.Element => {
  return (
    <div className={`CButtonContainer ${disabled === true ? 'disabled' : ''}`} style={style}>
      <button
        type="button"
        name={name}
        value={value}
        disabled={disabled ?? false}
        onClick={onClick}
        className={`CButton${switchType} CLabel ${className ?? ''}`}>
        {children}
      </button>
      <div className={`Mask${switchType}`}></div>
    </div>
  )
}

export default CButton
