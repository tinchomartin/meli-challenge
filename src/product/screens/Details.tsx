import {Box, Stack, Image, StackDivider} from "@chakra-ui/react";
import React, {useState} from "react";

import {Product} from "../types";
import mock from "../mock";
import ProductDetails from "../../components/ProductDetails";
import SellerPublications from "../../components/SellerPublications";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  const [fullImg, setFullImg] = React.useState<string>("");

  const handleMouseOver = (e: React.MouseEvent<HTMLImageElement>) => {
    const {src} = e.target as HTMLImageElement;

    setFullImg(src);
  };

  return (
    <Stack background="white" borderRadius="md" direction="row">
      {/* maxW="container.xl" */}
      <Stack padding={4}>
        <Stack divider={<StackDivider borderColor="gray.300" marginLeft="30px !important" />}>
          <Stack direction="row">
            <Stack direction="row">
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
              <Box
                display="flex"
                height="auto"
                margin={["24px 0 0 0 !important"]}
                padding="16px"
                width="700px"
              >
                <Image
                  height="auto"
                  maxH="468px"
                  objectFit="contain"
                  src={fullImg ? fullImg : product.pictures[0].secure_url}
                  width="100%"
                />
              </Box>
            </Stack>
          </Stack>

          <SellerPublications publications={product.sellerRecomendations} />
        </Stack>
      </Stack>
      <Stack>
        <ProductDetails product={product} />
      </Stack>
    </Stack>
  );
};

export default DetailsScreen;
