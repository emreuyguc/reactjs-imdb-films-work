import { Text, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Badge, Box, LinkOverlay, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import IFilm from "./IFilm";


const FilmCard = function (film: IFilm) {
    return <Link to={'/detail/' + film.id} style={{
        height:'300px',
        width:'100%',
    }}
    >

        <Card bg={"white"} w={'full'} h={'full'}  >
            <CardBody p={"0"} h={'full'} w={'full'}>
            <Stack alignItems={"center"} justifyContent={"space-between"} direction={"row"} width={"98%"} position={"absolute"} borderBottomRadius={10} left={1} top={0} p={2} bg={"blackAlpha.700"} color={"white"} fontSize={"xl"} spacing='3' >
                <Stack spacing={2}>
                    <Heading size='md'>{film.Title}</Heading>
                    <Text fontSize='sm'>{film.Crew}</Text>
                </Stack>
                <Stack spacing={2}>
                    <Badge colorScheme={"teal"}>
                    {film.CreateDate}
                    </Badge>
                    <Badge colorScheme={"teal"}>
                    {film.ImdbRate}
                    </Badge>
                </Stack>
            </Stack>
                <Image
                    src={film.Image}
                    borderRadius='lg'
                    height={'full'}
                    width={'full'}
                    objectFit={"contain"}
                />

            </CardBody>
        </Card></Link>
}

export default FilmCard;