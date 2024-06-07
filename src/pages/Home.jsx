import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

let Women = {
  image1:
    "https://static.zara.net/assets/public/c7bd/853d/5332492596b7/48a1b1ed9623/image-landscape-fill-ef7d39c2-1699-4ebe-8042-ece4c21d0ceb-default_0.jpg?ts=1716476175692&w=1358",
    video: "Video/Winter.mp4",
    image2:
    "https://static.zara.net/assets/public/29bf/6688/976e477eb9c4/d0ad2484a41d/image-landscape-fill-147d2f7a-b3cc-422a-8e7e-d18fd68b8b7b-default_0.jpg?ts=1716795976226&w=1358",
    image3:
    "https://static.zara.net/assets/public/6f0a/27d6/6b2d4353ada2/a4cc4e199e54/image-landscape-fill-8dba0866-6c63-4ac4-a4a8-1a23e2e21be7-default_0.jpg?ts=1716745340427&w=1358",
    image4:
    "https://static.zara.net/assets/public/ba39/d9ea/1b874546988d/0f6e25b3f2da/image-landscape-fill-a811ccae-1947-47f6-a1d3-851b3f0f531c-default_0.jpg?ts=1716745956910&w=1358",
  };

let Men = {
  image1:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-edition/subhome-xmedia-w47//w/1920/IMAGE-landscape-fill-88c5ba6c-832e-442e-878f-48b60c0c8aa7-default_0.jpg?ts=1669457412950",
    video2: "Video/Winter.mp4",
  image2:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-new/subhome-xmedia-49//w/1920/IMAGE-landscape-fill-26580743-41eb-4586-859d-09e81a25b1be-default_0.jpg?ts=1670421023459",
  image3:
    "https://static.zara.net/photos///2022/I/M/2/p/0000/004/955/2/w/948/0000004955_15_2_1.jpg?ts=1669139167383",
  image4:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-origins/subhome-xmedia-prewarming-drop-iii-winter-launch//w/1920/IMAGE-landscape-default-fill-0d199040-e6b5-4035-b655-c77c8d851b1f-default_0.jpg?ts=1668654637059",
};

let Child = {
  image1:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-babygirl/subhome-xmedia-50//w/1920/IMAGE-landscape-fill-4c7367f4-222f-4e2a-a6a6-c5c7e22f903a-default_0.jpg?ts=1670936962182",
    video: "Video/Winter.mp4",
  image2:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-babyboy/subhome-xmedia-50//w/1920/IMAGE-landscape-fill-ff966491-7491-4c06-994e-ca71500b4c49-default_0.jpg?ts=1670935725138",
  image3:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-mini/subhome-xmedia-47//w/1920/IMAGE-landscape-fill-a8ada299-8dee-4702-abfa-b0d0040b4192-default_0.jpg?ts=1669384230932",
  image4:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-joinlife-jeans-redesign/subhome-xmedia-kids//w/1920/IMAGE-landscape-fill-ac5416df-605d-44bf-aac4-d0342fec6014-default_0.jpg?ts=1670951111571",
};
let arr = [Women, Men, Child];

const Home = () => {
  const [ind, setInd] = useState(0);
  return (
    <Box pos="relative">
      <Box>
        <img src={arr[ind].image1} alt="" width="100%" height="100%" />
        <Flex zIndex={2} pos="fixed" top={50} left={1} gap={1000}>
          <Box>
            <Button
              disabled={ind === 0}
              onClick={() => setInd(ind - 1)}
              colorScheme="transparent"
              size="lg"
              mt={60}
            >
              <ChevronLeftIcon w={12} h={10} marginRight="20px" />
            </Button>
          </Box>
          <Box>
            <Button
              disabled={ind === 2}
              onClick={() => setInd(ind + 1)}
              colorScheme="transparent"
              size="lg"
              mt={60}
            >
              <ChevronRightIcon w={12} h={10} marginLeft="300px" />
            </Button>
          </Box>
        </Flex>
      </Box>

      <Flex gap={30} pos="fixed" top={630} left={490} fontWeight={"bold"}>
        <Text fontSize="sm">ZARA ATHELITIC</Text>
        <Text fontSize="sm">NEW </Text>
        <Text fontSize="sm">PARTY</Text>
        <Text fontSize="sm">SHOES</Text>
        <Text fontSize="sm">EDITION</Text>
        <Text fontSize="sm">ZARA ORIGINS</Text>
      </Flex>

      <Box height="1000px">
        <video width="100%" height="100%" autoPlay="autoPlay" loop={true} muted>
          <source src={arr[ind].video} type="video/mp4" />
        </video>
      </Box>
      <Box mt="-10%">
        <img src={arr[ind].image2} alt="" width="100%" height="100%" />
      </Box>
      <Box mt="-10%">
        <img src={arr[ind].image3} alt="" width="100%" height="100%" />
      </Box>
      <Box mt="-10%">
        <img src={arr[ind].image4} alt="" width="100%" height="100%" />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
