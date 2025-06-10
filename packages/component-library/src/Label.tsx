export function Label({
  children,
  ...props
}: React.HTMLAttributes<HTMLLabelElement>) {
  return <label {...props}>{children}</label>
}
