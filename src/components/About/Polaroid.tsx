import "./Polaroid.css";

type PolaroidProps = {
  image: string;
  imageAlt: string;
  label: string;
};

export function Polaroid({ image, imageAlt, label }: PolaroidProps) {
  return (
    <div className='polaroid'>
      <img className='polaroid-image' src={image} alt={imageAlt} />
      <div className='polaroid-label'>{label}</div>
    </div>
  );
}
