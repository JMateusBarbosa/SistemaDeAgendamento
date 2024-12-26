const ToothIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2C7.58 2 4 4.58 4 9c0 3.42 2.19 6.17 4.32 8.1C9.93 18.86 12 20 12 20s2.07-1.14 3.68-2.9C17.81 15.17 20 12.42 20 9c0-4.42-3.58-7-8-7zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
  </svg>
);

export default ToothIcon;