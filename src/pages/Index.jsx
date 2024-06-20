import { Container, Text, VStack, Heading, Box, Image, Link, HStack } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Box boxSize="sm">
          <Image src="/path/to/your/profile-picture.jpg" alt="Profile Picture" borderRadius="full" boxSize="150px" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi, I'm [Your Name], a [Your Profession]. I write about [Topics You Write About]. Follow me on social media to stay updated!
        </Text>
        <HStack spacing={4}>
          <Link href="https://twitter.com/yourprofile" isExternal>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" isExternal>
            <FaLinkedin size="24px" />
          </Link>
          <Link href="https://github.com/yourprofile" isExternal>
            <FaGithub size="24px" />
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;