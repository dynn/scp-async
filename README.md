scp-async
=========
The SCP program wrapped in a Async Monad

usage
-----
```
const scp = require('scp-async')

const config = {
  host: 'example.com',
  user: 'frank',
}

scp(config, '/home/frank/hi.txt', '/home/prod/hi.txt').fork(
  e => console.log('er'),
  x => console.log('ok')
)
```
