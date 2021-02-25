export const useConfirm = (message, onConfrim, onCancel) => {
  if (!onConfrim || typeof onConfrim !== 'function') return;
  if (onCancle && typeof onCancle !== 'function') return;
  const confirmAction = () => {
    if (confirm(message)) {
      onConfrim();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};
