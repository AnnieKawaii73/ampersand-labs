import React from 'react';
import AppLayout from '/components/AppLayout/AppLayout'

export default class extends React.Component {
    render(){
        return(
            <AppLayout>
                <h1>Preguntas De Investigación.</h1>
                <p>
                Durante la realización de este experimento, tendremos las siguientes preguntas en mente, que nos llevarán a hacer un análisis más completo:
                </p>
                <p>
- ¿Qué cambios habrá en el desempeño académico de cada alumno?
<br/>
- ¿Cuál grupo o perfil de alumno (ej. de bajo desempeño, alto desempeño) se verá más afectado?
<br/>
- ¿Qué cambios habrá en la motivación de los alumnos?
<br/>
- ¿Cuáles dinámicas de grupo se verán afectadas y de qué manera?
<br/>
- ¿Los alumnos percibirán de manera diferente a su profesor?
<br/>
- ¿Qué tan más involucrados se volverán los alumnos en actividades extracurriculares?
<br/>
- ¿Será alguno de los métodos considerablemente más efectivo? ¿Cuál?
                </p>
            </AppLayout>
        )
    }
}