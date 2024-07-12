import styles from '@/styles/auth/index.module.scss'
import { InputFormType } from '@/types/auth'
export const PasswordInput = ({ register, errors }: InputFormType) => {
  return (
    <label className={styles.form__label}>
      <input
        className={styles.form__input}
        {...register('password', {
          required: 'Введите Password',
          minLength: 4,
          maxLength: 15,
        })}
        type="password"
        placeholder={'Password'}
      />
      {errors.email?.type === 'minLength' && (
        <span className={styles.error_alert}>Минимум 4 символа</span>
      )}
      {errors.email?.type === 'maxLength' && (
        <span className={styles.error_alert}>Минимум 15 символов</span>
      )}
      {errors.password?.message && (
        <span className={styles.error_alert}>{errors.password.message}</span>
      )}
    </label>
  )
}
