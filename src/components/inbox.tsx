import { useState } from "react";
import { Email } from "../App";
import Header from "./Header";
import { useEmailContext } from "./context";
import Details from "./details";

export const Inbox = () => {

  const { inboxEmails, toggleEmailSelected } = useEmailContext();
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
      <h1 className="text-3xl font-sm mt-4">Inbox</h1>
      <Header emails={inboxEmails} />
      <div className="mt-3">
        <ul>
          {inboxEmails.map((email: Email) => {
            return (
              <li
                className="flex gap-3 p-2 border hover:bg-[#D1E2FF]"
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
