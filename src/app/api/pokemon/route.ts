import { NextRequest, NextResponse } from "next/server";
import { Pokemon } from "@/services/pokemon";
import pool from '../db'

const pokemonData: Pokemon[] = [
    {
        number: 1,
        name: "妙蛙种子",
        types: ["grass", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    {
        number: 2,
        name: "妙蛙草",
        types: ["grass", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
    },
    {
        number: 3,
        name: "妙蛙花",
        types: ["grass", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
    },
    {
        number: 4,
        name: "小火龙",
        types: ["fire"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
    },
    {
        number: 5,
        name: "火恐龙",
        types: ["fire"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
    },
    {
        number: 6,
        name: "喷火龙",
        types: ["fire", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
    },
    {
        number: 7,
        name: "杰尼龟",
        types: ["water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
    },
    {
        number: 8,
        name: "卡咪龟",
        types: ["water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
    },
    {
        number: 9,
        name: "水箭龟",
        types: ["water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
    },
    {
        number: 10,
        name: "绿毛虫",
        types: ["bug"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
    },
    {
        number: 11,
        name: "铁甲蛹",
        types: ["bug"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
    },
    {
        number: 12,
        name: "巴大蝶",
        types: ["bug", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
    },
    {
        number: 13,
        name: "独角虫",
        types: ["bug", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png"
    },
    {
        number: 14,
        name: "铁壳蛹",
        types: ["bug", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
    },
    {
        number: 15,
        name: "大针蜂",
        types: ["bug", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
    },
    {
        number: 16,
        name: "波波",
        types: ["normal", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
    },
    {
        number: 17,
        name: "比比鸟",
        types: ["normal", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"
    },
    {
        number: 18,
        name: "大比鸟",
        types: ["normal", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
    },
    {
        number: 19,
        name: "小拉达",
        types: ["normal"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png"
    },
    {
        number: 20,
        name: "拉达",
        types: ["normal"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
    },
    {
        number: 21,
        name: "烈雀",
        types: ["normal", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png"
    },
    {
        number: 22,
        name: "大嘴雀",
        types: ["normal", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png"
    },
    {
        number: 23,
        name: "阿柏蛇",
        types: ["poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png"
    },
    {
        number: 24,
        name: "阿柏怪",
        types: ["poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png"
    },
    {
        number: 25,
        name: "皮卡丘",
        types: ["electric"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    },
    {
        number: 26,
        name: "雷丘",
        types: ["electric"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"
    },
    {
        number: 27,
        name: "穿山鼠",
        types: ["ground"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png"
    },
    {
        number: 28,
        name: "穿山王",
        types: ["ground"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png"
    },
    {
        number: 29,
        name: "尼多兰",
        types: ["poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png"
    },
    {
        number: 30,
        name: "尼多娜",
        types: ["poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png"
    },
    {
        number: 31,
        name: "尼多后",
        types: ["poison", "ground"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png"
    },
    {
        number: 32,
        name: "尼多朗",
        types: ["poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png"
    },
    {
        number: 33,
        name: "尼多力诺",
        types: ["poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png"
    },
    {
        number: 34,
        name: "尼多王",
        types: ["poison", "ground"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png"
    },
    {
        number: 35,
        name: "皮皮",
        types: ["fairy"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
    },
    {
        number: 36,
        name: "皮可西",
        types: ["fairy"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png"
    },
    {
        number: 37,
        name: "六尾",
        types: ["fire"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png"
    },
    {
        number: 38,
        name: "九尾",
        types: ["fire"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png"
    },
    {
        number: 39,
        name: "胖丁",
        types: ["normal", "fairy"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
    },
    {
        number: 40,
        name: "胖可丁",
        types: ["normal", "fairy"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png"
    },
    {
        number: 41,
        name: "超音蝠",
        types: ["poison", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png"
    },
    {
        number: 42,
        name: "大嘴蝠",
        types: ["poison", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png"
    },
    {
        number: 43,
        name: "走路草",
        types: ["grass", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png"
    },
    {
        number: 44,
        name: "臭臭花",
        types: ["grass", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png"
    },
    {
        number: 45,
        name: "霸王花",
        types: ["grass", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png"
    },
    {
        number: 46,
        name: "派拉斯",
        types: ["bug", "grass"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png"
    },
    {
        number: 47,
        name: "派拉斯特",
        types: ["bug", "grass"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png"
    },
    {
        number: 48,
        name: "毛球",
        types: ["bug", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png"
    },
    {
        number: 49,
        name: "摩鲁蛾",
        types: ["bug", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png"
    },
    {
        number: 50,
        name: "地鼠",
        types: ["ground"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png"
    },
    {
        number: 51,
        name: "三地鼠",
        types: ["ground"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png"
    },
    {
        number: 52,
        name: "喵喵",
        types: ["normal"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png"
    },
    {
        number: 53,
        name: "猫老大",
        types: ["normal"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png"
    },
    {
        number: 54,
        name: "可达鸭",
        types: ["water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
    },
    {
        number: 55,
        name: "哥达鸭",
        types: ["water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png"
    },
    {
        number: 56,
        name: "猴怪",
        types: ["fighting"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png"
    },
    {
        number: 57,
        name: "火暴猴",
        types: ["fighting"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png"
    },
    {
        number: 58,
        name: "卡蒂狗",
        types: ["fire"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png"
    },
    {
        number: 59,
        name: "风速狗",
        types: ["fire"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png"
    },
    {
        number: 60,
        name: "蚊香蝌蚪",
        types: ["water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png"
    },
    {
        number: 61,
        name: "蚊香君",
        types: ["water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png"
    },
    {
        number: 62,
        name: "蚊香泳士",
        types: ["water", "fighting"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png"
    },
    {
        number: 63,
        name: "凯西",
        types: ["psychic"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png"
    },
    {
        number: 64,
        name: "勇基拉",
        types: ["psychic"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png"
    },
    {
        number: 65,
        name: "胡地",
        types: ["psychic"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png"
    },
    {
        number: 66,
        name: "腕力",
        types: ["fighting"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png"
    },
    {
        number: 67,
        name: "豪力",
        types: ["fighting"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png"
    },
    {
        number: 68,
        name: "怪力",
        types: ["fighting"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png"
    },
    {
        number: 69,
        name: "喇叭芽",
        types: ["grass", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png"
    },
    {
        number: 70,
        name: "口呆花",
        types: ["grass", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png"
    },
    {
        number: 71,
        name: "大食花",
        types: ["grass", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png"
    },
    {
        number: 72,
        name: "玛瑙水母",
        types: ["water", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png"
    },
    {
        number: 73,
        name: "毒刺水母",
        types: ["water", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png"
    },
    {
        number: 74,
        name: "小拳石",
        types: ["rock", "ground"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png"
    },
    {
        number: 75,
        name: "隆隆石",
        types: ["rock", "ground"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png"
    },
    {
        number: 76,
        name: "隆隆岩",
        types: ["rock", "ground"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png"
    },
    {
        number: 77,
        name: "小火马",
        types: ["fire"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png"
    },
    {
        number: 78,
        name: "烈焰马",
        types: ["fire"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png"
    },
    {
        number: 79,
        name: "呆呆兽",
        types: ["water", "psychic"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png"
    },
    {
        number: 80,
        name: "呆壳兽",
        types: ["water", "psychic"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png"
    },
    {
        number: 81,
        name: "小磁怪",
        types: ["electric", "steel"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png"
    },
    {
        number: 82,
        name: "三合一磁怪",
        types: ["electric", "steel"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png"
    },
    {
        number: 83,
        name: "大葱鸭",
        types: ["normal", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png"
    },
    {
        number: 84,
        name: "嘟嘟",
        types: ["normal", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png"
    },
    {
        number: 85,
        name: "嘟嘟利",
        types: ["normal", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png"
    },
    {
        number: 86,
        name: "小海狮",
        types: ["water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png"
    },
    {
        number: 87,
        name: "白海狮",
        types: ["water", "ice"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png"
    },
    {
        number: 88,
        name: "臭泥",
        types: ["poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png"
    },
    {
        number: 89,
        name: "臭臭泥",
        types: ["poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png"
    },
    {
        number: 90,
        name: "大舌贝",
        types: ["water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png"
    },
    {
        number: 91,
        name: "刺甲贝",
        types: ["water", "ice"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png"
    },
    {
        number: 92,
        name: "鬼斯",
        types: ["ghost", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png"
    },
    {
        number: 93,
        name: "鬼斯通",
        types: ["ghost", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png"
    },
    {
        number: 94,
        name: "耿鬼",
        types: ["ghost", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
    },
    {
        number: 95,
        name: "大岩蛇",
        types: ["rock", "ground"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png"
    },
    {
        number: 96,
        name: "催眠貘",
        types: ["psychic"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png"
    },
    {
        number: 97,
        name: "引梦貘人",
        types: ["psychic"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png"
    },
    {
        number: 98,
        name: "大钳蟹",
        types: ["water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png"
    },
    {
        number: 99,
        name: "巨钳蟹",
        types: ["water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png"
    },
    {
        number: 100,
        name: "霹雳电球",
        types: ["electric"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png"
    },
    {
        number: 101,
        name: "顽皮雷弹",
        types: ["electric"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png"
    },
    {
        number: 102,
        name: "蛋蛋",
        types: ["grass", "psychic"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png"
    },
    {
        number: 103,
        name: "椰蛋树",
        types: ["grass", "psychic"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png"
    },
    {
        number: 104,
        name: "卡拉卡拉",
        types: ["ground"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png"
    },
    {
        number: 105,
        name: "嘎啦嘎啦",
        types: ["ground"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png"
    },
    {
        number: 106,
        name: "飞腿郎",
        types: ["fighting"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png"
    },
    {
        number: 107,
        name: "快拳郎",
        types: ["fighting"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png"
    },
    {
        number: 108,
        name: "大舌头",
        types: ["normal"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png"
    },
    {
        number: 109,
        name: "瓦斯弹",
        types: ["poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png"
    },
    {
        number: 110,
        name: "双弹瓦斯",
        types: ["poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png"
    },
    {
        number: 111,
        name: "独角犀牛",
        types: ["ground", "rock"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png"
    },
    {
        number: 112,
        name: "钻角犀兽",
        types: ["ground", "rock"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png"
    },
    {
        number: 113,
        name: "吉利蛋",
        types: ["normal"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png"
    },
    {
        number: 114,
        name: "蔓藤怪",
        types: ["grass"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png"
    },
    {
        number: 115,
        name: "袋兽",
        types: ["normal"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png"
    },
    {
        number: 116,
        name: "墨海马",
        types: ["water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png"
    },
    {
        number: 117,
        name: "海刺龙",
        types: ["water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png"
    },
    {
        number: 118,
        name: "角金鱼",
        types: ["water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png"
    },
    {
        number: 119,
        name: "金鱼王",
        types: ["water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png"
    },
    {
        number: 120,
        name: "海星星",
        types: ["water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png"
    },
    {
        number: 121,
        name: "宝石海星",
        types: ["water", "psychic"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png"
    },
    {
        number: 122,
        name: "魔墙人偶",
        types: ["psychic", "fairy"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png"
    },
    {
        number: 123,
        name: "飞天螳螂",
        types: ["bug", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png"
    },
    {
        number: 124,
        name: "迷唇姐",
        types: ["ice", "psychic"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png"
    },
    {
        number: 125,
        name: "电击兽",
        types: ["electric"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png"
    },
    {
        number: 126,
        name: "鸭嘴火兽",
        types: ["fire"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png"
    },
    {
        number: 127,
        name: "凯罗斯",
        types: ["bug"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png"
    },
    {
        number: 128,
        name: "肯泰罗",
        types: ["normal"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png"
    },
    {
        number: 129,
        name: "鲤鱼王",
        types: ["water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png"
    },
    {
        number: 130,
        name: "暴鲤龙",
        types: ["water", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png"
    },
    {
        number: 131,
        name: "拉普拉斯",
        types: ["water", "ice"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png"
    },
    {
        number: 132,
        name: "百变怪",
        types: ["normal"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
    },
    {
        number: 133,
        name: "伊布",
        types: ["normal"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
    },
    {
        number: 134,
        name: "水伊布",
        types: ["water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png"
    },
    {
        number: 135,
        name: "雷伊布",
        types: ["electric"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png"
    },
    {
        number: 136,
        name: "火伊布",
        types: ["fire"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png"
    },
    {
        number: 137,
        name: "多边兽",
        types: ["normal"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png"
    },
    {
        number: 138,
        name: "菊石兽",
        types: ["rock", "water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png"
    },
    {
        number: 139,
        name: "多刺菊石兽",
        types: ["rock", "water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png"
    },
    {
        number: 140,
        name: "化石盔",
        types: ["rock", "water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png"
    },
    {
        number: 141,
        name: "镰刀盔",
        types: ["rock", "water"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png"
    },
    {
        number: 142,
        name: "化石翼龙",
        types: ["rock", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png"
    },
    {
        number: 143,
        name: "卡比兽",
        types: ["normal"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
    },
    {
        number: 144,
        name: "急冻鸟",
        types: ["ice", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png"
    },
    {
        number: 145,
        name: "闪电鸟",
        types: ["electric", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png"
    },
    {
        number: 146,
        name: "火焰鸟",
        types: ["fire", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png"
    },
    {
        number: 147,
        name: "迷你龙",
        types: ["dragon"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png"
    },
    {
        number: 148,
        name: "哈克龙",
        types: ["dragon"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png"
    },
    {
        number: 149,
        name: "快龙",
        types: ["dragon", "flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
    },
    {
        number: 150,
        name: "超梦",
        types: ["psychic"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
    },
    {
        number: 151,
        name: "梦幻",
        types: ["psychic"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
    }
];

export async function GET(request: NextRequest) {

    // 获取分页、筛选和排序参数，设置默认值
    const pageNum = parseInt(request.nextUrl.searchParams.get("pageNum") || "1");
    const pageSize = parseInt(request.nextUrl.searchParams.get("pageSize") || "20");
    const typeFilter = request.nextUrl.searchParams.get("type") || null; // 允许为 null
    const searchTerm = request.nextUrl.searchParams.get("search") || null; // 允许为 null
    const sortBy = request.nextUrl.searchParams.get("sortBy") || 'number'; // 默认按编号排序

    // 确保pageSize不超过合理范围
    const safePageSize = Math.min(pageSize, 100);
    const offset = (pageNum - 1) * safePageSize;

    // 构建基础查询语句和参数
    let countQuery = 'SELECT COUNT(DISTINCT p.id) AS total FROM pokemon p ';
    let dataQuery = `
        SELECT 
            p.number,
            p.name,
            p.image,
            GROUP_CONCAT(DISTINCT t.name ORDER BY t.id SEPARATOR ',') AS types,
            GROUP_CONCAT(DISTINCT t.color ORDER BY t.id SEPARATOR ',') AS type_colors,
            GROUP_CONCAT(DISTINCT t.name_en ORDER BY t.id SEPARATOR ',') AS type_names_en 
        FROM pokemon p 
    `;
    let joins = 'LEFT JOIN pokemon_type pt ON p.id = pt.pokemon_id LEFT JOIN type t ON pt.type_id = t.id ';
    let whereClauses = [];
    let queryParams = [];

    // 添加筛选条件
    if (typeFilter) {
        joins += ' '; // 确保JOIN和WHERE之间有空格
        whereClauses.push('t.name_en = ?');
        queryParams.push(typeFilter);
    }
    if (searchTerm) {
        whereClauses.push('p.name LIKE ?');
        queryParams.push(`%${searchTerm}%`);
    }

    // 组合WHERE子句
    let whereSql = '';
    if (whereClauses.length > 0) {
        whereSql = 'WHERE ' + whereClauses.join(' AND ');
    }

    // 组合完整查询语句
    countQuery += joins + whereSql;
    dataQuery += joins + whereSql + ' GROUP BY p.id';

    // 添加排序
    let orderBySql = ' ORDER BY ';
    switch (sortBy) {
        case 'name':
            orderBySql += 'p.name ASC';
            break;
        case 'type':
            // 按第一个属性排序可能比较复杂，这里简化为按编号排序
            orderBySql += 'p.number ASC';
            break;
        default: // 'number' 或其他默认情况
            orderBySql += 'p.number ASC';
    }
    dataQuery += orderBySql;

    // 添加分页
    dataQuery += ' LIMIT ? OFFSET ?';
    const dataQueryParams = [...queryParams, safePageSize, offset];
    const countQueryParams = [...queryParams]; // Count查询不需要分页参数

    try {
        // 执行查询获取总数
        const [totalResult] = await pool.query(countQuery, countQueryParams);
        const total = totalResult[0].total;

        // 执行查询获取分页数据
        const [rows] = await pool.query(dataQuery, dataQueryParams);

        // 处理返回的数据，将字符串类型的types和colors转换为结构化数组
        const formattedRows = rows.map(row => {
            const typesArray = row.types ? row.types.split(',') : [];
            const colorsArray = row.type_colors ? row.type_colors.split(',') : [];
            const namesEnArray = row.type_names_en ? row.type_names_en.split(',') : [];

            // 将并行数组合并为对象数组
            const structuredTypes = typesArray.map((typeName, index) => ({
                name: typeName,
                name_en: namesEnArray[index] || null, // 获取对应的英文名
                color: colorsArray[index] || null    // 获取对应的颜色
            }));

            return {
                number: row.number,
                name: row.name,
                image: row.image,
                types: structuredTypes // 使用新的结构化数组
                // 不再需要单独返回 type_colors 和 type_names_en
            };
        });

        return NextResponse.json({
            code: 200,
            message: "Success",
            data: {
                total: total,
                list: formattedRows, // 返回格式化后的数据
                pageNum: pageNum,
                pageSize: safePageSize
            }
        });
    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json({
            code: 500,
            message: "数据库查询失败"
        }, { status: 500 });
    }
}