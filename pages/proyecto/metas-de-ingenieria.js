import React from 'react';
import AppLayout from '/components/AppLayout/AppLayout'

export default class extends React.Component {
    render(){
        return(
            <AppLayout>
                <h1>Metas De Ingeniería.</h1>
                <p>
                Para poder realizar con éxito nuestro experimento, contactaremos a dos escuelas que estén dispuestas a contribuir para la etapa de la experimentación, y , durante el verano, hablaremos con profesores para que estos nos ayuden a llevar a cabo el proyecto. Planearemos las clases que impartirán a sus alumnos durante un periodo de 1 mes a 2 semanas, y nos aseguraremos de que todo esté claro. 
                </p>
                <p>
                Una vez haya iniciado el ciclo escolar, supervisaremos el desarrollo de las clases, tanto con los grupos de control como con los experimentales. Al acabar el periodo de prueba, se colectarán los datos cualitativos sobre las pruebas realizadas por los alumnos y la velocidad del progreso de los grupos, además de reunir los datos cuantitativos a través de entrevistas y encuestas, tanto con los alumnos como con los profesores. 
                </p>
                <p>
                Al finalizar, se tomará toda la información relevante y se analizarán los resultados. Se buscarán relaciones y se llegará a una conclusión final.
                </p>
            </AppLayout>
        )
    }
}