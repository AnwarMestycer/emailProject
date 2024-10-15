import { useContext, useState } from "react";
import { createContext } from "react";
import { Email } from "../App";

interface EmailContextProps {
  inboxEmails: Email[];
  archivedEmails: Email[];
  toggleSelectAll: (selectedAll: boolean) => void;
  toggleEmailSelected: (emailId: number) => void;
  markAsReadUnreadAll: () => void;
  makeArchiveUnarchiveAll: () => void;
  getEmailById:(emailId :number) => void ;
  makeArchiveUnarchive:(emailId :number) => void;
  markAsReadUnread:(emailId :number) => void;
}

export const EmailContext = createContext<EmailContextProps | undefined>(
  undefined
);

export const useEmailContext = () => {
  const context = useContext(EmailContext);

  if (!context) {
    throw new Error("useEmailContext must be used within EmailProvider");
  }

  return context;
};

export const EmailProvider = ({ children }: { children: React.ReactNode }) => {
  const [emails, setEmails] = useState<Email[]>([
    {
      id: 1,
      subject: "Duis mattis egestas metus.",
      content:
        "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      read: false,
      isArchived: false,
      isSelected: false,
    },
    {
      id: 2,
      subject:
        "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
      content:
        "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      read: false,
      isArchived: false,
      isSelected: false,
    },
    {
      id: 3,
      subject: "Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
      content:
        "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      read: false,
      isArchived: false,
      isSelected: false,
    },
    {
      id: 4,
      subject: "Pellentesque viverra pede ac diam.",
      content:
        "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      read: false,
      isArchived: false,
      isSelected: false,
    },
    {
      id: 5,
      subject: "Pellentesque viverra pede ac diam.",
      content:
        "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      read: false,
      isArchived: false,
      isSelected: false,
    },
    {
      id: 6,
      subject:
        "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      content: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      read: false,
      isArchived: false,
      isSelected: false,
    },
    {
      id: 7,
      subject:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
      content:
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      read: false,
      isArchived: false,
      isSelected: false,
    },
    {
      id: 8,
      subject: "In sagittis dui vel nisl.",
      content:
        "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      read: false,
      isArchived: false,
      isSelected: false,
    },
    {
      id: 9,
      subject: "Praesent blandit.",
      content: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      read: false,
      isArchived: false,
      isSelected: false,
    },
    {
      id: 10,
      subject: "Fusce posuere felis sed lacus.",
      content:
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      read: false,
      isArchived: false,
      isSelected: false,
    },
    {
      id: 11,
      subject:
        "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      content:
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      read: false,
      isArchived: false,
      isSelected: false,
    },
    {
      id: 12,
      subject:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      content:
        "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      read: false,
      isArchived: false,
      isSelected: false,
    },
  ]);

  const inboxEmails = emails.filter((email) => !email.isArchived);
  const archivedEmails = emails.filter((email) => email.isArchived);

  const toggleSelectAll = (selectAll: boolean) => {
    setEmails(emails.map((email) => ({ ...email, isSelected: selectAll })));
  };

  const toggleEmailSelected = (emailId: number) => {
    setEmails(
      emails.map((email) =>
        email.id === emailId
          ? { ...email, isSelected: !email.isSelected }
          : email
      )
    );
  };

  const markAsReadUnreadAll = () => {
    setEmails((prevEmails) => {
      const unread = prevEmails.some(
        (email) => email.isSelected && !email.read
      );
      return prevEmails.map((email) =>
        email.isSelected
          ? { ...email, read: unread }
          : email
      );
    });
  };
  const makeArchiveUnarchiveAll = () => {
    setEmails((prevEmails) => {
      const status = prevEmails.some(
        (email) => email.isSelected && !email.isArchived
      );
      return prevEmails.map((email) =>
        email.isSelected
          ? { ...email, isArchived: status, isSelected: false }
          : email
      );
    });
  };
  const getEmailById = (id: number): Email | undefined => {
    return emails.find((email) => email.id === id);
  };
    // Mark as read/unread
    const markAsReadUnread = (id: number) => {
      setEmails((emails) =>
        emails.map((email) =>
          email.id === id ? { ...email, read: !email.read } : email
        )
      );
    };
  
    // Archive/Unarchive email
    const makeArchiveUnarchive = (id: number) => {
      setEmails((emails) =>
        emails.map((email) =>
          email.id === id ? { ...email, isArchived: !email.isArchived } : email
        )
      );
    }
  return (
    <EmailContext.Provider
      value={{
        inboxEmails,
        archivedEmails,
        toggleSelectAll,
        toggleEmailSelected,
        markAsReadUnreadAll,
        makeArchiveUnarchiveAll,
        makeArchiveUnarchive,
        markAsReadUnread,
        getEmailById
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};
