import React from "react";
import {Box, Button, useColorMode, useColorModeValue} from "@chakra-ui/react";

function BtnTheme() {
  const {toggleColorMode} = useColorMode();
  const bg = useColorModeValue("red.500", "red.200");
  const color = useColorModeValue("white", "gray.800");

  return (
    <Box>
      <Button bg={bg} onClick={toggleColorMode}>
        Toggle
      </Button>
    </Box>
  );
}

export default BtnTheme;
