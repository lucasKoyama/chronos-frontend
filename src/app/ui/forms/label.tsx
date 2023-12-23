export default function Label({
  title,
  styles,
}: {
  title: string;
  styles: string;
}) {
  return (
  <label htmlFor={title.toLowerCase()} className={styles}>
    {title}
  </label>
  )
}