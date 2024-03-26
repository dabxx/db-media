import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import style from "../CSS-Files/SideNav.module.css";

function SideNav() {
  return (
    <div>
      <Box className={style.nav}>
        <Box>
          <Image
            textAlign="center"
            w="10vw"
            objectFit="cover"
            src="/images/logo-trans.png"
            alt="db media logo"
          />
        </Box>
        <Box className="card">
          <ul>
            <li>
              <a href="/">
                <HStack spacing="1rem">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentcolor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <path d="M9 22V12h6v10" />
                    </g>
                  </svg>
                  <Text>Home</Text>
                </HStack>
              </a>
            </li>
          </ul>

          <Text mt="30px">Socials</Text>

          <ul>
            <li>
              <a
                href="https://www.instagram.com/_dabx_/"
                target="_blank"
                rel="noreferrer"
              >
                <HStack spacing="1rem">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="#E1306C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01" />
                    </g>
                  </svg>
                  <Text>Instagram</Text>
                </HStack>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dabxx"
                target="_blank"
                rel="noreferrer"
              >
                <HStack spacing="1rem">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="#fafbfc"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65c-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </g>
                  </svg>
                  <Text>Github</Text>
                </HStack>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/dany-binu"
                target="_blank"
                rel="noreferrer"
              >
                <HStack spacing="1rem">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="#0a66c2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </g>
                  </svg>
                  <Text>LinkedIn</Text>
                </HStack>
              </a>
            </li>
          </ul>
        </Box>
      </Box>
    </div>
  );
}

export default SideNav;
