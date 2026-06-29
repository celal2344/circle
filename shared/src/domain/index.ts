import { z } from "zod";

export const primaryRoleSchema = z.enum([
  "admin",
  "isletme",
  "organizer",
  "sanatci",
  "saha_calisani"
]);

export type PrimaryRole = z.infer<typeof primaryRoleSchema>;

export const workerSubRoleSchema = z.enum([
  "dj",
  "musician_band",
  "bartender",
  "waiter",
  "host_hostess",
  "sound_light_tech",
  "photo_video",
  "security",
  "pr"
]);

export type WorkerSubRole = z.infer<typeof workerSubRoleSchema>;

export const eventLifecycleStateSchema = z.enum([
  "idea",
  "seed",
  "confirmed",
  "completed",
  "cancelled"
]);

export type EventLifecycleState = z.infer<typeof eventLifecycleStateSchema>;
