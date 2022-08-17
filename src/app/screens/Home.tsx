import React from "react";
import {Text, Stack, Box, List, ListItem, UnorderedList, Container} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const HomeScreen: React.FC = () => {
  return (
    <Stack alignContent="center">
      <Box paddingY={4}>
        <Container maxW="container.xl">
          <Stack direction="row" justifyContent="space-between" marginBottom={2}>
            <List>
              <UnorderedList margin="0" styleType="none">
                <ListItem
                  _after={{content: `": "`}}
                  display="inline"
                  fontSize="sm"
                  fontWeight="500"
                >
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
            <Text> Juegos y Juguetes &gt; Peluches </Text>
          </Stack>
          <Stack direction="row">
            <Link to="/productId">Ver página de detalle de producto</Link>
          </Stack>
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
