import React from "react";
import {Stack, Text, Icon} from "@chakra-ui/react";
import {GoLocation} from "react-icons/go";
const SellerInformation = () => {
  return (
    <Stack
      borderColor="gray.300"
      borderRadius="md"
      borderWidth={1}
      flex="1"
      margin={["16px 18px 0 48px !important"]}
      padding="24px 32px 24px 16px"
    >
      <Text fontSize="lg" fontWeight="normal">
        Información sobre el vendedor
      </Text>

      <Stack direction="row">
        <Stack>
          <Icon as={GoLocation} />
        </Stack>
        <Stack>
          <Stack direction="row">
            <Stack fontWeight="normal">
              <Text color="blackAlpha.800">Ubicación </Text>

              <Text color="blackAlpha.700" fontSize="sm">
                Villa Pueyrredón, Capital Federal
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SellerInformation;
