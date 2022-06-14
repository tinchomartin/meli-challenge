import React from "react";
import {Stack, Text} from "@chakra-ui/react";

export const ProductDescriptionHc = () => {
  return (
    <Stack marginTop="30px">
      <Text as="h2" fontSize="2xl" fontWeight="normal">
        Descripción
      </Text>
      <Text color="#666" fontSize="20px">
        PELUCHE IMPORTADO PERSONAJE STITCH <br />
        ***PRECIO POR UNIDAD*** <br />
        MEDIDA 35 CM <br />
        DISPONIBLE: STITCH (CELESTE) O ANGEL (ROSA) <br />
        MATERIAL: PLUSH MUY SUAVE, RELLENO DE VELLON SILICONADO <br />
        Realizamos envíos por motomensajeria y tambien por correo argentino a todo el país <br />
      </Text>
    </Stack>
  );
};
