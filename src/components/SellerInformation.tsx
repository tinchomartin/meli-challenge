import React, {CSSProperties} from "react";
import {Stack, Text, Icon, UnorderedList, ListItem} from "@chakra-ui/react";
import {GoLocation} from "react-icons/go";
import {IoMedalOutline} from "react-icons/io5";
const SellerInformation = () => {
  const ListProps: CSS.Properties = {
    borderLeft: "6px white solid",
    height: "8px",
    width: "20%",
  };

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
          <Icon as={GoLocation} lineHeight="21.6px" />
        </Stack>
        <Stack>
          <Stack direction="row">
            <Stack fontWeight="normal" spacing={1}>
              <Text color="blackAlpha.800" fontWeight="normal" lineHeight="21.6px">
                Ubicación{" "}
              </Text>

              <Text color="blackAlpha.700" fontSize="sm" fontWeight="light">
                Villa Pueyrredón, Capital Federal
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack direction="row" marginBottom="20px !important">
        <Stack>
          <Icon as={IoMedalOutline} color="#00a650" lineHeight="21.6px" />
        </Stack>
        <Stack>
          <Stack direction="row">
            <Stack spacing={1}>
              <Text color="#00a650" fontSize="md" fontWeight="normal" lineHeight="21.6px">
                MercadoLíder Platinum
              </Text>

              <Text color="blackAlpha.700" fontSize="sm" fontWeight="light">
                ¡Es uno de los mejores del sitio!
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <UnorderedList alignItems="center" display="flex" styleType="none">
        <ListItem backgroundColor="#fff0f0" style={ListProps} />
        <ListItem backgroundColor="#fff5e8" style={ListProps} />
        <ListItem backgroundColor="#fffcda" style={ListProps} />
        <ListItem backgroundColor="#fffcda" style={ListProps} />
        <ListItem backgroundColor="#39b54a" height="12px !important" style={ListProps} />
      </UnorderedList>
    </Stack>
  );
};

export default SellerInformation;
