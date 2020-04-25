import BaseComponent from '../base';
import FormioExportTranslation from '../../../translation';

class CheckBoxComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  formatValue () {
    const YES = FormioExportTranslation.translate('YES', this._options);
    const NO = FormioExportTranslation.translate('NO', this._options);

    return this._value ? YES : NO;
  }
}

export default CheckBoxComponent;
