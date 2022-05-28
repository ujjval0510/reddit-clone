import { Flex } from '@chakra-ui/react';
import { signOut, User } from 'firebase/auth';
import React from 'react';
import { Button, Text } from '@chakra-ui/react';;
import { auth } from '../../../firebase/clientApp';
import AuthModal from '../../Modal/Auth/AuthModal';
import AuthButton from './AuthButton';
import Icons from './Icons';
import UserMenu from './ProfileMenu/UserMenu';

type RightContentProps = {
    user?: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
    return (
        <>
            <AuthModal />
            <Flex justify="center" align="center">
                {user ? <Icons /> : <AuthButton />}
                <UserMenu />
            </Flex>
        </>
    )
}
export default RightContent;