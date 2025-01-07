/* eslint-disable react/prop-types */
function SayHello(props) {
  //props è sempre un oggetto che
  //contiene tutte le prop ricevute da questo componente
  return (
    <>
      <h2>Componente di benvenuto.</h2>
      <h4>Diamo il benvenuto a {props.personName}</h4>
    </>
  );
}

export default SayHello;
