'use client'
import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faBookOpen,
    faFistRaised,
    faSitemap,
    faInfoCircle,
    faTools,
    faUsers,
    faPalette,
    faTrophy,
    faSearch
} from '@fortawesome/free-solid-svg-icons'
import './page.module.css'
import {Pokemon, pokemonService} from "@/services/pokemon";
import {useRequest} from "ahooks";
import {message, Spin} from "antd";
import {Result} from "@/utils/request";
import {PageParams, Pagination} from "@/services/type";

const Pokedex = () => {
    // const [filteredPokemon, setFilteredPokemon] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [itemsPerPage] = useState(20);
    const {data: pokemonData, loading} = useRequest<Result<Pagination<Pokemon>>, [PageParams]>(pokemonService.getPokemonList,{
        defaultParams:[{
            pageNum:1,
            pageSize:20
        }],
        onSuccess: (res) => {
            return res.data
        }
    })

    if (loading) {
        return <div>
            <Spin/>
        </div>;
    }
    if (pokemonData?.code !== 200) {
        message.error(pokemonData?.message)
    }

    // const renderPokemonCards = () => {
    //     const startIndex = (currentPage - 1) * itemsPerPage;
    //     const endIndex = startIndex + itemsPerPage;
    //     const pokemonToShow = filteredPokemon.slice(startIndex, endIndex);
    //
    //     return pokemonToShow.map((pokemon) => (
    //         <div key={pokemon.number} className="pokedex-card bg-white rounded-lg shadow-md flex flex-col">
    //             <div className="pokedex-image relative">
    //       <span
    //           className="pokedex-number absolute top-1 right-1 bg-black/60 text-white px-2 py-1 rounded text-xs font-semibold">
    //         #{String(pokemon.number).padStart(3, '0')}
    //       </span>
    //                 <img src={pokemon.image} alt={pokemon.name} className="w-full h-40 object-contain"/>
    //             </div>
    //             <div className="pokedex-info p-2 flex-grow flex flex-col">
    //                 <h3 className="pokedex-name text-primary font-semibold">{pokemon.name}</h3>
    //                 <div className="pokedex-types flex gap-1 mb-1">
    //                     {pokemon.types.map((type) => (
    //                         <span key={type}
    //                               className={`type ${type.toLowerCase()} px-2 py-1 rounded text-white text-xs font-semibold`}>
    //             {type}
    //           </span>
    //                     ))}
    //                 </div>
    //             </div>
    //         </div>
    //     ));
    // };
    //
    // const updatePagination = () => {
    //     const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);
    //
    //     const startPage = Math.max(1, currentPage - 2);
    //     const endPage = Math.min(totalPages, startPage + 4);
    //
    //     const paginationNumbers = [];
    //     for (let i = startPage; i <= endPage; i++) {
    //         paginationNumbers.push(
    //             <button
    //                 key={i}
    //                 className={`pagination-number px-2 py-1 rounded border border-gray-300 bg-white text-primary cursor-pointer transition duration-300 ${
    //                     i === currentPage ? 'bg-primary text-white border-primary' : ''
    //                 }`}
    //                 onClick={() => setCurrentPage(i)}
    //             >
    //                 {i}
    //             </button>
    //         );
    //     }
    //
    //     return paginationNumbers;
    // };
    //
    // const filterPokemon = () => {
    //     let filtered = [...pokemonData];
    //
    //     if (typeFilter !== 'all') {
    //         filtered = filtered.filter((pokemon) =>
    //             pokemon.types.some((type) => type.toLowerCase() === typeFilter)
    //         );
    //     }
    //
    //     if (sortFilter === 'number') {
    //         filtered.sort((a, b) => a.number - b.number);
    //     } else if (sortFilter === 'name') {
    //         filtered.sort((a, b) => a.name.localeCompare(b.name));
    //     } else if (sortFilter === 'type') {
    //         filtered.sort((a, b) => a.types[0].localeCompare(b.types[0]));
    //     }
    //
    //     setCurrentPage(1);
    //     setFilteredPokemon(filtered);
    // };

    return (
        <main className="main">
            <div className="container">
                {/* 英雄区 */}
                <section className="hero">
                    <div className="hero-content">
                        <h1 className="hero-title">探索宝可梦的世界</h1>
                        <p className="hero-subtitle">发现、收集、培养你的专属宝可梦</p>
                        <div className="hero-search">
                            <input type="text" className="hero-search-input" placeholder="搜索宝可梦、技能、道具..."/>
                            <button className="hero-search-btn">
                                <FontAwesomeIcon icon={faSearch} className="text-primary"/>
                            </button>
                        </div>
                    </div>
                    <div className="hero-background"></div>
                </section>

                {/* 分类导航区 */}
                <section className="categories">
                    <h2 className="section-title">探索分类</h2>
                    <div className="category-grid">
                        <a href="#" className="category-card">
                            <div className="category-icon">
                                <FontAwesomeIcon icon={faBookOpen} className="text-primary"/>
                            </div>
                            <h3 className="category-title">图鉴</h3>
                            <p className="category-description">浏览所有宝可梦的详细信息</p>
                        </a>
                        <a href="#" className="category-card">
                            <div className="category-icon">
                                <FontAwesomeIcon icon={faFistRaised} className="text-primary"/>
                            </div>
                            <h3 className="category-title">对战攻略</h3>
                            <p className="category-description">学习对战技巧和阵容搭配</p>
                        </a>
                        <a href="#" className="category-card">
                            <div className="category-icon">
                                <FontAwesomeIcon icon={faSitemap} className="text-primary"/>
                            </div>
                            <h3 className="category-title">进化路线</h3>
                            <p className="category-description">查看宝可梦的进化条件</p>
                        </a>
                        <a href="#" className="category-card">
                            <div className="category-icon">
                                <FontAwesomeIcon icon={faInfoCircle} className="text-primary"/>
                            </div>
                            <h3 className="category-title">百科信息</h3>
                            <p className="category-description">异常状态、属性克制、性格系统、佩戴道具</p>
                        </a>
                        <a href="#" className="category-card">
                            <div className="category-icon">
                                <FontAwesomeIcon icon={faTools} className="text-primary"/>
                            </div>
                            <h3 className="category-title">常用工具</h3>
                            <p className="category-description">孵蛋指南、道具查询、场景查询</p>
                        </a>
                        <a href="#" className="category-card">
                            <div className="category-icon">
                                <FontAwesomeIcon icon={faUsers} className="text-primary"/>
                            </div>
                            <h3 className="category-title">社区</h3>
                            <p className="category-description">与其他训练师交流经验</p>
                        </a>
                        <a href="#" className="category-card">
                            <div className="category-icon">
                                <FontAwesomeIcon icon={faPalette} className="text-primary"/>
                            </div>
                            <h3 className="category-title">皮肤工坊</h3>
                            <p className="category-description">自定义你的宝可梦外观</p>
                        </a>
                        <a href="#" className="category-card">
                            <div className="category-icon">
                                <FontAwesomeIcon icon={faTrophy} className="text-primary"/>
                            </div>
                            <h3 className="category-title">成就系统</h3>
                            <p className="category-description">完成挑战获得徽章</p>
                        </a>
                    </div>
                </section>

                {/* 热门宝可梦展示区 */}
                <section className="featured-pokemon">
                    <h2 className="section-title">热门宝可梦</h2>
                    <div className="pokemon-grid">
                        {/* 热门宝可梦卡片 */}
                        <div className="pokemon-card">
                            <div className="pokemon-image">
                                <img
                                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                                    alt="皮卡丘"/>
                            </div>
                            <div className="pokemon-info">
                                <h3 className="pokemon-name">皮卡丘</h3>
                                <div className="pokemon-types">
                                    <span className="type electric">电</span>
                                </div>
                                <p className="pokemon-description">皮卡丘是一只电系宝可梦，脸颊上有两个红色的圆形电气囊，能够储存和释放电能。</p>
                            </div>
                        </div>

                        <div className="pokemon-card">
                            <div className="pokemon-image">
                                <img
                                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
                                    alt="喷火龙"/>
                            </div>
                            <div className="pokemon-info">
                                <h3 className="pokemon-name">喷火龙</h3>
                                <div className="pokemon-types">
                                    <span className="type fire">火</span>
                                    <span className="type flying">飞行</span>
                                </div>
                                <p className="pokemon-description">喷火龙是一只火系和飞行系的宝可梦，能够喷射出强大的火焰，翅膀可以飞行。</p>
                            </div>
                        </div>

                        <div className="pokemon-card">
                            <div className="pokemon-image">
                                <img
                                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
                                    alt="超梦"/>
                            </div>
                            <div className="pokemon-info">
                                <h3 className="pokemon-name">超梦</h3>
                                <div className="pokemon-types">
                                    <span className="type psychic">超能力</span>
                                </div>
                                <p className="pokemon-description">超梦是一只超能力系的传说宝可梦，拥有强大的精神力量，是梦幻的克隆体。</p>
                            </div>
                        </div>

                        <div className="pokemon-card">
                            <div className="pokemon-image">
                                <img
                                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png"
                                    alt="烈空坐"/>
                            </div>
                            <div className="pokemon-info">
                                <h3 className="pokemon-name">烈空坐</h3>
                                <div className="pokemon-types">
                                    <span className="type dragon">龙</span>
                                    <span className="type flying">飞行</span>
                                </div>
                                <p className="pokemon-description">烈空坐是一只龙系和飞行系的传说宝可梦，被称为天空之龙，能够控制天气。</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 宝可梦图鉴部分 */}
                <section className="pokedex-section">
                    <h2 className="section-title">宝可梦图鉴</h2>
                    <div className="pokedex-filters">
                        <div className="filter-group">
                            <label htmlFor="type-filter">属性筛选：</label>
                            <select id="type-filter">
                                <option value="all">全部</option>
                                <option value="normal">一般</option>
                                <option value="fire">火</option>
                                <option value="water">水</option>
                                <option value="electric">电</option>
                                <option value="grass">草</option>
                                <option value="ice">冰</option>
                                <option value="fighting">格斗</option>
                                <option value="poison">毒</option>
                                <option value="ground">地面</option>
                                <option value="flying">飞行</option>
                                <option value="psychic">超能力</option>
                                <option value="bug">虫</option>
                                <option value="rock">岩石</option>
                                <option value="ghost">幽灵</option>
                                <option value="dragon">龙</option>
                                <option value="dark">恶</option>
                                <option value="steel">钢</option>
                                <option value="fairy">妖精</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label htmlFor="sort-filter">排序方式：</label>
                            <select id="sort-filter">
                                <option value="number">编号</option>
                                <option value="name">名称</option>
                                <option value="type">属性</option>
                            </select>
                        </div>
                    </div>
                    <div className="pokedex-grid" id="pokedex-container">
                        {pokemonData?.data.list.map((item) => {
                            return (
                                <div key={item.number} className="pokedex-card">
                                    <div className="pokedex-image">
                                        <span
                                            className="pokedex-number">#{String(item.number).padStart(3, '0')}</span>
                                        <img src={item.image} alt={item.name}/>
                                    </div>
                                    <div className="pokedex-info">
                                        <h3 className="pokedex-name">{item.name}</h3>
                                        <div className="pokedex-types">
                                            {item.types.map(type => <span key={`${item.number}/${type}`} className={`type ${type.toLowerCase()}`}>{type}</span>)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="pokedex-pagination">
                        <button className="pagination-button" id="prev-page" disabled>上一页</button>
                        <div className="pagination-numbers" id="pagination-numbers">
                            {/*  TODO 页码将通过JavaScript动态生成  */}
                            {/*<button className={`pagination-number ${i === currentPage ? 'active' : ''}`}></button>*/}
                            <button className={`pagination-number ${'active'}`}>1</button>
                        </div>
                        <button className="pagination-button" id="next-page">下一页</button>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Pokedex;