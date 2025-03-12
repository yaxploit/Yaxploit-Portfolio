import { ReactNode } from "react";

interface ToolCardProps {
  name: string;
  icon: ReactNode;
  showName?: boolean;
}

const ToolCard = ({ name, icon, showName = false }: ToolCardProps) => {
  return (
    <div className="border border-primary rounded-lg p-6 flex items-center justify-center hover:bg-primary/10 transition-all duration-300">
      {icon}
      {showName && <span className="ml-2">{name}</span>}
    </div>
  );
};

export default ToolCard;
