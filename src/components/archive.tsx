import { useState } from "react";
import { Email } from "../App";
import { useEmailContext } from "./context";
import Details from "./details";
import Header from "./Header";

export const Archive = () => {

  const { archivedEmails, toggleEmailSelected } = useEmailContext();
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  const showDetails = (email: Email) => {
    setSelectedEmail(email); 
  };
  const closePopup = () => {
    setSelectedEmail(null); 
  };
  return (
    <div>

    <div className="shadow-sm">
      <h1 className="text-3xl font-semibold m-4">Archive</h1>
      <Header emails={archivedEmails} />
      <div className="mt-4">
        <ul>
          {archivedEmails.map((email: Email) => {
            return (
              <li
              className={`flex items-center gap-3 pl-4 h-[45px] border hover:bg-hover ${email.isSelected ? "bg-[#F3F6FB]": "" }`}
              key={email.id}
                
              >
                <input
                  type="checkbox"
                  checked={email.isSelected}
                  onChange={() => toggleEmailSelected(email.id)}
                />
                <h2
                  className={`text-sm ${!email.read ? "font-bold" : ""}`}
                  onClick={() => showDetails(email)}
                >
                  {email.subject}
                </h2>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
      {selectedEmail && (
        <div className="fixed inset-0 bg-white bg-opacity-100 z-50 ml-[400px]">
          <Details email={selectedEmail} onClose={closePopup}/>
        </div>
      )}
      </div>
  );
};


