// initialize everything here.
import * as scaffoldingUi from 'js/ui/actions/scaffolding';
import * as listViewUi from 'js/ui/actions/listView';

function initialize() {
  scaffoldingUi.renderScaffolding();
  listViewUi.renderMenuLinks();
  listViewUi.renderAll();
}

export default initialize;
