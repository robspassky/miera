# miera

Miera is a set of typescript utils I created for myself and published to npm publically so I can use them wherever.

For now I just have basic methods to make simple http requests (incl. json) so I don't have to keep writing the res.on("data"), etc. code.

# Usage

```ts
import { Miera } from "miera";

Miera.wget("http://www.google.com", (err, body) => {
  if (!err) {
    // succeeded
    console.log(body);
  }
});

Miera.jget("http://some.url.returning.json.com", (err, obj) => {
  if (!err) {
    // succeeded
    console.dir(obj);
  }
});

```
