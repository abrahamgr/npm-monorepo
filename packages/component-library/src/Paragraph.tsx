export function Paragraph({
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p {...props} data-testid='my-paragraph'>
      {children}
    </p>
  )
}
