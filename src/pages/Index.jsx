import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Spacer, Button, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  const bg = useColorModeValue("white", "gray.700");
  const color = useColorModeValue("black", "white");

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);
  return (
    <Box bg={bg} color={color} minH="100vh">
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
        <Button as={RouterLink} to="/add-post" colorScheme="teal" mb={8}>
          Add New Post
        </Button>
        <VStack spacing={8} align="stretch">
          {posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" bg={bg} color={color}>
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
            </Box>
          ))}
          
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