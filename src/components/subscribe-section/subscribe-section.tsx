import React from 'react';
import SubscribeForm from '../subscribe-form/subscribe-form'; // Импортируем компонент формы
import BackgroundLine from '../background-line/background-line';
import { ISubscribeSectionProps } from '../../types/types';
import useWindowWidth from '../../hooks/useWindowWidth';
import { getBackgroundLineConfig } from '../../types/utils';

// const SubscribeSectionLineBgUrl =
//   '/images/sections/line-bg/desktop/subscribe-form-line-bg-desktop.svg';

const SubscribeSection: React.FC<ISubscribeSectionProps> = ({
  title,
  text,
  emailPlaceholder,
  submitText,
  agreementText,
}) => {
  const windowWidth = useWindowWidth();
  const backgroundLineConfig = getBackgroundLineConfig(
    'subscribe',
    windowWidth
  );
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
            imageUrl={backgroundLineConfig.imageUrl}
            top={backgroundLineConfig.top}
            left={backgroundLineConfig.left}
            scale={backgroundLineConfig.scale}
            zIndex={backgroundLineConfig.zIndex}
          />
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
