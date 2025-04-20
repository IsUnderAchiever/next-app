import request, { Result } from "@/utils/request";
import { PageEnum, PageParams, Pagination } from "@/services/type";

export interface Pokemon {
    number: number;
    name: string;
    image: string;
    types: PokemonType[];
}

export interface PokemonType {
    name: string;
    name_en: string;
    color: string;
}

class PokemonService {
    state = {
        baseApi: '/pokemon',
        pageParams: {
            pageNum: PageEnum.PAGE_NUM,
            pageSize: PageEnum.PAGE_SIZE
        }
    }
    // 获取用户列表
    getPokemonList = (page: PageParams): Promise<Result<Pagination<Pokemon>>> => {
        return request.get(this.state.baseApi, {
            // 是否传了参数，没传参数按默认值请求
            params: page ? page : this.state.pageParams
        });
    }
}

export const pokemonService = new PokemonService();