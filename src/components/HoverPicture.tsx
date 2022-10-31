import React, {useState} from "react";
import {Box, Stack} from "@chakra-ui/react";

const HoverPicture = (props: any) => {
  const {style} = props;

  console.log(style);

  return (
    <Stack
      backgroundRepeat="no-repeat"
      borderColor="gray.300"
      borderRadius="md"
      borderWidth={1}
      content=""
      flex="1"
      height="512px"
      margin={["16px 18px 0 48px !important"]}
      overflow="hidden"
      padding="24px 32px 24px 16px"
      role="group"
      style={style}
      width="100%"
      zIndex="9999"
    />
  );
};

export default HoverPicture;
