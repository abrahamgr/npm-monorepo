import React from 'react'

export const Button: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <button
      style={{
        padding: '0.5rem 1rem',
        backgroundColor: '#007bff',
        color: '#fff',
      }}
    >
      {children}
    </button>
  )
}
