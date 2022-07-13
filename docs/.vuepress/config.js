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
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    {title: "学前必读", path: "/"}
                ]
            },
            {
                title: "数据库",
                path: '/database/redis/install.md',
                collapsable: false, // 不折叠
                children: [
                    {title: "Redis", path: "/database/redis/install.md"},
                    {title: "MySQL", path: "/handbook/Generics"}
                ],
            }
        ]
    }
}