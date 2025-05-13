import styled from 'styled-components'

const Cabecalho = () => (
  <StyledHeader>
    <h1>EBAC Jobs</h1>
  </StyledHeader>
)

const StyledHeader = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;

  h1 {
    margin: 0;
  }
`

export default Cabecalho
