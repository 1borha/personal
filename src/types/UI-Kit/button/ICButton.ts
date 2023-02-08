export interface ICButtonProps {
  onClick: (e: any) => any
  children?: string
  name?: string
  value?: string | number | readonly string[]
  style?: React.CSSProperties
  className?: string
  switchType: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L'
  disabled?: boolean
}
