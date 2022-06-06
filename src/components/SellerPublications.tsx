import React, {useState} from "react";
import {Box, Stack, Text, Image} from "@chakra-ui/react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation} from "swiper";

const SellerPublications = (props) => {
  const {publications} = props;

  return (
    <Stack marginLeft="30px">
      <Stack direction="row">
        <Text as="h2" fontSize="2xl" fontWeight="normal">
          Publicaciones del vendedor
        </Text>
      </Stack>
      <Stack direction="row" maxWidth="720px">
        <Swiper
          loop={true}
          loopFillGroupWithBlank={false}
          modules={[Navigation]}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          slidesPerGroup={3}
          slidesPerView={3}
          spaceBetween={3}
        >
          {publications &&
            publications.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <Stack
                    key={i}
                    _hover={{boxShadow: "2xl"}}
                    border="1px solid"
                    borderColor="gray.100"
                    borderRadius="md"
                    boxShadow="xs"
                    color="blackAlpha.900"
                    cursor="pointer"
                    direction="row"
                    fontSize="sm"
                    height="inherit"
                    width="224px"
                  >
                    <Stack maxHeight="100%" maxWidth="100%">
                      <Stack
                        borderBottom="1px solid"
                        borderColor="gray.100"
                        height="223px"
                        maxWidth="100%"
                      >
                        <Image maxHeight="100%" maxWidth="100%" src={item.image} />
                      </Stack>

                      <Stack padding="16px">
                        <Text fontSize="22px" fontWeight="normal">
                          $ {item.price.toLocaleString()}
                        </Text>
                        <Text textOverflow="ellipsis">{item.text}</Text>
                      </Stack>
                    </Stack>
                  </Stack>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Stack>
    </Stack>
  );
};

export default SellerPublications;
