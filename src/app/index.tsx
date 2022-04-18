import React from "react";
import {Container, Stack, Box, Image, Input, Icon, StackDivider, Text} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {FiPrinter} from "react-icons/fi";

import Logo from "../assets/logo.png";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack>
      <Box backgroundColor="primary.500" boxShadow="sm" paddingY={4}>
        <Container maxW="container.xl" padding={0}>
          <Stack>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" flex={1} spacing={12}>
                <Image objectFit="contain" src={Logo} />
                <Stack
                  alignItems="center"
                  backgroundColor="white"
                  borderRadius="sm"
                  boxShadow="sm"
                  direction="row"
                  divider={<StackDivider />}
                  maxWidth={600}
                  padding={2}
                  width="100%"
                >
                  <Input paddingX={2} variant="unstyled" />
                  <Icon as={AiOutlineSearch} color="gray.500" h={5} w={5} />
                </Stack>
              </Stack>
              <Stack alignItems="center" color="blackAlpha.700" direction="row" spacing={2}>
                <Icon as={FiPrinter} h={9} w={9} />
                <Text fontSize="lg" fontWeight="500">
                  Compra tu Point y tu QR a $ 20
                </Text>
              </Stack>
            </Stack>
            <Stack direction="row">
              <Text>Envios a Buenos Aires</Text>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container alignSelf="center" maxW="container.xl" padding={0}>
        <Routes />
      </Container>
    </Stack>
  );
};

export default App;
