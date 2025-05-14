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
    <div className="card-hover-effect glow-border border border-primary rounded-lg p-6 flex items-center justify-center group">
      <div className="transform group-hover:scale-110 transition-transform duration-300">
        {renderIcon()}
      </div>
      {showName && <span className="ml-2 group-hover:text-primary transition-colors">{name}</span>}
    </div>
  );
};

export default ToolCard;
