import React from 'react';
import AppLayout from '/components/AppLayout/AppLayout'

export default class extends React.Component {
    render(){
        return(
            <AppLayout>
                <h1>Proyecto.</h1>
                <p>
                Nuestra propuesta para la Feria Nacional de Ciencias e Ingenierías es experimentar con el sistema de educación. Hoy día, es una idea muy popular el decir que "el sistema educativo está roto", y es cierto. Para ello, nuestro proyecto consiste en experimentar con diferentes métodos educativos (gamificación, auto-didactismo y aprendizaje basado en retos) a nivel secundaria, en dos escuelas diferentes. 
                </p>
                <p>
                El propósito de este experimento es ver si se puede mejorar aunque sea un poco nuestro sistema educativo actual sin tener que usar muchos recursos. Todos los métodos aquí planteados se pueden implementar en el salón de clases sin requerir muchos recursos, solo la disposición del maestro.
                </p>
                <p>
                Nuestra hipótesis es que un cambio en el método de enseñanza puede hacer una gran diferencia en el desempeño y motivación de los alumnos, además de apoyar en el desarrollo de "habilidades suaves”, aquellas que son transversales y de utilidad en todas las áreas de conocimiento y profesionales; como el liderazgo, la cooperación, la responsabilidad y adaptabilidad.
                </p>
            </AppLayout>
        )
    }
}