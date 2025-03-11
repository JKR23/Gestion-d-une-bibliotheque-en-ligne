import className from "classnames";

// Desc: Button component of the website
export default function BaseButton({
 children,
 id,
 styling,
 onClick,
 type,
 disabled,
}) {
 const classes = className("inline-flex m-1 rounded-md px-3 py-1 text-sm", {
  "bg-primary font-normal text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary text-center hover:bg-secondary disabled:bg-gray-200 disabled:text-gray-500":
   styling === "primary",
  "bg-white font-normal hover:bg-secondary disabled:bg-gray-200 disabled:text-gray-500":
   styling === "second",
  "bg-white font-normal  shadow-sm ring-1 ring-inset ring-primary hover:bg-secondary disabled:bg-gray-200 disabled:text-gray-500":
   styling === "outline",
  "bg-puregoalsYellow font-normal shadow-sm text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary text-center hover:bg-puregoalsYellowSecond disabled:bg-gray-200 disabled:text-gray-500":
   styling === "generate",
 });
 return (
  <button
   id={id}
   className={classes}
   onClick={onClick}
   type={type}
   disabled={disabled}
  >
   {children}
  </button>
 );
}
