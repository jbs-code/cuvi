import { IEx } from '../../Types/ICv'
type Props = {
    experiencia: IEx[],
    handleDelete: Function
}
function ShowEx({experiencia, handleDelete}: Props) {
  return (
    <div className="form-fa">
            {experiencia?.map((fa, index) => (
              <div key={index} className="form-fa--box">
                <p className="form-fa--titulo">
                  <span
                    onClick={() => handleDelete(index)}
                    className="form--skills-delete"
                  >
                    ✘
                  </span>
                  {fa.puesto}
                </p>
                <p className="form-fa--fecha">{fa.fecha}</p>
                <p className="form-fa--desc">- {fa.descripcion}</p>
              </div>
            ))}
          </div>
  )
}

export default ShowEx