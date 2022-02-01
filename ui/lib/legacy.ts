// Kubernetes does not allow us to query children by parents.
// We keep a list of common parent-child relationships
// to look up children recursively.
export const PARENT_CHILD_LOOKUP = {
  Deployment: {
    group: "apps",
    version: "v1",
    kind: "Deployment",
    children: [
      {
        group: "apps",
        version: "v1",
        kind: "ReplicaSet",
        children: [{ version: "v1", kind: "Pod" }],
      },
    ],
  },
};



export class UnstructuredObject {
}


export type UnstructuredObjectWithParent = UnstructuredObject & {
  parentUid?: string;
};


export enum SourceType {
  Git = "git",
  Bucket = "bucket",
  Helm = "helm",
  Chart = "chart",
}

function convertSourceTypeToInt(s: SourceType) {
  switch (s) {
    case SourceType.Git:
      return 0;
    case SourceType.Bucket:
      return 1;
    case SourceType.Helm:
      return 2;
    case SourceType.Chart:
      return 3;
  }
}
