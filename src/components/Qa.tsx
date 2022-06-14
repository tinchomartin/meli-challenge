import React from "react";
import {Stack, Text} from "@chakra-ui/react";

export const Qa = () => {
  return (
    <Stack>
      <Text as="h2" fontSize="2xl" fontWeight="normal">
        Preguntas y Respuestas
      </Text>

      <Text as="h3" fontSize="lg" fontWeight="semibold">
        ¿Qué querés saber?
      </Text>
    </Stack>
  );
};
