# CORRECIONES RECUPERATORIO

![Captura1](/src/assets/basededatos.png)

# Descripción general del proyecto

Consiste en el desarrollo de una aplicación web construida con React JS, es una página de productos basada en un empredimiento personal de impresiones 3D usando Firebase y AuthContext. Su objetivo principal es integrar autenticación de usuarios, enlaces de paginas y gestión de datos, aplicando los conceptos vistos a lo largo de la cursada.
Se dividé en dos JSX principales, el "Login" donde el usuario debe logearse exitosamente mediante Firebase Authentication con correo electronico y contraseña preestablecida para acceder a un Dashboard protegido; el Home. 
En esta ultimo, es donde se presenta ante el usuario una lista de productos con su nombre, precios y botón para comprar.
Ambas cuentan con el logo del local.



# CUENTAS CON ACCESO A LA PAGINA

1. prueba@gmail.com / contraseña: 123456
2. juan@gmail.com /contraseña: juan123
3. andrea@gmail.com / contraseña: andrea21
4. norma@gmail.com / contraseña: norma1234


# Tecnologías utilizadas
React JS + Vite.
Firebase Authentication.
Firebase Firestore.
AuthContext.
CSS nativo para estilos (Flexbox/Grid)

En Firebase Authentification se creó una lista de usuarios para el acceso a la pagina, en caso no ingresar tales mails se negará su acceso. En caso contrario, se accederá exitosamente al Home.


# Instrucciones para instalar y ejecutar el proyecto en entorno local

1. CLONAR EL REPOSITORIO: git clone https://github.com/trabajo-final
2. INGRESAR A LA CARPETA DEL PROYECTO: cd trabajo-final
3. INSTALAR DEPENDENCIAS: npm install
4. Crear un archivo .env en la raíz del proyecto y agregar las variables de entorno necesarias para Firebase:
5. EJECUTAR LA APLICACION: npm run dev


# Breve explicación de la estructura del proyecto

La aplicación se organiza de la siguiente manera, principalmente cuenta con un "src/" donde se guardó los "assets" (imagenes), los "coomponentes" (paginas  pincipales, Login, Productos y Home), un "conttext" (AuthContext), por separado el "firebase" (configuracion de firebase) y en archivos sueltos el css nativo y demas archivos de React.

MANEJO DEL AUTHCONTEXT
Almacena el estado del usuario autenticado
Proporciona funciones de login, registro y logout.
El Dashboard solo es accesible si el usuario se encuentra autenticado.

# Consideraciones generales sobre el desarrollo
Este proyecto prioriza la correcta aplicacion de los conceptos vistos en clases.
Dificultades encontradas y soluciones:
Manejo de sesión persistente: se resolvió utilizando el listener de Firebase Auth dentro del AuthContext.
Gestión de credenciales: se solucionó mediante el uso de .env y .gitignore.

# recursos y bibliografia
1. https://www.youtube.com/watch?v=PT5Tr5V6UU4&t=1s
2. CLASES UTN
3. https://www.youtube.com/watch?v=S00QW-h7prw&t=342s
4. M3 U3 React avanzado – Context API.pptx
5. https://www.shecodes.io/athena/42133-how-to-list-products-in-javascript
6. https://www.w3schools.com/howto/howto_css_login_form.asp

