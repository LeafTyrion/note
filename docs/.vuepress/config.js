module.exports = {
    title: 'leaf\'s 打工笔记',
    description: '要恰饭的嘛~',
    base: '/note/',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        subSidebar: 'auto',
        nav: [
            {text: '首页', link: '/'},
            {
                text: 'leaf\'s 笔记博客',
                items: [
                    {text: 'Github', link: '/'}
                ]
            }
        ],
        sidebar: [
            {
                title: '首页',
                path: '/',
            },
            {
                title: "数据库",
                collapsable: true, // 不折叠
                children: [
                    {
                        title: "Redis",
                        collapsable: true, // 不折叠
                        children: [
                            {
                                title: "安装&配置",
                                path: "/database/redis/00_install.md"
                            }
                        ]
                    },
                    {
                        title: "MySQL",
                        collapsable: true, // 不折叠
                        children: [
                            {
                                title: "安装&配置",
                                path: "/database/mysql/00_install.md"
                            }
                        ]
                    }
                ],
            }
        ]
    }
}