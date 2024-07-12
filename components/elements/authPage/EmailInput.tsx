import styles from '@/styles/auth/index.module.scss'
import { InputFormType } from '@/types/auth'

export const EmailInput = ({ register, errors }: InputFormType) => {
  return (
    <label className={styles.form__label}>
      <input
        {...register('email', {
          required: 'Введите Email',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Неправильный Email',
          },
        })}
        className={styles.form__input}
        type={'text'}
        placeholder={'Email'}
      />
      {errors.email?.message && (
        <span className={styles.error_alert}>{errors.email.message}</span>
      )}
    </label>
  )
}
