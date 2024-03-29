// import {
//   Box,
//   Button,
//   Card,
//   CardBody,
//   Flex,
//   HStack,
//   Heading,
//   Image,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
// import style from "../CSS-Files/LandingPage.module.css";

// function LandingPage() {
//   return (
//     <div className={style.page}>
//       <div className={style.div1}>
//         <Flex justifyContent="space-between" alignItems="center" w="100%">
//           <HStack spacing="40px">
//             <Image
//               borderRadius="full"
//               border="4px solid #fff"
//               w="8vw"
//               src="/images/dp.jpeg"
//               objectFit="cover"
//               alt="profile pic"
//             />
//             <Box>
//               <Heading color="#fff">Dany Binu</Heading>
//               <Text color="#fff">@dabx</Text>
//             </Box>
//           </HStack>
//           <Button className="or-button" p="20px">
//             <a
//               href="https://drive.google.com/file/d/1bD8D1sY-0o8rz3D-U4QsNfiQaPc5dkyU/view?usp=sharing"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <Flex gap="10px" alignItems="center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M12 12v9m-4-4l4 4l4-4"
//                   />
//                 </svg>
//                 Download my resume
//               </Flex>
//             </a>
//           </Button>
//         </Flex>
//       </div>

//       {/********************** PROJECTS SECTION **********************/}

//       <section className={style.section}>
//         <Heading color="#fff" size="md">
//           Projects
//         </Heading>
//         <Flex gap="20px" mt="20px">
//           <Card
//             className="or-projects-card"
//             borderRadius="0.5rem"
//             overflow="hidden"
//           >
//             <CardBody p="0">
//               <Image
//                 className={style.img}
//                 src="/images/netflix.jpg"
//                 alt="metamask logo"
//                 objectFit="cover"
//                 loading="lazy"
//               />
//               <Stack mt="6" spacing="3" p="0 0 1.25rem 1.25rem">
//                 <Heading size="md" color="#fff">
//                   Netflix Clone
//                 </Heading>
//                 <Text>React js, CSS</Text>
//               </Stack>
//             </CardBody>
//           </Card>
//           <Card
//             className="or-projects-card"
//             borderRadius="0.5rem"
//             overflow="hidden"
//           >
//             <CardBody p="0">
//               <Image
//                 className={style.img}
//                 src="/images/orchestro.jpeg"
//                 alt="metamask logo"
//                 objectFit="contain"
//                 loading="lazy"
//               />
//               <Stack mt="6" spacing="3" p="0 0 1.25rem 1.25rem">
//                 <Heading size="md" color="#fff">
//                   Orchestro Carrier Portal
//                 </Heading>
//                 <Text>React js, Chakra UI, Spring Boot, PostgreSQL</Text>
//               </Stack>
//             </CardBody>
//           </Card>
//           {/* <Card
//             className="or-projects-card"
//             borderRadius="0.5rem"
//             overflow="hidden"
//           >
//             <CardBody p="0">
//               <Image
//                 className={style.img}
//                 src="/images/netflix.jpg"
//                 alt="metamask logo"
//                 objectFit="cover"
//                 loading="lazy"
//               />
//               <Stack mt="6" spacing="3" p="0 0 1.25rem 1.25rem">
//                 <Heading size="md" color="#fff">
//                   Netflix Clone
//                 </Heading>
//                 <Text>React js, CSS</Text>
//               </Stack>
//             </CardBody>
//           </Card> */}
//         </Flex>
//       </section>

//       {/********************** WHAT I KNOW **********************/}

//       <section className={style.section}>
//         <Heading color="#fff" size="md">
//           What I Know
//         </Heading>
//         <Flex gap="20px" mt="20px">
//           <Card className="or-card">
//             <CardBody borderRadius="20px">
//               <Heading size="md" textAlign="center">
//                 Frontend
//               </Heading>
//               <Flex gap="5px">
//                 <div className={style.box}>HTML</div>
//                 <div className={style.box}>CSS</div>
//               </Flex>
//               <div
//                 className={style.box}
//                 style={{ border: "1.5px solid rgb(1, 221, 255)" }}
//               >
//                 Chakra UI
//               </div>
//               <div
//                 className={style.box}
//                 style={{ border: "1.5px solid #F0DB4F" }}
//               >
//                 Javascript
//               </div>
//               <div
//                 className={style.box}
//                 style={{ border: "1.5px solid #61DBFB" }}
//               >
//                 React Js
//               </div>
//             </CardBody>
//           </Card>
//           <Card className="or-card">
//             <CardBody borderRadius="20px">
//               <Heading size="md">Backend</Heading>
//               <div className={style.box}>Express js</div>
//               <div
//                 className={style.box}
//                 style={{ border: "1.5px solid #3c873a" }}
//               >
//                 Node js
//               </div>
//               <div
//                 className={style.box}
//                 style={{ border: "1.5px solid #5e8d5a" }}
//               >
//                 Spring Boot
//               </div>
//             </CardBody>
//           </Card>
//           <Card className="or-card">
//             <CardBody borderRadius="20px">
//               <Heading size="md">Database</Heading>
//               <div className={style.box}>MySQL</div>
//               <div
//                 className={style.box}
//                 style={{ border: "1.5px solid #336791 " }}
//               >
//                 PostgreSQL
//               </div>
//               <div
//                 className={style.box}
//                 style={{ border: "1.5px solid #4db33d" }}
//               >
//                 MongoDB
//               </div>
//             </CardBody>
//           </Card>
//           <Card className="or-card">
//             <CardBody borderRadius="20px">
//               <Heading size="md">Devops</Heading>
//               <div className={style.box}>Docker</div>
//               <Flex gap="5px">
//                 <div className={style.box}>GIT</div>
//                 <div
//                   className={style.box}
//                   style={{ border: "1.5px solid #FF9900" }}
//                 >
//                   AWS
//                 </div>
//               </Flex>
//             </CardBody>
//           </Card>
//         </Flex>
//       </section>

