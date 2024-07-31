import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { withHydrate } from 'effector-next'
import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

const enhance = withHydrate()

import 'react-toastify/dist/ReactToastify.css'

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-right"
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        limit={1}
        theme="light"
      />
    </>
  )
}

export default enhance(App)
