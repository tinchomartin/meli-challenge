import React from "react";
import {Container, Stack, Box, Image, Input, Icon, StackDivider, Text} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {FiPrinter} from "react-icons/fi";
import {GoLocation} from "react-icons/go";
import {IoCartOutline} from "react-icons/io5";

import Logo from "../assets/logo.png";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack>
      <Box backgroundColor="primary.500" boxShadow="sm" paddingY={1}>
        <Container maxW="container.xl">
          <Stack spacing={3}>
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
                  <Input
                    _placeholder={{opacity: "0.5"}}
                    paddingX={2}
                    placeholder="Buscar productos, marcas y mas..."
                    variant="unstyled"
                  />
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
            <Stack alignItems="baseline" direction="row" justifyContent="space-between">
              <Stack alignItems="baseline" direction="row" spacing={12}>
                <Stack alignItems="center" direction="row" spacing={1}>
                  <Icon as={GoLocation} height={6} width={6} />
                  <Stack spacing={0}>
                    <Text color="blackAlpha.500" fontSize="xs" lineHeight="normal">
                      Enviar a
                    </Text>
                    <Text fontSize="sm" lineHeight="normal">
                      Buenos Aires 1639
                    </Text>
                  </Stack>
                </Stack>
                <Stack color="blackAlpha.700" direction="row" fontSize="sm" spacing={5}>
                  <Text>Categorías</Text>
                  <Text>Ofertas</Text>
                  <Text>Historial</Text>
                  <Text>Supermercado</Text>
                  <Text>Moda</Text>
                  <Text>Vender</Text>
                  <Text>Ayuda</Text>
                </Stack>
              </Stack>
              <Stack direction="row" fontSize="sm" lineSpacing={6}>
                <Text>Creá tu cuenta</Text>
                <Text>Ingresá</Text>
                <Text>Mis compras</Text>
                <Icon as={IoCartOutline} height={6} width={6} />
              </Stack>
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
