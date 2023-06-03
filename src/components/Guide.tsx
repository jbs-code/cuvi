import example from "../assets/example.png"

function Guide() {
  return (
    <div className="guide w-80">
      <h1>Guía</h1>

      <div className="card mb-3">
        <img src={example} alt="example" />
      </div>

      <div className="card">
        <p>
          Te presento esta pequeña guía para que puedas elaborar tu currículum y
          despejes las dudas que te puedan surgir. Generalmente debes de cubrir
          los siguientes puntos al momento de elaborar tu currículum:
        </p>
      </div>

      <div className="card mt-3">
        <li className="card-title">Datos de contacto</li>
        <p>Al menos debes de colocar:</p>
        <ul className="mt-3 ml-3">
          <li>Nombre</li>
          <li>Localidad</li>
          <li>Email</li>
          <li>Teléfono</li>
        </ul>
        <p className="mt-3">Adicionalmente:</p>
        <ul className="mt-3 ml-3">
          <li>URL de web personal</li>
          <li>Links de redes sociales</li>
        </ul>
      </div>

      <div className="card mt-3">
        <li className="card-title">Perfil</li>
        <p>
          En esta sección debes de responder a la pregunta ¿Por qué deberían
          contratarte? Recuerda que puede haber más candidatos que cumplan con
          el perfil del puesto solicitado; entonces debes de destacar aquellas
          cosas que te diferencian de los otros candidatos. Explica brevemente
          tu trayectoria profesional, resaltando el aprendizaje que te ha dejado
          y lo que tú has podido aportar. Si aún no tienes experiencia
          profesional, puedes implementar lo mismo con tu trayectoria académica,
          incluso sería el espacio idóneo para colocar los cursos que has
          tomado, sin olvidar resaltar el aprendizaje o desarrollo de tus
          habilidades que has logrado.
        </p>
        <p className="mt-2">
          Tu perfil debe ser breve y dejar en claro qué es lo que puedes aportar
          en el puesto de trabajo por el que estas compitiendo.
        </p>
      </div>

      <div className="card mt-3">
        <li className="card-title">Habilidades</li>
        <p>
          Las habilidades se clasifican en dos tipos: Habilidades técnicas y
          habilidades blandas:
        </p>
        <li className="mt-3 ml-3">Habilidades Técnicas</li>
        <p className="mt-1 ml-3">
          Son aquellas habilidades específicas para tu profesión y varían de
          acuerdo a las funciones a realizar. Por ejemplo: Programación,
          Photoshop, Paquetería de Office, Idiomas, etc.
        </p>
        <li className="mt-3 ml-3">Habilidades Blandas</li>
        <p className="mt-1 ml-3">
          Son habilidades más generales y que son útiles independientemente de
          la profesión, es decir, aquellas que utilizas en cualquier aspecto de
          tu vida, incluido tu lado profesional. Por ejemplo: Trabajo en equipo,
          Liderazgo, Adaptabilidad, etc.
        </p>
      </div>

      <div className="card mt-3">
        <li className="card-title">Experiencia</li>
        <p>
          Esta tal vez sea la sección más importante para muchos. Debes de poner
          tus experiencias en orden cronológico inverso, empezando por tu último
          puesto de trabajo. Es muy importante colocar el nombre del puesto, la
          compañía donde ejerciste, el lugar donde se ubica y el tiempo que
          estuviste ahí. Además de una descripción donde destaques tus funciones
          y los logros que obtuviste.
        </p>
        <p className="mt-2">
          Busca describir tus logros o metas alcanzadas de una forma
          cuantificable colocando porcentajes o ganancias cuando sea posible; o
          describe la manera en que mejoraste un proceso de producción, o la
          simplificación de la dinámica de trabajo, o si contribuiste en
          alcanzar estándares internacionales, premios alcanzados o
          reconocimientos, etc.
        </p>
      </div>

      <div className="card mt-3">
        <li className="card-title">Formación académica</li>
        <p>
          La forma de elaborar este apartado es similar al de experiencia.
          Debes colocar el grado que obtuviste, el centro de estudios y la fecha
          en que te graduaste o especificar si continúas estudiando si es el
          caso. Toma en cuenta que si tienes estudios superiores, está de más
          colocar estudios de bachiller o secundaria, ya que es obvio que los
          tienes. También puedes colocar una descripción si consideras que puede
          aportar algo a tu postulación, esto sirve principalmente cuando no
          tienes experiencia laboral. Si lo haces, destaca tus habilidades
          desarrolladas o si fuiste presidente de alguna asociación, o si
          obtuviste algún reconocimiento, o si hiciste algún trabajo importante,
          etc.
        </p>
      </div>

      <div className="card mt-3">
        <p>
          Por último, recuerda que no es necesario mentir en tu currículum,
          seguramente cuentas con un gran historial del que puedes valerte y
          solo debes elegir las palabras correctas para tener un buen
          currículum.
        </p>
      </div>
    </div>
  );
}

export default Guide;
