import Templatoor from './template'

(async () => {
    const tmpl = new Templatoor()
    await tmpl.init()

    tmpl.run()
})()
