import { Box, styled } from '@mui/material';


const Container = styled(Box)({
  height: 64,
  background: '#171f2c',
  color: 'white',
  fontSize: '20px',
  lineHeight: '64px',
  fontWeight: 'bold',
  paddingLeft: '110px',
})

const Navbar = () => {

  return <Container>
    Navbar
  </Container>
}
export default Navbar;
