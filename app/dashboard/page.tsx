import DashboardHeader from "../Components/dashboard/DashboardHeader";
import TopIssuesSlider from "../Components/dashboard/TopIssuesSlider";
import RiskSummary from "../Components/dashboard/RiskSummary";
import AlertBanner from "../Components/dashboard/AlertBanner";
import MapPage from "../map/page";
import CitySelector from "../Components/common/CitySelector";

export default function DashboardPage() {
  return (
    <main className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      <DashboardHeader />
      <AlertBanner />

      {/* Tablet/Desktop Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <RiskSummary />
        </div>

        <div className="lg:col-span-2">
          <TopIssuesSlider />
          <CitySelector />
          <MapPage/>
        </div>
      </div>
    </main>
  );
}
