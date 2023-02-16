import { z } from 'zod';

export const Location = z.object({
  id: z.string(),
  lng: z.number(),
  lat: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const RawLocation = Location.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export interface IWaypoint {
  waypoint_index: number;
  trips_index: number;
  hint: string;
  distance: string;
  name: string;
  location: number[];
}

export type TLocation = z.infer<typeof Location>;
export type TRawLocation = z.infer<typeof RawLocation>;
