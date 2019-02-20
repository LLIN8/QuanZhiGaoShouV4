//pre-load data into the database
var mongoose = require("mongoose");
var allTeams = require("./models/allTeam");
var teamInfo = require("./models/teamInfo");
var background = require("./models/background.js");
var User    = require("./models/user.js");

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
        gender: "Male",
        birthday: "May 29",
        bloodType: "AB",
        height: "178cm",
        APM: "510(average) 900(full power)",
        character: "君莫笑 (Lord Grim)",
        weapon: "千机伞 (Thousand Chance Umbrella)",
        memberDescription: "Ye Xiu is well known as the Glory walking wiki, he knows everything about the game." +
                        "Won consecutive titles as League Champions during the seasons 1-3." +
                        "Join back to the league on season 10 and won the Champion" +
                        "with a new formed team that only had one year of trainning."
                        
    },
    {
        teamMember: "苏沐橙 (Su MuCheng)",
        memberImage: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2558364376,3561364591&fm=26&gp=0.jpg",
        gender: "Female",
        birthday: "Febuary 18",
        bloodType: "B",
        height: "167cm",
        APM: "300+",
        character: "沐雨橙风 (Dancing Rain) ",
        weapon: "吞日 (Devouring Sun)",
        memberDescription: "MuCheng was awarded three times with Ye Xiu as the best combo/team play in the league." +
                    "Joined Ye Xiu's team and won the champion for season 10"
    }
];


var data2 = [{
        teamMember: "王杰希 (Wang Jie Xi)",
        memberImage: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3882446854,1579156157&fm=26&gp=0.jpg",
        gender: "Male",
        birthday: "July 6",
        bloodType: "O",
        height: "181cm",
        APM: "350+",
        character: "王不留行 (King Don't Stay)",
        weapon: "灭绝星尘 (Destruction of Galaxy)",
        memberDescription: "Wang Jie Xi changes his play style during battle very often," +
                    "therefore top league player gave him the title 'The Magician'"
    },{
        teamMember: "高英杰 (Gao YingJie)",
        memberImage: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=381711660,2765517927&fm=26&gp=0.jpg",
        gender: "Male",
        birthday: "March 15",
        bloodType: "A",
        height: "173cm",
        APM: "280+",
        character: "木恩 (Mu En)",
        weapon: "晨露 (Morning Rain drop)",
        memberDescription: "The next 'Star' of WeiCao team, admire Wang Jie Xi"
    }
];


var data3 = [{
        teamMember: "喻文州 (Yu WenZhou)",
        memberImage: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=183542810,273673193&fm=26&gp=0.jpg",
        gender: "Male",
        birthday: "Febuary 10",
        bloodType: "O",
        height: "178cm",
        APM: "200",
        character: "索克萨尔 (Swoksaar)",
        weapon: "灭神的诅咒 (Destruction of God Curse)",
        memberDescription: "The slowest APM player in the leauge, however WenZhou is one of the four that" + 
                    "have the title of 'Strategy Master'"
    },
    {
        teamMember: "黄少天 (Huang ShaoTian)",
        memberImage: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3162685605,4276094735&fm=26&gp=0.jpg",
        gender: "Male",
        birthday: "August 10",
        bloodType: "AB",
        height: "176cm",
        APM: "350+",
        character: "夜雨声烦 (Troubling Rain)",
        weapon: "冰雨 (Ice Rain)",
        memberDescription: "The only guy that made the league to change their rule for chatting" +
                "due to the reason of ShaoTian talk non-stop and annoys player and audience" +
                "Have the title of 'Opportunists' which mean he is able to capture every single"+
                "chances that leads the team to victory"
    }
]

var data4 = [{
        teamMember: "韩文清 (Han WenQing)",
        memberImage: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=919991836,2030719958&fm=26&gp=0.jpg",
        gender: "Male",
        birthday: "March 31",
        bloodType: "A",
        height: "181cm",
        APM: "300+",
        character: "大漠孤烟 (Ashes of Desert)",
        weapon: "???",
        memberDescription:"First Generation player. The play style of Han WenQing is very" +
                "straight forward, but later into the season he decideds to change up" +
                "due to that he is getting older and older and was not able to keep up" +
                "with intense battle"
    },
    {
        teamMember: "张新杰 (Zhang XinJie)",
        memberImage: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2851118989,3439401428&fm=26&gp=0.jpg",
        gender: "Male",
        birthday: "January 11",
        bloodType: "O",
        height: "177cm",
        APM: "300+",
        character: "石不转 (Rock No Turn)",
        weapon: "???",
        memberDescription: "Zhang XinJie was awarded as one of Golden Age player" +
                    "Best Priest in the game. One of the four 'Strategy Master'" 
    }
];

var data5 = [{
        teamMember: "周泽楷 (Zhou ZeKai)",
        memberImage: "http://hbimg.b0.upaiyun.com/59a12b9780d322da1997ddc3c6f06e6b187caa8829c2f-i3ddjm_fw658",
        gender: "Male",
        birthday: "November 24",
        bloodType: "A",
        height: "181cm",
        APM: "330+",
        character: "一枪穿云 (Shoot Through Cloud)",
        weapon: "左手碎霜，右手荒火 (left hand: frost breaker right hand: blazing fire)",
        memberDescription: "According to the novel Zhou ZeKai is the best looking guy" +
                    "in the league. Zhou ZeKai is a very strong player "+
                    " The way he uses skill are very flashy but at the same time it is effective"
    },
    {
        teamMember: "江波涛 (Jiang BoTao)",
        memberImage: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3616066879,3898751916&fm=26&gp=0.jpg",
        gender: "Male",
        birthday: "November 11",
        bloodType: "B",
        height: "176cm",
        APM: "300+",
        character: "无浪 (Silence Wave)",
        weapon: "天链 (Sky Chain)",
        memberDescription: "Best Runeblade in the game, not 'Strategy Master' but is still a very high" +
                "skilled strategy player"
    }
];

async function seedDB() {
    await allTeams.deleteMany({});
    console.log('teams are deleted');
    await teamInfo.deleteMany({});
    console.log('teaminformation are deleted');
    await User.deleteMany({});
    console.log("all user are deleted");
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
