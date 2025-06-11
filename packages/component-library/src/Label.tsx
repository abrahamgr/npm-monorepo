export function Label({
  children,
  ...props
}: React.HTMLAttributes<HTMLLabelElement>) {
  return (
    <label {...props} data-testid='my-label'>
      {children}
    </label>
  )
}
