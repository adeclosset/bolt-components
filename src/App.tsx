import { Building2, Stethoscope, Shield, Truck, Coffee, Laptop } from 'lucide-react';
import { CompanyCard } from './components/CompanyCard';

function App() {
  const handleCardClick = () => {
    console.log('Clicked on Patient Collector');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <CompanyCard
            companyName="Patient Collector"
            Icon={Stethoscope}
            iconColor="text-red-500"
            onClick={handleCardClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;