import { Video as LucideIcon } from 'lucide-react';

interface CompanyCardProps {
  companyName: string;
  Icon: LucideIcon;
  iconColor?: string;
  onClick?: () => void;
}

export function CompanyCard({ 
  companyName, 
  Icon, 
  iconColor = "text-red-500",
  onClick
}: CompanyCardProps) {
  return (
    <div 
      className={`w-[90%] max-w-4xl bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ${onClick ? 'cursor-pointer hover:border-gray-300' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center p-4">
        <div className="flex items-center justify-center space-x-3 w-full">
          <div className="flex-shrink-0">
            <Icon className={`w-8 h-8 ${iconColor}`} />
          </div>
          <h3 className="text-lg font-medium text-gray-900">
            {companyName}
          </h3>
        </div>
      </div>
    </div>
  );
}