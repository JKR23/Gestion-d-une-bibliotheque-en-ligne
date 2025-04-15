"use client";
import React from "react";
import classNames from "classnames";

export default function Button({
 children,
 variant = "primary",
 className,
 ...props
}) {
 const baseStyle = "px-4 py-2 rounded transition duration-200 font-semibold";
 const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  outline:
   "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  danger: "bg-red-600 text-white hover:bg-red-700",
 };

 return (
  <button
   className={classNames(baseStyle, variants[variant], className)}
   {...props}
  >
   {children}
  </button>
 );
}
