import { cn } from "@/utils/functions";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

/* -------------------------------------------------------------------------------------------------
 * Trigger
 * -----------------------------------------------------------------------------------------------*/

type TriggerElement = ElementRef<typeof DropdownMenu.Trigger>;
type TriggerProps = ComponentPropsWithoutRef<typeof DropdownMenu.Trigger>;

const Trigger = forwardRef<TriggerElement, TriggerProps>((props, ref) => {
  const { asChild = true, className, ...triggerProps } = props;

  return (
    <DropdownMenu.Trigger
      className={cn(
        "cursor-pointer transition-all duration-300 ease-in-out flex items-center bg-transparent w-full outline-none text-placeholder",
        className
      )}
      asChild={asChild}
      {...triggerProps}
      ref={ref}
    />
  );
});

Trigger.displayName = "DropdownTrigger";

/* -------------------------------------------------------------------------------------------------
 * Content
 * -----------------------------------------------------------------------------------------------*/

type ContentElement = ElementRef<typeof DropdownMenu.Content>;
type ContentProps = ComponentPropsWithoutRef<typeof DropdownMenu.Content> & {
  overlayClassname?: string;
};

const Content = forwardRef<ContentElement, ContentProps>((props, ref) => {
  const { children, className, ...contentProps } = props;
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        sideOffset={6}
        side="bottom"
        className={cn(
          "outline-none bg-background overflow-hidden shadow-2xl z-[99999999]  shadow-black/10 cursor-pointer border border-border",
          className
        )}
        {...contentProps}
        ref={ref}
      >
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  );
});

Content.displayName = "DropdownContent";

/* -------------------------------------------------------------------------------------------------
 * Item
 * -----------------------------------------------------------------------------------------------*/

type ItemElement = ElementRef<typeof DropdownMenu.Item>;
type ItemProps = ComponentPropsWithoutRef<typeof DropdownMenu.Item> & {
  isLastItem?: boolean;
};

const Item = forwardRef<ItemElement, ItemProps>((props, ref) => {
  const { isLastItem, className, ...itemProps } = props;

  return (
    <DropdownMenu.Item
      className={cn(
        "px-3 !py-2.5 ease-in-out duration-300 transition-all !outline-none font-sora hover:bg-grey hover:text-black min-w-[160px] border-b-border border-b flex gap-3",
        {
          "border-none": isLastItem,
        },
        className
      )}
      ref={ref}
      {...itemProps}
    />
  );
});

Item.displayName = "DropdownItem";

/* -------------------------------------------------------------------------------------------------
 * SubTrigger
 * -----------------------------------------------------------------------------------------------*/

type SubTriggerElement = ElementRef<typeof DropdownMenu.SubTrigger>;
type SubTriggerProps = ComponentPropsWithoutRef<typeof DropdownMenu.SubTrigger>;

const SubTrigger = forwardRef<SubTriggerElement, SubTriggerProps>(
  (props, ref) => {
    const { asChild = true, ...subTriggerProps } = props;
    return (
      <DropdownMenu.SubTrigger
        asChild={asChild}
        ref={ref}
        {...subTriggerProps}
      />
    );
  }
);

SubTrigger.displayName = "DropdownSubTrigger";

/* -------------------------------------------------------------------------------------------------
 * SubContent
 * -----------------------------------------------------------------------------------------------*/
type SubContentElement = ElementRef<typeof DropdownMenu.SubContent>;
type SubContentProps = ComponentPropsWithoutRef<typeof DropdownMenu.SubContent>;

const SubContent = forwardRef<SubContentElement, SubContentProps>(
  (props, ref) => {
    return <DropdownMenu.SubContent ref={ref} {...props} />;
  }
);

SubContent.displayName = "DropdownSubContent";

export const Dropdown = {
  Root: DropdownMenu.Root,
  Group: DropdownMenu.Group,
  Label: DropdownMenu.Label,
  CheckboxItem: DropdownMenu.CheckboxItem,
  RadioGroup: DropdownMenu.RadioGroup,
  RadioItem: DropdownMenu.RadioItem,
  ItemIndicator: DropdownMenu.ItemIndicator,
  Separator: DropdownMenu.Separator,
  Sub: DropdownMenu.Sub,
  Arrow: DropdownMenu.Arrow,
  Trigger,
  Content,
  Item,
  SubContent,
  SubTrigger,
};
