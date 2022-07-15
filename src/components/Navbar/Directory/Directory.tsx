import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Icon, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react';
import React from 'react';
// import UserList from './UserList';
// import NoUserList from './NoUserList';
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import { auth } from "../../../firebase/clientApp";
import { TiHome } from 'react-icons/ti';
import CommunitiesItem from './CommunitiesItem';

const Directory: React.FC = () => {
    const [authModal, setModalState] = useRecoilState(authModalState);
    const [user] = useAuthState(auth);
    return (
        <Menu>
            <MenuButton
                cursor="pointer"
                padding="0pt 6pt"
                borderRadius="4pt"
                mr={2}
                ml={{ base: 0, md: 2 }}
                _hover={{ outline: "1pt solid", outlineColor: "gray.200" }}>

                <Flex
                    alignItems="center"
                    justify="space-between"
                    width={{ base: "auto", lg: "200pt" }}>
                    <Flex alignItems="center">
                        <Icon fontSize={24} mr={{ base: 1, md: 2 }} as={TiHome}></Icon>
                        <Flex display={{ base: "none", md: "unset" }}>
                            <Text fontWeight={600} fontSize="10pt">Home</Text>
                        </Flex>
                    </Flex>
                    <ChevronDownIcon color="gray.500" />
                </Flex>
            </MenuButton>
            <MenuList>
                <CommunitiesItem />
            </MenuList>
        </Menu>
    )
}
export default Directory;