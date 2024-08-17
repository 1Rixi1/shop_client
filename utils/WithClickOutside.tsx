import {
  ForwardedRef,
  ForwardRefExoticComponent,
  MutableRefObject,
  RefAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'
import { WrappedComponentType } from '@/types/common'

export const WithClickOutside = (
  WrappedComponent: ForwardRefExoticComponent<
    WrappedComponentType & RefAttributes<HTMLDivElement>
  >
) => {
  const Component = () => {
    const [open, setOpen] = useState(false)

    const ref = useRef() as MutableRefObject<HTMLDivElement>

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {

        if (!ref.current.contains(e.target as HTMLDivElement)) {
          setOpen(false)
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () =>
          document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])

    return <WrappedComponent open={open} setOpen={setOpen} ref={ref} />
  }

  return Component
}
