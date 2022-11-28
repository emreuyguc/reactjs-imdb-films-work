import FilmList from "../../components/FilmList/FilmList";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect, useState } from 'react';
import { Box, CircularProgress, Flex, IconButton,Text } from "@chakra-ui/react";
import { ListDto } from '../../services/ImdbService/ListDto';
import ImdbService from "../../services/ImdbService/ImdbService";
import { ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import IFilm from "../../components/FilmList/FilmCard/IFilm";
import Pagination from "../../components/Pagination/Pagination";
import AppSpinner from "../../components/AppSpinner/AppSpinner";

const PageTop250 = function (props?: any) {

    const [filmData, setFilmData] = useState<IFilm[]>([]);

    const [listedFilms,setListedFilms] = useState<IFilm[]>([]);
    
    

    const currentPageState = useState(1)
    const [currentPage, setCurrentPage] = currentPageState;
    
    const pageItemCount  = 20;

    useEffect(() => {
        if(filmData.length){
            setListedFilms(filmData.slice(((currentPage-1)*pageItemCount),((currentPage-1)*pageItemCount) + pageItemCount));
        }
    },[filmData,currentPage]);


    useEffect(() => {

         ImdbService.getTop250Movies().then((data) => {
            setFilmData((data as ListDto[]).map((dto) => {
                return {
                    id: dto.id,
                    Title: dto.title,
                    Crew: dto.crew,
                    Image: dto.image,
                    CreateDate: Number(dto.year),
                    ImdbRate: Number(dto.imDbRating)
                };
            }));
         }).catch((error) => {
            alert(error)
        });


    }, []);


    return <>
        <NavBar />
        <Box >
        {!(listedFilms.length) ? 
        <AppSpinner /> 
        : 
        <>
             <FilmList films={listedFilms}  />

             <Pagination currentPageState={currentPageState} dataCount={filmData.length} pageItemCount={pageItemCount} /> 
        </>
        
        }

        </Box>
    </>
}

export default PageTop250;