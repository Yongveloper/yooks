export const useNotification = (title, options) => {
  if (!('Notification' in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission((permission) => {
        if (permission === 'granted') {
          new Notification(title, options);
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};
