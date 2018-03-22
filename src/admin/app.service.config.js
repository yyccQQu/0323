appConfig.apiUrls = {
    CAPTCHA: "/captcha",
    LOGIN: "/login",
    HOST: "/api",
    LAYOUT: "/logout", //退出登录

    LANG: { //语言下拉
        "index": "/langs",
        "cn": "/lang/cn",
        "us": "/lang/us",
        "zh": "/lang/zh"
    },
    ACTIVITY: {
        "index": "/activitys",
        "msgs": "/activity/msgs",
        "notify": "/activity/notify"
    },

    // 管理员
    HOLDER_LIST: "/holder/list", // 开户人管理	GET /holder/list
    HOLDER_DISABLE:"/holder/disable",

    //主机列表
    MAINENGINE: {
        "area": "/host/area",//GET 主机区域下拉框
        "room": "/host/room",//GET 主机机房下拉框
        "cabinet": "/host/cabinet",//GET 主机机柜下拉框
        "list": "/host/list",//GET 主机列表
        "status": "/host/status", //PUT 更改主机状态
        "hostId":"/host/hostId", //GET 获取主机ID
        "addHost":"/host/add", //POST 添加主机
    },
    //功能管理 --wdl
    POWER_LIST: "/power/list", //获取功能列表
    POWER_ADD: "/power",//新增功能
    POWER_INFO:"/power/info", //获取功能详情
    POWER_PUT:"/power", //提交功能修改项
    POWER_STATUS: "/power/status", //启用/停用 修改
    POWER_DELETE: "/power",   //删除功能
    //角色管理
    ROLE: {
      ROLE_LIST: "/role/list",//角色列表
      ROLE_STATUS: "/role/status",//角色状态修改
      // ROLE_INFO: "/role/info",//角色修改获取
      ROLE: "/role",
      ROLE_POWER: "/role/power" //角色权限获取
    },
    ACCOUNT:{
        account_list:"/account/list",
        account_add:"/account",
        account_del:"/account",
        account_alter:"/account",
        info_get:"/account/info",
        power_alter:"/account/power",
        power_get:"/account/power"
    },
    MENU:{
        MENU_LIST:'/menu/list',//菜单列表
        MENU_ADD:'/menu' //新增菜单
    },
    LOG:{
        logList:'/log/list'
    }

};


appConfig.option = {
    option_status: [
        {name: "停用", value: "2"},
        {name: "启用", value: "1"}
    ],
    option_online: [
        {name: "在线", value: "1"},
        {name: "离线", value: "2"}
    ],
    option_yesOrno: [
        {name: "是", value: "1"},
        {name: "否", value: "2"}
    ],
    option_routeType: [
        {name: "GET", value: "1"},
        {name: "POST", value: "2"},
        {name: "PUT", value: "3"},
        {name: "DELETE", value: "4"}
    ],
    option_checkOn: [
        {name: "是", value: "1"},
        {name: "否", value: "0"}
    ],
    option_idOrOrderId:[
        { name: "ID", value: "1" },
        { name: "订单号", value: "2" }
    ],
    option_hardDiskType:[
    	{ name: "HHD",value: "1" },
    	{ name: "SSD",value: "2" }
    ]
};
