export const addCssBlock = function(block, before = false) {
 const tpl = document.createElement('template');
 tpl.innerHTML = block;
 document.head[before ? 'insertBefore' : 'appendChild'](tpl.content, document.head.firstChild);
};
import '@vaadin/tooltip/theme/lumo/vaadin-tooltip.js';
import '@vaadin/accordion/theme/lumo/vaadin-accordion-panel.js';
import '@vaadin/accordion/theme/lumo/vaadin-accordion.js';
import '@vaadin/board/vaadin-board-row.js';
import '@vaadin/board/vaadin-board.js';
import '@vaadin/charts/theme/lumo/vaadin-chart.js';
import '@vaadin/checkbox-group/theme/lumo/vaadin-checkbox-group.js';
import '@vaadin/combo-box/theme/lumo/vaadin-combo-box.js';
import '@vaadin/confirm-dialog/theme/lumo/vaadin-confirm-dialog.js';
import '@vaadin/cookie-consent/theme/lumo/vaadin-cookie-consent.js';
import '@vaadin/crud/src/vaadin-crud-edit-column.js';
import '@vaadin/crud/theme/lumo/vaadin-crud.js';
import '@vaadin/custom-field/theme/lumo/vaadin-custom-field.js';
import '@vaadin/date-picker/theme/lumo/vaadin-date-picker.js';
import '@vaadin/date-time-picker/theme/lumo/vaadin-date-time-picker.js';
import '@vaadin/details/theme/lumo/vaadin-details.js';
import '@vaadin/dialog/theme/lumo/vaadin-dialog.js';
import '@vaadin/email-field/theme/lumo/vaadin-email-field.js';
import '@vaadin/field-highlighter/theme/lumo/vaadin-field-highlighter.js';
import '@vaadin/form-layout/theme/lumo/vaadin-form-item.js';
import '@vaadin/form-layout/theme/lumo/vaadin-form-layout.js';
import '@vaadin/grid-pro/theme/lumo/vaadin-grid-pro-edit-column.js';
import '@vaadin/grid-pro/theme/lumo/vaadin-grid-pro.js';
import '@vaadin/grid/theme/lumo/vaadin-grid-tree-toggle.js';
import '@vaadin/integer-field/theme/lumo/vaadin-integer-field.js';
import '@vaadin/item/theme/lumo/vaadin-item.js';
import '@vaadin/list-box/theme/lumo/vaadin-list-box.js';
import '@vaadin/login/theme/lumo/vaadin-login-form.js';
import '@vaadin/login/theme/lumo/vaadin-login-overlay.js';
import '@vaadin/map/theme/lumo/vaadin-map.js';
import '@vaadin/menu-bar/theme/lumo/vaadin-menu-bar.js';
import '@vaadin/multi-select-combo-box/theme/lumo/vaadin-multi-select-combo-box.js';
import '@vaadin/number-field/theme/lumo/vaadin-number-field.js';
import '@vaadin/password-field/theme/lumo/vaadin-password-field.js';
import '@vaadin/progress-bar/theme/lumo/vaadin-progress-bar.js';
import '@vaadin/radio-group/theme/lumo/vaadin-radio-button.js';
import '@vaadin/radio-group/theme/lumo/vaadin-radio-group.js';
import '@vaadin/rich-text-editor/theme/lumo/vaadin-rich-text-editor.js';
import '@vaadin/split-layout/theme/lumo/vaadin-split-layout.js';
import '@vaadin/tabsheet/theme/lumo/vaadin-tabsheet.js';
import '@vaadin/text-area/theme/lumo/vaadin-text-area.js';
import '@vaadin/time-picker/theme/lumo/vaadin-time-picker.js';
import '@vaadin/upload/theme/lumo/vaadin-upload.js';
import '@vaadin/virtual-list/vaadin-virtual-list.js';
import 'Frontend/generated/jar-resources/comboBoxConnector.js';
import 'Frontend/generated/jar-resources/cookieConsentConnector.js';
import 'Frontend/generated/jar-resources/datepickerConnector.js';
import 'Frontend/generated/jar-resources/gridProConnector.js';
import 'Frontend/generated/jar-resources/menubarConnector.js';
import 'Frontend/generated/jar-resources/tooltip.ts';
import 'Frontend/generated/jar-resources/vaadin-big-decimal-field.js';
import 'Frontend/generated/jar-resources/vaadin-map/mapConnector.js';
import 'Frontend/generated/jar-resources/vaadin-time-picker/timepickerConnector.js';
import 'Frontend/generated/jar-resources/virtualListConnector.js';