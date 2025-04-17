import request, {Result} from "@/utils/request";
import {Pagination} from "@/services/type";

export interface Pokemon {
    number: number;
    name: string;
    types: string[];
    image: string;
}

class PokemonService {
    state = {
        baseApi:'/pokemon',
        pageParams:{
            pageNum: 1,
            pageSize: 20
        }
    }
    // 获取用户列表
    getPokemonList = (): Promise<Result<Pagination<Pokemon>>> => {
        return request.get(this.state.baseApi,{
            params: this.state.pageParams
        });
    }
}

export const pokemonService = new PokemonService();