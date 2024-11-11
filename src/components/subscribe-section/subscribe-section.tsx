import React from 'react';
import SubscribeForm from '../subscribe-form/subscribe-form'; // Импортируем компонент формы
import BackgroundLine from '../background-line/background-line';
import { ISubscribeSectionProps } from '../../types/types';

const SubscribeSectionLineBgUrl =
  '/images/sections/line-bg/subscribe-form-line-bg.svg';

const SubscribeSection: React.FC<ISubscribeSectionProps> = ({
  title,
  text,
  emailPlaceholder,
  submitText,
  agreementText,
}) => {
  return (
    <section className="subscribe">
      <div className="container container--subscribe">
        <div className="subscribe-wrapper">
          <h2 className="subscribe__title">{title}</h2>
          <p className="subscribe__description">{text}</p>
          <SubscribeForm
            placeholder={emailPlaceholder}
            submitText={submitText}
            agreementText={agreementText}
          />
          <BackgroundLine
            imageUrl={SubscribeSectionLineBgUrl}
            top="59px"
            left="-14px"
            scale={1.4}
            zIndex={-1}
          />
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
