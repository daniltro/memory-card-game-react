// import React from 'react';
// import SubscribeForm from '../subscribe-form/subscribe-form'; // Импортируем компонент формы
// import BackgroundLine from '../background-line/background-line';
// import MarqueeLine from '../marqueeLine/marqueeLine';

// const SubscribeSectionLineBgUrl =
//   '/images/sections/line-bg/subscribe-form-line-bg.svg';

// interface ISubscribeSectionProps {
//   data: {
//     title: string;
//     text: string;
//     'email-placeholder': string;
//     'submit-text': string;
//     'agreement-text': string;
//     ticker: {
//       text: string;
//       color: string;
//     };
//   };
// }

// const SubscribeSection: React.FC<ISubscribeSectionProps> = ({ data }) => {
//   return (
//     <section className="subscribe">
//       <div className="container container--subscribe">
//         <div className="subscribe-wrapper">
//           <h2 className="subscribe__title">
//             <span>Suscríbete</span> a nuestra newsletter para no perderte nada
//             nuevo
//           </h2>
//           <p className="subscribe__description">{data.text}</p>
//           <SubscribeForm
//             placeholder={data['email-placeholder']}
//             submitText={data['submit-text']}
//             agreementText={data['agreement-text']}
//           ></SubscribeForm>
//           <BackgroundLine
//             imageUrl={SubscribeSectionLineBgUrl}
//             top="59px"
//             left="-14px"
//             scale={1.4}
//             zIndex={-1}
//           />
//         </div>
//       </div>

//     </section>
//   );
// };

// export default SubscribeSection;

import React from 'react';
import SubscribeForm from '../subscribe-form/subscribe-form'; // Импортируем компонент формы
import BackgroundLine from '../background-line/background-line';
import MarqueeLine from '../marqueeLine/marqueeLine';

const SubscribeSectionLineBgUrl =
  '/images/sections/line-bg/subscribe-form-line-bg.svg';

interface ISubscribeSectionProps {
  title: string;
  text: string;
  emailPlaceholder: string;
  submitText: string;
  agreementText: string;
  ticker?: {
    text: string;
    color: string;
  };
}

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
          <h2 className="subscribe__title">
            <span>Suscríbete</span> a nuestra newsletter para no perderte nada
            nuevo
          </h2>
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
