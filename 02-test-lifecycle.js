import http from 'k6/http';
import { sleep } from 'k6';



// 1. Init options
// Called once per VU
export const options = {
    vus: 100,
    duration: '30s'
}
let test_url;

// 2. Setup code
// Called once
export function setup() {
    // Get URL from DB
    test_url = db.getDbURL();
}

// 3. VU code
// Called many times as the test options require
export default () => {
    http.get(test_url);
    sleep(1);
}

// 4. Teardown code
// Called once
export function teardown(data) {
    db.close();
}