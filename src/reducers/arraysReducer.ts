import { IEx, IFa } from "../Types/ICv";

type stateType = {
  data: string[] | IFa[] | IEx[];
};
type actionType = {
  type:
    | "addTechSkill"
    | "removeTechSkill"
    | "addSoftSkill"
    | "removeSoftSkill"
    | "addAcademic"
    | "removeAcademic"
    | "addExperience"
    | "removeExperience";
  payload: string | string[] | IFa | IFa[] | IEx | IEx[];
};

export const arraysReducer = (
  state: stateType,
  action: actionType
): stateType => {
  switch (action.type) {
    case "addTechSkill":
      return {
        data: [...state.data, action.payload] as string[],
      };
    case "removeTechSkill":
      return {
        data: action.payload as string[],
      };
    case "addSoftSkill":
      return {
        data: [...state.data, action.payload] as string[],
      };
    case "removeSoftSkill":
      return {
        data: action.payload as string[],
      };
    case "addAcademic":
      return {
        data: [...state.data, action.payload] as IFa[],
      };
    case "removeAcademic":
      return {
        data: action.payload as IFa[],
      };
      case "addExperience":
        return {
          data: [...state.data, action.payload] as IEx[],
        };
      case "removeExperience":
        return {
          data: action.payload as IEx[],
        };
    default:
      return state;
  }
};
