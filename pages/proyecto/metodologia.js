import React from 'react';
import AppLayout from '/components/AppLayout/AppLayout'

export default class extends React.Component {
    render(){
        return(
            <AppLayout>
                <h1>Metodología</h1>
                <p>
                El experimento será dividido en 4 procesos:
                </p>
                <p>
                Durante el verano antes del ciclo escolar Agosto 2018 - Julio 2019, se buscarán profesores que estén dispuestos a ayudarnos con nuestra idea y se hablará personalmente con ellos para desarrollar sus clases de manera diferente, basados en las metodologías educativas de gamificación, autodidactismo, y aprendizaje basado en retos. Los profesores tendrán dos grupos, uno de control y otro con el cual pondrán a prueba las dinámicas. Este último tendrá una combinación de las tres metodologías.
                </p>
                <p>
                La segunda parte será la experimentación que durará aproximadamente un mes, durante la cual el profesor pondrá en práctica los nuevos métodos de enseñanza en sus grupos. También en esta parte se documentará cualquier cambio que el profesor considere importante, y nos aseguraremos de mantener una comunicación directa con ellos para que las cosas no se salgan de control.
                </p>
                <p>
                La tercera fase será la de recolectar y almacenar resultados tanto de los alumnos como de los profesores. A través de encuestas y entrevistas, se recopilarán los datos cualitativos, y los cuantitativos se recuperarán de quizzes. Este proceso debería durar aproximadamente una semana.
                </p>
                <p>
                Finalmente, se analizarán los datos proporcionados durante la tercera fase, lo que nos permitirá generar la síntesis final del proyecto. Se buscará ser lo más objetivos posibles durante esta etapa, pues al estar trabajando con ciencias sociales se dificulta más esa parte del trabajo.
                </p>
            </AppLayout>
        )
    }
}