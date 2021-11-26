import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
  return (
    <div>
      <Titulo
        principal="Pagina de Cadastro"
        secundario="Incluir, Alterar e Excluir coisas"
      />
      <Titulo
        principal="Pagina de login"
        secundario="Inform o seu email e senha"
        pequeno
      />
    </div>
  )
}