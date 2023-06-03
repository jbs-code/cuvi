import { actionType } from "../Types/cvReducerType";
import {
  IContacto,
  ICv,
  IExperiencia,
  IFAcademica,
  IHabilidadesBlandas,
  IHabilidadesTec,
  IPerfil,
} from "../Types/ICv";

export const cvReducer = (state: ICv, action: actionType): ICv => {
  switch (action.type) {
    case "perfil":
      return {
        ...state,
        perfil: action.payload as IPerfil,
      };
    case "contacto":
      return {
        ...state,
        contacto: action.payload as IContacto,
      };
    case "ht":
      return {
        ...state,
        habilidadesTecnicas: action.payload as IHabilidadesTec,
      };
    case "hb":
      return {
        ...state,
        habilidadesBlandas: action.payload as IHabilidadesBlandas,
      };
    case "fa":
      return {
        ...state,
        formacionAcademica: action.payload as IFAcademica,
      };
    case "ex":
      return {
        ...state,
        experiencia: action.payload as IExperiencia,
      };

    case "reset":
      return action.payload as ICv;

    default:
      return state;
  }
};
