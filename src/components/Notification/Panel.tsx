import { useNotification } from "utils/contexts/NotificationContext";
import { Card } from "./index";
export default function NotificationPanel() {
  const { notifications } = useNotification();

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          {notifications.map(c => {
            return <Card key={`notification ${c.id}`} {...c} />;
          })}
        </div>
      </div>
    </>
  );
}
