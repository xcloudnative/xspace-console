// Copyright 2018 The XCloud Team.
// Copyright 2017 The Kubernetes Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Copyright 2017 The Kubernetes Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export enum ListIdentifiers {
  clusterRole = 'clusterRoleList',
  namespace = 'namespaceList',
  node = 'nodeList',
  persistentVolume = 'persistentVolumeList',
  storageClass = 'storageClassList',
  cronJob = 'cronJobList',
  job = 'jobList',
  deployment = 'deploymentList',
  daemonSet = 'daemonSetList',
  pod = 'podList',
  replicaSet = 'replicaSetList',
  ingress = 'ingressList',
  service = 'serviceList',
  configMap = 'configMapList',
  persistentVolumeClaim = 'persistentVolumeClaimList',
  secret = 'secretList',
  replicationController = 'replicationControllerList',
  statefulSet = 'statefulSetList',
  event = 'event',
  resource = 'resource',
}

export enum ListGroupIdentifiers {
  cluster = 'clusterGroup',
  workloads = 'workloadsGroup',
  discovery = 'discoveryGroup',
  config = 'configGroup',
  none = 'none',
}
