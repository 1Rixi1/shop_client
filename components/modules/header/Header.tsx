import styles from '@/styles/header/index.module.scss'
import { HeaderTop } from '@/components/modules/header/HeaderTop'
import { HeaderBottom } from '@/components/modules/header/HeaderBottom'

export const Header = () => {

  

  return (
    <header className={styles.header}>
      <HeaderTop />
      <HeaderBottom />
    </header>
  )
}
