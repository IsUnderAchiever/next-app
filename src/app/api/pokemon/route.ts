import {NextRequest, NextResponse} from "next/server";
import {Pokemon} from "@/services/pokemon";

const pokemonData: Pokemon[] = [
    {
        number: 1,
        name: "妙蛙种子",
        types: ["草", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    {
        number: 2,
        name: "妙蛙草",
        types: ["草", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
    },
    {
        number: 3,
        name: "妙蛙花",
        types: ["草", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
    },
    {
        number: 4,
        name: "小火龙",
        types: ["火"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
    },
    {
        number: 5,
        name: "火恐龙",
        types: ["火"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
    },
    {
        number: 6,
        name: "喷火龙",
        types: ["火", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
    },
    {
        number: 7,
        name: "杰尼龟",
        types: ["水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
    },
    {
        number: 8,
        name: "卡咪龟",
        types: ["水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
    },
    {
        number: 9,
        name: "水箭龟",
        types: ["水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
    },
    {
        number: 10,
        name: "绿毛虫",
        types: ["虫"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
    },
    {
        number: 11,
        name: "铁甲蛹",
        types: ["虫"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
    },
    {
        number: 12,
        name: "巴大蝶",
        types: ["虫", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
    },
    {
        number: 13,
        name: "独角虫",
        types: ["虫", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png"
    },
    {
        number: 14,
        name: "铁壳蛹",
        types: ["虫", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
    },
    {
        number: 15,
        name: "大针蜂",
        types: ["虫", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
    },
    {
        number: 16,
        name: "波波",
        types: ["一般", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
    },
    {
        number: 17,
        name: "比比鸟",
        types: ["一般", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"
    },
    {
        number: 18,
        name: "大比鸟",
        types: ["一般", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
    },
    {
        number: 19,
        name: "小拉达",
        types: ["一般"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png"
    },
    {
        number: 20,
        name: "拉达",
        types: ["一般"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
    },
    {
        number: 21,
        name: "烈雀",
        types: ["一般", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png"
    },
    {
        number: 22,
        name: "大嘴雀",
        types: ["一般", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png"
    },
    {
        number: 23,
        name: "阿柏蛇",
        types: ["毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png"
    },
    {
        number: 24,
        name: "阿柏怪",
        types: ["毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png"
    },
    {
        number: 25,
        name: "皮卡丘",
        types: ["电"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    },
    {
        number: 26,
        name: "雷丘",
        types: ["电"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"
    },
    {
        number: 27,
        name: "穿山鼠",
        types: ["地面"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png"
    },
    {
        number: 28,
        name: "穿山王",
        types: ["地面"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png"
    },
    {
        number: 29,
        name: "尼多兰",
        types: ["毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png"
    },
    {
        number: 30,
        name: "尼多娜",
        types: ["毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png"
    },
    {
        number: 31,
        name: "尼多后",
        types: ["毒", "地面"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png"
    },
    {
        number: 32,
        name: "尼多朗",
        types: ["毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png"
    },
    {
        number: 33,
        name: "尼多力诺",
        types: ["毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png"
    },
    {
        number: 34,
        name: "尼多王",
        types: ["毒", "地面"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png"
    },
    {
        number: 35,
        name: "皮皮",
        types: ["妖精"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
    },
    {
        number: 36,
        name: "皮可西",
        types: ["妖精"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png"
    },
    {
        number: 37,
        name: "六尾",
        types: ["火"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png"
    },
    {
        number: 38,
        name: "九尾",
        types: ["火"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png"
    },
    {
        number: 39,
        name: "胖丁",
        types: ["一般", "妖精"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
    },
    {
        number: 40,
        name: "胖可丁",
        types: ["一般", "妖精"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png"
    },
    {
        number: 41,
        name: "超音蝠",
        types: ["毒", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png"
    },
    {
        number: 42,
        name: "大嘴蝠",
        types: ["毒", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png"
    },
    {
        number: 43,
        name: "走路草",
        types: ["草", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png"
    },
    {
        number: 44,
        name: "臭臭花",
        types: ["草", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png"
    },
    {
        number: 45,
        name: "霸王花",
        types: ["草", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png"
    },
    {
        number: 46,
        name: "派拉斯",
        types: ["虫", "草"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png"
    },
    {
        number: 47,
        name: "派拉斯特",
        types: ["虫", "草"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png"
    },
    {
        number: 48,
        name: "毛球",
        types: ["虫", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png"
    },
    {
        number: 49,
        name: "摩鲁蛾",
        types: ["虫", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png"
    },
    {
        number: 50,
        name: "地鼠",
        types: ["地面"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png"
    },
    {
        number: 51,
        name: "三地鼠",
        types: ["地面"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png"
    },
    {
        number: 52,
        name: "喵喵",
        types: ["一般"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png"
    },
    {
        number: 53,
        name: "猫老大",
        types: ["一般"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png"
    },
    {
        number: 54,
        name: "可达鸭",
        types: ["水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
    },
    {
        number: 55,
        name: "哥达鸭",
        types: ["水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png"
    },
    {
        number: 56,
        name: "猴怪",
        types: ["格斗"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png"
    },
    {
        number: 57,
        name: "火暴猴",
        types: ["格斗"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png"
    },
    {
        number: 58,
        name: "卡蒂狗",
        types: ["火"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png"
    },
    {
        number: 59,
        name: "风速狗",
        types: ["火"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png"
    },
    {
        number: 60,
        name: "蚊香蝌蚪",
        types: ["水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png"
    },
    {
        number: 61,
        name: "蚊香君",
        types: ["水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png"
    },
    {
        number: 62,
        name: "蚊香泳士",
        types: ["水", "格斗"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png"
    },
    {
        number: 63,
        name: "凯西",
        types: ["超能力"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png"
    },
    {
        number: 64,
        name: "勇基拉",
        types: ["超能力"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png"
    },
    {
        number: 65,
        name: "胡地",
        types: ["超能力"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png"
    },
    {
        number: 66,
        name: "腕力",
        types: ["格斗"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png"
    },
    {
        number: 67,
        name: "豪力",
        types: ["格斗"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png"
    },
    {
        number: 68,
        name: "怪力",
        types: ["格斗"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png"
    },
    {
        number: 69,
        name: "喇叭芽",
        types: ["草", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png"
    },
    {
        number: 70,
        name: "口呆花",
        types: ["草", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png"
    },
    {
        number: 71,
        name: "大食花",
        types: ["草", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png"
    },
    {
        number: 72,
        name: "玛瑙水母",
        types: ["水", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png"
    },
    {
        number: 73,
        name: "毒刺水母",
        types: ["水", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png"
    },
    {
        number: 74,
        name: "小拳石",
        types: ["岩石", "地面"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png"
    },
    {
        number: 75,
        name: "隆隆石",
        types: ["岩石", "地面"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png"
    },
    {
        number: 76,
        name: "隆隆岩",
        types: ["岩石", "地面"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png"
    },
    {
        number: 77,
        name: "小火马",
        types: ["火"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png"
    },
    {
        number: 78,
        name: "烈焰马",
        types: ["火"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png"
    },
    {
        number: 79,
        name: "呆呆兽",
        types: ["水", "超能力"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png"
    },
    {
        number: 80,
        name: "呆壳兽",
        types: ["水", "超能力"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png"
    },
    {
        number: 81,
        name: "小磁怪",
        types: ["电", "钢"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png"
    },
    {
        number: 82,
        name: "三合一磁怪",
        types: ["电", "钢"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png"
    },
    {
        number: 83,
        name: "大葱鸭",
        types: ["一般", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png"
    },
    {
        number: 84,
        name: "嘟嘟",
        types: ["一般", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png"
    },
    {
        number: 85,
        name: "嘟嘟利",
        types: ["一般", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png"
    },
    {
        number: 86,
        name: "小海狮",
        types: ["水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png"
    },
    {
        number: 87,
        name: "白海狮",
        types: ["水", "冰"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png"
    },
    {
        number: 88,
        name: "臭泥",
        types: ["毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png"
    },
    {
        number: 89,
        name: "臭臭泥",
        types: ["毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png"
    },
    {
        number: 90,
        name: "大舌贝",
        types: ["水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png"
    },
    {
        number: 91,
        name: "刺甲贝",
        types: ["水", "冰"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png"
    },
    {
        number: 92,
        name: "鬼斯",
        types: ["幽灵", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png"
    },
    {
        number: 93,
        name: "鬼斯通",
        types: ["幽灵", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png"
    },
    {
        number: 94,
        name: "耿鬼",
        types: ["幽灵", "毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
    },
    {
        number: 95,
        name: "大岩蛇",
        types: ["岩石", "地面"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png"
    },
    {
        number: 96,
        name: "催眠貘",
        types: ["超能力"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png"
    },
    {
        number: 97,
        name: "引梦貘人",
        types: ["超能力"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png"
    },
    {
        number: 98,
        name: "大钳蟹",
        types: ["水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png"
    },
    {
        number: 99,
        name: "巨钳蟹",
        types: ["水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png"
    },
    {
        number: 100,
        name: "霹雳电球",
        types: ["电"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png"
    },
    {
        number: 101,
        name: "顽皮雷弹",
        types: ["电"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png"
    },
    {
        number: 102,
        name: "蛋蛋",
        types: ["草", "超能力"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png"
    },
    {
        number: 103,
        name: "椰蛋树",
        types: ["草", "超能力"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png"
    },
    {
        number: 104,
        name: "卡拉卡拉",
        types: ["地面"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png"
    },
    {
        number: 105,
        name: "嘎啦嘎啦",
        types: ["地面"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png"
    },
    {
        number: 106,
        name: "飞腿郎",
        types: ["格斗"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png"
    },
    {
        number: 107,
        name: "快拳郎",
        types: ["格斗"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png"
    },
    {
        number: 108,
        name: "大舌头",
        types: ["一般"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png"
    },
    {
        number: 109,
        name: "瓦斯弹",
        types: ["毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png"
    },
    {
        number: 110,
        name: "双弹瓦斯",
        types: ["毒"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png"
    },
    {
        number: 111,
        name: "独角犀牛",
        types: ["地面", "岩石"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png"
    },
    {
        number: 112,
        name: "钻角犀兽",
        types: ["地面", "岩石"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png"
    },
    {
        number: 113,
        name: "吉利蛋",
        types: ["一般"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png"
    },
    {
        number: 114,
        name: "蔓藤怪",
        types: ["草"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png"
    },
    {
        number: 115,
        name: "袋兽",
        types: ["一般"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png"
    },
    {
        number: 116,
        name: "墨海马",
        types: ["水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png"
    },
    {
        number: 117,
        name: "海刺龙",
        types: ["水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png"
    },
    {
        number: 118,
        name: "角金鱼",
        types: ["水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png"
    },
    {
        number: 119,
        name: "金鱼王",
        types: ["水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png"
    },
    {
        number: 120,
        name: "海星星",
        types: ["水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png"
    },
    {
        number: 121,
        name: "宝石海星",
        types: ["水", "超能力"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png"
    },
    {
        number: 122,
        name: "魔墙人偶",
        types: ["超能力", "妖精"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png"
    },
    {
        number: 123,
        name: "飞天螳螂",
        types: ["虫", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png"
    },
    {
        number: 124,
        name: "迷唇姐",
        types: ["冰", "超能力"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png"
    },
    {
        number: 125,
        name: "电击兽",
        types: ["电"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png"
    },
    {
        number: 126,
        name: "鸭嘴火兽",
        types: ["火"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png"
    },
    {
        number: 127,
        name: "凯罗斯",
        types: ["虫"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png"
    },
    {
        number: 128,
        name: "肯泰罗",
        types: ["一般"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png"
    },
    {
        number: 129,
        name: "鲤鱼王",
        types: ["水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png"
    },
    {
        number: 130,
        name: "暴鲤龙",
        types: ["水", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png"
    },
    {
        number: 131,
        name: "拉普拉斯",
        types: ["水", "冰"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png"
    },
    {
        number: 132,
        name: "百变怪",
        types: ["一般"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
    },
    {
        number: 133,
        name: "伊布",
        types: ["一般"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
    },
    {
        number: 134,
        name: "水伊布",
        types: ["水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png"
    },
    {
        number: 135,
        name: "雷伊布",
        types: ["电"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png"
    },
    {
        number: 136,
        name: "火伊布",
        types: ["火"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png"
    },
    {
        number: 137,
        name: "多边兽",
        types: ["一般"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png"
    },
    {
        number: 138,
        name: "菊石兽",
        types: ["岩石", "水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png"
    },
    {
        number: 139,
        name: "多刺菊石兽",
        types: ["岩石", "水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png"
    },
    {
        number: 140,
        name: "化石盔",
        types: ["岩石", "水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png"
    },
    {
        number: 141,
        name: "镰刀盔",
        types: ["岩石", "水"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png"
    },
    {
        number: 142,
        name: "化石翼龙",
        types: ["岩石", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png"
    },
    {
        number: 143,
        name: "卡比兽",
        types: ["一般"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
    },
    {
        number: 144,
        name: "急冻鸟",
        types: ["冰", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png"
    },
    {
        number: 145,
        name: "闪电鸟",
        types: ["电", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png"
    },
    {
        number: 146,
        name: "火焰鸟",
        types: ["火", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png"
    },
    {
        number: 147,
        name: "迷你龙",
        types: ["龙"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png"
    },
    {
        number: 148,
        name: "哈克龙",
        types: ["龙"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png"
    },
    {
        number: 149,
        name: "快龙",
        types: ["龙", "飞行"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
    },
    {
        number: 150,
        name: "超梦",
        types: ["超能力"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
    },
    {
        number: 151,
        name: "梦幻",
        types: ["超能力"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
    }
];

export async function GET(request: NextRequest) {
    // 获取查询参数并转换为数字
    const pageNum = parseInt(request.nextUrl.searchParams.get("pageNum") || "1", 10);
    let pageSize = parseInt(request.nextUrl.searchParams.get("pageSize") || "20", 10);
    pageSize = pageSize > 20 ? 20 : pageSize;

    // 验证 pageNum 和 pageSize
    const totalPages = Math.ceil(pokemonData.length / pageSize);
    const validPageNum = Math.max(1, Math.min(pageNum, totalPages));

    // 计算分页范围
    const startIndex = (validPageNum - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // 提取分页数据
    const paginatedData = pokemonData.slice(startIndex, endIndex);
    return NextResponse.json({
        code: 200,
        message: "Success",
        data: {
            total: pokemonData.length,
            list: paginatedData,
        },
    });
}