import { WithChildren, WithClassName } from "@/types";
import clsx from "clsx";
import React from "react";

export function Heading2({ className, children }: WithChildren<WithClassName<{}>>) {
  return <h2 className={clsx(className, "text-4xl font-bold")}>{children}</h2>;
}
