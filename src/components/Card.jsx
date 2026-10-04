export default function Card({ title, children, className = '', headerAction }) {
  return (
    <section className={`card ${className}`.trim()}>
      {title && (
        <div className="card-header">
          <h3>{title}</h3>
          {headerAction}
        </div>
      )}
      {children}
    </section>
  )
}
