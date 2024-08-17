import { useEffect, useState } from 'react'
import { getWindowWidth } from '@/utils/common'

const useWindowWith = () => {
  const [windowWith, setWindowWidth] = useState(getWindowWidth())

  const changeResizeWindow = () => setWindowWidth(getWindowWidth())

  useEffect(() => {
    window.addEventListener('resize', changeResizeWindow)

    return () => window.removeEventListener('resize', changeResizeWindow)
  }, [])

  return { windowWith, changeResizeWindow }
}

export const useMediaQuery = (maxWidth: number) => {
  const { windowWith, changeResizeWindow } = useWindowWith()

  const [isMedia, setIsMedia] = useState(false)

  useEffect(() => {
    if (windowWith.innerWidth >= maxWidth) {
      setIsMedia(true)
    } else {
      setIsMedia(false)
    }
  }, [windowWith.innerWidth, changeResizeWindow, maxWidth])

  return { isMedia }
}
