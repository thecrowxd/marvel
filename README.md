# marvel

La aplicación está desplegada en:
<a href="http://marvel-tcw.s3-website.eu-west-3.amazonaws.com/">http://marvel-tcw.s3-website.eu-west-3.amazonaws.com/</a>

<h2>Instalación de la aplicación:</h2>

Descargar el repositorio

Instalar las dependencias con
<code>npm install</code>

Crear la build con 
<code>npm run build</code>

Levantar el servidor con
<code>serve -s build</code>

Acceder desde el navegador a
<code>http://localhost:3000/</code>

<h2>Estructura de directorios</h2>

<ul>
<li><b>components</b>: Se encuentran todos los componentes de las vistas con los que se compone la aplicación</li>
  <ul>
    <li><b>comic-card:</b> Cada una de las cards de los comics que se pintan en el detalle del héroe</li>
    <li><b>favorite-heart:</b> componente con la imagen del corazón y que al ser clickeado permite añadir o borrar de favoritos</li>
    <li><b>header:</b> Cabecera de la aplicación con el logo y el total de favoritos</li>
    <li><b>hero-biography:</b> En el detalle del heroe engloba la foto, nombre y descripción del heroe</li>
    <li><b>hero-card:</b> Cada una de las cards de los héroes que se pintan en el buscador</li>
    <li><b>hero-comics:</b> Wrapper con los comics del héroe</li>
    <li><b>hero-detail:</b> Wrapper del detalla del héroe. Engloba la biografía y los comics</li>
    <li><b>input-search:</b> Input para filtrar los héroes del listado</li>
    <li><b>total-results-search:</b> Cantidad total de héroes mostrados en el buscador</li>
  </ul>
<li><b>contexts</b>: Se encuentra el contexto para la gestión de los favoritos que persista la información en toda la aplicación</li>
<li><b>images</b>: Imagenes de la aplicación </li>
<li><b>utils</b>: Directorio con funciones independientes que se pueden llamar desde cualquier sitio</li>
<li><b>views</b>: Vistas de la página para Favoritos, Home y el detalle del heroe</li>
</ul>

<h2>API de marvel</h2>
Petición para los comics: <code>"http://gateway.marvel.com/v1/public/characters/(idHeroe)/comics"</code><br>
Petición para el detalle del héroe: <code>"http://gateway.marvel.com/v1/public/characters?id=(idHeroe)"</code><br>
Petición para el listado de héroes: <code>"http://gateway.marvel.com/v1/public/characters?limit=50"</code><br></br>

Todas las peticiones requieren estos parametros:<br>
<code>let params = {
			apikey: "04b766e96108765bef572f15145cc06b",
			hash: "410a0ab18e84084e95ca0f296a0bb51b",
			ts: 1709578881
		}</code>

  <b>apikey:</b> es la key pública<br>
  <b>ts:</b> es un timestamp <br>
  <b>hash:</b> es el md5 de (key pública + key privada + timestamp). <b>Ambas keys las ofrece marvel al registrarse</b><br>
