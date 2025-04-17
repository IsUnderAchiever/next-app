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
    faTrophy
} from '@fortawesome/free-solid-svg-icons'
import './page.module.css'

const Pokedex = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [filteredPokemon, setFilteredPokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);
    const [typeFilter, setTypeFilter] = useState('all');
    const [sortFilter, setSortFilter] = useState('number');

    useEffect(() => {
        const data = [
            { number: 1, name: "妙蛙种子", types: ["草", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
            { number: 2, name: "妙蛙草", types: ["草", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" },
            { number: 3, name: "妙蛙花", types: ["草", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" },
            { number: 4, name: "小火龙", types: ["火"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
            { number: 5, name: "火恐龙", types: ["火"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png" },
            { number: 6, name: "喷火龙", types: ["火", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" },
            { number: 7, name: "杰尼龟", types: ["水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
            { number: 8, name: "卡咪龟", types: ["水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png" },
            { number: 9, name: "水箭龟", types: ["水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png" },
            { number: 10, name: "绿毛虫", types: ["虫"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png" },
            { number: 11, name: "铁甲蛹", types: ["虫"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png" },
            { number: 12, name: "巴大蝶", types: ["虫", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png" },
            { number: 13, name: "独角虫", types: ["虫", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png" },
            { number: 14, name: "铁壳蛹", types: ["虫", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png" },
            { number: 15, name: "大针蜂", types: ["虫", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png" },
            { number: 16, name: "波波", types: ["一般", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png" },
            { number: 17, name: "比比鸟", types: ["一般", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png" },
            { number: 18, name: "大比鸟", types: ["一般", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png" },
            { number: 19, name: "小拉达", types: ["一般"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png" },
            { number: 20, name: "拉达", types: ["一般"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png" },
            { number: 21, name: "烈雀", types: ["一般", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png" },
            { number: 22, name: "大嘴雀", types: ["一般", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png" },
            { number: 23, name: "阿柏蛇", types: ["毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png" },
            { number: 24, name: "阿柏怪", types: ["毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png" },
            { number: 25, name: "皮卡丘", types: ["电"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
            { number: 26, name: "雷丘", types: ["电"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png" },
            { number: 27, name: "穿山鼠", types: ["地面"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png" },
            { number: 28, name: "穿山王", types: ["地面"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png" },
            { number: 29, name: "尼多兰", types: ["毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png" },
            { number: 30, name: "尼多娜", types: ["毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png" },
            { number: 31, name: "尼多后", types: ["毒", "地面"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png" },
            { number: 32, name: "尼多朗", types: ["毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png" },
            { number: 33, name: "尼多力诺", types: ["毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png" },
            { number: 34, name: "尼多王", types: ["毒", "地面"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png" },
            { number: 35, name: "皮皮", types: ["妖精"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png" },
            { number: 36, name: "皮可西", types: ["妖精"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png" },
            { number: 37, name: "六尾", types: ["火"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png" },
            { number: 38, name: "九尾", types: ["火"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png" },
            { number: 39, name: "胖丁", types: ["一般", "妖精"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png" },
            { number: 40, name: "胖可丁", types: ["一般", "妖精"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png" },
            { number: 41, name: "超音蝠", types: ["毒", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png" },
            { number: 42, name: "大嘴蝠", types: ["毒", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png" },
            { number: 43, name: "走路草", types: ["草", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png" },
            { number: 44, name: "臭臭花", types: ["草", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png" },
            { number: 45, name: "霸王花", types: ["草", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png" },
            { number: 46, name: "派拉斯", types: ["虫", "草"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png" },
            { number: 47, name: "派拉斯特", types: ["虫", "草"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png" },
            { number: 48, name: "毛球", types: ["虫", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png" },
            { number: 49, name: "摩鲁蛾", types: ["虫", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png" },
            { number: 50, name: "地鼠", types: ["地面"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png" },
            { number: 51, name: "三地鼠", types: ["地面"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png" },
            { number: 52, name: "喵喵", types: ["一般"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png" },
            { number: 53, name: "猫老大", types: ["一般"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png" },
            { number: 54, name: "可达鸭", types: ["水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png" },
            { number: 55, name: "哥达鸭", types: ["水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png" },
            { number: 56, name: "猴怪", types: ["格斗"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png" },
            { number: 57, name: "火暴猴", types: ["格斗"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png" },
            { number: 58, name: "卡蒂狗", types: ["火"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png" },
            { number: 59, name: "风速狗", types: ["火"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png" },
            { number: 60, name: "蚊香蝌蚪", types: ["水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png" },
            { number: 61, name: "蚊香君", types: ["水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png" },
            { number: 62, name: "蚊香泳士", types: ["水", "格斗"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png" },
            { number: 63, name: "凯西", types: ["超能力"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png" },
            { number: 64, name: "勇基拉", types: ["超能力"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png" },
            { number: 65, name: "胡地", types: ["超能力"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png" },
            { number: 66, name: "腕力", types: ["格斗"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png" },
            { number: 67, name: "豪力", types: ["格斗"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png" },
            { number: 68, name: "怪力", types: ["格斗"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png" },
            { number: 69, name: "喇叭芽", types: ["草", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png" },
            { number: 70, name: "口呆花", types: ["草", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png" },
            { number: 71, name: "大食花", types: ["草", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png" },
            { number: 72, name: "玛瑙水母", types: ["水", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png" },
            { number: 73, name: "毒刺水母", types: ["水", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png" },
            { number: 74, name: "小拳石", types: ["岩石", "地面"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png" },
            { number: 75, name: "隆隆石", types: ["岩石", "地面"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png" },
            { number: 76, name: "隆隆岩", types: ["岩石", "地面"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png" },
            { number: 77, name: "小火马", types: ["火"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png" },
            { number: 78, name: "烈焰马", types: ["火"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png" },
            { number: 79, name: "呆呆兽", types: ["水", "超能力"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png" },
            { number: 80, name: "呆壳兽", types: ["水", "超能力"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png" },
            { number: 81, name: "小磁怪", types: ["电", "钢"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png" },
            { number: 82, name: "三合一磁怪", types: ["电", "钢"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png" },
            { number: 83, name: "大葱鸭", types: ["一般", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png" },
            { number: 84, name: "嘟嘟", types: ["一般", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png" },
            { number: 85, name: "嘟嘟利", types: ["一般", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png" },
            { number: 86, name: "小海狮", types: ["水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png" },
            { number: 87, name: "白海狮", types: ["水", "冰"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png" },
            { number: 88, name: "臭泥", types: ["毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png" },
            { number: 89, name: "臭臭泥", types: ["毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png" },
            { number: 90, name: "大舌贝", types: ["水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png" },
            { number: 91, name: "刺甲贝", types: ["水", "冰"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png" },
            { number: 92, name: "鬼斯", types: ["幽灵", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png" },
            { number: 93, name: "鬼斯通", types: ["幽灵", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png" },
            { number: 94, name: "耿鬼", types: ["幽灵", "毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png" },
            { number: 95, name: "大岩蛇", types: ["岩石", "地面"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png" },
            { number: 96, name: "催眠貘", types: ["超能力"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png" },
            { number: 97, name: "引梦貘人", types: ["超能力"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png" },
            { number: 98, name: "大钳蟹", types: ["水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png" },
            { number: 99, name: "巨钳蟹", types: ["水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png" },
            { number: 100, name: "霹雳电球", types: ["电"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png" },
            { number: 101, name: "顽皮雷弹", types: ["电"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png" },
            { number: 102, name: "蛋蛋", types: ["草", "超能力"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png" },
            { number: 103, name: "椰蛋树", types: ["草", "超能力"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png" },
            { number: 104, name: "卡拉卡拉", types: ["地面"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png" },
            { number: 105, name: "嘎啦嘎啦", types: ["地面"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png" },
            { number: 106, name: "飞腿郎", types: ["格斗"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png" },
            { number: 107, name: "快拳郎", types: ["格斗"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png" },
            { number: 108, name: "大舌头", types: ["一般"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png" },
            { number: 109, name: "瓦斯弹", types: ["毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png" },
            { number: 110, name: "双弹瓦斯", types: ["毒"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png" },
            { number: 111, name: "独角犀牛", types: ["地面", "岩石"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png" },
            { number: 112, name: "钻角犀兽", types: ["地面", "岩石"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png" },
            { number: 113, name: "吉利蛋", types: ["一般"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png" },
            { number: 114, name: "蔓藤怪", types: ["草"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png" },
            { number: 115, name: "袋兽", types: ["一般"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png" },
            { number: 116, name: "墨海马", types: ["水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png" },
            { number: 117, name: "海刺龙", types: ["水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png" },
            { number: 118, name: "角金鱼", types: ["水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png" },
            { number: 119, name: "金鱼王", types: ["水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png" },
            { number: 120, name: "海星星", types: ["水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png" },
            { number: 121, name: "宝石海星", types: ["水", "超能力"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png" },
            { number: 122, name: "魔墙人偶", types: ["超能力", "妖精"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png" },
            { number: 123, name: "飞天螳螂", types: ["虫", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png" },
            { number: 124, name: "迷唇姐", types: ["冰", "超能力"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png" },
            { number: 125, name: "电击兽", types: ["电"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png" },
            { number: 126, name: "鸭嘴火兽", types: ["火"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png" },
            { number: 127, name: "凯罗斯", types: ["虫"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png" },
            { number: 128, name: "肯泰罗", types: ["一般"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png" },
            { number: 129, name: "鲤鱼王", types: ["水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png" },
            { number: 130, name: "暴鲤龙", types: ["水", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png" },
            { number: 131, name: "拉普拉斯", types: ["水", "冰"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png" },
            { number: 132, name: "百变怪", types: ["一般"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png" },
            { number: 133, name: "伊布", types: ["一般"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png" },
            { number: 134, name: "水伊布", types: ["水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png" },
            { number: 135, name: "雷伊布", types: ["电"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png" },
            { number: 136, name: "火伊布", types: ["火"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png" },
            { number: 137, name: "多边兽", types: ["一般"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png" },
            { number: 138, name: "菊石兽", types: ["岩石", "水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png" },
            { number: 139, name: "多刺菊石兽", types: ["岩石", "水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png" },
            { number: 140, name: "化石盔", types: ["岩石", "水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png" },
            { number: 141, name: "镰刀盔", types: ["岩石", "水"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png" },
            { number: 142, name: "化石翼龙", types: ["岩石", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png" },
            { number: 143, name: "卡比兽", types: ["一般"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png" },
            { number: 144, name: "急冻鸟", types: ["冰", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png" },
            { number: 145, name: "闪电鸟", types: ["电", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png" },
            { number: 146, name: "火焰鸟", types: ["火", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png" },
            { number: 147, name: "迷你龙", types: ["龙"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png" },
            { number: 148, name: "哈克龙", types: ["龙"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png" },
            { number: 149, name: "快龙", types: ["龙", "飞行"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png" },
            { number: 150, name: "超梦", types: ["超能力"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png" },
            { number: 151, name: "梦幻", types: ["超能力"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png" }
        ];
        setPokemonData(data);
        setFilteredPokemon(data);
    }, []);

    useEffect(() => {
        filterPokemon();
    }, [typeFilter, sortFilter]);

    const renderPokemonCards = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pokemonToShow = filteredPokemon.slice(startIndex, endIndex);

        return pokemonToShow.map((pokemon) => (
            <div key={pokemon.number} className="pokedex-card bg-white rounded-lg shadow-md flex flex-col">
                <div className="pokedex-image relative">
          <span className="pokedex-number absolute top-1 right-1 bg-black/60 text-white px-2 py-1 rounded text-xs font-semibold">
            #{String(pokemon.number).padStart(3, '0')}
          </span>
                    <img src={pokemon.image} alt={pokemon.name} className="w-full h-40 object-contain" />
                </div>
                <div className="pokedex-info p-2 flex-grow flex flex-col">
                    <h3 className="pokedex-name text-primary font-semibold">{pokemon.name}</h3>
                    <div className="pokedex-types flex gap-1 mb-1">
                        {pokemon.types.map((type) => (
                            <span key={type} className={`type ${type.toLowerCase()} px-2 py-1 rounded text-white text-xs font-semibold`}>
                {type}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        ));
    };

    const updatePagination = () => {
        const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);

        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, startPage + 4);

        const paginationNumbers = [];
        for (let i = startPage; i <= endPage; i++) {
            paginationNumbers.push(
                <button
                    key={i}
                    className={`pagination-number px-2 py-1 rounded border border-gray-300 bg-white text-primary cursor-pointer transition duration-300 ${
                        i === currentPage ? 'bg-primary text-white border-primary' : ''
                    }`}
                    onClick={() => setCurrentPage(i)}
                >
                    {i}
                </button>
            );
        }

        return paginationNumbers;
    };

    const filterPokemon = () => {
        let filtered = [...pokemonData];

        if (typeFilter !== 'all') {
            filtered = filtered.filter((pokemon) =>
                pokemon.types.some((type) => type.toLowerCase() === typeFilter)
            );
        }

        if (sortFilter === 'number') {
            filtered.sort((a, b) => a.number - b.number);
        } else if (sortFilter === 'name') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortFilter === 'type') {
            filtered.sort((a, b) => a.types[0].localeCompare(b.types[0]));
        }

        setCurrentPage(1);
        setFilteredPokemon(filtered);
    };

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
                                <i className="fas fa-search"></i>
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
                        {/*  TODO 宝可梦卡片将通过JavaScript动态生成  */}
                    </div>
                    <div className="pokedex-pagination">
                        <button className="pagination-button" id="prev-page" disabled>上一页</button>
                        <div className="pagination-numbers" id="pagination-numbers">
                            {/*  TODO 页码将通过JavaScript动态生成  */}
                        </div>
                        <button className="pagination-button" id="next-page">下一页</button>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Pokedex;