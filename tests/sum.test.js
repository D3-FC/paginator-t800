import { Executor } from '../src/Executor'
import { sleep } from '../src/AsyncOperation'

describe('Executor', () => {
  test('can execute', () => {
    let wasExecuted = false

    const executor = new Executor(() => {
      wasExecuted = true
    })

    executor.execute()

    expect(wasExecuted).toBeTruthy()
  })
  test('isProcessing should be true', () => {
    const executor = new Executor(async () => {
      await sleep()
    })
    executor.execute()
    expect(executor.isProcessing).toBeTruthy()
  })
})
