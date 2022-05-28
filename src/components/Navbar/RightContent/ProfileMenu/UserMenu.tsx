import { Text, Box, Flex, Icon, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import React from 'react';
import { IoSparkles } from 'react-icons/io5';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaRedditSquare } from "react-icons/fa";
import { VscAccount } from 'react-icons/vsc';
import UserList from './UserList';
import NoUserList from './NoUserList';
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { authModalState } from "../../../../atoms/authModalAtom";
import { auth } from "../../../../firebase/clientApp";

type UserMenuProps = {};

const UserMenu: React.FC<UserMenuProps> = () => {
    const [authModal, setModalState] = useRecoilState(authModalState);
    const [user] = useAuthState(auth);
    return (
        <Menu>
            <MenuButton
                cursor="pointer"
                padding="0px 6px"
                borderRadius="4px"
                _hover={{ outline: "1px solid", outlineColor: "gray.200" }}>

                <Flex alignItems="center">
                    <Flex alignItems="center">
                        {user ? (
                            <>
                                <Icon
                                    fontSize={24}
                                    mr={1}
                                    color="gray.300"
                                    as={FaRedditSquare}
                                />
                                <Box
                                    display={{ base: "none", lg: "flex" }}
                                    flexDirection="column"
                                    fontSize="8pt"
                                    alignItems="flex-start"
                                    mr={8}
                                >
                                    <Text fontWeight={700}>
                                        {user?.displayName || user?.email?.split("@")[0]}
                                    </Text>
                                    <Flex alignItems="center">
                                        <Icon as={IoSparkles} color="brand.100" mr={1} />
                                        <Text color="gray.400">1 karma</Text>
                                    </Flex>
                                </Box>
                            </>
                        ) : (
                            <Icon fontSize={24} mr={1} color="gray.400" as={VscAccount} />
                        )}
                    </Flex>
                    <ChevronDownIcon color="gray.500" />
                </Flex>
            </MenuButton>
            <MenuList>
                {user ? <UserList /> : <NoUserList setModalState={setModalState} />}
            </MenuList>
        </Menu>
    )
}
export default UserMenu;