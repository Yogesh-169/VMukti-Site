import React from 'react';
import {
    Flex,
    Image,
    Text,
    Container,
    Heading,
    Box,
} from '@chakra-ui/react';
import Navbar from '../../components/Navbar';
import ComputerVisionPage from './AITechnologies';

const TechnologyDashboard = () => {
    return (
        <Box>
            <Flex bg="#F3F3F3" w="100%" position="relative" overflow="hidden" direction="column" minH="100%">

                <Box
                    position="absolute"
                    top="30%"
                    left="40%"
                    transform="translate(-50%, -50%)"
                    width="408px"
                    height="408px"
                    flexShrink={0}
                    borderRadius="408px"
                    opacity="0.12"
                    background="#3F77A5"
                    filter="blur(56.6px)"
                    zIndex={3} // Ensure it stays behind the content
                />

                {/* Background Images Section */}
                <Flex
                    position="absolute"
                    right="-2%"
                    // top="50%"
                    // transform="translateY(-50%)"
                    width="70%"
                    height="100%"
                    display={{ base: 'none', lg: 'flex' }}
                    zIndex={2} // Ensure it stays above the blurred ring
                >
                    {/* Brochure Image behind Dashboard */}
                    <Box
                        position="absolute"
                        top="60%"
                        right="26"
                        transform="translateY(-50%) perspective(1000px)"
                        width="1095px"
                        height="62%"
                        opacity={"80%"}
                        zIndex={3}

                    >
                        <Image
                            src="/assets/VMukti Brochure O2 1.png"
                            alt="VMukti Brochure"
                            width="100%"
                            height="100%"
                            objectFit="contain"
                            opacity={0.8}
                        />
                    </Box>

                    {/* White Box behind Dashboard */}
                    <Box
                        position="absolute"
                        top="58%"
                        // right="2"
                        transform="translateY(-50%) perspective(1000px)"
                        width="95%"
                        height={{ md: "40%", lg: "62%" }}
                        bg="#FFFFFF"
                        borderRadius="20px"
                        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.15)"
                        zIndex={2}
                    />

                    {/* Dashboard Image */}
                    <Image
                        src="./assets/Dashboard.png"
                        alt="AI Dashboard Interface"
                        position="absolute"
                        // top="10%"
                        right="16"
                        transform="perspective(1095px)"
                        w="100%"
                        h="110%"
                        objectFit="contain"
                        zIndex={3}
                    />
                </Flex>

                {/* Content Section */}
                <Container maxW="container.xl" position="relative" zIndex={4} flex="1" display="flex" alignItems="center">
                    <Flex
                        direction={{ base: "column", lg: "row" }}
                        align={{ base: "flex-start", lg: "center" }}
                        justify="flex-start"
                        minH={{ base: "auto", lg: "100vh" }}
                        ml={{ base: "-2%", md: "2%", lg: "-4%" }}
                    >
                        {/* Left Content */}
                        <Flex
                            direction="column"
                            maxW={{ base: "100%", lg: "85%" }}
                            pr={{ base: 0, lg: 8 }}
                            position="relative"
                            zIndex={3}
                        // mt={{ base: 8, lg: 14 }}
                        // ml={{ base: "-2%", md: "-4%", lg: "-8%" }}
                        >
                            <Heading
                                fontSize={{ base: "20px", sm: "30px", md: "40px", lg: "48px" }}
                                lineHeight={{ base: "1.2", lg: "normal" }}
                                mb={12}
                                mt={{ base: "5%", lg: "0" }}
                                color="#000"
                                fontWeight="600"
                            >
                                Breakthroughs in Visual AI:{' '}
                                <Text as="span" color="#3F77A5" fontWeight="600"
                                    fontSize={{ base: "20px", sm: "30px", md: "40px", lg: "48px" }}
                                >
                                    Smarter Vision
                                </Text>
                                {' '}for a{' '}
                                <Text as="span" color="#DB7B3A" fontWeight="600">
                                    Smarter World
                                </Text>
                                .
                            </Heading>

                            {/* Icon & Description */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 33 33" fill="none">
                                <path d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z" fill="#3F77A5" />
                            </svg>
                            <Flex align="center" ml={{ base: "-1%", md: "5%", lg: "0%" }}>
                                <Text
                                    fontSize={{ base: "md", md: "16px" }}
                                    color="#000"
                                    lineHeight="normal"
                                    maxW={{ base: "90%", md: "60%", lg: "30%" }}
                                    m={3}
                                    // ml={3}
                                    fontWeight="500"
                                >
                                    VMukti is driving innovation with advanced AI technologies, transforming surveillance, automation, and security for a smarter, more connected world.
                                </Text>
                            </Flex>

                            {/* Square Box (Hidden on smaller screens) */}
                            <Box
                                width="336px"
                                height="336px"
                                flexShrink={0}
                                borderRadius="20px"
                                background="#BECEDC"
                                mt={4}
                                display={{ base: "none", lg: "block" }} // Hide on small screens
                            />
                        </Flex>

                        {/* Mobile Image (Shown only on small screens) */}
                        <Flex display={{ base: 'flex', lg: 'none' }} w="100%" mt={8} position="relative" justify="center">
                            <Image
                                src="./assets/Dashboard.png"
                                alt="AI Dashboard Interface"
                                w="120%"
                                h="auto"
                                objectFit="contain"
                            />
                        </Flex>
                    </Flex>
                </Container>
            </Flex>
            <ComputerVisionPage />

        </Box>
    );
};

export default TechnologyDashboard;