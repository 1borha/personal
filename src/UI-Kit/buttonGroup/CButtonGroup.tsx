import React from 'react'
import { ICButtonGroupProps } from '../../types/UI-Kit/buttonGroup/ICButtonGroup'
import './CButtonGroup.scss'

const CButtonGroup = ({ children }: ICButtonGroupProps): JSX.Element => {
  return <div className="CButtonGroup">{children}</div>
}

export default CButtonGroup
// I'll upgrade this. Maybe =)
// TODO: vertical list style
