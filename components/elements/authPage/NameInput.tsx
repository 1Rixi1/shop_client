import { InputFormType } from '@/types/auth'

import styles from '@/styles/auth/index.module.scss'

export const NameInput = ({ register, errors }: InputFormType) => {
  return (
    <label className={styles.form__label}>
      <input
        {...register('username', {
          required: 'Введите Name',
          minLength: 2,
          maxLength: 15,

          pattern: {
            value: /^[а-яА-Яa-zA-ZёЁ]*$/,
            message: 'Неверный Name',
          },
        })}
        className={styles.form__input}
        type={'text'}
        placeholder={'Name'}
      />

      {errors.username?.type === 'minLength' && (
        <span className={styles.error_alert}>Минимум 2 символа !</span>
      )}
      {errors.username?.type === 'maxLength' && (
        <span className={styles.error_alert}>Максимум 15 символов !</span>
      )}
      {errors.username?.message && (
        <span className={styles.error_alert}>{errors.username?.message}</span>
      )}
    </label>
  )
}
