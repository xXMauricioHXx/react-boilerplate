const defaultStyle =
  "w-11 h-11 md:hidden absolute mt-2 bg-red-400 rounded-full only-transition flex justify-center items-center";

const navStyle = {
  open: "right-percent-positive",
  close: "right-percent-negative",
};

export const burgerIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

export const renderStyle = (isOpen) => {
  return [defaultStyle, isOpen ? navStyle.open : navStyle.close].join(" ");
};
