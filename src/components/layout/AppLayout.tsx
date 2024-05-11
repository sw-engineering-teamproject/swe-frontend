import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

const AppLayout = (props: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Box sx={{
        width:'100%',
        height: '100vh',
        bgcolor: 'white',
        }}>
        <Box sx={{width: '100%', height: '5rem'}}>
        </Box>
        {props.children}
      </Box>
    </Box>
  );
};

export default AppLayout;