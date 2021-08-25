// Copyright The LearnSpot Authors 2021. All Rights Reserved.
// Node module: event-management-frontend
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {ReportHandler} from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    void import('web-vitals').then(({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
