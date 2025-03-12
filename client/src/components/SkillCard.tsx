import { ReactNode } from "react";

interface SkillCardProps {
  name: string;
  icon: ReactNode;
}

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <div className="border border-primary rounded-lg p-6 flex items-center justify-center hover:bg-primary/10 transition-all duration-300">
      {icon}
      <span className="sr-only">{name}</span>
    </div>
  );
};

export default SkillCard;
