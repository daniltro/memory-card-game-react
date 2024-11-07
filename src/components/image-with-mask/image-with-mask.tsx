export const ImageWithMask: React.FC<{ src: string; maskUrl: string }> = ({
  src,
  maskUrl,
}) => {
  return (
    <div
      className="hero-section__mask"
      style={{ maskImage: `url(${maskUrl})` }}
    >
      <img src={src} alt="Image with mask" className="hero-section__image" />
    </div>
  );
};
