type ButtonProps = {
  label?: string;
  onClick?: () => void;
  isActive?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
  iconSrc?: string;
  iconAlt?: string;
  className?: string;
};

export function Button({
  label,
  onClick,
  isActive,
  type = "button",
  href,
  iconSrc,
  iconAlt,
  className: extraClassName,
}: ButtonProps) {
  const className = `btn${isActive ? " btn--active" : ""}${
    extraClassName ? ` ${extraClassName}` : ""
  }`;

  const content = (
    <>
      {iconSrc && (
        <img src={iconSrc} alt={iconAlt ?? label ?? ""} className='btn__icon' />
      )}
      {label && <span className='btn__label'>{label}</span>}
    </>
  );

  if (href) {
    return (
      <a
        className={className}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      {content}
    </button>
  );
}
