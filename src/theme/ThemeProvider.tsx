
import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;