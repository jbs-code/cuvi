import { IContacto, ICv } from "../Types/ICv";

type keyType = "contacto" | "perfil" | "ht" | "hb" | "fa" | "ex";

export const initialState = (key: keyType): {} => {
  const cv: ICv = JSON.parse(localStorage.getItem("cv") + "");

  switch (key) {
    case "contacto":
      return cv ? cv.contacto : ({} as IContacto);
    case "perfil":
      return cv ? cv.perfil : "";
    case "ht":
      return { habilidadesTecnicas: "" };
    case "hb":
      return { habilidadesBlandas: "" };
    case "fa":
      return { titulo: "", fecha: "", descripcion: "" };
    case "ex":
      return { puesto: "", fecha: "", descripcion: "" };
  }
};
