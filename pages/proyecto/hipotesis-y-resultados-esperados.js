import React from 'react';
import AppLayout from '/components/AppLayout/AppLayout'

export default class extends React.Component {
    render(){
        return(
            <AppLayout>
                <h1>Hipótesis</h1>
                <p>
                Un cambio en el método de enseñanza puede hacer una gran diferencia en el desempeño y motivación de los alumnos, además de apoyar en el desarrollo de habilidades “suaves”, aquellas que son transversales y de utilidad en todas las áreas de conocimiento y profesionales; como el liderazgo, la cooperación, la responsabilidad y adaptabilidad.
                </p>
                <h1>Resultados Esperados</h1>
                <p>
                Poco a poco, esperamos que los alumnos se vean más motivados y comprometidos con el aprendizaje y que este experimento impacte de manera positiva sus vidas, y mejore su desempeño académico. Los alumnos re-encontrarán su pasión por el aprendizaje, (algo que la escuela les suele quitar) y aprenderán a investigar cosas por su cuenta, algo que les servirá para todo en la vida. Además de esto, creemos que los alumnos desarrollarán 
                <a href='https://en.wikipedia.org/wiki/Soft_skills'> <u>"habilidades suaves"</u></a>
                , habilidades que son útiles independientemente de la disciplina a la que se apliquen.
                </p>
                <p>
                Por el lado de los profesores, su motivación será la que mueva a los estudiantes a estar más motivados, y al ver que ellos toman más gusto por el aprendizaje los profesores se verán positivamente afectados, creando así un ciclo. Los buenos resultados dependerán de la disposición del profesor, por lo que nos involucraremos de una manera cercana con ellos.
                </p>
                <p>
                Al finalizar el experimento, se realizarán entrevistas a los alumnos que el profesor haya visto que han sido impactados de mayor manera, y se analizará de manera profunda como cambió (para bien o para mal) el comportamiento y las calificaciones del alumno. Se les pedirá también dar retroalimentación sobre el experimento, y si les gustaría que todas sus clases se impartieran de manera similar.
                </p>
                <p>
                Aunado a esto, se tomará en cuenta la opinión del profesor analizando los comportamientos que vio en sus diferentes grupos, y si ha notado cambios significativos, tanto en forma académica como social y personal.
                </p>
            </AppLayout>
        )
    }
}