import HttpClient from './../../common/HttpClient';
import { ListDto } from './ListDto';
import DetailDto from './DetailDto';

class ImdbService{
    async getTop250Movies(): Promise<ListDto[]>  {
        let items:Array<ListDto> =  (await HttpClient.get('/Top250Movies')).data.items;
        return items;
    }
    async getMostPopularMovies(): Promise<ListDto[]>  {
        let items:Array<ListDto> =  (await HttpClient.get('/MostPopularMovies')).data.items;
        return items;
    }
    async getComingSoon(): Promise<ListDto[]>  {
        let items:Array<ListDto> =  (await HttpClient.get('/ComingSoon')).data.items;
        return items;
    }

    async getFromId(id?:string)  {
        let items:DetailDto =  (await HttpClient.get('/Title/@token@/'+id)).data;
        return items;
    }

}

export default new ImdbService();