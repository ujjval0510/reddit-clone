import { Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import { auth } from '../../../firebase/clientApp';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';
import { useAuthState } from 'react-firebase-hooks/auth';
import ResetPassword from './ResetPassword';

const AuthModal: React.FC = () => {

    const [modalState, setModalState] = useRecoilState(authModalState);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (user) handleClose();
        console.log("user", user);
    }, [user]);

    const handleClose = () => {
        setModalState((prev) => (
            {
                ...prev,
                open: false,
            }
        ));
    };

    return (
        <>
            <Modal isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">
                        {modalState.view === "login" && "Login"}
                        {modalState.view === "signup" && "Sign Up"}
                        {modalState.view === "resetPassword" && "Reset Password"}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        pb={6}
                    >
                        <Flex
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            width="70%">
                            {modalState.view === "login" || modalState.view === "signup" ? (
                                <>
                                    <OAuthButtons />
                                    <Text
                                        fontWeight={700}
                                        color="gray.500">
                                        OR
                                    </Text>
                                    <AuthInputs />
                                </>
                            ) : (
                                <ResetPassword />
                            )}
                        </Flex>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default AuthModal;