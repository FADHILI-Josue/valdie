import { describe, expect, it } from 'vitest'
import { isUuid } from '../src'

describe('Testing the valid uuid', () => {
  it('passes for the correct uuid', () => {
    function generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c === 'x' ? r : (r & 0x3 | 0x8); // 
            return v.toString(16);
        });
    }
    const { message, success } = isUuid(generateUUID())
    expect(message).toBeUndefined()
    expect(success).toBeTruthy()
  })

  it('should fail for invalid uuids', () => {
    let uuid = 'akslfjasdfa-asfdalksdjf';
    const { message, success } = isUuid(uuid)
    expect(message).toEqual(`${uuid} isn't a valid uuid`)
    expect(success).toBeFalsy()
  })
})
