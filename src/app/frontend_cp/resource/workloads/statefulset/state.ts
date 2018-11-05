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

import {Ng2StateDeclaration} from '@uirouter/angular';

import {chromeState} from '../../../chrome/state';
import {ProxyComponent} from '../../../common/components/proxy/component';

export const stateName = 'statefulset';
export const stateUrl = '/statefulset';

export const statefulSetFutureState: Ng2StateDeclaration = {
  name: `${stateName}.**`,
  url: stateUrl,
  loadChildren: './resource/workloads/statefulset/module#StatefulSetModule',
};

export const statefulSetState: Ng2StateDeclaration = {
  abstract: true,
  parent: chromeState.name,
  name: stateName,
  component: ProxyComponent,
};
