import * as http from "http";

export class Miera {

  public static wget(url: string, cb: (err: string, body: string) => void) {
    http.get(url, (rsp) => {
      let body: string = "";
      if (rsp.statusCode !== 200) {
        cb(`Bad status code: ${rsp.statusCode}`, undefined);
        return;
      }
      rsp.on("data", (chunk: string) => { body += chunk; });
      rsp.on("end", () => { cb(undefined, body); });
      rsp.on("close", () => { cb(undefined, body); });
      rsp.on("error", (err: any) => { cb(`Stream error: ${err}`, undefined); });
    })
    .on("error", (err: any) => {
      console.error(`Failed to make http request: ${err}`);
      cb(`Connection error: ${err}`, undefined);
    });
  }

  public static jget(url: string, cb: (err: string, obj: any) => void) {
    Miera.wget(url, (err, body) => {
      if (err) {
        cb(err, undefined);
        return;
      }
      try {
        cb(undefined, JSON.parse(body));
      } catch (err) {
        cb(err, undefined);
      }
    });
  }

}
