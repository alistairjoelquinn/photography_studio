export default {
    mode: 'universal',
    target: 'server',
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
        ]
    },
    css: [
    ],
    plugins: [
    ],
    components: true,
    buildModules: [
    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/bulma'
    ],
    axios: {},
    build: {
    }
}
