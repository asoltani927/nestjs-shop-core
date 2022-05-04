export class Delay {
  sleep = (ms: number) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
}

export const DelayUtils = new Delay();
