import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import { auth } from '../../../firebase/clientApp';
import { FIREBASE_ERROR } from '../../../firebase/errors';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

type LoginProps = {

};

const Login: React.FC<LoginProps> = () => {

    const setAuthModalState = useSetRecoilState(authModalState);

    const [loginFrom, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //signin the user by firebase
        signInWithEmailAndPassword(loginFrom.email, loginFrom.password);
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // update form state
        setLoginForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <form onSubmit={onSubmit}>
            <Input
                required
                name="email"
                placeholder="email"
                type="email"
                mb={2}
                onChange={onChange}
                fontSize="10pt"
                _placeholder={{ color: "gray.500" }}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                _focus={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                bg="gray.50"
            />
            <Input
                required
                name="password"
                placeholder="password"
                type="password"
                mb={2}
                onChange={onChange}
                fontSize="10pt"
                _placeholder={{ color: "gray.500" }}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                _focus={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                bg="gray.50"
            />

            <Text textAlign="center" color="red" fontSize="10pt">
                {FIREBASE_ERROR[error?.message as keyof typeof FIREBASE_ERROR]}
            </Text>

            <Button
                width="100%"
                height="36px"
                type="submit"
                isLoading={loading}
                mt={2} mb={2}
            >
                Log In
            </Button>
            <Flex mt={2} mb={2} fontSize="9pt" justifyContent="center">
                <Text mr={1}>Forgot your passsword ?</Text>
                <Text
                    color="blue.500"
                    fontWeight={700}
                    cursor="pointer"
                    onClick={() =>
                        setAuthModalState((prev) => ({
                            ...prev,
                            view: "resetPassword"
                        }))
                    }
                >
                    RESET
                </Text>
            </Flex>
            <Flex fontSize="9pt" justifyContent="center">
                <Text mr={1}>New here ?</Text>
                <Text
                    color="blue.500"
                    fontWeight={700}
                    cursor="pointer"
                    onClick={() =>
                        setAuthModalState((prev) => ({
                            ...prev,
                            view: "signup"
                        }))
                    }
                >
                    SIGN UP
                </Text>
            </Flex>
        </form >
    )
}
export default Login;
