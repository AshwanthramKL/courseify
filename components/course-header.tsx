import { cn } from "@/lib/utils";
import React from "react";

interface CourseHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  text?: string;
}

const CourseHeader = ({
  title,
  text,
  className,
  ...props
}: CourseHeaderProps) => {
  return (
    <>
      <div className={cn("space-y-3", className)} {...props}>
        <h1 className="text-2xl font-bold text-foreground leading-[1.1] tracking-tighter sm:text-3xl md:text-5xl">
          {title}
        </h1>
        {text && (
          <p className="max-w-[42rem] md:text-lg leading-normal text-slate-700 sm:text-lg sm:leading-8">
            {text}
          </p>
        )}
      </div>
      <hr className="my-4" />
    </>
  );
};

export default CourseHeader;
