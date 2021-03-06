import Chance from "chance";
import sleepAsync from "sleep-promise";

import {
  Job,
  IDependencies
} from "@taskbotjs/client";

import { NoDeps } from "../NoDeps";

const chance = new Chance();

export class LongJob extends Job<NoDeps> {
  static readonly jobName: string = "taskbot.long";

  async perform(): Promise<void> {
    const interval = Math.max(10000, Math.round(chance.normal({mean: 30000, dev: 10000})));
    this.logger.debug({ interval }, "Starting a long job.");
    await sleepAsync(interval);
    this.logger.debug({ interval }, "Long job done!");
  }
}
