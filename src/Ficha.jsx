import img from "./alumno.jpg";

export function Ficha(props) {
  return (
    <div className="wrapper">
      <img src={img} alt="imagen" />
      <div className="info">
        <h2>Nombre</h2>
        <span>{props.nombre}</span>
        <h2>Descripción</h2>
        <span>{props.direccion}</span>
        <h2>Localidad</h2>
        <span>{props.localidad}</span>
        <h2>C.P</h2>
        <span>{props.cp}</span>
      </div>
    </div>
  );
}
