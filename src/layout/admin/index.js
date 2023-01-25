import { FiMenu } from 'react-icons/fi'
import { Flex, Text, IconButton, Switch, Stack, useColorMode, Button } from '@chakra-ui/react'
import Sidebar from '../../component/Sidebar'

export default function AdminLayout(props) {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    return (
        <Flex w="100%">
            <Sidebar />

            <Flex flexGrow={1} padding={4}>
                {props.children}
            </Flex>
        </Flex>
    )
}