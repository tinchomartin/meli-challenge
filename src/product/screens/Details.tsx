import {
  Box,
  Stack,
  Select,
  Image,
  Text,
  StackDivider,
  Heading,
  Icon,
  UnorderedList,
  List,
  ListItem,
} from "@chakra-ui/react";
import React, {useState} from "react";
import {FiHeart} from "react-icons/fi";
import {AiFillStar} from "react-icons/ai";
import {FaShippingFast} from "react-icons/fa";
import {IoReturnDownBackOutline} from "react-icons/io5";
import {BiChevronDown} from "react-icons/bi";

import {Product} from "../types";
import mock from "../mock";

interface Props {
  product: Product;
}
const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  const [fullImg, setFullImg] = React.useState<string>("");
  const [favColor, setFavColor] = React.useState<string>("transparent");
  const [showList, setShowList] = React.useState<string>("hidden" || undefined);
  const [clickedQuantity, setclickedQuantity] = React.useState<string>("1 unidad");

  const handleMouseOver = (e: React.MouseEvent<HTMLImageElement>) => {
    const {src} = e.target as HTMLImageElement;

    setFullImg(src);
  };

  return (
    <Box backgroundColor="white" maxW="container.xl" padding={4}>
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

        <Stack
          borderColor="gray.300"
          borderRadius="md"
          borderWidth={1}
          margin={["16px 0 0 48px !important"]}
          padding="24px 32px 24px 16px"
        >
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
          <Stack alignItems="center" cursor="pointer" direction="row" spacing={0.5}>
            <Icon as={AiFillStar} color="secondary.400" fill="secondary.400" fontSize="md" />
            <Icon as={AiFillStar} color="secondary.400" fill="secondary.400" fontSize="md" />
            <Icon as={AiFillStar} color="secondary.400" fill="secondary.400" fontSize="md" />
            <Icon as={AiFillStar} color="secondary.400" fill="secondary.400" fontSize="md" />
            <Icon as={AiFillStar} color="secondary.400" fill="secondary.400" fontSize="md" />

            <Text color="blackAlpha.600" fontSize="sm" paddingLeft={1.5}>
              4 opiniones
            </Text>
          </Stack>
          <Stack spacing={-2}>
            <Text fontSize="4xl" fontWeight="light">
              $ {product.price.toLocaleString()}
            </Text>

            <Text fontSize="lg" fontWeight="normal">
              en 1x {product.price.toLocaleString()}
            </Text>
            <Text
              color="secondary.500"
              cursor="pointer"
              fontSize="sm"
              fontWeight="normal"
              paddingTop={2}
            >
              Ver medios de pago
            </Text>
          </Stack>
          <Stack alignItems="start" direction="row" marginTop={["20px !important"]}>
            <Icon as={FaShippingFast} color="green.500" fontSize="xl" />
            <Stack spacing={1}>
              <Text color="green.400" lineHeight="1.3">
                Llega gratis{" "}
                <Text as="span" fontWeight="semibold">
                  mañana
                </Text>
              </Text>
              <Text color="secondary.500" cursor="pointer" fontSize="sm">
                Ver mas formas de pago
              </Text>
            </Stack>
          </Stack>

          <Stack alignItems="start" direction="row" marginTop={["20px !important"]}>
            <Icon as={IoReturnDownBackOutline} color="green.400" fontSize="xl" />
            <Stack spacing={1}>
              <Text color="green.400" lineHeight="1.3">
                Devolución gratis
              </Text>
              <Text color="blackAlpha.700" fontSize="sm">
                Tenés 30 días desde que lo recibís.
              </Text>
              <Text color="secondary.500" cursor="pointer" fontSize="sm">
                Conocer más
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <Stack direction="row">
              <Text fontSize="lg" fontWeight="semibold">
                Stock disponible
              </Text>
            </Stack>

            <Stack
              alignItems="baseline"
              cursor="pointer"
              direction="row"
              onClick={() =>
                showList === "hidden" ? setShowList("visible") : setShowList("hidden")
              }
            >
              <Text fontSize="lg">Cantidad: </Text>
              <Stack>
                <Text>{clickedQuantity}</Text>
                <UnorderedList listStyleType="none" visibility={showList}>
                  <ListItem
                    border="none"
                    boxShadow="sm"
                    cursor="Pointer"
                    value="option1"
                    onClick={() => {
                      setclickedQuantity("1 unidad");
                      setShowList("hidden");
                    }}
                  >
                    1 unidad
                  </ListItem>
                  <ListItem
                    border="none"
                    boxShadow="sm"
                    cursor="Pointer"
                    value="option2"
                    onClick={() => {
                      setclickedQuantity("2 unidades");
                      setShowList("hidden");
                    }}
                  >
                    2 unidades
                  </ListItem>
                  <ListItem
                    border="none"
                    boxShadow="sm"
                    cursor="Pointer"
                    value="option3"
                    onClick={() => {
                      setclickedQuantity("3 unidades");
                      setShowList("hidden");
                    }}
                  >
                    3 unidades
                  </ListItem>
                  <ListItem
                    border="none"
                    boxShadow="sm"
                    cursor="pointer"
                    value="option4"
                    onClick={() => {
                      setclickedQuantity("4 unidades");

                      setShowList("hidden");
                    }}
                  >
                    4 unidades
                  </ListItem>
                  <ListItem
                    border="none"
                    boxShadow="sm"
                    cursor="pointer"
                    value="option5"
                    onClick={() => {
                      setclickedQuantity("5 unidades");
                      setShowList("hidden");
                    }}
                  >
                    5 unidades
                  </ListItem>
                  <ListItem
                    border="none"
                    boxShadow="sm"
                    cursor="pointer"
                    value="option6"
                    onClick={() => {
                      setclickedQuantity("6 unidades");

                      setShowList("hidden");
                    }}
                  >
                    6 unidades
                  </ListItem>

                  <ListItem
                    border="none"
                    boxShadow="sm"
                    cursor="pointer"
                    value="option7"
                    onClick={() => {
                      setclickedQuantity("Mas de 6 unidades");

                      setShowList("hidden");
                    }}
                  >
                    Mas de 6 unidades
                  </ListItem>
                </UnorderedList>{" "}
              </Stack>
              <Icon as={BiChevronDown} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DetailsScreen;
