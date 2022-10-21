const projects = [
  {
    $schema: "https://perc_lab.codrjs.com/schema/project.schema.json",
    id: 1,
    general: {
      title: "GraphQL API",
      type: "classification",
      slug: "graphql-api",
      bgColorClass: "bg-pink-600",
      guidelines: "My guidelines go here.",
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

export type project = typeof projects[number]
export default projects;
