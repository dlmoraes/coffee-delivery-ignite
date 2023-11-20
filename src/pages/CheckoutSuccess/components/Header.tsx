export interface HeaderProps {
  title: string
  subtitle: string
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-display text-titleL font-extrabold text-yellowDark">
        {title}
      </span>
      <span className="text-bodyL font-normal text-baseSubtitle">
        {subtitle}
      </span>
    </div>
  )
}
