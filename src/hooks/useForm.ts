import { useState } from 'react';
// import { formType } from '../Types/formType';

type event = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;

function useForm(initialState: {}) {
  const [data, setData] = useState(initialState);
  
  const handleInputChange = (e: event) => {
    const { target } = e;
    setData({
      ...data,
      [(target as HTMLInputElement).name]: (target as HTMLInputElement).value,
    });
  };

  const reset = () => {
    setData(initialState);
  }

return {data, handleInputChange, reset};
}

export default useForm;
