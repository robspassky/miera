# robspassky-ts-utils

Typescript utils I created for myself and published to npm publically so I can use them wherever.

For now I just have basic methods to make simple http requests (incl. json) so I don't have to keep writing the res.on("data"), etc. code.

# Usage

```ts
import { Utils } from "robspassky-ts-utils";

Utils.wget("http://www.google.com", (err, body) => {
  if (!err) {
    // succeeded
    console.log(body);
  }
});

Utils.jget("http://some.url.returning.json.com", (err, obj) => {
  if (!err) {
    // succeeded
    console.dir(obj);
  }
});

```
