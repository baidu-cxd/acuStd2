export default {
    install(Vue, options) {
        Vue.prototype.$bosLink = filename => this.bosLinkPrefix + filename
    },
    bosLinkPrefix: 'http://baiduyun-guideline.bj.bcebos.com/'
}
