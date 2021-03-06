// Copyright (c) 2021 Microsoft
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

import { Connector} from '../data/connector';

const Conn1 = {
    id : 'conn1',
    title: 'Catena-X Connector as a Service',
    actions: ['START WIZARD']
}
const Conn2 = {
    id : 'conn2',
    title: 'Third Party Connector as a Service',
    actions: ['COMING SOON']
}
const Conn3 = {
    id : 'conn3',
    title: 'Bring your own Connector',
    actions: ['DOWNLOAD']
}

export class Connectors {
    public static state = new Connectors();
    public Conns: Connector[] = [Conn1,Conn2,Conn3];
    public readonly categories: any[] = [{text: 'Connectors', apps: this.Conns }];
}