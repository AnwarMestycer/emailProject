import logo from "../logos/logo.svg";
import inbox from "../logos/inbox.svg";
import archive from "../logos/archive.svg";
import logout from "../logos/logout.svg";
import { Link, useLocation } from "react-router-dom";
import { useEmailContext } from "./context";
export const SideBar = () => {

  const {inboxEmails, archivedEmails} = useEmailContext()
  const inboxEmailCount = inboxEmails.length;
  const archivedEmailsCount = archivedEmails.length;
  const location = useLocation().pathname;

  return (
    <div className="w-[206px] h-screen bg-background">
      <div className="flex flex-col justify-between h-screen">
        <div className="flex flex-col">
         
          <Link to="/"> <img src={logo} className="w-10 h-10 ml-2" alt=""/></Link>

          <ul className="ml-2 flex flex-col gap-1 p-1 ">
           <Link to="/">
            <li className={`flex justify-between rounded-3xl p-2 font-medium ${location === "/" ? "bg-[#D6E2FB]" : " "} hover:bg-hover`}>
              <div className="flex gap-2">
                <img src={inbox} alt=""/>
                <p>Inbox</p>
              </div>
              <p>{inboxEmailCount}</p>
            </li>
           </Link>
             <Link to="/archive">
            <li className={`flex justify-between rounded-3xl p-2 font-medium ${location === "/archive" ? "bg-[#D6E2FB]" : " "} hover:bg-hover`}>
             <div className="flex gap-2">
                <img src={archive} alt=""/>
                <p>Archive</p>
              </div>
              <p>{archivedEmailsCount}</p>
            </li>
             </Link>
          </ul>
        </div>
          <Link to="/login">
            <div className="flex justify-start items-center gap-2 rounded-3xl font-medium hover:bg-[#D6E2FB] m-3 p-1">
              <img src={logout} alt="" />
              <p>logout</p>
            </div>
            </Link>
      </div>
    </div>
  );
};
