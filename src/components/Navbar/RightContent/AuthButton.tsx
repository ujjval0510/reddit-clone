import { Button } from '@chakra-ui/react';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';

const AuthButton: React.FC = () => {
    const setAuthModalState = useSetRecoilState(authModalState);

    return (
        <>
            <Button variant="outline"
                height="26px"
                display={{ base: "none", sm: "flex" }}
                width={{ base: "70px", md: "110px" }}
                onClick={() => setAuthModalState({ open: true, view: "login" })}
            >
                Log In
            </Button>
            <Button
                height="26px"
                display={{ base: "none", sm: "flex" }}
                width={{ base: "70px", md: "110px" }}
                onClick={() => setAuthModalState({ open: true, view: "signup" })}
            >
                Sign Up
            </Button>
        </>
    );
};
export default AuthButton;