/** 拡張子は.svgじゃないのはcssで調整できるようにするため */
const MoveTopSVG = () => {
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
      <path d="m20 20 20-10 20 10m-40 20 20-10 20 10" />
    </svg>
  );
};
export default MoveTopSVG;
