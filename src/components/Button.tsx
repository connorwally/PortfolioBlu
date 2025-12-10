type ButtonProps = {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
  type?: "button" | "submit" | "reset";
};

export function Button({
  label,
  onClick,
  isActive,
  type = "button",
}: ButtonProps) {
  return (
    <button
      className={`btn${isActive ? " btn--active" : ""}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
