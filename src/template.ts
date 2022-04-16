import { config } from './config'

export default class Templatoor {
    // Whether the class is initialized
    private isInitialized: boolean = false

    constructor() {}

    public async init(): Promise<void> {
        this.isInitialized = true
    }

    public run(): void {
        if (!this.isInitialized) throw Error('uninitialized: did you run init()?')
    }
}
