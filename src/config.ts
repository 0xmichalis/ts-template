import dotenv from "dotenv";
import { z } from "zod";

const schema = z.object({
  // TODO: Store config here
});

export class ConfigService {
  private config: Record<string, string> = {};

  constructor() {
    const { parsed: parsedConfig, error: parseError } = dotenv.config();
    if (parseError) {
      console.log(`No .env file found, config.get will use process.env`);
      return;
    }
    const result = schema.safeParse(parsedConfig);
    if (!result.success) {
      throw Error(`Failed to validate config: ${result.error.message}`);
    }
    this.config = result.data as Record<string, string>;
  }

  get(key: string): string {
    return process.env[key] ?? this.config[key] ?? "";
  }
}

export const config = new ConfigService();
