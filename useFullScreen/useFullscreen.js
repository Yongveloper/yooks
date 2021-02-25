export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === 'function') {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    } else if (element.current.mozRequestFullScreen) {
      element.current.requestFullscreen();
    } else if (element.current.webkitRequestFullscreen) {
      element.current.requestFullscreen();
    } else if (element.current.msRequestFullscreen) {
      element.current.requestFullscreen();
    }
    runCb(true);
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (element.current.mozCancelFullScreen) {
      element.current.mozCancelFullScreen();
    } else if (element.current.webkitExitFullscreen) {
      element.current.webkitExitFullscreen();
    } else if (element.current.msExitFullscreen) {
      element.current.msExitFullscreen();
    }
    runCb(false);
  };

  return { element, triggerFull, exitFull };
};
