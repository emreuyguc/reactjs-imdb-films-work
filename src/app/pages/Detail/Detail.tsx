import { Box, Breadcrumb, Text, BreadcrumbItem, BreadcrumbLink, Flex, Heading, Image, Spinner, Thead, Table, Tfoot, Td, TableCaption, TableContainer, Tbody, Th, Tr, SimpleGrid } from "@chakra-ui/react";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect, useState } from 'react';
import ImdbService from "../../services/ImdbService/ImdbService";
import { useParams } from "react-router-dom";
import DetailDto from './../../services/ImdbService/DetailDto';
import AppSpinner from "../../components/AppSpinner/AppSpinner";
import FilmActor from "../../components/FilmActor/FilmActor";

const PageDetail = function () {
    const { id } = useParams();

    const [filmDetail, setFilmDetail] = useState<DetailDto>();

    useEffect(function () {

        ImdbService.getFromId(id).then((response) => {
            setFilmDetail(response);
        }).catch((error) => {
            alert(error)
        });

    }, []);

    return <>
        <NavBar />
        <Box>
            <Breadcrumb color={"white"} display={'inline-block'} my={2} p={2} borderRadius={6}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Films</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>{!filmDetail ? 'Loading..' : filmDetail.title}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Box>
        <Box w={'full'}>
            {!filmDetail ? <AppSpinner /> : <Flex direction={'row'} color={"white"} justifyContent={"space-between"} wrap={'wrap'}>
                <Box flex={"2"} background={"gray"}>
                    <Image src={filmDetail.image} />
                </Box>
                <Box border={'1px solid gray'} flex={"3"} ml={2} p={2} width={'full'}>
                    <Heading>
                        {filmDetail.fullTitle}
                    </Heading>
                    <Text>
                        {filmDetail.plotLocal}
                    </Text>
                    <TableContainer>
                        <Table >
                            <Thead>
                                <Tr>
                                    <Th>Info</Th>
                                    <Th>Data</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Year</Td>
                                    <Td>{filmDetail.year}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Writers</Td>
                                    <Td>{filmDetail.writers}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Runtime</Td>
                                    <Td>{filmDetail.runtimeStr}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Release Date</Td>
                                    <Td>{filmDetail.releaseDate}</Td>
                                </Tr>
                                <Tr>
                                    <Td>IMDB Rating</Td>
                                    <Td>{filmDetail.imDbRating}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Genres</Td>
                                    <Td>{filmDetail.genres}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Directors</Td>
                                    <Td>{filmDetail.directors}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Companies</Td>
                                    <Td>{filmDetail.companies}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Awards</Td>
                                    <Td>{filmDetail.awards}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                    <SimpleGrid columns={{
                        'base' : 2,
                        'lg': 3,
                        'md':2,
                        'sm':1,
                    }} gap={10} py={12}>
                        {filmDetail.actorList.map((actor) => {
                            return <FilmActor name={actor.name} image={actor.image} actor={actor.asCharacter} />
                        })}
                    </SimpleGrid>
                </Box>
            </Flex>}
        </Box>
    </>
}
export default PageDetail;