'use strict';

class LinkNode {
    constructor(elem, next) {
        this.elem = elem || null;
        this.next = next || null;
    }

    size = 0;
    head = null;
}