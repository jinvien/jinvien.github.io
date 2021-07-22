import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "tags/sanya/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/sanya/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'title': "sanya",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/photography/sanya.md",
                "title": "三亚的海",
                "link": "posts/photography/sanya.html",
                "date": "2021-07-22T18:15:34.893Z",
                "updated": null,
                "contributors": [],
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
