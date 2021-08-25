// Copyright The LearnSpot Authors 2021. All Rights Reserved.
// Node module: @learnspot/discussion-board-api
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {AuthenticationStrategy} from '@loopback/authentication';
import {Request} from '@loopback/rest';
import {securityId, UserProfile} from '@loopback/security';

export class JWTAuthProvider implements AuthenticationStrategy {
  name = 'com.achrinza.JWTAuthProvider';

  async authenticate(request: Request): Promise<UserProfile> {
    return {
      [securityId]: '',
    };
  }
}
