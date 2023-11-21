import http from 'k6/http';
import { check, sleep } from 'k6';

const url = 'https://httpbin.test.k6.io/post';


export const options = {
    stages: [
        { duration: '10s', target: 20 },    // VU
        { duration: '20s', target: 20 },
        { duration: '6s', target: 0 },
    ],
}

export default function () {
    let params = {
        headers: { 'Content-Type': 'application/json' },
    };
    let body = { name: 'Ronin' };

    let res = http.post(url, JSON.stringify(body), params);
    
    check(res, { 'Echo': (r) => r.json().json.name == 'Ronin' });
}
