"use client";
import {
  PropsWithChildren,
  // useEffect,
  useState,
} from "react";
import { INotification, INotificationWithId } from "types/Notification";
import createCtx from "utils/context";
import { v4 } from "uuid";
// import getNotification from "utils/axios/Notification";

// async function getData() {
//   try {
//     const result = await getNotification();
//     return result.data.details;
//   } catch (e) {
//     console.error("Could not fetch notification data.");
//   }
// }

const [useContext, Provider] = createCtx<{
  notifications: INotificationWithId[];
  addNotification: (notification: INotification) => INotificationWithId;
  removeNotification: (notification: INotificationWithId) => void;
}>("notification");

export const NotificationProvider = function NotificationProvider({
  children,
}: PropsWithChildren) {
  const [notifications, setNotification] = useState<INotificationWithId[]>([]);
  // useEffect(() => {
  //   let active = true;

  //   async function load() {
  //     // setNotification(undefined); // this is optional
  //     const res = await getData();
  //     if (!active) {
  //       return;
  //     }
  //     if (res) {
  //       sessionStorage.setItem(`codr-notification`, JSON.stringify(res));
  //     }
  //     setNotification(res);
  //   }

  //     load();

  //   return () => {
  //     active = false;
  //   };
  // }, []);

  const addNotification = function addNotification(
    notification: INotification,
  ) {
    const n = { ...notification, id: v4() };
    notifications.push(n);
    setNotification([...notifications]);
    return n;
  };
  const removeNotification = function addNotification(
    notification: INotificationWithId,
  ) {
    // find element
    const index = notifications.findIndex(n => n.id === notification.id);

    // if exists
    if (index !== -1) {
      // update seen state for transition
      const update = { ...notification, hasSeen: true };
      notifications.splice(index, 1, update);
      setNotification([...notifications]);

      // after transition finishes, remove notification
      setTimeout(() => {
        const n = notifications.filter(n => n.id !== notification.id);
        setNotification([...n]);
      }, 300);
    }
  };

  return (
    <Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </Provider>
  );
};

const NotificationContext = {
  useNotification: useContext,
  NotificationProvider: NotificationProvider,
};

export default NotificationContext;
export const useNotification = useContext;
