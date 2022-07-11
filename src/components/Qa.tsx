import React, {useEffect, useState} from "react";
import {Stack, Text, UnorderedList, ListItem, Input, Button, FormControl} from "@chakra-ui/react";

export function Qa() {
  const [arrQuestion, setarrQuestion] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const storageQuestion = localStorage.getItem("questionStorage");

    setarrQuestion(JSON.parse(storageQuestion));
  }, []);

  useEffect(() => {
    localStorage.setItem("questionStorage", JSON.stringify(arrQuestion));
  }, [arrQuestion]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleClick = () => {
    if (message) {
      setarrQuestion([...arrQuestion, message]);
    }
  };

  return (
    <Stack>
      <Text as="h2" fontSize="2xl" fontWeight="normal">
        Preguntas y Respuestas
      </Text>

      <Text as="h3" fontSize="lg" fontWeight="semibold">
        ¿Qué querés saber?
      </Text>

      <Stack direction="row">
        <UnorderedList
          color="secondary.500"
          display="flex"
          flexWrap="wrap"
          fontSize="sm"
          fontWeight="semibold"
          listStyleType="none"
          m="0"
          textAlign="center"
          whiteSpace="nowrap"
        >
          <ListItem
            _hover={{background: "rgba(65,137,230,.2)"}}
            backgroundColor="rgba(65,137,230,.15)"
            borderRadius="5px"
            cursor="pointer"
            lineHeight="32px"
            marginRight="12px"
            marginTop="12px"
            padding="0 12px"
          >
            Costo y tiempo de envío
          </ListItem>
          <ListItem
            _hover={{background: "rgba(65,137,230,.2)"}}
            backgroundColor="rgba(65,137,230,.15)"
            borderRadius="5px"
            cursor="pointer"
            lineHeight="32px"
            marginRight="12px"
            marginTop="12px"
            padding="0 12px"
          >
            Devoluciones gratis
          </ListItem>
          <ListItem
            _hover={{background: "rgba(65,137,230,.2)"}}
            backgroundColor="rgba(65,137,230,.15)"
            borderRadius="5px"
            cursor="pointer"
            lineHeight="32px"
            marginRight="12px"
            marginTop="12px"
            padding="0 12px"
          >
            Medios de pago y promociones
          </ListItem>
          <ListItem
            _hover={{background: "rgba(65,137,230,.2)"}}
            backgroundColor="rgba(65,137,230,.15)"
            borderRadius="5px"
            cursor="pointer"
            lineHeight="32px"
            marginRight="12px"
            marginTop="12px"
            padding="0 12px"
          >
            Garantía
          </ListItem>
          <ListItem
            _hover={{background: "rgba(65,137,230,.2)"}}
            backgroundColor="rgba(65,137,230,.15)"
            borderRadius="5px"
            cursor="pointer"
            lineHeight="32px"
            marginRight="12px"
            marginTop="12px"
            padding="0 12px"
          >
            Cuotas sin tarjeta
          </ListItem>
        </UnorderedList>
      </Stack>
      <Stack>
        <Text as="h3" fontSize="lg" fontWeight="semibold">
          Preguntale al vendedor
        </Text>
        <FormControl>
          <Stack direction="row">
            <Input
              _placeholder={{opacity: 0.7}}
              fontSize="16px"
              placeholder="Escribí tu pregunta..."
              size="lg"
              onChange={handleChange}
            />
            <Button
              _active={{backgroundColor: "secondary.800"}}
              _focus={{border: "none"}}
              _hover={{backgroundColor: "secondary.600"}}
              backgroundColor="secondary.400"
              color="white"
              padding="0 24px "
              size="lg"
              onClick={handleClick}
            >
              Preguntar
            </Button>
          </Stack>
        </FormControl>

        <Text as="h3" fontSize="lg" fontWeight="semibold">
          Últimas realizadas
        </Text>
        <Stack spacing={21}>
          {arrQuestion.length > 0 &&
            arrQuestion
              .map((item, i) => {
                return <Text key={i}>{item}</Text>;
              })
              .reverse()}

          <Text>
            Hola tienen disponible el azul? Cómo elijo esa opción? O se lo pido una vez hecha la
            compra?
          </Text>
          <Text
            _before={{
              fontSize: "7px",
              marginRight: "7px",
              marginLeft: "10px",
              verticalAlign: "text-top",
              borderLeft: "solid 1px gray",
              borderBottom: "solid 1px gray",
              content: `"\\00a0 \\00a0 \\00a0 \\00a0 \\00a0"`,
            }}
            opacity="0.8"
          >
            Hola. Si realizas la compra y luego lo coordinamos.
            <Text as="span" marginLeft="7px">
              21/06/2022
            </Text>
          </Text>
          <Text>Hola. El precio de la publicación es por los dos muñecos?</Text>
          <Text
            _before={{
              fontSize: "7px",
              marginRight: "7px",
              marginLeft: "10px",
              verticalAlign: "text-top",
              borderLeft: "solid 1px gray",
              borderBottom: "solid 1px gray",
              content: `"\\00a0 \\00a0 \\00a0 \\00a0 \\00a0"`,
            }}
            opacity="0.8"
          >
            Hola. El precio es por unidad.
            <Text as="span" marginLeft="7px">
              11/05/2022
            </Text>
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}
