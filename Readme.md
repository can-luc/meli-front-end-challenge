
# Mercadolibre Frontend Challenge.

Proyecto creado con ViteJS ⚡




## Stack de tecnologias

**Client:** Typescript, React, Redux, reduxjs/toolkit, styled-components, Axios, Cypress



## Iniciar localmente

Clonar el proyecto

```bash
  git clone https://github.com/can-luc/meli-front-end-challenge.git
```

Ir al directorio del proyecto

```bash
  cd meli-front-end-challenge
```

Instalar dependencias

```bash
  yarn install
```

Iniciar proyecto en modo desarrollo

```bash
  yarn dev
```

## Componentes

Los principales componentes son 3: ```Navbar```, ```ProductList``` y ```ProductDetails```.

- ```Navbar```: Componente que muestra una barra de busqueda donde el usuario ingresara el producto que quiera buscar,
al hacer click en el boton de busqueda se genera un proceso que tiene varios pasos 

1-paso se utiliza :
hook personalizado ```useFetchAndLoad``` este hook a travez del contrato armado que tiene retorna 3 parametros,
para ser utilizados en el front-end :
```loading```: booleano que cambia segun el estado de la peticion hasta su finalizacion es de utilidad para que el usuario sepa que se esta realizando la peticion con un loader.

```callEndpoint``` respuesta de la llamada a la api.

```errors``` en caso de errores , se indica al usuario que sucedio un error, sin mostrar el error enconcreto indicando este mensaje "Hubo un error, reintenta la busqueda", al tener el error capturado se podria guardar en el store y realizar acciones apartir de la falla como por ejemplo enviar un email a soporte indicando el error. 

2-paso una vez que la request es satisfactoria la respuesta es enviada para ser trabajada,
a travez de la carpeta adapters,como no queremos ensuciar los componentes con informacion que no necesitamos , con los adapters limpiamos la informacion indicando los parametros que esperamos y de la forma que los esperamos indicando un model a ser utilizado por ejemplo.

3-Se dispara la accion al reducer y se almacena en el estado los productos filtrados para ser mostrados en la ui.

- ```ProductList```: Componente que muestra una lista de productos, este componente se renderiza una vez se dispara la accion en el componente ```Navbar```, si hacemos click en algun item de la lista se disparara una accion al redux para hacer una peticion utilizando el hook personalizado useFetchAndLoad donde se filtrara por ID y esto nos llevara al componente ```ProductDetails```

- ```ProductDetails```: Componente que renderiza un producto en especifico con su descripcion sobre el producto, precio, imagen, etc.

## Adapters
En la carpeta ```adapters``` nos encontramos con los modelos que indicamos para retorna al componente solo la informacion que esta esperando

## Common

En la carpeta ```common``` nos encontramos componentes y utilidades que se compartiran y reutilizaran entre varios componentes:

- ```components```: En components nos encontramos con 3 componentes que seran compartidos como por ejemplo ```BreadCrumb```, ```Loading``` y ```NotResultsFound```.

    - ```BreadCrumb```: Componente que muestra el path-from-root, camino del usuario desde la pagina principal hasta el producto seleccionado.

    - ```Loading```: Componente que se utiliza para el fallback que se realiza utilizando React Lazy para las rutas dinamicas.

    - ```NotResultsFound```: Componente que se renderiza si es que hay un fallo en la busqueda del producto.

- ```utils```: En Utils nos encontramos actualmente con una funcion llamada ```loadAbort```.
    
    - ```loadAbort```: Funcion que inicializa un nuevo AbortController
    Con él, podemos abortar una o más solicitudes de búsqueda. Para hacer esto, necesitamos crear una instancia de AbortController y usarla al realizar la solicitud de recuperación.


## Estilos

Para los estilos se utilizo styled-components, Una de las ventajas más importantes de Styled Components es que automáticamente añade los prefijos de buscadores. Solo tenes que preocuparte por escribir CSS y ellos se preocupan porque funcione en la mayoría de los buscadores más utilizados.




## Model

En la carpeta ```Model``` estaran los modelos sobre la data de los productos y sobre un producto en especifico,
ademas del model de axios para utilizar AbortController

## Tests

Para correr los tests con cypress, debes usar este comando

```bash
  yarn cypress:open
```

## Autor

- [@LucasCaniella](https://github.com/can-luc)
