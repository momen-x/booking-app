import { AvailableTimes } from "../entity/available-times";

export function generateTimeSlots(availability: AvailableTimes, duration: number, now = Date.now()) {
  if (!Number.isFinite(duration) || duration <= 0) return [];

  const formatter = new Intl.DateTimeFormat(undefined, {
    timeZone: availability.timezone,
    hour: "2-digit",
    minute: "2-digit",
  });
  const slots = new Map<string, { isoStartTime: string; label: string }>();
  const durationMs = duration * 60_000;

  for (const range of availability.availableTimes) {
    const end = Date.parse(range.endTime);
    for (let start = Date.parse(range.startTime); start + durationMs <= end; start += durationMs) {
      if (start <= now) continue;
      const isoStartTime = new Date(start).toISOString();
      slots.set(isoStartTime, {
        isoStartTime,
        label: `${formatter.format(start)} – ${formatter.format(start + durationMs)}`,
      });
    }
  }

  return [...slots.values()].sort((a, b) => a.isoStartTime.localeCompare(b.isoStartTime));
}
