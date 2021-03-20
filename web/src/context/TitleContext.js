import { createContext, useState } from 'react'

export const TitleContext = createContext()

export function TitleProvider({ children }) {
  const [isTitle, setIsTitle] = useState('')

  return (
    <TitleContext.Provider value={{ isTitle, setIsTitle }}>
      {children}
    </TitleContext.Provider>
  )
}
