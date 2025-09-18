/** 拡張子は.svgじゃないのはcssで調整できるようにするため */
const MenuSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 80 60"
      height="64"
      width="64"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20 15H60M20 40H60M23 59V51L26 57 29 51V59M32 55H38C38 53 37 52 35 52S32 53 32 55 33 58 35 58L37 58M41 59V52L47 58V51M50 51C50 58 51 58 52 58 53 58 56 58 56 51V59" />
    </svg>
  );
};
export default MenuSvg;
