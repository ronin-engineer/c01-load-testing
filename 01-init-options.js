import http from 'k6/http';
import { check, sleep } from 'k6';


// 1. Init options
export const options = {
    vus: 20,   // Virtual User
    duration: '10s'
}


export default () => {
    let res = http.get('https://test.k6.io');
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}