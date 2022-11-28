import { SimpleGrid } from "@chakra-ui/react";
import FilmCard from "./FilmCard/FilmCard";
import IFilm from "./FilmCard/IFilm";


const FilmList = function ( {films} : {films:IFilm[]}) {
    return <SimpleGrid columns={{
        base : 4,
        lg : 4,
        md : 3,
        sm : 2
    }} gap={'50px'} mt={4}>
            {
                films.map((film) => {
                    return <FilmCard id={film.id}
                        Title={film.Title}
                        FullTitle={film.FullTitle}
                        Image={film.Image}
                        ImdbRate={film.ImdbRate}
                        Crew={film.Crew}
                        CreateDate={film.CreateDate} />
                })
            }
    </SimpleGrid>

}

export default FilmList;