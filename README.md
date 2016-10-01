# robspassky-ts-utils

Typescript utils I created for myself and published to npm publically so I can use them wherever.

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
