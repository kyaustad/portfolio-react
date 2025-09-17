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
    <CardContainer>
      <CardBody
        className={cn(
          "bg-gray-800 relative group/card border-secondary  rounded-lg p-4 border aspect-square flex flex-col items-center justify-center w-full h-full",
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
          className="text-sm font-medium text-white mt-2 text-center"
        >
          {text}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};
