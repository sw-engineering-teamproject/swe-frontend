import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import Header from "./Header";

const AppLayout = (props: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Box sx={{
        width:'100%',
        height: '100vh',
        bgcolor: 'white',
        }}>
        <Header/>
        {props.children}
      </Box>
    </Box>
  );
};

export default AppLayout;