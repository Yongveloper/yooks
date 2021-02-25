export const usePreventLeave = () => {
  const listner = (event) => {
    event.preventDefault();
    event.returnValue = '';
  };
  const enablePrevent = () => window.addEventListener('beforeunload', listner);
  const disablePrevent = () =>
    window.removeEventListener('beforeunload', listner);
  return { enablePrevent, disablePrevent };
};
