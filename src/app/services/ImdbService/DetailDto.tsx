import { IActor } from "../../components/FilmActor/IActor";

interface DetailDto{
    id:string,
    title:string,
    originalTitle:string,
    fullTitle:string,
    type:string,
    year:string,
    image:string,
    releaseDate:string,
    runtimeMins:string,
    runtimeStr:string,
    plot:string,
    plotLocal:string,
    awards:string,
    directors:string,
    directorList:Object[]
    writers:string,
    writerList:Object[],
    stars:string,
    starList:Object[],
    actorList:IActor[],
    fullCast?:string,
    genres:string,
    genreList:Object[],
    companies:string,
    companyList:Object[],
    imDbRating:string,
    similars:Object[],
    boxOffice:Object,
    keywords:string,
    keywordList:[],
    
}

export default DetailDto;