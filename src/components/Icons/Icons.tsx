import React, { MouseEvent } from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
  onClick?: (event: MouseEvent<SVGSVGElement>) => void
}

export const ChevronLeftIcon: React.FC<IconProps> = ({ onClick, ...props }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: onClick && 'pointer' }}
      {...props}
    >
      <path
        d="M4 7C4 7.23051 4.0767 7.42712 4.23599 7.60339L8.83776 12.7763C8.96165 12.9254 9.12684 13 9.31563 13C9.69911 13 10 12.661 10 12.2136C10 11.9966 9.9233 11.8 9.79351 11.6508L5.64602 7L9.79351 2.34915C9.9233 2.19322 10 1.99661 10 1.77966C10 1.33898 9.69911 1 9.31563 1C9.12684 1 8.96165 1.07458 8.83776 1.22373L4.23599 6.39661C4.0767 6.57288 4.0059 6.76949 4 7Z"
        fill="black"
      />
    </svg>
  )
}

export const ChevronRightIcon: React.FC<IconProps> = ({
  onClick,
  ...props
}) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: onClick && 'pointer' }}
      {...props}
    >
      <path
        d="M10 7C10 6.76949 9.9233 6.57288 9.76401 6.39661L5.16224 1.22373C5.03835 1.07458 4.87316 1 4.68437 1C4.30088 1 4 1.33898 4 1.78644C4 2.00339 4.0767 2.2 4.20649 2.34915L8.35398 7L4.20649 11.6508C4.0767 11.8068 4 12.0034 4 12.2203C4 12.661 4.30089 13 4.68437 13C4.87316 13 5.03835 12.9254 5.16224 12.7763L9.76401 7.60339C9.9233 7.42712 9.9941 7.23051 10 7Z"
        fill="black"
      />
    </svg>
  )
}
