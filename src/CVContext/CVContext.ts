import { createContext } from "react";
import { ICv } from "../Types/ICv";
import { template as stateCV } from "../data/template";

interface IContext {
  stateCV: ICv;
  handleTemplateChange: Function;
  reset: Function;
}

const handleTemplateChange = () => {};
const reset = () => {};

export const CVContext = createContext<IContext>({
  stateCV,
  handleTemplateChange,
  reset
});
