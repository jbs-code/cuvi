import { IFa } from '../../Types/ICv'
type Props = {
    formacionAcademica: IFa[],
    handleDelete: Function
}
function ShowFa({formacionAcademica, handleDelete}: Props) {
  return (
    <div className="form-fa">
            {formacionAcademica?.map((fa, index) => (
              <div key={index} className="form-fa--box">
                <p className="form-fa--titulo">
                  <span
                    onClick={() => handleDelete(index)}
                    className="form--skills-delete"
                  >
                    ✘
                  </span>
                  {fa.titulo}
                </p>
                <p className="form-fa--fecha">{fa.fecha}</p>
                <p className="form-fa--desc">- {fa.descripcion}</p>
              </div>
            ))}
          </div>
  )
}

export default ShowFa