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

import {Component, Input} from '@angular/core';
import {Animations} from '../../animations/animations';

@Component({
  selector: 'kd-card',
  templateUrl: './template.html',
  styleUrls: ['./style.scss'],
  animations: [Animations.expandInOut],
})
export class CardComponent {
  @Input() initialized = true;
  @Input() role: string;
  @Input() withFooter = false;
  @Input() withTitle = true;
  @Input() expandable = true;
  @Input()
  set titleClasses(val: string) {
    this.classes_ = val.split(/\s+/);
  }
  @Input() expanded = true;

  private classes_: string[] = [];

  expand(): void {
    if (this.expandable) {
      this.expanded = !this.expanded;
    }
  }

  getTitleClasses(): {[clsName: string]: boolean} {
    const ngCls = {} as {[clsName: string]: boolean};
    if (!this.expanded) {
      ngCls['kd-minimized-card-header'] = true;
    }

    if (this.expandable) {
      ngCls['kd-card-header'] = true;
    }

    for (const cls of this.classes_) {
      ngCls[cls] = true;
    }

    return ngCls;
  }
}
