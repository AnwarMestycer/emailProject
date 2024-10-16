import unread from "../logos/unread.svg";
import archived from "../logos/archived.svg";
import { useEmailContext } from "./context";
import { Email } from "../App";

interface HeaderProps {
  emails: Email[];
}

const Header = ({ emails }: HeaderProps) => {
  const { toggleSelectAll, markAsReadUnreadAll, makeArchiveUnarchiveAll } =
    useEmailContext();

  const allSelected = emails.length ? emails.every((email: Email) => email.isSelected) : false ;
  const oneSelected = emails.some((email: Email) => email.isSelected);
  const readUnread = emails.every(
    (email: Email) => !email.isSelected || email.read
  );
  const archiveUnarchive = emails.every(
    (email: Email) => !email.isSelected || email.isArchived
  );
  let countSelected = emails.filter((email: Email) => email.isSelected).length;
  return (
    <div className="flex justify-between mt-3 text-sm  m-4 ">
      <div className="flex justify-between gap-2">
        <input
          type="checkbox"
          id="all"
          checked={allSelected}
          onChange={(e) => toggleSelectAll(e.target.checked)}
        />
        <label htmlFor="all" className="font-medium">
          Email Selected({countSelected})
        </label>
      </div>
      {(oneSelected || allSelected) && (
        <div className="flex w-4/12  ">
          <div className="flex gap-1 w-5/12" onClick={markAsReadUnreadAll}>
            <img src={unread} alt="open envelop logo" />
            <label htmlFor="unreadLOgo">
              {readUnread ? "Mark as unread" : "Mark as read"}
            </label>
          </div>
          <div className="flex gap-1 w-4/12" onClick={makeArchiveUnarchiveAll}>
            <img src={archived} alt="recycle bin logo" />
            <label htmlFor="archivedLogo">
              {archiveUnarchive ? "Unarchive (s)" : "Archieve (s)"}
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
