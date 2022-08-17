import { FC, createElement } from 'react';
import { MiniApp } from './redux/apps';
import { Button } from '@mui/material';


interface MiniAppButtonProps {
  app: MiniApp;
}

const MiniAppButton: FC<MiniAppButtonProps> = ({ app }) => {

  return <Button color='secondary'>
    <div>
      {createElement(app.logo, {})}
      Angular
    </div>
  </Button>
}

export default MiniAppButton
