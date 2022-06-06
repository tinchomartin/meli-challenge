import React, {useState} from "react";
import {
  Box,
  Button,
  Stack,
  Text,
  StackDivider,
  Heading,
  Icon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import {FiHeart, FiTruck} from "react-icons/fi";
import {AiFillStar} from "react-icons/ai";
import {FaShippingFast} from "react-icons/fa";
import {IoReturnDownBackOutline} from "react-icons/io5";
import {BiChevronDown, BiTrophy} from "react-icons/bi";
import {HiOutlineShieldCheck} from "react-icons/hi";

const ProductDetails = (props: any) => {
  const {product} = props;

  const [favColor, setFavColor] = React.useState<string>("transparent");
  const [showList, setShowList] = React.useState<string>("hidden");
  const [clickedQuantity, setclickedQuantity] = React.useState<string>("1 unidad");
  const quantity: string[] = [
    "1 unidad",
    "2 unidades",
    "3 unidades",
    "4 unidades",
    "5 unidades",
    "6 unidades",
    "Mas de 6 unidades",
  ];

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const {id} = e.target as HTMLLIElement;

    setclickedQuantity(id);

    setShowList("hidden");
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
            favColor === "transparent" ? setFavColor("secondary.400") : setFavColor("transparent")
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
          en 1x $ {product.price.toLocaleString()}
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
          onClick={() => (showList === "hidden" ? setShowList("visible") : setShowList("hidden"))}
        >
          <Text fontSize="lg">Cantidad: </Text>
          <Stack>
            <Stack alignItems="center" direction="row" spacing="1px" whiteSpace="nowrap">
              <Text fontWeight="semibold">{clickedQuantity} </Text>
              <Icon as={BiChevronDown} color="secondary.400" />
              <Text color="blackAlpha.700" fontSize="sm">
                `({product.initial_quantity} disponibles)`
              </Text>
            </Stack>
            {/* @ts-ignore */}
            <Box boxShadow="2xl" visibility={showList}>
              <UnorderedList
                backgroundColor="white"
                fontSize="lg"
                listStyleType="none"
                margin="0"
                position="absolute"
                whiteSpace="nowrap"
                zIndex="9999"
              >
                {quantity &&
                  quantity.map((item, i) => {
                    return (
                      <ListItem
                        key={i}
                        _before={
                          clickedQuantity === item
                            ? {
                                content: `""`,
                                borderLeft: "2px solid",
                                borderLeftColor: "secondary.400",
                                bottom: "5px",
                                top: "5px",
                                left: "2.5px",
                                position: "absolute",
                              }
                            : {content: `""`, position: "absolute"}
                        }
                        _hover={{backgroundColor: "blackAlpha.100"}}
                        border="none"
                        cursor="Pointer"
                        id={item}
                        lineHeight="18px"
                        paddingX="16px"
                        paddingY="18px"
                        position="relative"
                        textAlign="left"
                        onClick={handleClick}
                      >
                        {item}
                      </ListItem>
                    );
                  })}
              </UnorderedList>
            </Box>
          </Stack>
        </Stack>

        <Stack marginTop="20px !important" spacing={2}>
          <Stack direction="row">
            <Button
              _active={{backgroundColor: "secondary.800"}}
              _focus={{border: "none"}}
              _hover={{backgroundColor: "secondary.600"}}
              backgroundColor="secondary.400"
              color="white"
              flex="1"
              size="lg"
            >
              Comprar ahora
            </Button>
          </Stack>
          <Stack direction="row">
            <Button
              _active={{backgroundColor: "secondary.200"}}
              _focus={{border: "none"}}
              _hover={{backgroundColor: "secondary.100"}}
              backgroundColor="secondary.50"
              color="secondary.400"
              flex="1"
              variants="ghost"
            >
              Agregar al carrito
            </Button>
          </Stack>

          <Stack
            _before={{
              backgroundColor: "white",
              borderLeft: ".5px solid rgba(0,0,0,.1)",
              borderTop: ".5px solid rgba(0,0,0,.1)",
              height: "12px",
              position: "absolute",
              top: "-6px",
              transform: "rotate(45deg)",
              width: "12px",
              content: `""`,
            }}
            alignItems="center"
            border=".5px solid rgba(0,0,0,.1)"
            borderRadius="6px"
            boxShadow="0 8px 16px 0 rgb(0 0 0 / 10%), 0 0 6px 0 rgb(0 0 0 / 10%)"
            direction="row"
            justifyContent="space-around"
            marginTop="15px !important"
            padding="15px"
            position="relative"
          >
            <Stack
              borderColor="green.500"
              borderRadius="50%"
              borderWidth="2px"
              marginRight="12px"
              padding="5px"
            >
              <Icon as={FiTruck} color="green.500" fontSize="lg" fontWeight="bold !important" />
            </Stack>
            <Stack>
              <Text flex="1" fontSize="14px" fontWeight="semibold">
                Agregá y recibí gratis los productos de este vendedor en tu carrito.
              </Text>
            </Stack>
          </Stack>
          <Stack direction="row" flex="1">
            <UnorderedList color="blackAlpha.700" margin="0" spacing={2} styleType="none">
              <ListItem display="flex" justifyItems="flex-start">
                <Icon
                  as={HiOutlineShieldCheck}
                  fontSize="lg"
                  fontWeight="bold !important"
                  marginRight={2}
                />
                <Text fontSize="sm" fontWeight="normal">
                  <Text
                    _hover={{color: "secondary.700"}}
                    as="span"
                    color="secondary.500"
                    cursor="pointer"
                  >
                    Compra Protegida,{" "}
                  </Text>
                  recibí el producto que esperabas o te devolvemos tu dinero.
                </Text>
              </ListItem>
              <ListItem display="flex" justifyItems="flex-start">
                <Icon as={BiTrophy} fontSize="lg" fontWeight="bold !important" marginRight={2} />
                <Text fontSize="sm" fontWeight="normal">
                  <Text
                    _hover={{color: "secondary.700"}}
                    as="span"
                    color="secondary.500"
                    cursor="pointer"
                  >
                    Mercado Puntos.{" "}
                  </Text>
                  Sumás 4 puntos.
                </Text>
              </ListItem>
            </UnorderedList>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
