# Desarrollo de prueba

# Contenido
- - -
1. [Instrucciones de configuración.](#instrucciones-de-configuración)
1. [Elecciones de diseño.](#elecciones-de-diseño)
1. [Comentarios de código.](#comentarios-de-código)
1. [Capturas de pantalla](#capturas-de-pantalla)
- - -

# Instrucciones de configuración

## Pre-requisitos
- [NodeJS](https://nodejs.org/en)


## Pasos
Para inicializar el proyecto se debe:
1. Copiar este repositorio a su computadora local.
1. Estando en la dirección raíz del proyecto ejecutar el comando
```bash
npm install
```
1. Una vez se hayan instalado todos los paquetes ejecutar el comando
```
npm run dev
```
1. Abrir en un navegador la dirección que arroja la consola


# Elecciones de diseño
Basandose en aproximaciones de qué es lo que un usuario quiere ver al momento de abrir la aplicación web se escogieron los datos a mostrar de manera prioritaria.

La aplicación de basa principalmente del blanco, apoyandose con el color azul ([#228BE6](https://g.co/kgs/cx9M5Dp)) como color primario así como tambien una tonalidad del mismo ([#E8F3FD](https://g.co/kgs/KNPmGbz)).


# Comentarios de código
Existen ciertas partes de la aplicación en la cual se utilizaron herramientas para el desarrollo de esta, tales como:

## Decodificación de parámetros de búsqueda
Al momento de obtener el parámetro de búsqueda con caracteres especiales este se quedaba de esa manera, es por eso que se necesitaba decodificar dicho valor para poder utilizarlo localmente.
De no ser así terminaríamos con `Anuncio%201` en vez de `Anuncio 1`, por ejemplo.
```
const parsedName = decodeURI(name);
```

## Filtrado de datos del lado del cliente
Debido a que se utilizaron los archivos JSON proporcionados se realizó un filtrado del lado del cliente, es por eso que al momento de buscar un registro en especial se ejecutó este código.
```tsx
let parsedData: GoogleAd[] = [];

if( Boolean(query) ){
  parsedData = googleAdsData.campañas.filter( // Filtra los datos
    (ad) => ad.nombre.toLocaleLowerCase().includes(query!.toLowerCase()) // En donde su nombre incluya el query dado
  );
} else {
  parsedData = googleAdsData.campañas;
}

const rows = parsedData.map( (item, index) => (
  <TableRow
    key={`google-ad-table-row-${item.nombre}-${index}`}
    {...item}
  />
) );
```



# Capturas de pantalla
![imagen](https://github.com/user-attachments/assets/83f205f4-541d-472c-a64a-98b31f60ad65)
![imagen](https://github.com/user-attachments/assets/ea013ab4-12e9-4dd1-87a7-fe0df0ab308d)
![imagen](https://github.com/user-attachments/assets/bbbdf38d-8d61-497e-b97c-d77fe5efc479)
![imagen](https://github.com/user-attachments/assets/3b07fa42-f8c6-4b67-800b-c8a8cabe541d)
![imagen](https://github.com/user-attachments/assets/bdcb4ffe-31c3-4e90-b6e3-9cee300a05c0)
![imagen](https://github.com/user-attachments/assets/eca19972-5bec-46fa-8fd5-20dfac80d644)
![imagen](https://github.com/user-attachments/assets/f3529f60-57c6-4d98-a24f-906a9e773dff)
![imagen](https://github.com/user-attachments/assets/3511f00e-c600-458e-8ca1-bbec258d2911)
