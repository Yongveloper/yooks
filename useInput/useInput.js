export const useInput = (initialValue, vaildator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    let willUpdate = true;
    if (typeof vaildator === 'function') {
      willUpdate = vaildator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
