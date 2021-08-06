const basicStyle = "px-2 py-2 m-1 font-bold uppercase text-sm hover:opacity-75";

const anchorStyles = {
  default: "text-gray-100 border-gray-200 active:text-gray-100",
  primary: "text-blue-500 border-blue-600 text-white active:text-blue-600",
  secondary: "text-gray-500 border-gray-600 text-white active:text-gray-600",
  success: "text-green-500 border-green-600 text-white active:text-green-600",
  danger: "text-red-500 border-red-600 text-white active:text-red-600",
  warning:
    "text-yellow-500 border-yellow-600 text-white active:text-yellow-600",
  info: "text-purple-500 border-purple-600 text-white active:text-purple-600",
};

const getStyle = (style = anchorStyles.default) => {
  return anchorStyles[style];
};

const renderStyle = style => {
  return [basicStyle, getStyle(style)].join(" ");
};

export default renderStyle;
