import { Box, styled } from '@mui/material';
import { useEffect, useRef, useState } from 'react';


declare global {
  interface Window {
    Apps: Record<string, any>;
  }
}

const Container = styled(Box)({})

const MiniAppLoader = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [ loading, setLoading ] = useState(true);
  const appId = 'hybrid-angular';

  useEffect(() => {
    const interval = setInterval(() => {
      debugger;
      if (window.Apps?.[appId] || window.Apps?.[0]) {
        clearInterval(interval);
        setLoading(false);
        const app = window.Apps?.[appId] || window.Apps?.[0];
        app.mount(elementRef.current);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [])

  return <Container>
    <div ref={elementRef}/>
    {loading && <div>Loading Application...</div>}
  </Container>
}

export default MiniAppLoader;
