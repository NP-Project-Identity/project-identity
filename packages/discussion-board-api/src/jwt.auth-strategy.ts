import {AuthenticationStrategy} from '@loopback/authentication';
import {Request} from '@loopback/rest';
import {UserProfile} from '@loopback/security';

export class JWTAuthProvider implements AuthenticationStrategy {
  name = 'com.achrinza.JWTAuthProvider';

  async authenticate(request: Request): Promise<UserProfile> {
    return {};
  }
}
