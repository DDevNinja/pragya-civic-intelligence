import DashboardHeader from "../Components/dashboard/DashboardHeader";
import TopIssuesSlider from "../Components/dashboard/TopIssuesSlider";
import RiskSummary from "../Components/dashboard/RiskSummary";
import AlertBanner from "../Components/dashboard/AlertBanner";
import CitySelector from "../Components/common/CitySelector";
import CityMap from "../Components/map/CityMap"; // ✅ correct import (NOT page)
import RecentIssues from "../Components/dashboard/RecentIssues";

export default function DashboardPage() {
  return (
    <main className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <DashboardHeader />

      {/* Alerts */}
      <AlertBanner />

      {/* Tablet/Desktop Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">
          <CitySelector />
          <RiskSummary />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
          <TopIssuesSlider />
           <RecentIssues />
          {/* Map inside dashboard */}
          <div className="h-[500px]">
            <CityMap />
          </div>

        </div>

      </div>
    </main>
  );
}
