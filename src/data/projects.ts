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
          type: "text",
          value: "$sample.hops.[*]",
          format: "```java\n$value\n```",
          collapsible: true,
          header: "Hop $index",
        },
        {
          type: "text",
          value: "$sample",
          format:
            "**Practice:** $value.practice\n\n**Purpose:** $value.purpose",
        },
        {
          type: "text",
          value: "$sample",
          format:
            "### Metadata\n**App name:** $value.app_name\n\n**Class name:** `$value.class_name`\n\n**Information Accessed:** $value.information_accessed",
        },
        {
          type: "text",
          value: "$sample.apis.[*]",
          format:
            "**API Called:** `$value.[0]`\n\n**API description:** $value.[1]",
        },
      ],
      outputs: [
        {
          type: "radio",
          prompt:
            "Which of the following privacy captions describe __how__ and __why__ personal information is used in the code snippet above?",
          options: "$sample.options.[*]",
        },
      ],
    },
    sample: {
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
            items: {
              type: "array",
              items: { type: "string" },
              minItems: 2,
              maxItems: 2,
            },
          },
          hops: {
            type: "array",
            items: { type: "string" },
          },
          options: {
            type: "array",
            items: { type: "string" },
          },
        },
        required: ["sample_id", "apis", "hops", "options"],
      },
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
        sample_id: "sample_9",
        app_name: "Broome",
        class_name: "com.biznessapps.components.LocationFinder",
        information_accessed: "location",
        apis: [
          [
            "android.location.LocationManager;requestLocationUpdates",
            "Register for location updates using a provider selected through the given Criteria, and callbacks delivered via the provided PendingIntent",
          ],
        ],
        practice: ["Sharing", "Processing"],
        purpose: ["Functionality"],
        hops: [
          "/**\n * Class Name: com.biznessapps.components.LocationFinder;\n * Method Name: startSearching\n */\n\npublic void startSearching() {\n  this.locationManager.requestLocationUpdates(network, 120000, 0, this.networkLocationListener);\n  this.locationManager.requestLocationUpdates(gps, 120000, 0, this.gpsLocationListener);\n  return;\n}",
          "/**\n * APK Name: Broome\n * Class Name: com.biznessapps.pushnotifications.C2DMMessagesReceiver;\n * Method Name: sendForSpecificArea        \n */\n\nprivate void sendForSpecificArea(android.content.Context p16, String p17, com.biznessapps.messages.MessageItem p18) {\n  try {\n    android.location.Location v4 = com.biznessapps.api.AppCore.getInstance().getLocationFinder().getCurrentLocation();\n  } catch (Exception v7) {\n    v7.printStackTrace();\n    return;\n  }\n  if (v4 == null) {\n    return;\n  } else {\n    boolean v8 = com.biznessapps.pushnotifications.GeoFencingHelper.isContainCoordinate(com.biznessapps.pushnotifications.GeoFencingHelper$GeoPoint.createList(p18.getPaths()), new com.biznessapps.pushnotifications.GeoFencingHelper$GeoPoint(v4.getLatitude(), v4.getLongitude()));\n    p18.setTitle(p17);\n    if (!v8) {\n      if (p18.getActiveTill() != 0) {\n        com.biznessapps.api.AppCore.getInstance().getLocationFinder().startSearching();\n      } else {\n        p18.setGeoFencingEnabled(0);\n      }\n    } else {\n      p18.setGeoFencingEnabled(0);\n      this = this.sendNotification(p16, p17, p18);\n    }\n    this.saveMessage(p18);\n    return;\n  }\n}",
          "/**\n * APK Name: Broome\n * Class Name: com.biznessapps.pushnotifications.C2DMMessagesReceiver;\n * Method Name: checkGFmessages\n */\n\nprivate void checkGFmessages() {\n  java.util.List v4 = com.biznessapps.storage.StorageKeeper.instance().getMessages();\n  java.util.Iterator v2_1 = v4.iterator();\n  while (v2_1.hasNext()) {\n    com.biznessapps.messages.MessageItem v3_3 = ((com.biznessapps.messages.MessageItem) v2_1.next());\n    if (v3_3.isGeoFencingEnabled()) {\n      if (v3_3.getActiveTill() <= 0) {\n        if (this.context != null) {\n          this.sendForSpecificArea(this.context, v3_3.getTitle(), v3_3);\n        }\n      } else {\n        if (com.biznessapps.utils.DateUtils.getDateWithOffset(v3_3.getActiveTill()).getTime() <= System.currentTimeMillis()) {\n          v3_3.setGeoFencingEnabled(0);\n        } else {\n          if (this.context != null) {\n            this.sendForSpecificArea(this.context, v3_3.getTitle(), v3_3);\n          }\n        }\n      }\n    }\n  }\n  int v5 = 0;\n  java.util.Iterator v2_0 = v4.iterator();\n  while (v2_0.hasNext()) {\n    if (((com.biznessapps.messages.MessageItem) v2_0.next()).isGeoFencingEnabled()) {\n      v5 = 1;\n      break;\n    }\n  }\n  if (v5 == 0) {\n    com.biznessapps.api.AppCore.getInstance().getLocationFinder().stopSearching();\n  } else {\n    com.biznessapps.api.AppCore.getInstance().getLocationFinder().startSearching();\n  }\n  return;\n}",
        ],
        options: [
          "We use your location (via network/GPS) for searching an area.",
          "We use your location (via network/GPS) for geofencing.",
          "We use your location to show messages.",
          "We use your location for other purposes.",
        ],
      },
      {
        id: 2,
        status: "incomplete",
        annotation: "...",
        sample_id: "sample_7",
        app_name: "ArsenalVision",
        class_name: "com.biznessapps.components.LocationFinder",
        information_accessed: "network",
        apis: [
          [
            "android.net.ConnectivityManager;getAllNetworkInfo",
            "Returns connection status information about all network types supported by the device.",
          ],
        ],
        practice: ["Sharing", "Collecting"],
        purpose: ["Analytics"],
        hops: [
          "/**\n *APK Name: ArsenalVision\n *Class Name: com.bugsense.trace.Utils;\n *Method Name: CheckNetworkConnection\n */\n\nprivate static int CheckNetworkConnection(android.content.Context p6, String p7) {\n  int v0_2;\n  int v1 = 0;\n  if (p6.getPackageManager().checkPermission(android.permission.ACCESS_NETWORK_STATE, com.bugsense.trace.G.APP_PACKAGE) != 0) {\n    v0_2 = 2;\n  } else {\n    android.net.NetworkInfo[] v2_0 = ((android.net.ConnectivityManager) p6.getSystemService(connectivity)).getAllNetworkInfo();\n    v0_2 = 0;\n    while (v1 < v2_0.length) {\n      boolean v4_0 = v2_0[v1];\n      if ((v4_0.getTypeName().equalsIgnoreCase(p7)) && (v4_0.isConnected())) {\n        v0_2 = 1;\n      }\n      v1++;\n    }\n  }\n  return v0_2;\n}",
          "/**\n * APK Name: ArsenalVision\n * Class Name: com.bugsense.trace.Utils;\n * Method Name: isWifiOn\n */\n\nprotected static int isWifiOn(android.content.Context p1) {\n  return com.bugsense.trace.Utils.CheckNetworkConnection(p1, WIFI);\n}",
          "/**\n * APK Name: ArsenalVision\n * Class Name: com.bugsense.trace.Utils;\n * Method Name: setProperties\n */\npublic static void setProperties(android.content.Context p1) {\n  com.bugsense.trace.G.IS_WIFI_ON = com.bugsense.trace.Utils.isWifiOn(p1);\n  com.bugsense.trace.G.IS_MOBILENET_ON = com.bugsense.trace.Utils.isMobileNetworkOn(p1);\n  // Checks if GPS is on or not. \n  com.bugsense.trace.G.IS_GPS_ON = com.bugsense.trace.Utils.isGPSOn(p1);\n  com.bugsense.trace.G.SCREEN_PROPS = com.bugsense.trace.Utils.ScreenProperties(p1);\n  return;\n}",
        ],
        options: [
          "We collect your connection state for analytics purpose",
          "We process your WiFi information for advertisement purpose.",
          "We use location information for other purposes.",
          "We collect your network information for advertisement purposes.",
        ],
      },
      {
        id: 3,
        status: "incomplete",
        annotation: "...",
        sample_id: "sample_4",
        app_name: "CrowdSpotter",
        class_name:
          "Class Name: com.carnationgroup.crowdspottr.Fetchers.EventsFetcher;",
        information_accessed: "network",
        apis: [
          [
            "android.net.ConnectivityManager;getAllNetworkInfo",
            "Returns connection status information about all network types supported by the device.",
          ],
        ],
        practice: ["Processing"],
        purpose: ["Functionality", "Other"],
        hops: [
          "/**\n * APK Name: CrowdSpottr\n * Class Name: com.carnationgroup.crowdspottr.utils.CrowdSpottrUtils;\n * Method Name: isNetworkConnected\n */\n\npublic static boolean isNetworkConnected(android.content.Context p6, boolean p7) {\n  int v3_4;\n  android.net.ConnectivityManager v0_1 = ((android.net.ConnectivityManager) p6.getSystemService(connectivity));\n  if (v0_1 == null) {\n    if (p7) {\n      android.widget.Toast.makeText(p6, p6.getResources().getString(2131034123), 0).show();\n    }\n    v3_4 = 0;\n  } else {\n    android.net.NetworkInfo[] v2 = v0_1.getAllNetworkInfo();\n    if (v2 == null) {} else {\n      int v1 = 0;\n      while (v1 < v2.length) {\n        if (v2[v1].getState() != android.net.NetworkInfo$State.CONNECTED) {\n          v1++;\n        } else {\n          v3_4 = 1;\n        }\n      }\n    }\n  }\n  return v3_4;\n}",
          '/**\n * APK Name: CrowdSpottr\n * Class Name: com.carnationgroup.crowdspottr.Fetchers.EventsFetcher;\n * Method Name: loadAllEvents\n */\n\nprivate void loadAllEvents() {\n    try {\n      if (!com.carnationgroup.crowdspottr.utils.CrowdSpottrUtils.isNetworkConnected(this.mContext, 0)) {\n        this.mHandler.post(this.showToast);\n      } else {\n        android.os.Bundle v6_0 = new android.os.Bundle();\n        v6_0.putString(batch, [{\n            "method": "GET",\n            "relative_url": "me/"\n            friends ? fields = id,\n            name,\n            birthday\n          },\n          {\n            "method": "GET",\n            "relative_url": "me/likes?fields=id"\n          }\n        ]);\n        org.json.JSONArray v7_1 = ((org.json.JSONArray) new org.json.JSONTokener(com.carnationgroup.crowdspottr.FacebookSingleton.getFacebook().request(/, v6_0, POST))\n              .nextValue()); this.ids.clear(); this.ids.add(me); org.json.JSONArray v2 = ((org.json.JSONObject) new org.json.JSONTokener(v7_1.getJSONObject(0).getString(body)).nextValue()).getJSONArray(data); int v4 = 0;\n            while (v4 < v2.length()) {\n              this.ids.add(v2.getJSONObject(v4).getString(id));\n              v4++;\n            }\n            this.loadEvents();\n          }\n        }\n        catch (java.util.ArrayList v10_21) {\n          v10_21.printStackTrace();\n        } catch (java.util.ArrayList v10_20) {\n          v10_20.printStackTrace();\n        } catch (java.util.ArrayList v10_19) {\n          v10_19.printStackTrace();\n        } catch (java.util.ArrayList v10_18) {\n          v10_18.printStackTrace();\n        } catch (java.util.ArrayList v10) {}\n        return;\n      }',
          "/**\n * APK Name: CrowdSpottr\n * Class Name: com.carnationgroup.crowdspottr.Fetchers.EventsFetcher;\n * Method Name: run\n */\n\npublic void run() {\n  com.carnationgroup.crowdspottr.utils.Utility.setRefreshEventsThread(1);\n  this.loadAllEvents();\n  return;\n}",
        ],
        options: [
          "We collect your information from Facebook for advertisement purposes",
          "We share your WiFi information with third-parties like Facebook.",
          "We use network to make requests to websites such as Facebook.",
          "We use network information for other purposes.",
        ],
      },
    ],
  },
];

export type project = typeof PROJECTS[number];
export default PROJECTS;
