export default function Estilo(props) {
  return (
    <div>
      <h1 style={{
        backgroundColor: props.numero >= 0 ? "#2D2" : "#D22",
        color: "#fff",
      }}>
        Testo
      </h1>
    </div>
  )
}