import { FormEvent, useState } from 'react'
import styled from 'styled-components'

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
      <Overlay />
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
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--cor-principal);
  content: '';
  opacity: 0.7;
`

const HeroContent = styled.div`
  position: relative;
  color: #eee;
  text-align: center;
`

const HeroTitle = styled.h1`
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const StyledForm = styled.form.attrs({
  role: 'form'
})<React.FormHTMLAttributes<HTMLFormElement>>`
  display: flex;
  justify-content: center;
  gap: 8px;
`

const StyledInput = styled.input.attrs({
  type: 'search'
})<React.InputHTMLAttributes<HTMLInputElement>>`
  padding: 8px 16px;
  border: 1px solid var(--cor-principal);
  border-radius: 4px;
  outline-color: var(--cor-principal);
  font-size: 16px;
`

const StyledButton = styled.button.attrs({
  type: 'submit'
})<React.ButtonHTMLAttributes<HTMLButtonElement>>`
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
