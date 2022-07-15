import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex,
    Box,
    Divider,
    Text,
    Input,
    Stack,
    Checkbox,
    Icon
} from '@chakra-ui/react';
import { BsFillEyeFill, BsFillPersonFill } from 'react-icons/bs';
import { HiLockClosed } from 'react-icons/hi';

type CreateCommunityModalProps = {
    open: boolean;
    handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({ open, handleClose }) => {

    const [communityName, setCommunityName] = useState('');
    const [characterRemaining, setCharacterRemaining] = useState(21);
    const [communityType, setCommunityType] = useState('public');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 21) return;
        setCommunityName(event.target.value);
        setCharacterRemaining(21 - event.target.value.length);
    };

    const onCommunityTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCommunityType(event.target.name);
    };

    return (
        <Flex align="center">

            <Modal isOpen={open} onClose={handleClose} size="lg">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader
                        display="flex"
                        flexDirection="column"
                        fontSize={15}
                        padding={3}>
                        Create a Community
                    </ModalHeader>

                    <Box pl={3} pr={3}>
                        <Divider />
                        <ModalCloseButton />
                        <ModalBody
                            display="flex"
                            flexDirection="column"
                            padding="10pt 0pt">
                            <Text fontWeight={600} fontSize={15}>Name</Text>
                            <Text fontSize={11} color="gray.500">
                                Community name include capitalization cannot be changed.
                            </Text>
                            <Text
                                position="relative"
                                top="20pt"
                                left="10pt"
                                width="20pt"
                                color="gray.200">r/</Text>

                            <Input
                                position="relative"
                                value={communityName}
                                size="sm"
                                pl="22pt"
                                onChange={handleChange} />

                            <Text fontSize={12} color="gray.500">{characterRemaining} Character Remaining</Text>

                            <Box mt={4} mb={4}>
                                <Text fontWeight={600} fontSize={15}>Community Type</Text>
                                <Stack spacing={2}>
                                    <Checkbox
                                        name='public'
                                        isChecked={communityType === 'public'}
                                        onChange={onCommunityTypeChange}
                                    >
                                        <Flex align="center">
                                            <Icon as={BsFillPersonFill} color="gray.500" mr={2}></Icon>
                                            <Text fontSize="10pt" mr={1}>Public</Text>
                                            <Text fontSize="8pt" color="gray.500" pt={1}>Anyone can view, post and comment to this community</Text>
                                        </Flex>
                                    </Checkbox>
                                    <Checkbox
                                        name='restricted'
                                        isChecked={communityType === 'restricted'}
                                        onChange={onCommunityTypeChange}
                                    >
                                        <Flex align="center">
                                            <Icon as={BsFillEyeFill} color="gray.500" mr={2}></Icon>
                                            <Text fontSize="10pt" mr={1}>Restricted</Text>
                                            <Text fontSize="8pt" color="gray.500" pt={1}>Anyone can view this community but only approved user can post</Text>
                                        </Flex>
                                    </Checkbox>
                                    <Checkbox
                                        name='private'
                                        isChecked={communityType === 'private'}
                                        onChange={onCommunityTypeChange}
                                    >
                                        <Flex align="center">
                                            <Icon as={HiLockClosed} color="gray.500" mr={2}></Icon>
                                            <Text fontSize="10pt" mr={1}>Private</Text>
                                            <Text fontSize="8pt" color="gray.500" pt={1}>Only approved user can see and post this community</Text>
                                        </Flex>
                                    </Checkbox>
                                </Stack>
                            </Box>
                        </ModalBody>

                    </Box>
                    <ModalFooter bg="gray.100" borderRadius="0px,0px,10px,10px">
                        <Button variant='outline' height="30px" mr={3} onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button height="30px" onClick={() => { }}>Create Community</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    );
};

export default CreateCommunityModal;