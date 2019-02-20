//pre-load data into the database
var mongoose = require("mongoose");
var allTeams = require("./models/allTeam");
var teamInfo = require("./models/teamInfo");
var background = require("./models/background.js");

var count = 0;

var backgroundData = [{ image: "/Glory.jpg" }];

var data = [{
        teamName: "兴欣战队",
        teamImage: "/XingXin.jpg"
    }, {

        teamName: "微草战队",
        teamImage: "/WeiCao.jpg",
    }, {
        teamName: "蓝雨战队",
        teamImage: "/Langyu.jpg",
    }, {
        teamName: "霸图战队",
        teamImage: "/Batu.jpg",
    }, {
        teamName: "轮回战队",
        teamImage: "/Lunhui.jpg",
    }



];

var data1 = [{
        teamMember: "叶修 (Ye Xiu)",
        memberImage: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550685038&di=030d0cb771f9da6d4f2e40b5cb0d220a&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F09%2F20161109215624_PsMZE.jpeg",
        memberDescription: "荣耀网全职业精通。担任首届荣耀世界邀请赛中国国家队领队 " +
            "生日：5月29日 星座：双子座 出生地：B市 身高：178cm " +
            "血型：AB型 荣誉称号：荣耀教科书、战术大师、斗神、荣耀之神 " +
            "角色ID：一叶之秋（原，战斗法师）、君莫笑（现，无转职，散人）角色武器：却邪（原，银武，战矛）、千机伞（现，银武）"
    },
    {
        teamMember: "苏沐橙",
        memberImage: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2558364376,3561364591&fm=26&gp=0.jpg",

        memberDescription: "联盟首席枪炮师，因相貌出众被称作联盟第一美女。与叶修配合默契。作为中国队队员出征首届荣耀世界邀请赛" +
            "性别：女 生日：2月18日 星座：水瓶座 血型：B型 身高：167cm 荣誉称号：首席枪炮师" +
            "角色ID：沐雨橙风（枪炮师）、风梳烟沐 角色武器：吞日（银武，手炮）"
    }
];


var data2 = [{
        teamMember: "王杰希",
        memberImage: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3882446854,1579156157&fm=26&gp=0.jpg",

        memberDescription: "首战屠神，以变化莫测的打法获得“魔术师”称号，凭借强大的实力由新秀挑战者转变为联盟征服者。作为中国队队员出征首届荣耀世界邀请赛。"
    },
    {
        teamMember: "高英杰",
        memberImage: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=381711660,2765517927&fm=26&gp=0.jpg",

        memberDescription: "有天才新人的称号，深受队长王杰希的器重，是微草战队的重点培养对象"
    }
];


var data3 = [{
        teamMember: "喻文州",
        memberImage: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=183542810,273673193&fm=26&gp=0.jpg",

        memberDescription: "后通过战术，连胜曾经队长魏琛。战术素养极为优秀、为人稳重。作为中国队队长出征首届荣耀世界邀请赛"
    },
    {
        teamMember: "黄少天",
        memberImage: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3162685605,4276094735&fm=26&gp=0.jpg",

        memberDescription: "荣耀职业圈中以惊人判断力和捕捉把握机会的能力闻名，是联盟中最出色的机会主义者，有“妖刀”之称。同时是个话痨。作为中国队队员出征首届荣耀世界邀请赛"
    }
]

var data4 = [{
        teamMember: "韩文清",
        memberImage: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=919991836,2030719958&fm=26&gp=0.jpg",

        memberDescription: "职务：队长 生日：3月31日 星座：白羊座 血型：A型 身高：181cm 性别：男 职业：拳法家 角色：大漠孤烟 银武：烈焰红拳 称号：拳皇"
    },
    {
        teamMember: "张新杰",
        memberImage: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2851118989,3439401428&fm=26&gp=0.jpg",

        memberDescription: "职务：副队长 生日：1月11日 星座：摩羯座 血型：O型 身高：177cm 性别：男 职业：牧师 角色：石不转 银武：逆光的十字星 称号：黄金一代、战术大师"
    }
];

var data5 = [{
        teamMember: "周泽楷",
        memberImage: "http://hbimg.b0.upaiyun.com/59a12b9780d322da1997ddc3c6f06e6b187caa8829c2f-i3ddjm_fw658",

        memberDescription: "职务：队长 生日：11月24日 星座：射手座 血型：A型 身高：181cm 性别：男 职业：神枪手 角色：一枪穿云  银武：碎霜、荒火 称号：枪王"
    },
    {
        teamMember: "江波涛",
        memberImage: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3616066879,3898751916&fm=26&gp=0.jpg",

        memberDescription: "职务：副队长 生日：11月11日 星座：天蝎座 血型：B型 身高：176cm 性别：男 职业：魔剑士 角色：无浪 银武：天链 荣誉：荣耀职业联赛第八、九赛季总冠军"
    }
];

async function seedDB() {
    await allTeams.deleteMany({});
    console.log('teams are deleted');
    await teamInfo.deleteMany({});
    console.log('teaminformation are deleted');
    let backgrounds = await background.create(backgroundData);
    for (const seed of data) {
        let teams = await allTeams.create(seed);
        console.log("team created");
        //        console.log(teams);
        //             console.log(count);
        if (count == 0) {
            for (const seed2 of data1) {
                let information = await teamInfo.create(seed2);
                teams.teamInformation.push(information);
            }
            teams.save();
        }
        else if (count == 1) {
            for (const seed3 of data2) {
                let information2 = await teamInfo.create(seed3);
                teams.teamInformation.push(information2);
            }
            teams.save();
        }
        else if (count == 2) {
            for (const seed4 of data3) {
                let information3 = await teamInfo.create(seed4);
                teams.teamInformation.push(information3);
            }
            teams.save();
        }
        else if (count == 3) {
            for (const seed5 of data4) {
                let information4 = await teamInfo.create(seed5);
                teams.teamInformation.push(information4);
            }
            teams.save();
        }
        else if (count == 4) {
            for (const seed5 of data5) {
                let information4 = await teamInfo.create(seed5);
                teams.teamInformation.push(information4);
            }
            teams.save();
        }
        count++;

    }

}

module.exports = seedDB;
