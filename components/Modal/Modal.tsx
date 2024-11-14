// import { cn } from "@/utils/functions";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/utils/functions";
import { caros_soft } from "../Layout/Layout";

/* -------------------------------------------------------------------------------------------------
 * Trigger
 * -----------------------------------------------------------------------------------------------*/

type TriggerElement = ElementRef<typeof Dialog.Trigger>;
type TriggerProps = ComponentPropsWithoutRef<typeof Dialog.Trigger>;

const Trigger = forwardRef<TriggerElement, TriggerProps>((props, ref) => {
  const { asChild = true, ...triggerProps } = props;
  return (
    <Dialog.Trigger
      onClick={(e) => e.stopPropagation()}
      asChild={asChild}
      {...triggerProps}
      ref={ref}
    />
  );
});

Trigger.displayName = "ModalTrigger";

/* -------------------------------------------------------------------------------------------------
 * Content
 * -----------------------------------------------------------------------------------------------*/

type ContentElement = ElementRef<typeof Dialog.Content>;
type ContentProps = ComponentPropsWithoutRef<typeof Dialog.Content> & {
  overlayClassname?: string;
};

const Content = forwardRef<ContentElement, ContentProps>((props, ref) => {
  const { overlayClassname, className, ...contentProps } = props;
  return (
    <Dialog.Portal>
      <Dialog.Overlay
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "fixed overlay DialogOverlay !pointer-events-none inset-0 z-[998] bg-black/90",
          overlayClassname
        )}
      />
      <Dialog.Content
        onClick={(e) => e.stopPropagation()}
        className={cn(
          `!rounded-lg max-h-[95vh] DialogContent modal-content overflow-auto scroll-container z-[99999] flex items-start justify-start flex-col outline-none !fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-caros_soft ${caros_soft.variable}`,
          className
        )}
        {...contentProps}
        ref={ref}
      />
    </Dialog.Portal>
  );
});

Content.displayName = "ModalContent";

const Modal = {
  Root: Dialog.Root,
  Trigger,
  Content,
  Title: Dialog.Title,
  Description: Dialog.Description,
  Close: Dialog.Close,
};

export default Modal;
