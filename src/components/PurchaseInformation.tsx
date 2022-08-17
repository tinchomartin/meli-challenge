import React from "react";
import {Stack, Image, Text, ListItem, UnorderedList} from "@chakra-ui/react";

export const PurchaseInformation = () => {
  return (
    <Stack
      borderColor="gray.300"
      borderRadius="md"
      borderWidth={1}
      flex="1"
      margin={["16px 18px 0 48px !important"]}
      spacing={4}
    >
      <Stack borderBottomColor="gray.300" borderBottomWidth={1}>
        <Stack padding="24px 32px 24px 16px">
          <Stack direction="row">
            <Text fontSize="lg" fontWeight="normal">
              Devolución gratis
            </Text>
          </Stack>

          <Stack direction="row">
            <Text color="blackAlpha.700" fontSize="sm" fontWeight="normal">
              Tenés 30 días desde que recibís el producto para devolverlo. ¡No importa el motivo!
            </Text>
          </Stack>
          <Text
            _hover={{color: "secondary.700"}}
            as="span"
            color="secondary.500"
            cursor="pointer"
            fontSize="sm"
          >
            Conocer más sobre devoluciones
          </Text>
        </Stack>
      </Stack>

      <Stack borderBottomColor="gray.300" borderBottomWidth={1}>
        <Stack padding="24px 32px 24px 16px">
          <Text fontSize="lg" fontWeight="normal">
            Garantía
          </Text>
          <Stack marginTop="20px !important">
            <Text>Compra Protegida con Mercado Pago</Text>
            <Text color="blackAlpha.700" fontSize="sm" fontWeight="normal">
              Recibí el producto que esperabas o te devolvemos tu dinero
            </Text>
          </Stack>

          <Stack>
            <Stack marginTop="20px !important">
              <Text>Garantía del vendedor</Text>
              <Text color="blackAlpha.700" fontSize="sm" fontWeight="normal">
                Sin garantía
              </Text>
              <Text
                _hover={{color: "secondary.700"}}
                as="span"
                color="secondary.500"
                cursor="pointer"
                fontSize="sm"
              >
                Conocer más sobre garantía
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack padding="24px 32px 24px 16px">
        <Text fontSize="lg" fontWeight="normal">
          Medios de pago
        </Text>
        <Stack marginTop="20px !important">
          <Text>Hasta 12 cuotas sin tarjeta</Text>

          <Image
            h="32px"
            src="https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg"
            w="73px"
          />
          <Text>Tarjetas de crédito</Text>
          <Text color="blackAlpha.700" fontSize="sm" fontWeight="normal">
            ¡Cuotas sin interés con bancos seleccionados!
          </Text>
          <UnorderedList
            display="flex"
            justifyContent="space-between"
            listStyleType="none"
            marginBottom="20px !important"
            paddingRight="43px"
          >
            <ListItem>
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" />
            </ListItem>
            <ListItem>
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg" />
            </ListItem>
            <ListItem>
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg" />
            </ListItem>
            <ListItem>
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" />
            </ListItem>
          </UnorderedList>

          <Text>Tarjetas de débito</Text>

          <UnorderedList
            display="flex"
            justifyContent="space-between"
            listStyleType="none"
            paddingRight="13px"
          >
            <ListItem>
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg" />
            </ListItem>
            <ListItem>
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg" />
            </ListItem>
            <ListItem>
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg" />
            </ListItem>
            <ListItem>
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg" />
            </ListItem>
          </UnorderedList>

          <Text>Efectivo</Text>

          <UnorderedList display="flex" justifyContent="flex-start" listStyleType="none">
            <ListItem paddingRight="25px">
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg" />
            </ListItem>
            <ListItem>
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg" />
            </ListItem>
          </UnorderedList>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PurchaseInformation;
