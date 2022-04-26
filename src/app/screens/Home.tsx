import React from "react";
import {Link, Text, Stack, Box, List, ListItem, UnorderedList, Container} from "@chakra-ui/react";

import mock from "./../../product/mock";

const HomeScreen: React.FC = () => {

  return (
    <Stack >
      <Box backgroundColor="gray.200">
        <Container maxW="container.xl">
      <Stack direction="row" flex="1">
        <List>
          <UnorderedList  styleType="none" margin="0">
            <ListItem _after={{content: `": "`}} display="inline" fontSize="sm" fontWeight="500">
              También puede interesarte
            </ListItem>
            <ListItem display="inline" fontSize="sm">
              peluches gigantes
            </ListItem>
            <ListItem _before={{content: `" - "`}} display="inline" fontSize="sm">
              unicornio
            </ListItem>
            <ListItem _before={{content: `" - "`}} display="inline" fontSize="sm">
              Disney
            </ListItem>
            <ListItem _before={{content: `" - "`}} display="inline" fontSize="sm">
              peluche
            </ListItem>
          </UnorderedList>
        </List>
      </Stack>

      <Stack direction="row" fontSize="sm">
        <Text>Volver al listado</Text>
        <Text> Juegos y Juguetes > Peluches </Text>
      </Stack>
      <Stack direction="row"><Link href="/productId">Ver página de detalle de producto</Link></Stack>
      </Container>
    </Box>
    </Stack>
  );
};

export default HomeScreen;

// <div>
//   <Text>{`<HomeScreen />`}</Text>
//   <br />
//   <Link href="/productId">Ver página de detalle de producto</Link>
// </div>
