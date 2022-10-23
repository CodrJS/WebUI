const PROJECTS = [
  {
    $schema: "https://perc_lab.codrjs.com/schema/project.schema.json",
    id: 1,
    general: {
      title: "GraphQL API",
      type: "classification",
      slug: "graphql-api",
      bgColorClass: "bg-pink-600",
      guidelines:
        ":smile: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a orci ut turpis cursus pretium. Nulla vel lobortis enim, sit amet rutrum odio. Donec auctor justo felis, congue dictum dolor tristique at. Aenean sed viverra leo. Maecenas lectus justo, ultricies vitae fringilla vel, molestie mattis tellus. Sed egestas malesuada ante at placerat. Maecenas posuere aliquet mi vehicula finibus. Vivamus luctus leo sed diam suscipit, et pulvinar elit tincidunt. Pellentesque ac rutrum quam. In blandit feugiat ornare. Quisque ut euismod ante, nec ultricies purus. Ut bibendum quam lobortis rhoncus venenatis. Suspendisse aliquet mollis nulla, tincidunt condimentum sem volutpat sit amet. Donec tincidunt nunc dapibus turpis vulputate tempor a eu lorem. Ut non diam et ante vehicula volutpat. Cras commodo nibh at elementum feugiat.\n\n Nunc pretium est sed faucibus varius. Vivamus tempus ac erat nec elementum. Nullam sodales, nisi et luctus sagittis, nibh augue euismod enim, sed dictum urna tellus non odio. Ut vel dui sodales, gravida tortor vel, blandit sem. Nam varius at dui a dignissim. Donec aliquet nisi ipsum, ut lacinia eros eleifend vitae. Proin diam nunc, tempor at metus a, pretium venenatis ante. Morbi libero orci, iaculis sed laoreet a, blandit vehicula libero. Mauris sed pharetra eros. Vestibulum in ante tempus, semper augue bibendum, tempus velit.\n\n Praesent sit amet purus ultrices, iaculis nisl eu, sollicitudin erat. Phasellus fringilla ex sed odio cursus, ut commodo magna fringilla. Cras felis purus, accumsan eu ex ut, semper imperdiet lorem. Maecenas nulla nisi, suscipit quis sodales quis, vehicula eget ante. Vestibulum quis tincidunt nunc. Nulla semper lectus at nibh malesuada, id iaculis odio consequat. Morbi condimentum tincidunt dui, ut tristique elit bibendum elementum. Sed eu metus lobortis orci finibus dapibus a dignissim tortor. Sed in metus et elit euismod vestibulum sodales a ligula. Nunc mi erat, efficitur eu justo finibus, faucibus vulputate leo. Etiam id lacus ut quam suscipit convallis ac et diam. Morbi auctor hendrerit purus ultricies placerat. Integer congue venenatis purus, vel posuere metus varius non. In hac habitasse platea dictumst. Vivamus dictum non nulla varius dictum.\n\n Nulla est felis, volutpat suscipit euismod eget, pellentesque molestie lectus. Mauris lobortis nulla sit amet leo volutpat, eu aliquet augue bibendum. Vivamus congue sagittis urna, at molestie sem maximus id. Mauris lacinia felis et feugiat ullamcorper. Maecenas in elit sed neque faucibus pharetra. Nunc euismod ultricies tempus. Sed rhoncus leo ex, sit amet mollis mauris semper ac.\n\n Sed vel accumsan lectus, nec laoreet lacus. Proin condimentum mi lacus, et bibendum felis efficitur sed. Sed at ornare nisi. Mauris erat quam, lacinia sed iaculis lobortis, blandit sit amet quam. Sed et nisl semper, tempor libero et, fringilla justo. Donec vel risus libero. Vivamus vestibulum odio ac turpis venenatis, nec ullamcorper velit posuere. Nulla rhoncus at enim eget elementum. Duis vitae augue eget sem tempor molestie ac vitae neque. Cras vitae enim ante. Morbi efficitur tellus orci, sit amet rutrum sapien tincidunt in. Sed mollis ligula dolor, quis placerat magna porttitor eget. Nam eu lectus ac turpis gravida imperdiet. Vivamus pulvinar consequat orci non venenatis. Phasellus faucibus nisi in mauris congue, eu tempor felis tincidunt. Curabitur eu sapien lectus.",
      team: "Engineering",
      members: [
        {
          name: "Dries Vincent",
          handle: "driesvincent",
          imageUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Lindsay Walton",
          handle: "lindsaywalton",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Courtney Henry",
          handle: "courtneyhenry",
          imageUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Tom Cook",
          handle: "tomcook",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      ],
      totalMembers: 12,
      pinned: true,
      lastModified: "March 17, 2020",
      createdAt: "March 17, 2020",
    },
    display: {
      inputs: [
        {
          type: "text",
          value: "Text displayed to annotator",
        },
      ],
      outputs: [
        {
          type: "short-text",
        },
      ],
    },
    model: {
      type: "object",
      properties: {
        type: { type: "string" },
        _id: { type: "string" },
      },
      required: ["type", "_id"],
    },
  },
] as const;

export const DATASETS = (project: project) => [
  { name: "Dataset 1", href: `/project/${project.general.slug}/dataset-1`, count: "5" },
  { name: "Dataset 2", href: `/project/${project.general.slug}/dataset-2` },
  { name: "Dataset 3", href: `/project/${project.general.slug}/dataset-3`, count: "19" },
  { name: "Dataset 4", href: `/project/${project.general.slug}/dataset-4`, count: "20+" },
  { name: "Dataset 5", href: `/project/${project.general.slug}/dataset-5` },
  { name: "Dataset 6", href: `/project/${project.general.slug}/dataset-6` },
];

export type project = typeof PROJECTS[number];
export default PROJECTS;
