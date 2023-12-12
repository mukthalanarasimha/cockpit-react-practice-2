import { TopBar } from "../share_module/top_bar";
import { MainDashboard } from "./component/main_dashboard";

export const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5">
      <TopBar />
      <MainDashboard />
    </div>
  );
};
