# imodel-unity-example

Copyright © Bentley Systems, Incorporated. All rights reserved.

This is an example of using IPC to work with [iTwin.js](https://itwinjs.org/)
in a [Unity](https://unity.com/) application. It includes a demonstration iModel to be used only for
development purposes.

## Getting Started

### Prerequisites

- Unity 2019.4 or later
- Node 14
- Windows
- MacOS and Linux should work but are untested. Developers on these platforms will need to add the appropriate
  version of the [protobuf-compiler](https://developers.google.com/protocol-buffers/docs/downloads)

### Setup

Open the node subdirectory in a shell, and run:

```sh
npm install
npm run build
```

### Running

- From the node subdirectory, run `npm start` to start the server.
- Click Play in the Unity editor to connect to the server.
- Camera controls match Unity's scene view:
  - WASD to fly
  - Hold right-click for mouse-look
  - Middle mouse to pan
  - Mouse wheel to zoom
- Left-clicking an element will display its tooltip by querying the iTwin.js backend
- Arrow keys to cycle through 3D views

## How It Works

### Node.js Server With iTwin.js

The Node.js server uses the
[core-backend package](https://www.itwinjs.org/reference/core-backend/)
and its dependencies to open a specified
[Snapshot iModel](https://www.itwinjs.org/learning/backend/accessingimodels/).
Opening an iModel loads a minimal amount of data and takes a small fixed amount of time, regardless of
how large the iModel is.

### Unity Application Connects to Server Over WebSocket

In this example, the Unity application is connecting to a process on the same computer but it could
just as easily connect to a separate machine, either in the cloud or on a local network. This pattern
is useful for streaming to standalone devices like the Microsoft HoloLens or Oculus Quest.

### Processes Communicate With Protocol Buffer Messages

The communication between the Node.js server and Unity application is via messages encoded with
[Google Protocol Buffers](https://developers.google.com/protocol-buffers/docs/proto3).
Protocol Buffers is a widely useful and efficient format with excellent tooling and code generation
for many languages.

When [IModelRpc.proto](./node/IModelRpc.proto) is modified, new bindings are automatically generated
for both the Node.js server and Unity application. This workflow is efficient during development and
at runtime.

IModelRpc.proto is broken down into Requests and Replies, with the Unity application making Requests
and the Node.js server making Replies. Because Protocol Buffer messages are not self-describing, each
process needs to know the message type when parsing. `RequestWrapper` and `ReplyWrapper` handle this
problem.

This IPC scheme is heavily inspired by [gRPC](https://grpc.io/). This example does not use gRPC due
to a lack of official TypeScript bindings for generated code and Unity support still being experimental.

### Element Graphics and Data Are Streamed On-Demand

[Spatial Queries](https://www.itwinjs.org/learning/spatialqueries/) on the iModel are used to request
graphics based on what's visible to the Unity camera. The largest elements by volume are sent first, and
as the camera moves new graphics are continually requested.

Element properties (commonly referred to as "BIM data") are loaded on demand when an element is selected.

## Frequently Asked Questions

### What Is the Purpose of This Example?

This example shows one possible pattern for integrating iTwin.js with applications that
aren't full-stack JavaScript/TypeScript. There are no special accomodations for this pattern in
iTwin.js, so feel free to choose an alternative or adapt this strategy as you see fit.

### How Do I Update the Protocol Buffer Schema?

- Make changes to [IModelRpc.proto](./node/IModelRpc.proto).
  See the [proto3 Language Guide](https://developers.google.com/protocol-buffers/docs/proto3).
- From the node subdirectory, run

```sh
npm run proto-build
```

- The protobuf-generated code in node and unity subdirectories will be updated.

### How Do I Use iModels From iModelHub?

Edit `IMODELHUB_REQUEST_PROPS` in [IModelHubDownload.ts](./node/src/IModelHubDownload.ts) to replace iTwinId
and iModelId with the appropriate values for your iModel.

You will also need to provide a clientId, scope and redirectUri for your application. To register an application,
go to [https://developer.bentley.com/register/](https://developer.bentley.com/register/).

- Add "Digital Twin Management" as an API Association to get the "imodels:read" scope
- Select "Desktop/Mobile" as the Application Type
- Enter "http://localhost:3000/signin-callback" for Redirect URI
- No logout URI is required

Once your application is created, go to its details page and copy/paste the scope, clientId and redirectUri fields
into `AUTH_CLIENT_CONFIG_PROPS` in [IModelHubDownload.ts](./node/src/IModelHubDownload.ts).

Finally:

```sh
npm run build
npm run start-from-hub
```

### What About AR, VR, Mobile and Other Platforms?

The example is targeted at producing a desktop executable because it is the most generic and universally
accessible platform for developers.

However, the project code and its dependencies work on most of the platforms that Unity supports. Bentley
developers have deployed this example to the Oculus Rift, HTC Vive, Oculus Quest, Microsoft HoloLens and other
devices.

### How Can I Improve Performance With This Example?

#### GameObjects

This example defaults to creating one [Unity GameObject](https://docs.unity3d.com/Manual/class-GameObject.html)
for every element in the iModel. This is done for the sake of simplifying the code and making it easier to
extend, but is far from ideal for performance.

See [ElementMeshCombiner.cs](./unity/Assets/Bentley/Scripts/ElementMeshCombiner.cs) for an
example of how to combine element meshes for better performance.

#### Spatial Queries and Other Filters

Ideally, an application built on iModel.js would leverage the developer's speciality knowledge of their problem
domain to apply the advanced filtering tools available in iTwin.js. See [ECSQL](https://www.itwinjs.org/learning/ecsql/)
and especially [Spatial Queries](https://www.itwinjs.org/learning/spatialqueries/).

#### Dynamic LOD

Because iModels store original geometry representations and not just meshes, it's easy and fast to request varying levels of detail.
See [chordTol in ExportGraphicsOptions](https://www.itwinjs.org/reference/core-backend/imodels/exportgraphicsoptions/).

### How Can I Do XYZ With This Example?

Please ask any questions on [GitHub Discussions](https://github.com/iTwin/itwinjs-core/discussions).
We are actively supporting interested users of this technology.

## Contributing

[Contributing to iTwin.js](https://github.com/iTwin/itwinjs-core/blob/master/CONTRIBUTING.md)

## Acknowledgements

The Unity project bundles [WebSocket4Net](https://github.com/kerryjiang/WebSocket4Net) and
[Google Protocol Buffers](https://developers.google.com/protocol-buffers).
