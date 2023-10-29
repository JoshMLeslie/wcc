import { TimeZone, UIZone } from '../interface/time-zone';

export const tzToUIArr = () => {
  // sort timezones into major zones
  // format zone data for UI handling
  const obj = Object.values(TimeZone).reduce<Record<string, UIZone[]>>(
    (acc, str) => {
      const [parent, ...childZones] = str.split('/');
      if (!acc[parent]) {
        acc[parent] = [];
      }
      const prettyFull = str.replace(/_/g, ' ');
      const zone = childZones.join('/') || parent;

      acc[parent].push({
        full: str,
        parent,
        prettyFull,
        zone,
      });
      return acc;
    },
    {}
  );

  // change dict into array for rendering
  return Object.keys(obj).reduce<{ zone: string; zones: UIZone[] }[]>(
    (acc, zone) => {
      const zones = obj[zone];
      return acc.concat([
        {
          zone,
          zones,
        },
      ]);
    },
    []
  );
};
