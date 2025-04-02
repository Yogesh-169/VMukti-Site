import { Box, Flex, Image, List, ListItem, Text } from "@chakra-ui/react"
import { useState } from "react"

const SurveillanceSoftware = () => {
    const [imageHeight, setImageHeight] = useState("100dvh")

    const handleImageLoad = (event) => {
        setImageHeight(event.target.naturalHeight)
    }

    return (
        <Flex direction="column" position="relative" alignItems="center" gap={4} width="100%" borderRadius="24px" height={imageHeight}>{/* main box */}
            {/* heading text */}
            <Box fontSize={{ base: "24px", md: "48px" }} justifyContent="center">
                <Text as="span" color="#3F77A5">Deep Learning </Text>
                <Text as="span">Algorithms & </Text>
                <br />
                <Text as="span">Adaptive AI </Text>
                <Text as="span" color="#db7b3a">Surveillance Software.</Text>
            </Box>


            {/* main content */}
            <Flex direction="column" alignItems="center" justifyContent="center" width="100%" gap={4} >

                {/* first white box */}
                <Flex direction="column" justifyContent="center" width="100%" bg="white" borderRadius="24px" p={{base:"5%",md:"2%"}}>
                    <Flex direction="column" gap={4}>
                        {/* box heading */}
                        <Flex direction="column">
                            <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="700">Security That Gets Smarter</Text>
                            <Box width="20px" height="2px" bg="#3F77A5" />
                        </Flex>
                        {/* box content */}
                        <Text width={{ base: "100%", md: "15%" }} fontWeight={500} fontSize={{ base: "12px", md: "14px" }}>Want a system that learns your world? Our AI video surveillance keeps up, adapts, and stays ahead of trouble—all on its own.</Text>
                    </Flex>
                </Flex>

                {/* second white box */}
                <Flex direction="column" justifyContent="center" width="100%" bg="white" borderRadius="24px" p={{base:"5%",md:"2%"}} gap={4}>
                    {/* box heading */}
                    <Flex direction="column" width="100%">
                        <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="700">How It Helps You Out</Text>
                        <Box width="20px" height="2px" bg="#3F77A5" />
                    </Flex>

                    {/* box content */}
                    <List spacing={1} fontWeight={500} fontSize={{ base: "12px", md: "14px" }} styleType="disc" ml={{base:"5%",md:"2%"}}>
                        <ListItem>Self-Improving AI</ListItem>
                        <ListItem>Pattern Discovery</ListItem>
                        <ListItem>Smart Adaptation</ListItem>
                        <ListItem>Predictive Intelligence</ListItem>
                    </List>

                </Flex>
            </Flex>

            {/* background image */}
            <Box position={{ base: "static", sm: "absolute" }} width="auto" mx="-2%" overflow="visible" top={{ sm: "50%", md: "25%", lg: "0%" }}>
                <Image height="100%" src="../assets/surveillancemock.png" onLoad={handleImageLoad} />
            </Box>
        </Flex>
    )
}

export default SurveillanceSoftware