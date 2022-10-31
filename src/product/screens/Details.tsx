import React, {CSSProperties} from "react";
import {Box, Stack, Image, StackDivider} from "@chakra-ui/react";

import {Product} from "../types";
import mock from "../mock";
import ProductDetails from "../../components/ProductDetails";
import SellerPublications from "../../components/SellerPublications";
import SellerInformation from "../../components/SellerInformation";
import ProductDescription from "../../components/ProductDescription";
import PurchaseInformation from "../../components/PurchaseInformation";
import HoverPicture from "../../components/HoverPicture";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  const [fullImg, setFullImg] = React.useState<string>("");
  const [hoverPic, setHoverPic] = React.useState<boolean>(false);
  const ZoomProps: CSSProperties = {
    backgroundPosition: "50% 50%",
    backgroundImage: `url(${fullImg})`,
  };
  const [zoomImg, setZoom] = React.useState<any>(ZoomProps);

  const handleMouseOver = (e: React.MouseEvent<HTMLImageElement>) => {
    const {src} = e.target as HTMLImageElement;

    setFullImg(src);
  };

  const handleOut = () => {
    setHoverPic(false);
  };

  const handleOver = () => {
    setHoverPic(true);
  };

  const handleMouseMove = (e: any) => {
    const {left, top, width, height} = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 110;
    const y = ((e.pageY - top) / height) * 110;

    setZoom({
      backgroundPosition: `${x}% ${y}%`,
      backgroundImage: `url(${fullImg})`,
      backgroundColor: "white",
      backgroundSize: "200% 200%",
    });
  };

  console.log(fullImg);

  return (
    <Stack background="white" borderRadius="md" direction="row" paddingBottom="30px">
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
                position="relative"
                width="700px"
              >
                <Image
                  height="auto"
                  maxH="468px"
                  objectFit="contain"
                  src={fullImg ? fullImg : product.pictures[0].secure_url}
                  width="100%"
                  onMouseMove={handleMouseMove}
                  onMouseOut={handleOut}
                  onMouseOver={handleOver}
                />
              </Box>
            </Stack>
          </Stack>

          <SellerPublications publications={product.sellerRecomendations} />
          <ProductDescription description={product.attributes} />
        </Stack>
      </Stack>
      <Stack position="relative">
        <Box position="sticky" top="12px">
          <Stack direction="row">
            {hoverPic === false ? (
              <ProductDetails product={product} />
            ) : (
              <HoverPicture style={zoomImg} />
            )}
          </Stack>
          <Stack direction="row">
            <SellerInformation />
          </Stack>
          <Stack direction="row">
            <PurchaseInformation />
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default DetailsScreen;
