import { useContext, forwardRef } from "react";
import { formInlineContext } from "../FormInline";
import { inputGroupContext } from "../InputGroup";
import { twMerge } from "tailwind-merge";

interface FormInputProps extends React.ComponentPropsWithoutRef<"input"> {
  formInputSize?: "sm" | "lg";
  rounded?: boolean;
}

type FormInputRef = React.ComponentPropsWithRef<"input">["ref"];

const FormInput = forwardRef((props: FormInputProps, ref: FormInputRef) => {
  const formInline = useContext(formInlineContext);
  const inputGroup = useContext(inputGroupContext);
  const { formInputSize, rounded, ...computedProps } = props;
  return (
    <input
    {...computedProps}
    ref={ref}
    className={twMerge([
      // Disabled styles
      "disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-700/50",
      // Readonly styles
      "[&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-700/50",
      // Base input styles
      "transition duration-200 ease-in-out w-full text-sm text-black border-slate-300/60 shadow-sm rounded-md placeholder:text-slate-600/90",
      // Focus styles
      "focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40",
      "dark:bg-darkmode-700 dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80",
      // Conditional size styles
      props.formInputSize === "sm" && "text-xs py-1.5 px-2",
      props.formInputSize === "lg" && "text-lg py-1.5 px-4",
      // Conditional rounded styles
      props.rounded && "rounded-full",
      // Inline form styles
      formInline && "flex-1",
      // Input group styles
      inputGroup &&
        "rounded-none [&:not(:first-child)]:border-l-transparent first:rounded-l last:rounded-r z-10",
      // Additional custom styles from props
      props.className,
    ])}
  />
  
  );
});

export default FormInput;
