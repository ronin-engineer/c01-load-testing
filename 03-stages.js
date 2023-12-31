import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },  // ramp-up
    { duration: '1m', target: 20 },   // stay at
    { duration: '20s', target: 0 },   // ramp-down
  ],
}

export default function () {
  const res = http.get('https://httpbin.test.k6.io/');
  
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
