import React, { useState } from 'react';
import { ISubscribeFormProps } from '../../types/types';

const SubscribeForm: React.FC<ISubscribeFormProps> = ({
  placeholder,
  submitText,
  agreementText,
}) => {
  const [email, setEmail] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Обработчик изменения значения в поле email
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Обработчик события blur (потеря фокуса на поле email)
  const handleEmailBlur = () => {
    if (email === '') {
      setIsEmailValid(null); // Если поле пустое, сбрасываем валидацию
    } else {
      // Логика валидации email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailValid(emailPattern.test(email)); // Устанавливаем валидность
    }
  };
  // Обработчик изменения состояния чекбокса
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(e.target.checked);
  };

  // Обработчик отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEmailValid && isCheckboxChecked && email !== '') {
      setIsSubmitted(true);
    }
  };

  return (
    <form className="subscribe__form" onSubmit={handleSubmit}>
      <div className="subscribe-form__controls-wrapper">
        <div className="subscribe-form__controls">
          <label className="subscribe-form__input-label">
            <input
              name="subscribe-form"
              className={`subscribe-form__input ${isEmailValid === false ? 'subscribe-form__input--invalid' : ''} ${isEmailValid === true ? 'subscribe-form__input--valid' : ''}`}
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              required
            />
          </label>
          <button
            type="submit"
            className="button-light-bg subscribe-form__button"
            disabled={!isCheckboxChecked || !isEmailValid || email === ''}
          >
            {submitText}
          </button>
        </div>
        <div className="subscribe-form__checkbox-wrapper">
          <label className="subscribe-form__label-checkbox">
            <input
              className="subscribe-form__input-checkbox"
              type="checkbox"
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
              required
            />
            <span className="subscribe-form__custom-checkbox"></span>
          </label>
          <p className="subscribe-form__checkbox-info">{agreementText}</p>
        </div>
      </div>
      {isSubmitted && (
        <div className="subscribe-form__success-submit-wrapper">
          <div className="subscribe-form__success-submit">
            <p className="subscribe-form__success-message">
              ¡Fantástico! Espera la primera carta
            </p>
          </div>
        </div>
      )}
    </form>
  );
};

export default SubscribeForm;