//       {/********************** WEB3 **********************/}

//       <section className={style.section}>
//         <Heading color="#fff" size="md">
//           Web3
//         </Heading>
//         <Flex gap="20px" mt="20px">
//           <Stack>
//             <Box
//               maxW="18vw"
//               background="red"
//               height="100%"
//               borderRadius="0.5rem"
//               overflow="hidden"
//             >
//               <Image
//                 className={style.img}
//                 src="/images/Solidity.jfif"
//                 alt="solidity and ethereum logo"
//                 objectFit="cover"
//                 loading="lazy"
//               />
//             </Box>
//             <Heading size="sm" color="white">
//               Solidity
//             </Heading>
//           </Stack>
//           <Stack>
//             <Box
//               maxW="18vw"
//               background="red"
//               height="100%"
//               borderRadius="0.5rem"
//               overflow="hidden"
//             >
//               <Image
//                 className={style.img}
//                 src="/images/metamask.webp"
//                 alt="metamask logo"
//                 objectFit="cover"
//                 loading="lazy"
//               />
//             </Box>
//             <Heading size="sm" color="white">
//               Metamask
//             </Heading>
//           </Stack>
//         </Flex>
//       </section>

//       {/********************** Others **********************/}

//       <section className={style.section}>
//         <Heading color="#fff" size="md">
//           Others
//         </Heading>
//         <Flex gap="20px" mt="20px">
//           <Stack>
//             <Box
//               maxW="18vw"
//               background="#fff"
//               height="60%"
//               borderRadius="0.5rem"
//               overflow="hidden"
//               style={{ display: "flex", justifyContent: "center" }}
//             >
//               <Image
//                 className={style.img2}
//                 src="https://www.flowgear.net/wp-content/uploads/2019/03/Rest-API-Large.png"
//                 alt="solidity and ethereum logo"
//                 objectFit="contain"
//                 loading="lazy"
//               />
//             </Box>
//             <Heading size="sm" color="white">
//               REST API
//             </Heading>
//           </Stack>
//         </Flex>
//       </section>
//     </div>
//   );
// }

// export default LandingPage;

import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  // useBreakpointValue,
} from "@chakra-ui/react";
import style from "../CSS-Files/LandingPage.module.css";

