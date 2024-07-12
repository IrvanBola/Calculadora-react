##Descripción del Proyecto
Esta es una calculadora básica desarrollada en React. Permite realizar operaciones matemáticas simples como suma, resta, multiplicación y división.

#Estructura del Proyecto
App.js
Este es el componente principal de la aplicación. Contiene la lógica y estructura de la calculadora.

Importaciones: Se importan los estilos, componentes personalizados (Boton, Pantalla, BotonClear), el hook useState de React y la función evaluate de mathjs para evaluar expresiones matemáticas.
Estado: Se utiliza el hook useState para manejar el estado de la entrada del usuario.
Funciones:
agregarInput: Agrega valores a la entrada.
calcularResultado: Evalúa la expresión matemática ingresada y muestra el resultado.
Renderizado: Define la estructura de la calculadora, incluyendo la pantalla, los botones numéricos y de operación, y el botón de "Clear".
Pantalla.js
Este componente muestra la entrada del usuario. Recibe el valor de la entrada como un prop y lo muestra en la pantalla de la calculadora.

BotonClear.js
Este componente representa el botón de "Clear". Al hacer clic, limpia la entrada actual de la calculadora. Recibe una función como prop para manejar el evento de clic.

Boton.js
Este componente representa los botones de la calculadora. Determina si un botón es un operador (como +, -, *, /) y aplica estilos específicos si lo es. Recibe una función como prop para manejar el evento de clic y el valor del botón.

index.js
Este es el punto de entrada de la aplicación. Renderiza el componente App en el elemento con id root en el HTML.

Estilos CSS
App.css: Define estilos para la aplicación principal, incluyendo el diseño general, colores y tipografía.
Boton.css: Estilos específicos para los botones de la calculadora.
Pantalla.css: Estilos específicos para la pantalla de la calculadora.
BotonClear.css: Estilos específicos para el botón de "Clear".

![image](https://github.com/user-attachments/assets/a5710e55-b747-4805-a023-f4d7e5dc9435)
