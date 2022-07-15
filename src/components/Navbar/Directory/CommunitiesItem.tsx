import { Flex, Icon, MenuItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import CreateCommunityModal from '../../Modal/CreateCommunity/CreateCommunityModal';
import { GrAdd } from 'react-icons/gr';
type CommunitiesItemProps = {

};

const CommunitiesItem: React.FC<CommunitiesItemProps> = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
            <MenuItem
                width="100%"
                fontSize="10pt"
                _hover={{ bg: "gray.200" }}
                onClick={() => setOpen(true)}
            >
                <Flex align="center">
                    <Icon as={GrAdd} mr={2} fontSize={20}></Icon>
                    Create Community
                </Flex>
            </MenuItem>
        </>
    );
};
export default CommunitiesItem;