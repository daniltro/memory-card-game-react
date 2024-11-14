export const TextWithIcon: React.FC<{ text: string }> = ({ text }) => (
  <>
    <span className="marquee-line__text">{text}</span>
    <span className="marquee-line__icon" />
  </>
);
