import { Avatar, Box, Button, Divider, Flex, Heading, Link, MenuDivider, Text } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";


interface NavButtonParams {
    title: string,
    path: string
}

const NavButton = function (args: NavButtonParams) {
    const navigate = useNavigate();


    return <Heading h={'full'} size={'md'} color={'white'} as={RouterLink} to={args.path} textDecorationLine={'underline'}>
        {args.title}
    </Heading>
}

const NavBar = function () {
    return <Flex justifyContent={{
        base : "space-between",
        sm : 'center'
    }} alignItems={"center"} px={4} style={{

        backgroundImage: 'linear-gradient(to right, #868f96 0%, #596164 100%)'

    }} borderRadius={8} wrap={'wrap'}>

        <Flex flex={'1'} gap={{
            base : 20,
            sm : 10
        }} >
            <NavButton title={"Top 250"} path={"/Top250"} />
            <NavButton title={"Most Popular"} path={"/most-popular"} />
        </Flex>

        <Flex gap={2} py={2} as={Link} href={'https://github.com/emreuyguc'}>
            <Avatar size='md' name='Emre Utku Uyguç' src='https://avatars.githubusercontent.com/u/4369721?v=4' />
            <Flex color={'white'} direction={"column"} justifyContent={"space-evenly"}>
                <Heading size={'md'}>
                    Emre Utku Uyguç
                </Heading>
                <Text>
                    IMDB FILM EXAMPLE
                </Text>
            </Flex>
        </Flex>
    </Flex>;
}

export default NavBar;