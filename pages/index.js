import React from 'react';
import AppLayout from '/components/AppLayout/AppLayout'
import stylesheet from "styles/index.less";

class Home extends React.Component {
    render() {
        return(
            <AppLayout>
                <h1>Home.</h1>
                <p>
                Nuestra meta es mejorar la educación. Como estudiantes, nos llama la atención las muchas maneras en las que el sistema debe de mejorar, y no somos los únicos. Cada vez más personas se dan cuenta de que el sistema de educación está roto, no funciona. El problema es que aunque muchas personas lo saben, pocas actúan. La educación ha estado estancada en un mismo sitio desde hace más de 200 años y aunque es una parte fundamental de nuestra sociedad, nadie parece querer mejorarla. 
                </p>
                <p>
                ¿Cómo podemos esperar progresar como seres humanos si no podemos educar a nuestros hijos, nuestro futuro, bien?
                </p>
                <p>
                Podemos cambiar la educación de muchas maneras diferentes, pues hay muchos aspectos de ella que necesitan mejorar. Con este experimento buscamos probar que no se necesitan muchos recursos para tener un impacto positivo en los alumnos y los maestros. Los cambios que proponemos son todos relacionados con la manera en la que se ve el contenido de las clases. 
                </p>
            </AppLayout>
        ) 
    }
}

export default Home