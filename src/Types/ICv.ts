export interface ICv {
  contacto: IContacto;
  perfil: IPerfil;
  habilidadesTecnicas: IHabilidadesTec;
  habilidadesBlandas: IHabilidadesBlandas;
  formacionAcademica: IFAcademica;
  experiencia: IExperiencia;
}

export interface IContacto {
  nombre: string;
  localidad?: string;
  email: string;
  telefono?: string;
  linkedIn?: string;
  webPersonal?: string;
}

export interface IPerfil {
  perfil: string;
}

export interface IHabilidadesTec {
  habilidadesTecnicas: string[];
}

export interface IHabilidadesBlandas {
  habilidadesBlandas: string[];
}

export interface IFAcademica {
  formacionAcademica: IFa[];
}

export interface IExperiencia {
  experiencia: IEx[];
}

export interface IFa {
  titulo: string;
  fecha: string;
  descripcion?: string;
}

export interface IEx {
  puesto: string;
  fecha: string;
  descripcion: string;
}
