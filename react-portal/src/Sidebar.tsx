import { Box, styled } from '@mui/material';
import { useAppSelector } from './redux/hooks';
import { selectApps } from './redux/apps';
import MiniAppButton from './MiniAppButton';


const Container = styled(Box)({
  background: '#171f2c',
  color: '#aab4c3',
  height: 'calc(100vh - 64px)',
  width: 100,
  display: 'flex',
  flexDirection: 'column',
})

const Sidebar = () => {
  const {apps, loading} = useAppSelector(selectApps);
  return <Container>
    {!loading && apps.map(app => <MiniAppButton key={app.id} app={app}/>)}
  </Container>
}

export default Sidebar;
