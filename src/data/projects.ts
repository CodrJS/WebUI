import ProjectConfig from "types/ProjectConfig";

const PROJECTS: (ProjectConfig & {
  $schema: string;
  _id: any;
  team: { name: string };
  general: {
    pinned: boolean;
    updatedAt: string;
    createdAt: string;
  };
  updatedAt: string;
  createdAt: string;
})[] = [
  {
    $schema: "https://perc_lab.codrjs.com/schema/project.schema.json",
    _id: 1,
    team: { name: "PriGen" },
    general: {
      title: "Demo Project",
      type: "classification",
      slug: "demo-project",
      bgColorClass: "bg-pink-600",
      guidelines:
        ":smile: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a orci ut turpis cursus pretium. Nulla vel lobortis enim, sit amet rutrum odio. Donec auctor justo felis, congue dictum dolor tristique at. Aenean sed viverra leo. Maecenas lectus justo, ultricies vitae fringilla vel, molestie mattis tellus. Sed egestas malesuada ante at placerat. Maecenas posuere aliquet mi vehicula finibus. Vivamus luctus leo sed diam suscipit, et pulvinar elit tincidunt. Pellentesque ac rutrum quam. In blandit feugiat ornare. Quisque ut euismod ante, nec ultricies purus. Ut bibendum quam lobortis rhoncus venenatis. Suspendisse aliquet mollis nulla, tincidunt condimentum sem volutpat sit amet. Donec tincidunt nunc dapibus turpis vulputate tempor a eu lorem. Ut non diam et ante vehicula volutpat. Cras commodo nibh at elementum feugiat.\n\n Nunc pretium est sed faucibus varius. Vivamus tempus ac erat nec elementum. Nullam sodales, nisi et luctus sagittis, nibh augue euismod enim, sed dictum urna tellus non odio. Ut vel dui sodales, gravida tortor vel, blandit sem. Nam varius at dui a dignissim. Donec aliquet nisi ipsum, ut lacinia eros eleifend vitae. Proin diam nunc, tempor at metus a, pretium venenatis ante. Morbi libero orci, iaculis sed laoreet a, blandit vehicula libero. Mauris sed pharetra eros. Vestibulum in ante tempus, semper augue bibendum, tempus velit.\n\n Praesent sit amet purus ultrices, iaculis nisl eu, sollicitudin erat. Phasellus fringilla ex sed odio cursus, ut commodo magna fringilla. Cras felis purus, accumsan eu ex ut, semper imperdiet lorem. Maecenas nulla nisi, suscipit quis sodales quis, vehicula eget ante. Vestibulum quis tincidunt nunc. Nulla semper lectus at nibh malesuada, id iaculis odio consequat. Morbi condimentum tincidunt dui, ut tristique elit bibendum elementum. Sed eu metus lobortis orci finibus dapibus a dignissim tortor. Sed in metus et elit euismod vestibulum sodales a ligula. Nunc mi erat, efficitur eu justo finibus, faucibus vulputate leo. Etiam id lacus ut quam suscipit convallis ac et diam. Morbi auctor hendrerit purus ultricies placerat. Integer congue venenatis purus, vel posuere metus varius non. In hac habitasse platea dictumst. Vivamus dictum non nulla varius dictum.\n\n Nulla est felis, volutpat suscipit euismod eget, pellentesque molestie lectus. Mauris lobortis nulla sit amet leo volutpat, eu aliquet augue bibendum. Vivamus congue sagittis urna, at molestie sem maximus id. Mauris lacinia felis et feugiat ullamcorper. Maecenas in elit sed neque faucibus pharetra. Nunc euismod ultricies tempus. Sed rhoncus leo ex, sit amet mollis mauris semper ac.\n\n Sed vel accumsan lectus, nec laoreet lacus. Proin condimentum mi lacus, et bibendum felis efficitur sed. Sed at ornare nisi. Mauris erat quam, lacinia sed iaculis lobortis, blandit sit amet quam. Sed et nisl semper, tempor libero et, fringilla justo. Donec vel risus libero. Vivamus vestibulum odio ac turpis venenatis, nec ullamcorper velit posuere. Nulla rhoncus at enim eget elementum. Duis vitae augue eget sem tempor molestie ac vitae neque. Cras vitae enim ante. Morbi efficitur tellus orci, sit amet rutrum sapien tincidunt in. Sed mollis ligula dolor, quis placerat magna porttitor eget. Nam eu lectus ac turpis gravida imperdiet. Vivamus pulvinar consequat orci non venenatis. Phasellus faucibus nisi in mauris congue, eu tempor felis tincidunt. Curabitur eu sapien lectus.",
      pinned: true,
      updatedAt: "March 17, 2020",
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
          // removed from after app name: **Class name:** `$value.class_name`\n\n
          format:
            "### Metadata\n**App name:** $value.app_name\n\n**Information Accessed:** $value.information_accessed",
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
    updatedAt: "March 17, 2020",
    createdAt: "March 17, 2020",
  },
];

export const DATASETS = (project: project | ProjectConfig) => [
  {
    name: "Demo Dataset",
    href: `/project/${project.general.slug}/demo-dataset`,
    slug: "demo-dataset",
    count: "3",
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
        class_name: "com.carnationgroup.crowdspottr.Fetchers.EventsFetcher;",
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
  {
    name: "Test Dataset",
    href: `/project/${project.general.slug}/test-dataset`,
    slug: "test-dataset",
    count: "10",
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
          "/**\n * Class Name: com.biznessapps.components.LocationFinder;\n * Method Name: startSearching\n */\n\npublic void startSearching()\n{\n  this.locationManager.requestLocationUpdates(network, 120000, 0, this.networkLocationListener);\n  this.locationManager.requestLocationUpdates(gps, 120000, 0, this.gpsLocationListener);\n  return;\n}",
          "/**\n * APK Name: Broome\n * Class Name: com.biznessapps.pushnotifications.C2DMMessagesReceiver;\n * Method Name: sendForSpecificArea\n */\n\nprivate void sendForSpecificArea(android.content.Context p16, String p17, com.biznessapps.messages.MessageItem p18)\n{\n  try {\n    android.location.Location v4 = com.biznessapps.api.AppCore.getInstance().getLocationFinder().getCurrentLocation();\n  } catch (Exception v7) {\n    v7.printStackTrace();\n    return;\n  }\n  if (v4 == null) {\n    return;\n  } else {\n    boolean v8 = com.biznessapps.pushnotifications.GeoFencingHelper.isContainCoordinate(com.biznessapps.pushnotifications.GeoFencingHelper$GeoPoint.createList(p18.getPaths()), new com.biznessapps.pushnotifications.GeoFencingHelper$GeoPoint(v4.getLatitude(), v4.getLongitude()));\n    p18.setTitle(p17);\n    if (!v8) {\n      if (p18.getActiveTill() != 0) {\n        com.biznessapps.api.AppCore.getInstance().getLocationFinder().startSearching();\n      } else {\n        p18.setGeoFencingEnabled(0);\n      }\n    } else {\n      p18.setGeoFencingEnabled(0);\n      this = this.sendNotification(p16, p17, p18);\n    }\n    this.saveMessage(p18);\n    return;\n  }\n}",
          "/**\n * APK Name: Broome\n * Class Name: com.biznessapps.pushnotifications.C2DMMessagesReceiver;\n * Method Name: checkGFmessages\n */\n\nprivate void checkGFmessages()\n{\n  java.util.List v4 = com.biznessapps.storage.StorageKeeper.instance().getMessages();\n  java.util.Iterator v2_1 = v4.iterator();\n  while (v2_1.hasNext()) {\n    com.biznessapps.messages.MessageItem v3_3 = ((com.biznessapps.messages.MessageItem) v2_1.next());\n    if (v3_3.isGeoFencingEnabled()) {\n      if (v3_3.getActiveTill() <= 0) {\n        if (this.context != null) {\n          this.sendForSpecificArea(this.context, v3_3.getTitle(), v3_3);\n        }\n      } else {\n        if (com.biznessapps.utils.DateUtils.getDateWithOffset(v3_3.getActiveTill()).getTime() <= System.currentTimeMillis()) {\n          v3_3.setGeoFencingEnabled(0);\n        } else {\n          if (this.context != null) {\n            this.sendForSpecificArea(this.context, v3_3.getTitle(), v3_3);\n          }\n        }\n      }\n    }\n  }\n  int v5 = 0;\n  java.util.Iterator v2_0 = v4.iterator();\n  while (v2_0.hasNext()) {\n    if (((com.biznessapps.messages.MessageItem) v2_0.next()).isGeoFencingEnabled()) {\n      v5 = 1;\n      break;\n    }\n  }\n  if (v5 == 0) {\n    com.biznessapps.api.AppCore.getInstance().getLocationFinder().stopSearching();\n  } else {\n    com.biznessapps.api.AppCore.getInstance().getLocationFinder().startSearching();\n  }\n  return;\n}",
        ],
        prompt:
          "Which of the following privacy captions describe __how__ and __why__ personal information is used in the code snippet above?",
        options: [
          "We use your location (via network/GPS) for geofencing.",
          "We use your location for checking geofencing messages.",
          "We use your location for other purposes.",
          "We use network data to check for geofencing messages.",
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
          "/**\n * APK Name: ArsenalVision\n * Class Name: com.bugsense.trace.Utils;\n * Method Name: CheckNetworkConnection\n */\n\nprivate static int CheckNetworkConnection(android.content.Context p6, String p7)\n{\n  int v0_2;\n  int v1 = 0;\n  if (p6.getPackageManager().checkPermission(android.permission.ACCESS_NETWORK_STATE, com.bugsense.trace.G.APP_PACKAGE) != 0) {\n    v0_2 = 2;\n  } else {\n    android.net.NetworkInfo[] v2_0 = ((android.net.ConnectivityManager) p6.getSystemService(connectivity)).getAllNetworkInfo();\n    v0_2 = 0;\n    while (v1 < v2_0.length) {\n        boolean v4_0 = v2_0[v1];\n      if ((v4_0.getTypeName().equalsIgnoreCase(p7)) && (v4_0.isConnected())) {\n        v0_2 = 1;\n      }\n      v1++;\n    }\n  }\n  return v0_2;\n}",
          "/**\n * APK Name: ArsenalVision\n * Class Name: com.bugsense.trace.Utils;\n * Method Name: isWifiOn\n */\n\nprotected static int isWifiOn(android.content.Context p1)\n{\n  return com.bugsense.trace.Utils.CheckNetworkConnection(p1, WIFI);\n}",
          "/**\n * APK Name: ArsenalVision\n * Class Name: com.bugsense.trace.Utils;\n * Method Name: setProperties\n */\n\npublic static void setProperties(android.content.Context p1)\n{\n  com.bugsense.trace.G.IS_WIFI_ON = com.bugsense.trace.Utils.isWifiOn(p1);\n  com.bugsense.trace.G.IS_MOBILENET_ON = com.bugsense.trace.Utils.isMobileNetworkOn(p1);\n  // Checks if GPS is on or not. \n  com.bugsense.trace.G.IS_GPS_ON = com.bugsense.trace.Utils.isGPSOn(p1);\n  com.bugsense.trace.G.SCREEN_PROPS = com.bugsense.trace.Utils.ScreenProperties(p1);\n  return;\n}",
        ],
        prompt:
          "Which of the following privacy captions describe __how__ and __why__ personal information is used in the code snippet above?",
        options: [
          " We use your location for analytics purpose.",
          "We use location information for app functionality ",
          "We process your WiFi data for advertisement purpose.",
          "We use your WiFi connection state for analytics purpose.",
        ],
      },
      {
        id: 3,
        status: "incomplete",
        annotation: "...",
        sample_id: "sample_4",
        app_name: "CrowdSpotter",
        class_name: "com.carnationgroup.crowdspottr.Fetchers.EventsFetcher;",
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
          "/**\n * APK Name: CrowdSpottr\n * Class Name: com.carnationgroup.crowdspottr.utils.CrowdSpottrUtils;\n * Method Name: isNetworkConnected\n */\n\npublic static boolean isNetworkConnected(android.content.Context p6, boolean p7)\n{\n  int v3_4;\n  android.net.ConnectivityManager v0_1 = ((android.net.ConnectivityManager) p6.getSystemService(connectivity));\n  if (v0_1 == null) {\n    if (p7) {\n      android.widget.Toast.makeText(p6, p6.getResources().getString(2131034123), 0).show();\n    }\n    v3_4 = 0;\n  } else {\n    android.net.NetworkInfo[] v2 = v0_1.getAllNetworkInfo();\n    if (v2 == null) {\n    } else {\n      int v1 = 0;\n      while (v1 < v2.length) {\n        if (v2[v1].getState() != android.net.NetworkInfo$State.CONNECTED) {\n          v1++;\n        } else {\n          v3_4 = 1;\n        }\n      }\n    }\n  }\n  return v3_4;\n}",
          '/**\n * APK Name: CrowdSpottr\n * Class Name: com.carnationgroup.crowdspottr.Fetchers.EventsFetcher;\n * Method Name: loadAllEvents\n */\n\nprivate void loadAllEvents()\n{\n  try {\n    if (!com.carnationgroup.crowdspottr.utils.CrowdSpottrUtils.isNetworkConnected(this.mContext, 0)) {\n      this.mHandler.post(this.showToast);\n    } else {\n      android.os.Bundle v6_0 = new android.os.Bundle();\n      v6_0.putString(batch, [{"method":"GET","relative_url":"me/"friends?fields=id,name,birthday},\n                             {"method":"GET","relative_url":"me/likes?fields=id"}]);\n      org.json.JSONArray v7_1 = ((org.json.JSONArray) \n        new org.json.JSONTokener(com.carnationgroup.crowdspottr\n          .FacebookSingleton.getFacebook()\n          .request(/, v6_0, POST))\n          .nextValue());\n      this.ids.clear();\n      this.ids.add(me);\n      org.json.JSONArray v2 = ((org.json.JSONObject) \n        new org.json.JSONTokener(v7_1.getJSONObject(0).getString(body))\n          .nextValue()).getJSONArray(data);\n      int v4 = 0;\n      while (v4 < v2.length()) {\n        this.ids.add(v2.getJSONObject(v4).getString(id));\n        v4++;\n      }\n      this.loadEvents();\n    }\n  } catch (java.util.ArrayList v10_21) {\n    v10_21.printStackTrace();\n  } catch (java.util.ArrayList v10_20) {\n    v10_20.printStackTrace();\n  } catch (java.util.ArrayList v10_19) {\n    v10_19.printStackTrace();\n  } catch (java.util.ArrayList v10_18) {\n    v10_18.printStackTrace();\n  } catch (java.util.ArrayList v10) {\n  }\n  return;\n}',
          "/**\n * APK Name: CrowdSpottr\n * Class Name: com.carnationgroup.crowdspottr.Fetchers.EventsFetcher;\n * Method Name: run\n */\n\npublic void run()\n{\n  com.carnationgroup.crowdspottr.utils.Utility.setRefreshEventsThread(1);\n  this.loadAllEvents();\n  return;\n}",
        ],
        prompt:
          "Which of the following privacy captions describe __how__ and __why__ personal information is used in the code snippet above?",
        options: [
          "We use your network for analytics purpose.",
          "We use your location information for advertisement purpose.",
          "We collect your WiFi information for advertisement purpose.",
          "We use network to make to share Facebook.",
        ],
      },
      {
        id: 4,
        status: "incomplete",
        annotation: "...",
        sample_id: "sample_1",
        app_name: "BrickHarbor",
        class_name: "com.carnationgroup.crowdspottr.Fetchers.EventsFetcher;",
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
        practice: ["Sharing"],
        purpose: ["Advertisement"],
        hops: [
          "/**\n * APK Name: BrickHarbor\n * Class Name: com.urbanairship.location.LocationService;\n * Method Name: setProviders\n * Android API Called: android.location.LocationManager;getBestProvider\n * API Description: Returns the name of the provider that best meets the given criteria. \n\n * Android API Called: android.location.LocationManager;isProviderEnabled\n * API Description: Returns the current enabled/disabled status of the given provider. \n */\n\nprivate void setProviders() {\n  if (!com.urbanairship.UAirship.shared().getAirshipConfigOptions().locationOptions.allowGPSForLocationTracking) {\n    String v0_4;\n    this.bestProvider = com.urbanairship.analytics.LocationEvent$AllowableProvider.NETWORK.toString().toLowerCase(java.util.Locale.US);\n    if (!this.locationManager.isProviderEnabled(this.bestProvider)) {\n      v0_4 = 0;\n    } else {\n      v0_4 = this.bestProvider;\n    }\n    this.currentProvider = v0_4;\n  } else {\n    this.bestProvider = this.locationManager.getBestProvider(this.criteria, 0);\n    if (!this.locationManager.isProviderEnabled(this.bestProvider)) {\n      this.currentProvider = this.locationManager.getBestProvider(this.criteria, 1);\n    } else {\n      this.currentProvider = this.bestProvider;\n    }\n  }\n  Object[] v1_6 = new Object[2];\n  v1_6[0] = this.currentProvider;\n  v1_6[1] = this.bestProvider;\n  com.urbanairship.Logger.info(String.format(Current location provider: %s, best location provider: %s, v1_6));\n  return;\n}",
          "static synthetic void access$400(com.urbanairship.location.LocationService p0)\n{\n  p0.setProviders();\n  return;\n}",
          'public void requestSingleLocationUpdate(android.location.Criteria p7)\n{\n  // If empty set providers\n  com.urbanairship.Logger.info("Requesting a single update.");\n  if ((p7 == null) && (com.urbanairship.util.UAStringUtil.isEmpty(com.urbanairship.location.LocationService.access$300(this.this$0)))) {\n    com.urbanairship.location.LocationService.access$1100(this.this$0);\n    com.urbanairship.location.LocationService.access$400(this.this$0);\n  }\n\n  com.urbanairship.location.LocationService v0_2;\n  if (p7 != null) {\n    v0_2 = p7.getAccuracy();\n  } else {\n    v0_2 = com.urbanairship.location.LocationService.access$800(this.this$0).getAccuracy();\n  }\n\n  // Get the best provider\n  String v1_2;\n  if (p7 != null) {\n    v1_2 = com.urbanairship.location.LocationService.access$1200(this.this$0).getBestProvider(p7, 1);\n  } else {\n    v1_2 = com.urbanairship.location.LocationService.access$300(this.this$0);\n  }\n\n  // If there is a best provider then get the location. \n  if (com.urbanairship.util.UAStringUtil.isEmpty(v1_2)) {\n    com.urbanairship.Logger.debug("There are no available location providers. Retrieving last known location.");\n    com.urbanairship.location.LocationService.access$1500(this.this$0);\n  } else {\n    com.urbanairship.location.LocationService.access$1300(this.this$0, v0_2);\n    com.urbanairship.location.LocationService.access$1200(this.this$0).requestLocationUpdates(v1_2, 0, 0, \n      com.urbanairship.location.LocationService.access$1400(this.this$0));\n  }\n  return;\n}',
        ],
        prompt:
          "Which of the following privacy captions describe __how__ and __why__ personal information is used in the code snippet above?",
        options: [
          "We share your most accurate location (using GPS/network) to show relevant ads. ",
          "We share your network information for for analyzing how you use our app.",
          "We use your network information to show personalized ads.",
          "We use your location to implement our app's features.",
        ],
      },
      {
        id: 5,
        status: "incomplete",
        annotation: "...",
        sample_id: "sample_2",
        app_name: "Cartwheel Factory",
        class_name: "com.carnationgroup.crowdspottr.Fetchers.EventsFetcher;",
        information_accessed: "location",
        apis: [
          [
            "android.location.LocationManager;requestLocationUpdates",
            "Register for location updates using a provider selected through the given Criteria, and callbacks delivered via the provided PendingIntent.",
          ],
        ],
        practice: ["Advertisement"],
        purpose: ["Other"],
        hops: [
          "/**\n * APK Name: Cartwheel Factory\n * Class Name: com.qbiki.location.SimpleLocationManager;\n * Method Name: startUpdatingLocation\n\n * Android API Called: android.location.LocationManager;requestLocationUpdates\n * API Description: Register for location updates using a provider selected through the given Criteria, \n *                  and callbacks delivered via the provided PendingIntent.\n */\n\npublic void startUpdatingLocation() {\n  if ((this.mClientListener != null) && (this.mInternalListener == null)) {\n    this.mInternalListener = new com.qbiki.location.SimpleLocationManager$SimpleLocationManagerListener(this, this.mClientListener);\n    this.checkEnabledProviders();\n    this.checkLastKnownLocation();\n    if (this.mInternalListener != null) {\n      if (this.mProvider == null) {\n        // If no provider, check which provider is enabled (GPS/network)\n        // and use that to access location.\n        if (this.mNetworkProviderEnabled) {\n          this.mLocationManager.requestLocationUpdates(network, this.mMinTime, this.mMinDistance, this.mInternalListener);\n        }\n        if (this.mGpsProviderEnabled) {\n          this.mLocationManager.requestLocationUpdates(gps, this.mMinTime, this.mMinDistance, this.mInternalListener);\n        }\n      } else {\n        // Use the available provider to get location. \n        this.mLocationManager.requestLocationUpdates(this.mProvider, this.mMinTime, this.mMinDistance, this.mInternalListener);\n      }\n    }\n  }\n  return;\n}",
          "private void startUpdatingLocation() {\n  this.mLocationManager = new com.qbiki.location.SimpleLocationManager(this, new com.qbiki.modules.savephoto.SavePhotoActivity$9(this, 0));\n  this.mLocationManager.setMinTime(2000);\n  this.mLocationManager.startUpdatingLocation();\n  return;\n}",
          'protected void onCreate(android.os.Bundle p13) {\n  super.onCreate(p13);\n  this.setContentView(2130903203);\n\n  // Saves a photo in `mPhotosPath`. \n  this.mPhotosPath = new StringBuilder().append(com.qbiki.modules.savephoto.SavePhotoActivity.EXTERNAL_PICTURES_STORAGE_DIRECTORY)\n                                        .append(/)\n                                        .append(this.getResources()\n                                        .getString(2131361834).replaceAll([|\\?*<":>+/"],  ).trim()).append(/).toString();\n  this.mTempPhotoFile = new java.io.File(this.mPhotosPath, temp.jpg);\n  \n  this.mAddressText = ((android.widget.EditText) this.findViewById(2131099920));\n  this.mLocationText = ((android.widget.EditText) this.findViewById(2131100177));\n  this.mUseStreetAddressCheckBox = ((android.widget.CheckBox) this.findViewById(2131100179));\n  \n  this.mAlbumSpinner = ((android.widget.Spinner) this.findViewById(2131100180));\n  this.mLeftTextPrefixSpinner = ((android.widget.Spinner) this.findViewById(2131100181));\n  this.mLeftText = ((android.widget.EditText) this.findViewById(2131100182));\n  this.mRightText = ((android.widget.EditText) this.findViewById(2131100183));\n  this.mSaveButton = ((android.widget.Button) this.findViewById(2131099793));\n  this.mCancelButton = ((android.widget.Button) this.findViewById(2131099794));\n  this.mCoordFormatter = java.text.NumberFormat.getInstance();\n  this.mCoordFormatter.setMaximumFractionDigits(6);\n  this.mCoordFormatter.setMinimumFractionDigits(6);\n  android.os.Bundle v0 = this.getIntent().getExtras();\n  if (v0 != null) {\n    this.mBottomText = v0.getString(EXTRA_BOTTOM_TEXT);\n    this.mLeftTextPrefixes = v0.getStringArray(EXTRA_LEFT_TEXT_PREFIXES);\n    String v6 = v0.getString(EXTRA_STORE_ID);\n    if (v6 != null) {\n      this.mPrefsFile = new StringBuilder().append(this.mPrefsFile).append(.).append(v6).toString();\n    }\n  }\n  if (this.mBottomText == null) {\n    this.mBottomText = ;\n  }\n  if (this.mLeftTextPrefixes == null) {\n    android.view.Window v7_12 = new String[1];\n    v7_12[0] = ;\n    this.mLeftTextPrefixes = v7_12;\n  }\n  this.populateFields();\n  // Start collecting location\n  if (p13 != null) {\n    this.mUpdateCurrentLocation = p13.getBoolean(updateCurrentLocation);\n    this.mCameraStarted = p13.getBoolean(cameraStarted);\n    double v1 = p13.getDouble(currentLatitude);\n    double v3 = p13.getDouble(currentLongitude);\n    this.mCurrentLocation.setLatitude(v1);\n    this.mCurrentLocation.setLongitude(v3);\n  }\n  if (this.mUpdateCurrentLocation) {\n    this.startUpdatingLocation();\n  }\n  // Start camera\n  if (!this.mCameraStarted) {\n    this.startCamera();\n    this.mCameraStarted = 1;\n  }\n  this.initActions();\n  this.getWindow().setSoftInputMode(3);\n  return;\n}',
        ],
        prompt:
          "Which of the following privacy captions describe __how__ and __why__ personal information is used in the code snippet above?",
        options: [
          "We use your approximate location for personalizing app",
          "We share and collect information from your camera to apply filters",
          "We use your network data to personalize ads for you.",
          "We share and collect your location (using GPS/network) to show relevant ads.",
        ],
      },
      {
        id: 6,
        status: "incomplete",
        annotation: "...",
        sample_id: "sample_3",
        app_name: "Brian Dorfman",
        class_name: "N/A",
        information_accessed: "location",
        apis: [
          [
            "android.location.LocationManager;requestLocationUpdates",
            "Register for location updates using a provider selected through the given Criteria, and callbacks delivered via the provided PendingIntent.",
          ],
        ],
        practice: ["N/A"],
        purpose: ["N/A"],
        hops: [
          '/**\n * APK Name: Brian Dorfman\n * Class Name: com.urbanairship.location.LocationService;\n * Method Name: requestLocationUpdates\n\n * Android API Called: android.location.LocationManager;requestLocationUpdates\n * API Description: Register for location updates using a provider selected through the given Criteria, \n *                  and callbacks delivered via the provided PendingIntent.\n */\n\nprivate void requestLocationUpdates(String p7, com.urbanairship.LocationOptions p8, android.app.PendingIntent p9)\n{\n  try {\n    this.locationManager.requestLocationUpdates(p7, (p8.updateIntervalSeconds * 1000), ((float) p8.updateIntervalMeters), p9);\n  } catch (String v0) {\n    com.urbanairship.Logger.error(new StringBuilder("Unable to request location updates for provider").append(p7).toString());\n  }\n  return;\n}',
          'private void initializeLocationUpdates()\n{\n  com.urbanairship.Logger.info("Removing location update requests with the old provider");\n  this.locationManager.removeUpdates(this.locationChangedPendingIntent);\n  if (!this.isProviderEnabled(this.currentProvider)) {\n    com.urbanairship.Logger.info("There are no available providers, waiting to request updates.");\n  } else {\n    com.urbanairship.Logger.info(new StringBuilder("Requesting location updates with the new provider:")\n      .append(this.currentProvider).toString());\n    this.requestLocationUpdates(this.currentProvider, com.urbanairship.UAirship.shared()\n      .getAirshipConfigOptions().locationOptions, this.locationChangedPendingIntent);\n  }\n  return;\n}',
          "static synthetic void access$500(com.urbanairship.location.LocationService p0)\n{\n  p0.initializeLocationUpdates();\n  return;\n}",
        ],
        prompt:
          "Which of the following privacy captions describe __how__ and __why__ personal information is used in the code snippet above?",
        options: [
          "We share your network information for advertisement purposes",
          "We use your network information for other purposes",
          "We use your location for other purposes and share them with third-parties",
          "We collect your location to implement app features",
        ],
      },
      {
        id: 7,
        status: "incomplete",
        annotation: "...",
        sample_id: "sample_5",
        app_name: "4TV_DMC",
        class_name: "N/A",
        information_accessed: "network",
        apis: [
          [
            "android.net.wifi.WifiManager;getConnectionInfo",
            "Return dynamic information about the current Wi-Fi connection, if any is active.",
          ],
        ],
        practice: ["N/A"],
        purpose: ["N/A"],
        hops: [
          "/**\n * APK Name: 4TV_DMC\n * Class Name: com.sivarich.dmc.core.PlaybackControl;\n * Method Name: getLocalIpAddr\n\n * Android API Called: android.net.wifi.WifiManager;getConnectionInfo\n * API Description: Return dynamic information about the current Wi-Fi connection, if any is active.\n */\n\npublic String getLocalIpAddr()\n{\n  return com.sivarich.dmc.utils.DmcUtils.convertIpaddr2String(this.wifiManager.getConnectionInfo().getIpAddress());\n}",
          '/**\n * APK Name: 4TV_DMC\n * Class Name: com.sivarich.dmc.core.PlaybackControl;\n * Method Name: playMedia\n */\n\nprivate void playMedia(int p11)\n{\n  this.log.info(new StringBuilder(playMedia().append(p11).append()).toString());\n  if (p11 >= 0) {\n    if (!this.mFileLstParse.isLocalFileLst()) {\n      String v4_0 = this.mFileLstParse.mRootPath;\n      if (!v4_0.endsWith("\\")) {\n        v4_0 = new StringBuilder(String.valueOf(v4_0)).append("\\").toString();\n      }\n      String v4_2;\n      String v3 = ((com.sivarich.dmc.core.mode.FileItemPropert) this.mFileLstParse.mFileItems.get(p11)).mstrItemName;\n      String v4_1 = new StringBuilder(String.valueOf(v4_0)).append(v3).toString();\n      if (this.mPlayType != 4) {\n        v4_2 = new StringBuilder("file://").append(v4_1).toString();\n      } else {\n        v4_2 = new StringBuilder("file://").append(v4_1).toString();\n      }\n      this.playVideoAudia(v4_2, v3, this.mPlayType);\n  } else {\n      String v2 = ((com.sivarich.dmc.core.mode.FileItemPropert) this.mFileLstParse.mFileItems.get(p11)).mstrItemName;\n      if (new java.io.File(v2).exists()) {\n        String v1 = v2;\n        if (v2.contains(/)) {\n          v1 = v2.substring((v2.lastIndexOf(/) + 1), v2.length());\n        }\n        String v7_18 = new Object[3];\n        v7_18[0] = this.getLocalIpAddr();\n        v7_18[1] = Integer.valueOf(this.mDmcControl.getRemoteFileServerPort());\n        v7_18[2] = v2;\n        this.playVideoAudia(String.format("rfap://%s:%d/%s", v7_18), v1, this.mPlayType);\n      } else {\n        this.log.error(new StringBuilder(file:).append(v2).append( not exist!!!).toString());\n      }\n    }\n  }\n  return;\n}',
          '/**\n * APK Name: 4TV_DMC\n * Class Name: com.sivarich.dmc.core.PlaybackControl;\n * Method Name: playNext\n */\n\npublic void playNext()\n{\n  this.mPlayIndex = (this.mPlayIndex + 1);\n  switch (this.mPlayLoopMode) {\n    case 0:\n      if (this.mPlayIndex >= this.mPlayLstSize) {\n        this.mPlayIndex = (this.mPlayLstSize - 1);\n      }\n      this.playMedia(this.mPlayIndex);\n      this.log.info(new StringBuilder("LOOP_ONE:").append(this.mPlayIndex).toString());\n      break;\n    case 1:\n      if (this.mPlayIndex >= this.mPlayLstSize) {\n        this.mPlayIndex = 0;\n      }\n      this.log.info(new StringBuilder("LOOP_ALL:").append(this.mPlayIndex).toString());\n      this.playMedia(this.mPlayIndex);\n      break;\n    case 2:\n      this.mPlayIndex = this.getNextShuffleIndex();\n      this.log.info(new StringBuilder("LOOP_SHUFFLE:").append(this.mPlayIndex).toString());\n      this.playMedia(this.mPlayIndex);\n      break;\n  }\n  return;\n}',
        ],
        prompt:
          "Which of the following privacy captions describe __how__ and __why__ personal information is used in the code snippet above?",
        options: [
          "We use your IP address to show you personalized ads.",
          "We use your IP address to download and play media files from server.",
          "We collect your IP address to analyze how you use our app.",
        ],
      },
      {
        id: 8,
        status: "incomplete",
        annotation: "...",
        sample_id: "sample_6",
        app_name: "2014EISConf",
        class_name: "N/A",
        information_accessed: "account",
        apis: [
          [
            "android.accounts.AccountManager;getAccountsByType",
            "Lists all accounts of particular type visible to the caller. These accounts may be visible because the user granted access to the account, or the AbstractAccountAuthenticator managing the account did so or because the client shares a signature with the managing AbstractAccountAuthenticator",
          ],
        ],
        practice: ["N/A"],
        purpose: ["N/A"],
        hops: [
          "/**\n * APK Name: 2014EISConf\n * Class Name: com.zerista.config.ZAccountManager;\n * Method Name: getAccount\n\n * Android API Called: android.accounts.AccountManager;getAccountsByType\n * API Description: Lists all accounts of particular type visible to the caller. \n *                  These accounts may be visible because the user granted access to the account, \n *                  or the AbstractAccountAuthenticator managing the account did so or because the \n *                  client shares a signature with the managing AbstractAccountAuthenticator.\n */\n\npublic android.accounts.Account getAccount()\n{\n  android.accounts.Account[] v1 = this.mAccountManager.getAccountsByType(this.mAccountType);\n  android.accounts.Account v0 = 0;\n  if (v1.length > 0) {\n    v0 = v1[0];\n  }\n  return v0;\n}",
          "/**\n * APK Name: 2014EISConf\n * Class Name: com.zerista.config.ZAccountManager;\n * Method Name: getEmail\n */\n\npublic String getEmail()\n{\n  android.accounts.Account v0 = this.getAccount();\n  String v1 = 0;\n  if (v0 != null) {\n    v1 = v0.name;\n  }\n  return v1;\n}",
          "/**\n * APK Name: 2014EISConf\n * Class Name: com.zerista.config.Config;\n * Method Name: getEmail\n */\n\npublic String getEmail()\n{\n  return this.mAccountManager.getEmail();\n}",
        ],
        prompt:
          "Which of the following privacy captions describe __how__ and __why__ personal information is used in the code snippet above?",
        options: [
          "We collect your email for authentication purpose.",
          "We use your IP address to authenticate connection.",
          "We use your location to log you in.",
          "We collect your email information for our personal records.",
        ],
      },
      {
        id: 9,
        status: "incomplete",
        annotation: "...",
        sample_id: "sample_8",
        app_name: "Antioch Christian Church",
        class_name: "N/A",
        information_accessed: "location",
        apis: [
          [
            "android.location.LocationManager;getLastKnownLocation",
            "Gets the last known location from the given provider, or null if there is no last known location.",
          ],
        ],
        practice: ["N/A"],
        purpose: ["N/A"],
        hops: [
          "private android.location.Location getBestLocation() {\n  android.location.Location v0 = this.lm.getLastKnownLocation(gps);\n  android.location.Location v1 = this.lm.getLastKnownLocation(network);\n  if (v1 != null) {\n    if (v0 != null) {\n      if (v0.getTime() <= v1.getTime()) {\n        v0 = v1;\n      }\n    } else {\n      v0 = v1;\n    }\n  }\n  return v0;\n}",
          "static synthetic android.location.Location access$1(com.androidquery.callback.LocationAjaxCallback p1) {\n  return p1.getBestLocation();\n}",
          "public void onProviderEnabled(String p3) {\n  com.androidquery.util.AQUtility.debug(onProviderEnabled);\n  com.androidquery.callback.LocationAjaxCallback.access$0(this.this$0,\n                                                          com.androidquery.callback.LocationAjaxCallback.access$1(this.this$0));\n  com.androidquery.callback.LocationAjaxCallback.access$2(this.this$0).removeUpdates(this);\n  return;\n}",
        ],
        prompt:
          "Which of the following privacy captions describe __how__ and __why__ personal information is used in the code snippet above?",
        options: [
          "We use your network data for some core functionality.",
          "We collect your location for our use.",
          "We save your IP address for our personal records.",
          "We share you location information with third-party ad libraries.",
        ],
      },
      {
        id: 10,
        status: "incomplete",
        annotation: "...",
        sample_id: "sample_10",
        app_name: "A4B",
        class_name: "N/A",
        information_accessed: "location",
        apis: [
          [
            "android.location.LocationManager;getLastKnownLocation",
            "Gets the last known location from the given provider, or null if there is no last known location.",
          ],
        ],
        practice: ["N/A"],
        purpose: ["N/A"],
        hops: [
          "public android.location.Location getCurrentLocation() {\n  android.location.Location v2;\n  if (this.currentBestLocation == null) {\n      android.location.Location v0 = this.locationManager.getLastKnownLocation(gps);\n      android.location.Location v1 = this.locationManager.getLastKnownLocation(network);\n      if ((v1 == null) || (!this.isBetterLocation(v1, v0))) {\n          v2 = v0;\n      } else {\n          v2 = v1;\n      }\n  } else {\n      v2 = this.currentBestLocation;\n  }\n  return v2;\n}",
          'public static void openGoogleMap(android.content.Context p9, String p10, String p11) {\n  String v3_2 = new StringBuilder().append(new StringBuilder().append("geo:0,0?q=").append(p11).append(",")\n                      .append(p10).toString()).append(().append(p9.getString(com.biznessapps.layout.R$string.direction_label))\n                      .append()).toString();\n  android.location.Location v0 = com.biznessapps.api.AppCore.getInstance().getLocationFinder().getCurrentLocation();\n  if (v0 != null) {\n    android.content.ActivityNotFoundException v5_13 = new Object[4];\n    v5_13[0] = Double.valueOf(v0.getLatitude());\n    v5_13[1] = Double.valueOf(v0.getLongitude());\n    v5_13[2] = p11;\n    v5_13[3] = p10;\n    v3_2 = String.format("http://maps.google.com/maps?saddr=%s,%s&daddr=%s,%s", v5_13);\n  }\n  android.content.Intent v1_1 = new android.content.Intent(android.intent.action.VIEW, android.net.Uri.parse(v3_2));\n  v1_1.addCategory(android.intent.category.BROWSABLE);\n  v1_1.putExtra(com.android.browser.application_id, p9.getPackageName());\n  v1_1.addFlags(268435456);\n  v1_1.addFlags(67108864);\n  try {\n      p9.startActivity(v1_1);\n  } catch (android.content.ActivityNotFoundException v5)\n  { }\n  return;\n}',
          "public void onClick(android.view.View p4) {\n  if (com.biznessapps.activities.ContactsMapActivity.access$400(this.this$0) != null) {\n    com.biznessapps.utils.ViewUtils.openGoogleMap(this.this$0.getApplicationContext(), \n      com.biznessapps.activities.ContactsMapActivity.access$400(this.this$0).getLongitude(), \n      com.biznessapps.activities.ContactsMapActivity.access$400(this.this$0).getLatitude());\n  }\n  return;\n}",
        ],
        prompt:
          "Which of the following privacy captions describe __how__ and __why__ personal information is used in the code snippet above?",
        options: [
          "We use your location to show your contacts on Google Map.",
          "We  use your contacts' location for other purposes.",
          "We share your contacts with third-party libraries.",
          "We collect your location to personalize the maps app.",
        ],
      },
    ],
  },
];

export type project = typeof PROJECTS[number];
export default PROJECTS;
