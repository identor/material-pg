import { CsNode } from '../main/CsNode';

export class AdminController {
  constructor (csNode, Firebase, $log, $stateParams, $state) {
    'ngInject';

    this.csNodes = csNode.csNodes;

    csNode.findById($stateParams.id).then(node => {
      this.node = node || {};
    });

    csNode.getNodes().then(nodes => {
      this.parentUi.nodeList = nodes;
      this.childrenUi.nodeList = nodes;
    });

    this.name = '';
    this.script = '';
    this.childrenUi = {
      selected: []
    };
    this.parentUi = {
      selected: []
    };

    this.$log = $log;
    this.csNode = csNode;
    this.$state = $state;
  }

  saveCsNode() {
    const $log = this.$log;
    const $state = this.$state;

    let node = new CsNode({
      name: this.name,
      script: this.script,
      parent: this.node._id || null
    });

    this.csNodes.$add(node).then(ref => {
      $log.debug(`node added with ref key: ${ref.key()}.`);
    });

    $state.go('home', { id: this.node._id });
  }
}

