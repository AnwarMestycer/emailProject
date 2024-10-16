import { Outlet } from "react-router-dom";
import { SideBar } from "./components/sidebar";
import { EmailProvider } from "./components/context";

export interface Email {
  id: number;
  subject: string;
  content: string;
  read: boolean;
  isArchived: boolean;
  isSelected: boolean;
}

function App() {
  return (
    <EmailProvider>
      <div className="flex">
        <SideBar />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </EmailProvider>
  );
}

export default App;
