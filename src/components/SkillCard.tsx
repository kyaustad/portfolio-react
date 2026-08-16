import { CardContainer, CardItem, CardBody } from "@/components/ui/3d-card";
import { cn } from "@/lib/utils";

export const SkillCard = ({
  icon,
  className,
  text,
}: {
  icon: React.ReactNode;
  className?: string;
  text?: string;
}) => {
  return (
    <CardContainer
      className="h-full w-full min-w-0"
      containerClassName="h-auto w-full min-w-0"
    >
      <CardBody
        className={cn(
          "relative group/card aspect-square h-auto w-full min-w-0 flex flex-col items-center justify-center rounded-sm border border-cyber-cyan/30 bg-cyber-elevated/80 p-3 sm:p-4",
          className
        )}
      >
        <CardItem
          translateZ="100"
          className="w-full flex items-center justify-center"
        >
          <div className="w-full h-full flex items-center justify-center group-hover/card:shadow-xl ">
            {icon}
          </div>
        </CardItem>
        <CardItem
          translateZ="125"
          className="mt-2 flex min-h-8 w-full items-center justify-center text-center text-xs font-medium leading-tight text-white sm:min-h-10 sm:text-sm"
        >
          {text}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};
