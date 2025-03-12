import * as SiIcons from "react-icons/si";
import { createElement } from "react";

interface ToolCardProps {
  name: string;
  icon: string;
  showName?: boolean;
}

const ToolCard = ({ name, icon, showName = false }: ToolCardProps) => {
  // Dynamically render the icon based on its name
  const renderIcon = () => {
    // Get the icon component from SiIcons based on its name
    const IconComponent = SiIcons[icon as keyof typeof SiIcons];
    
    // If the icon exists, render it with the specified size
    if (IconComponent) {
      return createElement(IconComponent, { size: 24 });
    }
    
    // Fallback if icon not found
    return <span className="text-xl">{icon.replace('Si', '')}</span>;
  };

  return (
    <div className="border border-primary rounded-lg p-6 flex items-center justify-center hover:bg-primary/10 transition-all duration-300">
      {renderIcon()}
      {showName && <span className="ml-2">{name}</span>}
    </div>
  );
};

export default ToolCard;
