import Navbar from 'Y/common/navbar';
import React, { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
      <>
          <Navbar />
          {children}
      </>
  )
}

export default Layout;