import React, { useState } from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Image,
  IconButton,
  Icon,
  VStack,
  useBreakpointValue,
  SimpleGrid,
  Divider,
  Link,
  Grid,
} from "@chakra-ui/react";
import PageContentWrapper from "../../components/PageContentWrapper";
import VerticalTimeline from "../../components/VerticalTimeline";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Certifications from "../../data/certificationsConstData";

const WhoWeare = () => {
  const reviews = [
    {
      id: 1,
      text: "VMukti created custom detection features specifically for us, ensuring a perfect fit. Their team's responsiveness made all the difference.",
    },
    {
      id: 2,
      text: "The AI-powered system instantly notifies us of potential threats via WhatsApp. It's quick, dependable, and has transformed our security approach.",
    },
    {
      id: 3,
      text: "The AI-powered system instantly notifies us of potential threats via WhatsApp. It's quick, dependable, and has transformed our security approach.",
    },
    {
      id: 4,
      text: "The AI-powered system instantly notifies us of potential threats via WhatsApp. It's quick, dependable, and has transformed our security approach.",
    },
  ];

  const columns = useBreakpointValue({ base: 2, sm: 3, md: 4, lg: 5 });

  const certifications = Certifications;
  const ellipseSize = useBreakpointValue({
    base: "200px",
    md: "300px",
    lg: "408px",
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;
  const totalCards = reviews.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  return (
    <Box>
      <PageContentWrapper>
        <Box
          position="relative"
          minH="100vh"
          display="flex"
          //   alignItems="center"
          //   justifyContent="center"
          borderRadius="24px"
          bgImage="./assets/WhoDash.png"
          bgSize="cover"
          bgPosition="center"
          mt="6%"
        >
          {/* Overlay */}
          <Box
            position="absolute"
            left={0}
            w="100%"
            h="100%"
            bg="rgba(0, 0, 0, 0.05)"
            borderRadius="24px"
          />

          <Box mt="4%" ml="2%">
            <Flex
              direction="column"
              //   maxW="900px"
              p={8}
              gap={12}
              //   bg="red"
            >
              {/* Left Column - Main Content */}
              <Box flex={2}>
                <Heading
                  fontSize={{
                    base: "24px",
                    sm: "30px",
                    md: "40px",
                    lg: "48px",
                  }}
                  color="#FFFFFF"
                  fontWeight="600"
                  mb={6}
                  maxW="700px"
                >
                  Building a Better Future Together.
                </Heading>
              </Box>
              <Box mt="-3%">
                <VStack spacing={6} align="start" color="#FFFFFF" maxW="33%">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                  >
                    <path
                      d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                      fill="white"
                    />
                  </svg>
                  <Text
                    fontSize={{ base: "12px", md: "16px", lg: "16px" }}
                    // lineHeight="tall"
                    fontWeight="500"
                    // maxW="40%"
                    textAlign="left"
                    // gap="12"
                  >
                    At VMukti, we drive AI-powered surveillance, enhancing
                    security with advanced technology. Since 2007, we've
                    provided smart, cost-effective solutions.
                  </Text>
                  <Text
                    fontSize={{ base: "12px", md: "16px", lg: "16px" }}
                    fontWeight="500"
                    // maxW="450px"
                    // lineHeight="tall"
                  >
                    As a trusted OEM and system integrator, we serve government
                    and private sectors across 25+ states proudly embodying the
                    "Make in India" vision with quality, security, and
                    scalability.
                  </Text>
                </VStack>
              </Box>

              {/* Right Column - Links */}
              <Box flex={1}>
                <Divider mb={8} display={{ base: "block", md: "none" }} />
              </Box>
            </Flex>
          </Box>
        </Box>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          mt="1%"
          direction={{ base: "column", md: "row" }} // Column on mobile, row on desktop
          gap={{ base: "4", md: "0" }} // Add gap between items in column mode
        >
          <Box
            width="392px"
            height="392px"
            borderRadius="24px"
            bg="#FFF"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="space-between"
            // position="relative"
            boxShadow="md"
            p="4"
            mr={{ base: "0", md: "0.5%" }} // Only apply margin-right in row mode
            mb={{ base: "4", md: "0" }} // Add margin-bottom in column mode
          >
            {/* Icon in the Top-Left Corner */}
            <Box top="7%" left="7%">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41"
                height="43"
                viewBox="0 0 41 43"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.63199 16.1025V17.0157C6.63199 19.6326 8.05702 21.9734 9.39219 23.3043C10.2456 24.1549 10.823 24.7513 11.4443 25.8181C11.8884 26.5809 12.4431 28.1886 12.4431 29.3852H20.4127C20.7657 29.3852 20.6498 29.064 20.6776 28.7369C20.7827 27.5024 21.3287 26.2329 21.9625 25.2069C22.2304 24.7733 22.5527 24.4717 22.8202 24.0721C22.7745 24.0194 22.7234 23.9611 22.6676 23.8924C22.368 23.5232 21.6653 22.4302 21.3524 22.3022L15.9505 21.2286C15.5254 21.1435 15.0582 21.046 14.5658 20.9531C14.0021 20.8466 13.6883 20.8013 13.6883 20.1702C13.6883 19.6577 15.121 19.1288 15.7926 18.7879L21.2427 15.9365C21.8983 15.6085 25.5634 13.6247 25.9747 13.5289C25.9561 12.6952 25.0965 11.3437 24.7298 10.7891C23.1276 8.36555 19.9097 6.47266 16.9258 6.47266C14.8689 6.47266 14.0897 6.627 12.2874 7.3963C11.5818 7.69743 9.98902 8.83673 9.47796 9.40185C9.34582 9.54789 9.36863 9.56737 9.2247 9.72987L8.44499 10.6935C8.09855 11.1599 7.84816 11.6755 7.57179 12.2277C7.10332 13.1633 6.63184 14.7389 6.63184 16.1028L6.63199 16.1025Z"
                  fill="#3F77A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.3447 20.0035L21.4873 21.0129C21.8035 21.0644 21.8216 21.0233 22.0728 20.8374C24.2219 19.248 27.2229 17.4868 29.4137 15.8881C30.0858 15.3976 34.602 12.3657 34.8572 12.3657C35.4982 12.3657 35.7946 12.9306 35.2025 13.7073C34.0555 15.2119 32.6697 17.3669 31.5016 18.9721L29.4454 21.8971C29.2707 22.1538 29.1926 22.2168 29.0461 22.4938C30.1197 22.7439 31.256 22.9478 32.3591 23.1658L35.7706 23.8222L41.0006 6.88672C40.4822 7.16112 39.9921 7.36998 39.4712 7.68199L19.4156 18.3425C18.9103 18.5931 16.4666 19.8369 16.3447 20.0035Z"
                  fill="#3F77A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.8905 30.2151C25.8905 31.5719 26.0148 32.2304 26.7685 33.3219C27.0936 33.7928 28.298 34.6532 28.298 35.1963C28.298 35.8443 25.3167 37.5119 28.9128 39.8945L29.2942 40.1772C23.9095 40.1772 22.924 41.2564 19.8303 41.2564C19.0432 41.2564 18.6143 41.0353 18.0637 40.7817C17.5567 40.5484 16.5882 40.6754 15.9287 40.6754C16.3253 41.4248 16.7003 41.6403 17.4776 42.032C20.2645 43.4359 22.5802 42.1441 25.9666 41.7477C26.3754 41.6997 27.0267 41.6634 27.4076 41.6115C28.1947 41.5038 31.1207 41.8646 31.1207 40.5095C31.1207 39.6275 30.6616 39.3688 29.8757 38.8488C27.1344 37.0346 29.4079 37.3388 29.6418 35.3764C29.857 33.5713 27.8747 33.4434 27.3513 31.328C27.201 30.7209 27.274 29.8242 27.4046 29.2389C27.4383 29.0879 27.5508 28.7435 27.5508 28.555C27.5508 28.008 26.4649 27.3038 26.1203 28.7018C26.0111 29.1444 25.8903 29.6237 25.8903 30.2153L25.8905 30.2151Z"
                  fill="#3F77A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.8203 21.8306C22.909 22.1629 25.5483 25.5433 26.0224 26.1832C26.1148 26.3079 26.1455 26.3635 26.2308 26.4728C26.3509 26.6269 26.3299 26.6683 26.5561 26.7287C26.5561 26.2804 27.0937 23.8395 27.2121 23.2339C27.3828 22.3613 28.2353 21.3134 28.785 20.5728L32.2843 15.6045C31.7701 15.7244 24.1574 21.1232 22.8205 21.8308L22.8203 21.8306Z"
                  fill="#3F77A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.1134 34.9472C11.1134 35.7525 11.308 36.1926 12.6078 36.1926H20.4113C22.5917 36.1926 22.4274 34.0342 20.6603 34.0342H12.2757C11.7082 34.0342 11.1133 34.3996 11.1133 34.9472H11.1134Z"
                  fill="#3F77A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.1152 31.5431C11.1152 32.1764 11.2912 32.7884 12.1946 32.7884H20.8283C22.4254 32.7884 22.2098 30.7129 21.0773 30.7129H11.9454C11.528 30.7129 11.1152 31.1256 11.1152 31.5431Z"
                  fill="#3F77A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0195 38.5999C14.0195 39.0456 14.4869 39.513 14.9327 39.513H18.1703C19.2513 39.513 19.0835 37.9905 19.0835 37.4375H14.0195V38.5999Z"
                  fill="#3F77A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.8467 0.99329V3.06876C15.8467 3.96401 17.258 4.15974 17.258 2.81958C17.258 1.59148 17.5046 0.329102 16.5107 0.329102C16.1091 0.329102 15.8467 0.591726 15.8467 0.99329Z"
                  fill="#3F77A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.2267 6.97006C25.2267 7.53352 25.6248 7.63425 26.0569 7.63425C26.3166 7.63425 28.0966 6.02981 28.1002 5.47496C28.1023 5.1415 27.7966 4.81152 27.3851 4.81152C26.9272 4.81152 25.2266 6.51232 25.2266 6.97006H25.2267Z"
                  fill="#3F77A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.9707 27.1438C4.9707 27.7222 5.31382 27.8909 5.80086 27.8909C6.05336 27.8909 7.87633 26.153 7.87633 25.7325C7.87633 25.5151 7.65131 25.0684 7.12923 25.0684C6.62679 25.0684 4.9707 26.8596 4.9707 27.1438Z"
                  fill="#3F77A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.9707 5.47654C4.9707 5.93428 6.67134 7.63507 7.12923 7.63507C7.79825 7.63507 8.25463 6.89235 7.27149 6.08153C6.24727 5.23672 6.22523 4.8125 5.55198 4.8125C5.27757 4.8125 4.97085 5.19911 4.97085 5.47669L4.9707 5.47654Z"
                  fill="#3F77A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.488281 16.3514C0.488281 17.3054 1.63558 17.0155 3.31085 17.0155C3.52636 17.0155 3.67799 16.9525 3.78944 16.8299C4.15581 16.4271 3.93154 15.6871 3.31085 15.6871C1.79793 15.6871 0.488281 15.4077 0.488281 16.3513V16.3514Z"
                  fill="#3F77A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.8839 26.3959C28.2094 26.309 30.2254 24.2941 30.3744 24.0715C29.7074 24.0159 29.1258 23.7393 28.3819 23.7393L27.8838 26.3959H27.8839Z"
                  fill="#3F77A5"
                />
              </svg>
            </Box>

            {/* Placeholder Description */}
            <Flex direction="column" gap="50" mb="10">
              <Text
                color=" #3F77A5"
                //   position="absolute"

                top="50%"
                left="16px"
                fontSize="36px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="normal"
              >
                Vision
              </Text>

              <Text
                maxW="90%"
                color=" #000000"
                //   position="absolute"
                top="70%"
                left="16px"
                fontSize="16px"
                //   fontStyle="normal"
                fontWeight="500"
                lineHeight="normal"
              >
                To redefine visual intelligence with AI-driven solutions that
                ensure safety, optimize operations, and drive innovation
                globally.
              </Text>
            </Flex>
          </Box>
          <Box
            width="392px"
            height="392px"
            borderRadius="24px"
            bg="#C8D6E5"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="space-between"
            // position="relative"
            boxShadow="md"
            p="4"
            mb={{ base: "4", md: "0" }}
            // bg="red"
          >
            {/* Icon in the Top-Left Corner */}
            <Box top="8%" left="8%">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.1249 11.8751C18.1249 10.2889 18.7733 9.14856 19.5881 8.33852C22.6806 5.26448 28.1249 7.31325 28.1249 11.8751C28.1249 13.2087 27.6897 14.1272 26.9431 15.0681C25.5218 16.8585 23.2459 17.2675 21.1035 16.3965C19.3245 15.6731 18.1251 13.8558 18.1251 11.8751H18.1249ZM6.79688 16.875C6.79688 17.3592 7.01542 17.3739 7.40306 17.7531L16.5037 26.8554C16.7572 27.1089 16.9536 27.3052 17.2069 27.5585C17.9998 28.3516 17.8639 28.5616 19.7813 27.3596L22.0928 25.8429C22.3734 25.656 22.5619 25.5202 22.8235 25.3237L25.6457 23.0677C26.39 22.3449 27.1691 21.7368 27.8789 20.8476C27.9986 20.6977 28.0868 20.6308 28.2239 20.4895C28.3794 20.3295 28.3799 20.2989 28.504 20.1446L29.393 19.0804C31.7639 16.1994 33.5012 12.4441 34.4064 8.85962C35.0872 6.16466 35.0629 4.21791 34.9195 1.56471C34.8402 0.0980017 34.7231 0 31.7186 0C28.1237 0 25.541 0.492802 22.3318 1.78482C20.0549 2.70142 17.6887 4.15886 15.9129 5.60041L12.3517 8.83586C12.336 8.85228 12.293 8.90137 12.2776 8.91814C11.099 10.2067 6.79706 15.8457 6.79706 16.8748L6.79688 16.875Z"
                  fill="#3F77A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.90051e-05 34.0625C9.90051e-05 34.5354 -0.0245324 35.0001 0.703229 35.0001C2.99954 35.0001 5.96545 33.6659 7.56003 32.2475C7.77857 32.053 7.86503 32.0541 8.05964 31.8097C8.90707 30.7456 9.21871 30.4287 9.21871 28.9844C9.21871 26.3911 4.42467 22.819 1.11952 29.9475C0.682967 30.8891 9.90051e-05 32.7605 9.90051e-05 34.0625Z"
                  fill="#3F77A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.546875 17.7344C0.546875 18.5495 1.79853 18.2291 2.23124 18.1689L5.7813 17.7344C5.13739 16.5175 6.10064 15.4353 6.89933 14.0869C7.29884 13.4127 8.46649 11.6821 9.00244 11.0338C9.16857 10.8327 9.28351 10.657 9.4423 10.458L12.3437 7.10938C8.36673 7.10938 5.29235 8.76824 3.03552 11.7855C2.64264 12.311 2.23805 12.8729 1.92587 13.4886C1.37927 14.5664 0.546875 16.4773 0.546875 17.7346V17.7344Z"
                  fill="#3F77A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.7189 33.9063C16.7189 35.3545 21.1136 33.2744 21.8992 32.8367C25.6731 30.7337 27.8906 26.9291 27.8906 22.5781L24.8779 25.2685C23.1032 26.6551 21.732 27.6242 19.7697 28.7541C19.1892 29.0882 18.5457 29.5846 17.6727 29.3532C17.0618 29.1912 17.2565 29.1928 17.1646 29.977C17.1198 30.358 17.0611 30.8338 16.9974 31.2945L16.7188 33.9065L16.7189 33.9063Z"
                  fill="#3F77A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.375 11.7186C19.375 16.9387 26.875 16.9373 26.875 11.7186C26.875 10.4757 26.2543 9.39241 25.2677 8.71671C24.1741 7.96816 22.8969 7.89636 21.6503 8.3689C20.308 8.87777 19.3752 10.2529 19.3752 11.7186H19.375Z"
                  fill="#3F77A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.57831 21.8751C7.57831 22.8502 7.83946 23.1151 8.53526 23.8088L11.1914 26.4649C12.5166 27.7947 13.1854 27.5919 14.6875 26.797C14.4492 26.441 9.80386 21.8742 9.00395 21.0743C8.76131 20.8317 8.4591 20.4018 8.12509 20.3125C8.07758 20.8832 7.57812 21.191 7.57812 21.8751H7.57831Z"
                  fill="#3F77A5"
                />
              </svg>
            </Box>

            {/* Placeholder Description */}
            <Flex direction="column" gap="50" mb="1">
              <Text
                color=" #3F77A5"
                //   position="absolute"
                top="50%"
                left="16px"
                fontSize="36px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="normal"
              >
                Mission
              </Text>

              <Text
                maxW="90%"
                color=" #000000"
                //   position="absolute"
                top="70%"
                left="16px"
                fontSize="16px"
                //   fontStyle="normal"
                fontWeight="500"
                lineHeight="normal"
              >
                To deliver cutting-edge surveillance and automation technologies
                that provide actionable insights, seamless integration, and
                reliability, enhancing safety and efficiency across industries.
              </Text>
            </Flex>
          </Box>

          <Box position="relative" width="fit-content">
            {/* Background Image */}
            <Image
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              src="/assets/VMukti Brochure O2 1.png"
              alt="VMukti Background"
              zIndex={0}
              objectFit="cover"
              opacity={0.8} // Adjust for transparency effect
            />

            {/* Foreground Image */}
            <Image
              zIndex={1}
              position="relative"
              src="/assets/robowho.png"
              alt="VMukti"
            />
          </Box>
        </Flex>

        <VerticalTimeline />

        {/* // Certifications */}

        <Box
          py={12}
          // px={{ base: 4, md: 8 }}
          bg="#E7E7E7"
          position="relative" // To position the background image
        >
          <Heading
            // as="h2"
            textAlign="center"
            mb={10}
            fontSize={{ base: "2xl", md: "36px" }}
            fontWeight="600"
            lineHeight="normal"
            color="#000"
            zIndex={1}
          >
            Our Certifications
          </Heading>
          {/* Background Image in the Top Right Corner */}
          <Box
            position="absolute"
            top="0%"
            left="30%"
            // right="-0.1%"
            width="60%"
            // width={{ base: '200px', md: '300px', lg: '400px' }}
            // height={{ base: '200px', md: '300px', lg: '400px' }}
            opacity={0.8}
            // transform="rotate(2deg)"
            // bg="red"
            zIndex={0}
          >
            <Image
              // ml="2%"
              src="/assets/VMukti Brochure O2 2.png"
              alt="VMukti Brochure"
              width="100%"
              height="100%"
              objectFit="contain"
              // bg="blue"
            />
          </Box>
          <Image
            src={"/assets/Ellipse38.png" || "/placeholder.svg"}
            alt="ellipse38"
            position="absolute"
            left="12%" // Align to the left edge of the screen
            top="9%" // Align to the top edge of the screen
            transform="none" // Remove unwanted translations
            width={ellipseSize}
            opacity="1"
            pointerEvents="none"
            zIndex="0"
            // bg="red"
          />
          <Box justifyContent="center" alignItems="center">
            <Flex
              zIndex="3"
              gap={{ sm: "-10px", base: "5px", md: "50px" }}
              flexWrap="wrap"
              justifyContent="center"
              maxW="1200px"
              mx="auto"
              // bg="blue"
            >
              {certifications.map((cert, index) => (
                <Flex
                  key={index}
                  direction="column"
                  align="center"
                  justify="center"
                  p={4}
                  bg="#fff"
                  borderRadius="24px"
                  maxH="170px"
                  maxW="170px"
                  textAlign="center"
                  flexBasis={{
                    base: "calc(50% - 10px)",
                    md: index < 5 ? "18%" : "20%",
                  }} // Mobile: Exactly 2 per row
                  m="5px" // Reduced margin to prevent wrapping issues
                  zIndex="3"
                >
                  <Box mb={3} color={cert.color}>
                    {cert.icon}
                  </Box>
                  <Text
                    fontSize={{ base: "12px", md: "16px" }}
                    fontWeight="bold"
                    color="gray.700"
                    mb={1}
                  >
                    {cert.name}
                  </Text>
                  {cert.description && (
                    <Text
                      fontSize={{ base: "sm", md: "16px" }}
                      color="gray.600"
                    >
                      {cert.description}
                    </Text>
                  )}
                </Flex>
              ))}
            </Flex>
          </Box>
        </Box>

        {/* Reviews */}

        <Box pb="9%" maxW="100%">
          <Box
            maxW="container.xl"
            mx="auto"
            px={12}
            py={8}
            bg="#3F77A5"
            borderRadius="24px"
            bg="green"
          >
            <Heading
              color="white"
              mt="2%"
              mb="4%"
              textAlign="left"
              fontSize={{ base: "24px", md: "36px" }}
              fontWeight="600"
            >
              What Our Clients Say
            </Heading>

            {/* Main carousel container */}
            <Box position="relative" mb="5%" py="1%" bg="orange">
              {/* Navigation buttons container - placed in same row */}
              <Flex alignItems="center" justifyContent="space-between">
                <Box
                  mt={4}
                  overflow="hidden"
                  position="relative"
                  width="70%"
                  // height="100%"
                  bg="red"
                >
                  <Flex
                    transform={`translateX(-${
                      currentIndex * (100 / visibleCards)
                    }%)`}
                    transition="transform 0.5s ease-in-out"
                    width={`${(totalCards / visibleCards) * 100}%`}
                  >
                    {reviews.map((review) => (
                      <Box
                        key={review.id}
                        // flex={`0 0 3 3.33%`}
                        bg="white"
                        borderRadius="24px"
                        p={6}
                        minWidth="0"
                        mx={2}
                      >
                        {/* Review content - matches your image exactly */}
                        <Flex alignItems="flex-start" mb={4}>
                          <Icon
                            viewBox="0 0 24 24"
                            boxSize={8}
                            color="gray.500"
                            mr={4}
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                              clipRule="evenodd"
                            />
                          </Icon>
                          <Text fontSize="lg" fontWeight="600" color="gray.600">
                            Customer Reviews
                          </Text>
                        </Flex>
                        <Text fontSize="md" color="gray.700">
                          {review.text}
                        </Text>
                      </Box>
                    ))}
                  </Flex>
                </Box>

                <Box align="left" zIndex="1">
                  {/* Previous Button - loops back to last card */}
                  <IconButton
                    onClick={handlePrevious}
                    aria-label="Previous review"
                    icon={<ChevronLeftIcon />}
                    variant="ghost"
                    color="white"
                    _hover={{ bg: "rgba(255,255,255,0.1)" }}
                    size="lg"
                    mr="5px"
                  />

                  {/* Next Button - loops back to first card */}
                  <IconButton
                    onClick={handleNext}
                    aria-label="Next review"
                    icon={<ChevronRightIcon />}
                    variant="ghost"
                    color="white"
                    _hover={{ bg: "rgba(255,255,255,0.1)" }}
                    size="lg"
                    ml="5px"
                  />
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </PageContentWrapper>
    </Box>
  );
};
export default WhoWeare;
