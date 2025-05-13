import { FormEvent, useState } from 'react'
import styled, { StyledComponent } from 'styled-components'

type Props = {
  aoPesquisar: (termo: string) => void
}

const Hero = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <StyledHero>
      <HeroContent>
        <HeroTitle>
          As melhores vagas para tecnologia, design e artes visuais.
        </HeroTitle>
        <StyledForm onSubmit={aoEnviarForm}>
          <StyledInput
            placeholder="Front-end, fullstack, node, design"
            onChange={(e) => setTermo(e.target.value)}
            type="search"
          />
          <StyledButton type="submit">Pesquisar</StyledButton>
        </StyledForm>
      </HeroContent>
    </StyledHero>
  )
}

const StyledHero = styled.section`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeroContent = styled.div`
  text-align: center;
  color: var(--cor-secundaria);
`

const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
`

const StyledForm: StyledComponent<string, any, {}, never> = styled.form`
  display: flex;
  justify-content: center;
  gap: 8px;
`

const StyledInput: StyledComponent<string, any, {}, never> = styled.input`
  padding: 8px 16px;
  border: 1px solid var(--cor-principal);
  border-radius: 4px;
  outline-color: var(--cor-principal);
  font-size: 16px;
`

const StyledButton = styled.button`
  background-color: var(--cor-principal);
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  color: var(--cor-secundaria);
  cursor: pointer;

  &:hover {
    background-color: var(--cor-principal-hover);
  }
`

export default Hero
