import React from "react";
import {Stack, Text, StackDivider} from "@chakra-ui/react";

import {ProductDescriptionHc} from "./ProductDescriptionHc";
import {Qa} from "./Qa";

const ProductDescription = (props: any) => {
  const {description} = props;

  return (
    <Stack marginLeft="30px" spacing={20}>
      <Stack divider={<StackDivider borderColor="gray.300" />} marginTop="30px">
        <Stack marginBottom="30px">
          <Stack direction="row">
            <Text as="h2" fontSize="2xl" fontWeight="normal">
              Características principales
            </Text>
          </Stack>

          <Stack border="1px solid #ededed" borderRadius="5px" direction="row" spacing={0}>
            <Stack minW="190px" spacing={0}>
              <Stack>
                <Text
                  background="blackAlpha.200"
                  fontWeight="semibold"
                  padding="15px 24px 15px 15px"
                >
                  {description[3].name}
                </Text>
              </Stack>
              <Stack>
                <Text
                  background="blackAlpha.50"
                  fontWeight="semibold"
                  padding="15px 24px 15px 15px"
                >
                  {description[12].name}
                </Text>
              </Stack>

              <Stack>
                <Text
                  background="blackAlpha.200"
                  fontWeight="semibold"
                  padding="15px 24px 15px 15px"
                >
                  {description[5].name}
                </Text>
              </Stack>
              <Stack>
                <Text
                  background="blackAlpha.50"
                  fontWeight="semibold"
                  padding="15px 24px 15px 15px"
                >
                  {description[2].name}
                </Text>
              </Stack>
              <Stack>
                <Text
                  background="blackAlpha.200"
                  fontWeight="semibold"
                  padding="15px 24px 15px 15px"
                >
                  {description[4].name}
                </Text>
              </Stack>
              <Stack>
                <Text
                  background="blackAlpha.50"
                  fontWeight="semibold"
                  padding="15px 24px 15px 15px"
                >
                  {description[3].name}
                </Text>
              </Stack>
            </Stack>

            <Stack flex="1" spacing={0}>
              <Stack>
                <Text background="blackAlpha.50" padding="15px 15px 15px 24px">
                  {description[3].value_name}
                </Text>
              </Stack>
              <Stack>
                <Text background="white" padding="15px 15px 15px 24px">
                  {description[12].value_name}
                </Text>
              </Stack>
              <Stack>
                <Text background="blackAlpha.50" padding="15px 15px 15px 24px">
                  {description[3].value_name}
                </Text>
              </Stack>
              <Stack>
                <Text background="white" padding="15px 15px 15px 24px">
                  {description[5].value_name}
                </Text>
              </Stack>
              <Stack>
                <Text background="blackAlpha.50" padding="15px 15px 15px 24px">
                  {description[2].value_name}
                </Text>
              </Stack>
              <Stack>
                <Text background="white" padding="15px 15px 15px 24px">
                  {description[4].value_name}
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <ProductDescriptionHc />
      </Stack>

      <Qa />
    </Stack>
  );
};

export default ProductDescription;
