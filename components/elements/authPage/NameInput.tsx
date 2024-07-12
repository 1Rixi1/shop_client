import { InputFormType } from '@/types/auth'

import styles from '@/styles/auth/index.module.scss'

export const NameInput = ({ register, errors }: InputFormType) => {
  return (
    <label className={styles.form__label}>
      <input
        {...register('name', {
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

      {errors.name?.type === 'minLength' && (
        <span className={styles.error_alert}>Минимум 2 символа !</span>
      )}
      {errors.name?.type === 'maxLength' && (
        <span className={styles.error_alert}>Максимум 15 символов !</span>
      )}
      {errors.name?.message && (
        <span className={styles.error_alert}>{errors.name?.message}</span>
      )}
    </label>
  )
}
