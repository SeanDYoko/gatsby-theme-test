import React from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [size, setSize] = React.useState(null)
  const [height, setHeight] = React.useState(null)
  const [isNavOpen, setNav] = React.useState(false)

  React.useEffect(() => {
    if (window) {
      setSize(window.innerWidth)
      setHeight(window.pageYOffset)
      window.addEventListener("resize", () => {
        setSize(window.innerWidth)
      })
      window.addEventListener("scroll", () => {
        setHeight(window.pageYOffset)
      })
    }

    return () => {
      window.removeEventListener("resize", () => {})
      window.removeEventListener("scroll", () => {})
    }
  }, [])
  const handleOpenNav = () => {
    setNav(true)
  }
  const handleCloseNav = () => {
    setNav(false)
  }
  return (
    <AppContext.Provider
      value={{
        size,
        height,
        handleCloseNav,
        handleOpenNav,
        isNavOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
