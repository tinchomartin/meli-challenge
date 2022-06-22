import React from "react";
import {Stack, Text, UnorderedList, ListItem} from "@chakra-ui/react";

export const Qa = () => {
  return (
    <Stack>
      <Text as="h2" fontSize="2xl" fontWeight="normal">
        Preguntas y Respuestas
      </Text>

      <Text as="h3" fontSize="lg" fontWeight="semibold">
        ¿Qué querés saber?
      </Text>

      <Stack direction="row">
        <UnorderedList
          color="secondary.500"
          display="flex"
          flexWrap="wrap"
          fontSize="sm"
          fontWeight="semibold"
          listStyleType="none"
          m="0"
          textAlign="center"
          whiteSpace="nowrap"
        >
          <ListItem
            _hover={{background: "rgba(65,137,230,.2)"}}
            backgroundColor="rgba(65,137,230,.15)"
            borderRadius="5px"
            cursor="pointer"
            lineHeight="32px"
            marginRight="12px"
            marginTop="12px"
            padding="0 12px"
          >
            Costo y tiempo de envío
          </ListItem>
          <ListItem
            _hover={{background: "rgba(65,137,230,.2)"}}
            backgroundColor="rgba(65,137,230,.15)"
            borderRadius="5px"
            cursor="pointer"
            lineHeight="32px"
            marginRight="12px"
            marginTop="12px"
            padding="0 12px"
          >
            Devoluciones gratis
          </ListItem>
          <ListItem
            _hover={{background: "rgba(65,137,230,.2)"}}
            backgroundColor="rgba(65,137,230,.15)"
            borderRadius="5px"
            cursor="pointer"
            lineHeight="32px"
            marginRight="12px"
            marginTop="12px"
            padding="0 12px"
          >
            Medios de pago y promociones
          </ListItem>
          <ListItem
            _hover={{background: "rgba(65,137,230,.2)"}}
            backgroundColor="rgba(65,137,230,.15)"
            borderRadius="5px"
            cursor="pointer"
            lineHeight="32px"
            marginRight="12px"
            marginTop="12px"
            padding="0 12px"
          >
            Garantía
          </ListItem>
          <ListItem
            _hover={{background: "rgba(65,137,230,.2)"}}
            backgroundColor="rgba(65,137,230,.15)"
            borderRadius="5px"
            cursor="pointer"
            lineHeight="32px"
            marginRight="12px"
            marginTop="12px"
            padding="0 12px"
          >
            Cuotas sin tarjeta
          </ListItem>
        </UnorderedList>
      </Stack>
    </Stack>
  );
};
