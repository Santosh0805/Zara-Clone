import Sidebar from "../pages/Sidebar";
import { Box, Button, Flex, Spacer, Text, useDisclosure, Image, useToast, } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, } from "@chakra-ui/react";
import { useContext } from "react";
import { AllContext } from "../AuthContext/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { app } from "../firebase";

const auth = getAuth(app);
const Navbar = () => {
  const { isAuth, setIsAuth, setNewUser } = useContext(AllContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");
  const toast = useToast();
  const logout = () => {
    signOut(auth)
      .then((value) => {
        toast({
          title: "Logout",
          description: `Logout Successful `,
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
        setNewUser(false);
        console.log(value);
      })
      .catch((err) => {
        toast({
          title: `${err.message}`,
          status: "error",
          isClosable: true,
          position: "top",
          duration: 3000,
        });
      });
  };
  return (
    <Flex bgColor="transparent" pos="fixed" top={0} w="100%" zIndex={2}>
      <Flex p="2" gap={[3, 6, 24]}>
        <Box style={{ cursor: "pointer" }} p={2}>
          <Button onClick={() => onOpen()} m={1} bg="transparent">
            <HamburgerIcon />
          </Button>

          <Drawer
            placement={placement}
            onClose={onClose}
            isOpen={isOpen}
            size="sm"
          >
            <DrawerOverlay />

            <DrawerContent>
              <DrawerCloseButton />

              <DrawerHeader ml={[0, 0, 12]}>
                <Image src=" https://logodownload.org/wp-content/uploads/2014/05/zara-logo-1.png" width="300px" alt="Zara" />
              </DrawerHeader>

              <DrawerBody>
                <Sidebar />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
        <Link to="/">
          <Image
            width="300px"
            marginLeft={"-15px"}
            src="https://logodownload.org/wp-content/uploads/2014/05/zara-logo-1.png"
            alt="Zara"
          />
        </Link>
      </Flex>
      <Spacer />
      <Flex p="4" gap={4}>
        <Link to="/search">
          <Box borderBottom="1px" borderColor="black" mb="42px" pr={5}>
            <Text
              style={{ cursor: "pointer" }}
              fontSize="sm"
              fontFamily={"Neue-Helvetica, Helvetica, Arial, sans-serif"}
              fontWeight={500}
              marginRight={"100px"}
            >
              SEARCH
            </Text>
          </Box>
        </Link>

        <Box display={isAuth ? "none" : "block"}>
          <Text
            style={{ cursor: "pointer" }}
            fontSize="md"
            fontFamily={"Neue-Helvetica, Helvetica, Arial, sans-serif"}
            fontWeight={300}
          >
            <Link to="/login">Login</Link>
          </Text>
        </Box>
        <Box display={isAuth ? "block" : "none"}>
          <Text
            style={{ cursor: "pointer" }}
            fontSize="md"
            fontFamily={"Neue-Helvetica, Helvetica, Arial, sans-serif"}
            fontWeight={300}
            onClick={logout}
          >
            Logout
          </Text>
        </Box>
        <Box>
          <Text
            style={{ cursor: "pointer", color: "black" }}
            fontSize="md"
            fontWeight={300}
            fontFamily={"Neue-Helvetica, Helvetica, Arial, sans-serif"}
          >
            Help
          </Text>
        </Box>
        <Link to="/cart">
          <Box style={{ cursor: "pointer" }}>
            <svg
              width="1.7rem"
              className="layout-header-links__cart-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 5.001V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.001h5v7h-1v-6H5v13.9h10v1H4V5h5zM10 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.001h-4V4z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.8 23.4v-9h-5.4v9l2.695-2.827L22.8 23.4zm-4.6-1.998l1.894-1.987L22 21.407V15.2h-3.8v6.202z"
              ></path>
              <text
                x="8"
                y="19"
                fontSize="xs"
                fontWeight={100}
                fill="black"
              ></text>
            </svg>
          </Box>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
