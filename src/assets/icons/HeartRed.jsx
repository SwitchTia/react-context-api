export default function HeartRed(props) {
  const BURGUNDY = "#964156ff"; 
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" // Explicitly setting a small width
      height="20" // Explicitly setting a small height
      viewBox="0 0 24 24" 
      fill={BURGUNDY} // Solid Fill color
      stroke={BURGUNDY} // Stroke color
      strokeWidth="1.5" // Slightly thinner stroke looks better when filled
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M16.5 3c-1.74 0-3.419.814-4.5 2.153C10.919 3.814 9.24 3 7.5 3 4.417 3 2 5.467 2 8.71c0 3.513 2.94 6.74 7.6 11.235L12 22l2.4-2.055C19.06 15.45 22 12.223 22 8.71 22 5.467 19.583 3 16.5 3z"></path>
    </svg>
  );
}