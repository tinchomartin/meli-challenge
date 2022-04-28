import {Box, Stack, Container, Image, Text, StackDivider, Heading, Icon} from "@chakra-ui/react";
import React, {useState} from "react";
import {FiHeart} from "react-icons/fi";

import {Product} from "../types";
import mock from "../mock";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  const [fullImg, setFullImg] = React.useState<string>("");
  const [favColor, setFavColor] = React.useState<string>("transparent");

  const handleMouseOver = (e) => {
    setFullImg(e.target.src);
  };

  return (
    <Box backgroundColor="white" marginTop={0} maxW="container.xl" padding={4}>
      <Stack direction="row">
        <Stack direction="row" spacing={12}>
          <Stack>
            {product.pictures &&
              product.pictures.map((img) => {
                return (
                  <Stack
                    key={img.id}
                    _hover={{borderColor: "secondary.400", cursor: "pointer"}}
                    borderColor="gray.300"
                    borderRadius="md"
                    borderWidth="2px"
                    height="44px"
                    width="44px"
                  >
                    <Image
                      height="100%"
                      objectFit="contain"
                      padding={1}
                      src={img.secure_url}
                      width="100%"
                      onMouseOver={handleMouseOver}
                    />
                  </Stack>
                );
              })}
          </Stack>
          <Box height="auto" width="410px">
            <Image
              height="auto"
              objectFit="contain"
              src={fullImg ? fullImg : product.pictures[0].secure_url}
              width="100%"
            />
          </Box>
        </Stack>

        <Stack borderColor="gray.300" borderRadius="md" borderWidth={1} padding={4}>
          <Stack color="blackAlpha.600" direction="row" divider={<StackDivider />}>
            <Text fontSize="sm">{product.condition}</Text>

            <Text fontSize="sm">{product.sold_quantity} vendidos</Text>
          </Stack>
          <Stack direction="row">
            <Heading as="h1" size="md">
              {product.title}
            </Heading>

            <Icon
              as={FiHeart}
              color="secondary.400"
              cursor="pointer"
              fill={favColor}
              fontSize={25}
              onClick={() =>
                favColor === "transparent"
                  ? setFavColor("secondary.400")
                  : setFavColor("transparent")
              }
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DetailsScreen;
