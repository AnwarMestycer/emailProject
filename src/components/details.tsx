import { Email } from "../App";
import close from '../logos/close.svg'
import { useEmailContext } from "./context";
import unread from '../logos/unread.svg'
import archived from '../logos/archived.svg'
const Details = ({ email, onClose }: { email: Email, onClose: () => void }) => {
    const {markAsReadUnread, makeArchiveUnarchive} = useEmailContext();

    const read = !email.read;
    const archive = email.isArchived;


  return (
    <div>
        <div className="w-full h-[40px] mt-4 ml-6 flex justify-between items-center">
            <button onClick={onClose} className="flex gap-1 text-sm">
                <img src={close} className="" alt="close X" />
                <p>Close(Esc)</p>
            </button>
            <div className="flex w-5/12">
          <div className="flex items-center gap-1 w-5/12" onClick={() => markAsReadUnread(email.id)}>
            <img src={unread} alt="open envelop logo" className="w-5 h-5"/>
            <label htmlFor="unreadLOgo">
              {read ? "Mark as unread" : "Mark as read"}
            </label>
          </div>
          <div className="flex gap-1 w-5/12" onClick={() => makeArchiveUnarchive(email.id)}>
            <img src={archived} alt="recycle bin logo" className="w-5 h-5"/>
            <label htmlFor="archivedLogo">
              {archive ? "Unarchive (s)" : "Archieve (s)"}
            </label>
          </div>
        </div>
        </div>
        <div className="flex flex-col gap-1 m-6">
      <h1 className="font-semibold text-lg">{email.subject} </h1>
      <p className="text-sm font-sm">{email.content}</p>
        </div>
    </div>
  );
};

export default Details;
