type ProjectMetaIconProps = {
  label?: string;
  iconSrc?: string;
  iconAlt?: string;
};

/**
 * Small pill-like icon used next to the "More" button.
 * Can render either a text label (e.g. "Solo") or a 16x16 image.
 */
export function ProjectMetaIcon({
  label,
  iconSrc,
  iconAlt,
}: ProjectMetaIconProps) {
  return (
    <span className='project-meta-icon'>
      {iconSrc ? (
        <img
          src={iconSrc}
          alt={iconAlt ?? label ?? ""}
          className='project-meta-icon__image'
        />
      ) : (
        label && <span className='project-meta-icon__label'>{label}</span>
      )}
    </span>
  );
}
