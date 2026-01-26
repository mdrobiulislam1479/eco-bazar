export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-[92vw] max-w-330 ${className}`}>{children}</div>
  );
}
