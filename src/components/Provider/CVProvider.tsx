import { useReducer, PropsWithChildren, useEffect, useCallback } from "react";
import { template } from "../../data/template";
import { CVContext } from "../../CVContext/CVContext";
import { cvReducer } from "../../reducers/cvReducer";
import { actionType } from "../../Types/cvReducerType";
import { ICv } from "../../Types/ICv";

function CVProvider({ children }: PropsWithChildren) {
  const initialState = (): ICv => {
    return JSON.parse(localStorage.getItem("cv") + "") || template;
  };

  const [stateCV, dispatch] = useReducer(cvReducer, initialState());

  const handleTemplateChange = useCallback((data: actionType) => {
    dispatch(data);
  }, []);

  const reset = () => {
    dispatch({
      type: "reset",
      payload: template,
    });
  };

  useEffect(() => {
    localStorage.setItem("cv", JSON.stringify(stateCV));
  }, [stateCV]);

  return (
    <CVContext.Provider value={{ stateCV, handleTemplateChange, reset }}>
      {children}
    </CVContext.Provider>
  );
}

export default CVProvider;
