import { Container } from './styles';

// eslint-disable-next-line react/prop-types
export function ButtonText({ title, isactive, ...rest }) {
  return (
    <Container
      type="button"
      isactive={isactive}
      {...rest}
    >
      {title}
    </Container>
  )
}