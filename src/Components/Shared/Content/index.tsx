import Box from "@mui/material/Box";
import ExtraSpaceDiv from "./index.styles";

export declare interface ContentProps {
  children?: React.ReactNode;
}

const Content = (props: ContentProps) => {

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <ExtraSpaceDiv/>
        {props.children}
      </Box>
  );
}

export default Content; 