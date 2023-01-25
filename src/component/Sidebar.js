import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    useColorMode,
    Switch
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiDollarSign,
    FiBriefcase,
    FiSettings
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from '../component/NavItem'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark'
    return (
        <Flex
            pos="sticky"
            // left="5"
            h="100vh"
            // marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                {/* <NavItem navSize={navSize} icon={FiHome} title="Эхлэл" description="" /> */}
                <NavItem navSize={navSize} icon={FiCalendar} link="/admin/card" title="Бүтээгдэхүүн" active />
                <NavItem navSize={navSize} icon={FiUser} link="/admin/user" title="Хэрэглэгч" />
                {/* <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" />
                <NavItem navSize={navSize} icon={FiDollarSign} title="Данс" />
                <NavItem navSize={navSize} icon={FiBriefcase} title="Зарлал" />
                <NavItem navSize={navSize} icon={FiSettings} title="Тохиргоо" /> */}

            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Text>Харанхуй горим</Text><Switch
                    color='blue'
                    isChecked={isDark}
                    onChange={toggleColorMode}></Switch>
                <Flex mt={4} align="center">
                    <Avatar size="md" src="zurag1.png" />
                    <Flex flexDir="column" ml={3} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">С.Эрдэнэбат</Heading>
                        <Text color="red">Хэрэглэгч</Text>
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    )
}