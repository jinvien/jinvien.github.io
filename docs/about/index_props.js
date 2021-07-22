import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "about/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "about/index.html",
    'title': "关于我",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>关于我</h1>\n<p>你好，可以叫我锦文，是一位互联网行业从业者，目前在腾讯写写代码。</p>\n<p>// ...</p>\n<p>其他稍后补充啦。</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5173\u4E8E\u6211"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>你好，可以叫我锦文，是一位互联网行业从业者，目前在腾讯写写代码。</p>\n<p>// ...</p>\n<p>其他稍后补充啦。</p>'
        } }),
    'toc': null,
    'author': "Jinvien",
    'contributors': [
        "Jinvien"
    ],
    'date': "2021-07-22T18:18:38.000Z",
    'updated': null,
    'excerpt': "你好，可以叫我锦文，是一位互联网行业从业者，目前在腾讯写写代码。 // ... 其他稍后补充啦。",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/photography/sanya.md",
                "title": "三亚的海",
                "link": "posts/photography/sanya.html",
                "date": "2021-07-22T18:18:38.000Z",
                "updated": null,
                "author": "Jinvien",
                "contributors": [
                    "Jinvien"
                ],
                "categories": [
                    "photography"
                ],
                "tags": [
                    "sea",
                    "sanya"
                ],
                "excerpt": "",
                "cover": "../../assets/photography/IMG_9096.jpeg"
            }
        ],
        "categories": [
            {
                "name": "photography",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "sanya",
                "count": 1
            },
            {
                "name": "sea",
                "count": 1
            }
        ]
    }
};
