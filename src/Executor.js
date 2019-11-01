export class Executor {

  isProcessing = false

  command = () => {}

  constructor (command) {
    this.command = command
  }

  async execute () {
    this.isProcessing = true
    const r = await this.command()
    this.isProcessing = false
    return r
  }
}
