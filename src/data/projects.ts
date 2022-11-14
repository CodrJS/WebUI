import ProjectConfig from "types/ProjectConfig";

const PROJECTS: (ProjectConfig & {
  $schema: string;
  id: any;
  general: {
    team: string;
    members: any[];
    totalMembers: number;
    pinned: boolean;
    lastModified: string;
    createdAt: string;
  };
})[] = [
  {
    $schema: "https://perc_lab.codrjs.com/schema/project.schema.json",
    id: 1,
    general: {
      title: "Demo Project",
      type: "classification",
      slug: "demo-project",
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
          type: "code",
          value: "model.hops.*",
          language: "java",
          collapsible: true,
        },
        {
          type: "text",
          value: "**App name:** model.app_name\n\n**Class name:** model.class_name\n\n**Information Accessed:** model.information_accessed",
        },
        {
          type: "text",
          value: "Hello World!",
        },
      ],
      outputs: [
        {
          type: "radio",
          prompt:
            "Which of the following privacy captions describe how and why personal information is used in the code snippet above?",
          options: [
            {
              key: "The code segment uses location to calculate distance to nearby houses for its application functionality",
              value: 1,
            },
            {
              key: "The code segment uses location to uses GPS to find directions to nearest house.",
              value: 2,
            },
            {
              key: "The code segment uses location to show nearby friends in the neighborhood.",
              value: 3,
            },
            {
              key: "The code segment uses location to suggest nearby real estate properties you might be interested in.",
              value: 4,
            },
          ],
        },
      ],
    },
    model: {
      type: "object",
      properties: {
        sample_id: { type: "string" },
        app_name: { type: "string" },
        class_name: { type: "string" },
        method_name: { type: "string" },
        information_accessed: { type: "string" },
        apis: {
          type: "array",
          items: { type: "string" },
          minItems: 2,
          maxItems: 2,
        },
        hops: {
          type: "array",
          items: { type: "string" },
        },
      },
      required: ["sample_id", "apis", "hops"],
    },
  },
];

export const DATASETS = (project: project | ProjectConfig) => [
  {
    name: "Test Dataset",
    href: `/project/${project.general.slug}/test-dataset`,
    slug: "test-dataset",
    count: "1",
    samples: [
      {
        id: 1,
        status: "incomplete",
        annotation: "...",
        sample_id: "sample_1",
        app_name: "BricckHarbor",
        class_name: "com.urbanairship.location.LocationService",
        method_name: "setProviders",
        information_accessed: "location",
        apis: [
          [
            "android.location.LocationManager;getBestProvider",
            "Returns the name of the provider that best meets the given criteria.",
          ],
          [
            "android.location.LocationManager;isProviderEnabled",
            "Returns the current enabled/disabled status of the given provider.",
          ],
        ],
        practice: "Processing",
        purpose: "Functionality",
        hops: [
          "/**\n*APK Name: BrickHarbor\n*Class Name: com.urbanairship.location.LocationService;\n*Method Name: setProviders\n*Android API Called: android.location.LocationManager;getBestProvider\n*API Description: Returns the name of the provider that best meets the given criteria. \n*Android API Called: android.location.LocationManager;isProviderEnabled\n*API Description: Returns the current enabled/disabled status of the given provider. \n*/\n\nprivate void setProviders() {\n  if (!com.urbanairship.UAirship.shared().getAirshipConfigOptions().locationOptions.allowGPSForLocationTracking) {\n    String v0_4;\n    this.bestProvider = com.urbanairship.analytics.LocationEvent$AllowableProvider.NETWORK.toString().toLowerCase(java.util.Locale.US);\n    if (!this.locationManager.isProviderEnabled(this.bestProvider)) {\n      v0_4 = 0;\n    } else {\n      v0_4 = this.bestProvider;\n    }\n    this.currentProvider = v0_4;\n  } else {\n    this.bestProvider = this.locationManager.getBestProvider(this.criteria, 0);\n    if (!this.locationManager.isProviderEnabled(this.bestProvider)) {\n      this.currentProvider = this.locationManager.getBestProvider(this.criteria, 1);\n    } else {\n      this.currentProvider = this.bestProvider;\n    }\n  }\n  Object[] v1_6 = new Object[2];\n  v1_6[0] = this.currentProvider;\n  v1_6[1] = this.bestProvider;\n  com.urbanairship.Logger.info(String.format(Current location provider: %s, best location provider: %s, v1_6));\n  return;\n}",
          "static synthetic void access$400(com.urbanairship.location.LocationService p0)\n{\n  p0.setProviders();\n  return;\n}",
          "public void requestSingleLocationUpdate(android.location.Criteria p7)\n{\n  com.urbanairship.Logger.info(Requesting a single update.);\n  if ((p7 == null) && (com.urbanairship.util.UAStringUtil.isEmpty(com.urbanairship.location.LocationService.access$300(this.this$0)))) {\n    com.urbanairship.location.LocationService.access$1100(this.this$0);\n    com.urbanairship.location.LocationService.access$400(this.this$0);\n  }\n  com.urbanairship.location.LocationService v0_2;\n  if (p7 != null) {\n    v0_2 = p7.getAccuracy();\n  } else {\n    v0_2 = com.urbanairship.location.LocationService.access$800(this.this$0).getAccuracy();\n  }\n  String v1_2;\n  if (p7 != null) {\n    v1_2 = com.urbanairship.location.LocationService.access$1200(this.this$0).getBestProvider(p7, 1);\n  } else {\n    v1_2 = com.urbanairship.location.LocationService.access$300(this.this$0);\n  }\n  if (com.urbanairship.util.UAStringUtil.isEmpty(v1_2)) {\n    com.urbanairship.Logger.debug(There are no available location providers. Retrieving last known location.);\n    com.urbanairship.location.LocationService.access$1500(this.this$0);\n  } else {\n    com.urbanairship.location.LocationService.access$1300(this.this$0, v0_2);\n    com.urbanairship.location.LocationService.access$1200(this.this$0).requestLocationUpdates(v1_2, 0, 0, \n      com.urbanairship.location.LocationService.access$1400(this.this$0));\n  }\n  return;\n}",
        ],
      },
    ],
  },
];

export type project = typeof PROJECTS[number];
export default PROJECTS;
