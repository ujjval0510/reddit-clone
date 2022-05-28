import { Flex, Icon, MenuItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import CreateCommunityModal from '../../Modal/CreateCommunity/CreateCommunityModal';
import { GrAdd } from 'react-icons/gr';
type CommunitiesItemProps = {

};

const CommunitiesItem: React.FC<CommunitiesItemProps> = () => {
    const [open, setModal] = useState(false);
    return (
        <>
            {/* <CreateCommunityModal open={open} /> */}
            <MenuItem>
                <Flex align="center">
                    <Icon as={GrAdd} mr={2} fontSize={20}></Icon>
                    Create Community
                </Flex>
            </MenuItem>
        </>
    );
};
export default CommunitiesItem;