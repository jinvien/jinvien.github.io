export default {
    title: "锦文",
    description: "Hi，我是锦文，很高兴遇见你，我会在这里记录一些日常。 <山川湖海, 代码与爱/>",
    srcDir: 'src',
    outDir: "docs",
    theme: "blog",
    plugins: ['blog'],
    blog: {
        root: '/posts/',
        social: {
            github: 'jinvien',
            email: 'itwap@foxmail.com',
        },
    },
    nav: [
        {
            text: 'Home',
            link: '/',
        },
        {
            text: "Photography",
            link: "/posts/photography/sanya.html",
        },
        {
            text: "Archives",
            link: "/archives/index.html",
        },
        {
            text: "About",
            link: "/about/index.html",
        },
    ],
};
