import styled from 'styled-components'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const VagaContainer = styled.li`
  list-style: none;
  margin: 16px 0;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`

const VagaTitulo = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: #333;
`

const VagaLink = styled.a`
  display: inline-block;
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`

const Vaga = (props: Props) => (
  <VagaContainer>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaLink>Ver detalhes e candidatar-se</VagaLink>
  </VagaContainer>
)

export default Vaga
