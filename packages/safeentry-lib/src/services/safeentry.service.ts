import {generateUniqueId} from '@loopback/core';

/**
 * @public
 * @sealed
 */
export class SafeentryService {

  constructor(
    public readonly appid: string,
  ) {}

  private static sortJSON<T extends Record<string, unknown>>(json: T): T {
    return Object.keys(JSON).sort().reduce<Partial<T>>((previousValue, currentValue) => {
      return {...previousValue, currentValue: json[currentValue]}
    }, {}) as T;
  }

  private generateAuthHeader() {
    return {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'app_id': this.appid,
      nonce: generateUniqueId(),
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'signature_method': 'RS256',
      timestamp: new Date().getTime()
    }
  }

  checkin(
    sub: string,
    subType: 'uinfin' | 'others',
    mobileNo: string,
    venueId: string,
    tenantId?: string,
  ) {

  }

  checkout(
    sub: string,
    subType: 'uinfin' | 'others',
    mobileNo: string,
    venueId: string,
    tenantId?: string,
  ) {

  }
}
