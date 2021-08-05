const basicStyle =
  "px-2 py-2 m-1 font-bold uppercase border-b-4 border-l-2 rounded-lg shadow-md text-sm hover:opacity-75";

const buttonStyles = {
  default: "bg-gray-100 border-gray-200 active:bg-gray-100",
  primary: "bg-blue-500 border-blue-600 text-white active:bg-blue-600",
  secondary: "bg-gray-500 border-gray-600 text-white active:bg-gray-600",
  success: "bg-green-500 border-green-600 text-white active:bg-green-600",
  danger: "bg-red-500 border-red-600 text-white active:bg-red-600",
  warning: "bg-yellow-500 border-yellow-600 text-white active:bg-yellow-600",
  info: "bg-purple-500 border-purple-600 text-white active:bg-purple-600",
};

const getStyle = style => {
  if (!style) return buttonStyles.default;
  return buttonStyles[style];
};

const renderStyle = style => {
  return [basicStyle, getStyle(style)].join(" ");
};

export default renderStyle;
