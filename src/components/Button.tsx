type ButtonProps = {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
};

export function Button({ label, onClick, isActive }: ButtonProps) {
  return (
    <button
      className={`btn${isActive ? " btn--active" : ""}`}
      type='button'
      onClick={onClick}
    >
      {label}
    </button>
  );
}