function LandingPage() {
  // const columnCount = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4 });

  return (
    <Box
      className={style.page}
      mt={["15vw", "12vh", "12vh"]}
      p={["10px", "40px", "40px"]}
    >
      <Flex
        className={style.div1}
        justifyContent="space-between"
        alignItems="center"
        direction={["column", "column", "row"]}
        w="100%"
      >
        <Stack
          spacing={4}
          direction={["row", "column", "row"]}
          alignItems="center"
        >
          <Image
            borderRadius="full"
            border="4px solid #fff"
            w={["25vw", "30vw", "8vw"]}
            src="/images/dp.jpeg"
            objectFit="cover"
            alt="profile pic"
          />
          <Box>
            <Heading color="#fff">Dany Binu</Heading>
            <Text color="#fff">@dabx</Text>
          </Box>
        </Stack>
      </Flex>

      <Box mt={8}>
        {/* Projects Section */}
        <Flex mt="40px" flexDirection="column">
          <Heading color="#fff" size="md">
            Projects
          </Heading>
          <Flex gap="20px" mt="20px" flexDirection={["column", "row"]}>
            <Card
              className="or-projects-card"
              borderRadius="0.5rem"
              overflow="hidden"
              maxW={["100%", "20vw"]}
            >
              <CardBody p="0">
                <Image
                  className={style.img}
                  src="/images/netflix.jpg"
                  alt="Netflix Clone"
                  objectFit="cover"
                  loading="lazy"
                />
                <Stack mt="6" spacing="3" p="0 0 1.25rem 1.25rem">
                  <Heading size="md" color="#fff">
                    Netflix Clone
                  </Heading>
                  <Text>React js, CSS</Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              className="or-projects-card"
              borderRadius="0.5rem"
              overflow="hidden"
              maxW={["100%", "20vw"]}
            >
              <CardBody p="0">
                <Image
                  className={style.img}
                  src="/images/orchestro.jpeg"
                  alt="Orchestro Carrier Portal"
                  objectFit="contain"
                  loading="lazy"
                />
                <Stack mt="6" spacing="3" p="0 0 1.25rem 1.25rem">
                  <Heading size="md" color="#fff">
                    Orchestro Carrier Portal
                  </Heading>
                  <Text>React js, Chakra UI, Spring Boot, PostgreSQL</Text>
                </Stack>
              </CardBody>
            </Card>
          </Flex>
        </Flex>

        {/* What I Know Section */}
        <Flex mt="40px" flexDirection="column">
          <Heading color="#fff" size="md">
            What I Know
          </Heading>
          <Flex gap="20px" mt="20px" flexDirection={["column", "row"]}>
            <Card className="or-card" maxW={["100%", "14.5vw"]}>
              <CardBody borderRadius="20px">
                <Heading size="md" textAlign="center">
                  Frontend
                </Heading>
                <Flex gap="5px">
                  <div className={style.box}>HTML</div>
                  <div className={style.box}>CSS</div>
                </Flex>
                <div
                  className={style.box}
                  style={{ border: "1.5px solid rgb(1, 221, 255)" }}
                >
                  Chakra UI
                </div>
                <div
                  className={style.box}
                  style={{ border: "1.5px solid #F0DB4F" }}
                >
                  Javascript
                </div>
                <div
                  className={style.box}
                  style={{ border: "1.5px solid #61DBFB" }}
                >
                  React Js
                </div>
              </CardBody>
            </Card>
            <Card className="or-card" maxW={["100%", "14.5vw"]}>
              <CardBody borderRadius="20px">
                <Heading size="md">Backend</Heading>
                <div className={style.box}>Express js</div>
                <div
                  className={style.box}
                  style={{ border: "1.5px solid #3c873a" }}
                >
                  Node js
                </div>
                <div
                  className={style.box}
                  style={{ border: "1.5px solid #5e8d5a" }}
                >
                  Spring Boot
                </div>
              </CardBody>
            </Card>
            <Card className="or-card" maxW={["100%", "14.5vw"]}>
              <CardBody borderRadius="20px">
                <Heading size="md">Database</Heading>
                <div className={style.box}>MySQL</div>
                <div
                  className={style.box}
                  style={{ border: "1.5px solid #336791 " }}
                >
                  PostgreSQL
                </div>
                <div
                  className={style.box}
                  style={{ border: "1.5px solid #4db33d" }}
                >
                  MongoDB
                </div>
              </CardBody>
            </Card>
            <Card className="or-card" maxW={["100%", "14.5vw"]}>
              <CardBody borderRadius="20px">
                <Heading size="md">Devops</Heading>
                <div className={style.box}>Docker</div>
                <Flex gap="5px">
                  <div className={style.box}>GIT</div>
                  <div
                    className={style.box}
                    style={{ border: "1.5px solid #FF9900" }}
                  >
                    AWS
                  </div>
                </Flex>
              </CardBody>
            </Card>
          </Flex>
        </Flex>

        {/* Web3 Section */}
        <Flex mt="40px" flexDirection="column">
          <Heading color="#fff" size="md">
            Web3
          </Heading>
          <Flex gap="20px" mt="20px" flexDirection={["column", "row"]}>
            <Stack>
              <Box
                maxW={["100%", "20vw"]}
                background="red"
                height="100%"
                borderRadius="0.5rem"
                overflow="hidden"
              >
                <Image
                  className={style.img}
                  src="/images/Solidity.jfif"
                  alt="solidity and ethereum logo"
                  objectFit="cover"
                  loading="lazy"
                />
              </Box>
              <Heading size="sm" color="white">
                Solidity
              </Heading>
            </Stack>
            <Stack>
              <Box
                maxW={["100%", "20vw"]}
                background="red"
                height="100%"
                borderRadius="0.5rem"
                overflow="hidden"
              >
                <Image
                  className={style.img}
                  src="/images/metamask.webp"
                  alt="metamask logo"
                  objectFit="cover"
                  loading="lazy"
                />
              </Box>
              <Heading size="sm" color="white">
                Metamask
              </Heading>
            </Stack>
          </Flex>
        </Flex>

        {/* Others Section */}
        <Flex mt="40px" flexDirection="column">
          <Heading color="#fff" size="md">
            Others
          </Heading>
          <Flex gap="20px" mt="20px" flexDirection={["column", "row"]}>
            <Stack>
              <Box
                maxW={["100%", "18vw"]}
                background="#fff"
                height="60%"
                borderRadius="0.5rem"
                overflow="hidden"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Image
                  className={style.img2}
                  src="https://www.flowgear.net/wp-content/uploads/2019/03/Rest-API-Large.png"
                  alt="solidity and ethereum logo"
                  objectFit="contain"
                  loading="lazy"
                />
              </Box>
              <Heading size="sm" color="white">
                REST API
              </Heading>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default LandingPage;
