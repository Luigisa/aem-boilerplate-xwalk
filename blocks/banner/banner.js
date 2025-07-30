
export default function decorate(block) {
  console.log('banner', block);

  // Obtener las filas del contenido del banner
  const rows = [...block.children];

  console.log('rows', rows);

}
