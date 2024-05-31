import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Heading as="h1" size="lg">
              <RouterLink to="/">My Blog</RouterLink>
            </Heading>
            <Spacer />
            <HStack spacing={4}>
              <Link as={RouterLink} to="/" color="white">
                Home
              </Link>
              <Link as={RouterLink} to="/about" color="white">
                About
              </Link>
              <Link as={RouterLink} to="/contact" color="white">
                Contact
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">First Blog Post</Heading>
            <Text mt={4}>This is the content of the first blog post.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Second Blog Post</Heading>
            <Text mt={4}>This is the content of the second blog post.</Text>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={4} mt={8}>
        <Container maxW="container.lg">
          <Text textAlign="center">© 2023 My Blog. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;