import { TimeZone, UIZone, UIZoneData } from '../interface/time-zone';

export const tzToUIArr = () => {
  // sort timezones into major zones
  // format zone data for UI handling
  const obj = Object.values(TimeZone).reduce<Record<TimeZone, UIZoneData[]>>(
    (acc, str) => {
      const [parent, ...childZones] = str.split('/') as TimeZone[];
      if (!acc[parent]) {
        acc[parent] = [];
      }
      const prettyFull = str.replace(/_/g, ' ');
      const zone = (childZones.join('/') || parent) as TimeZone;

      acc[parent].push({
        full: str,
        parent,
        prettyFull,
        zone,
      });
      return acc;
    },
    {} as Record<TimeZone, UIZoneData[]>
  );

  // change dict into array for rendering
  return Object.keys(obj).reduce<UIZone[]>((acc, zone) => {
    const zoneName = zone as TimeZone;
    const zones = obj[zoneName];

    return acc.concat([
      {
        zone: zoneName,
        zones,
      },
    ]);
  }, []);
};
