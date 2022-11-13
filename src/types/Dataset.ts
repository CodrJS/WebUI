export default interface Dataset {
  name: string;
  status: string;
  annotation: string;
  href: string;
  slug: string;
  count: string;
  samples: Sample[];
}

export interface Sample extends Record<string, unknown> {
  id: number | string;
  status: string;
  annotation: string;
}
