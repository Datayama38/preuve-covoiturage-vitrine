/*! DSFR v0.6.0 | licence MIT */

const namespace = 'dsfr';

const api = window[namespace] || { core: {} };
window[namespace] = api;

const ACCORDIONS_GROUP = api.core.ns('accordions-group');
const ACCORDION_ASCENDANT = api.core.ns('accordion');

class AccordionsGroup extends api.core.DisclosuresGroup {
  static get selector () { return ACCORDIONS_GROUP; }
}

api.AccordionsGroup = AccordionsGroup;

api.Collapse.register(ACCORDION_ASCENDANT, AccordionsGroup);
//# sourceMappingURL=accordions.module.js.map
