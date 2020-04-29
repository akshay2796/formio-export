import FormioExportUtils from '../../utils';

export default (config = {}) => {
  return new Promise((resolve, reject) => {
    try {
      config = FormioExportUtils.verifyProperties(config, {
        source: {
          type: Element,
          required: true
        },
        download: {
          type: Boolean,
          default: false
        }
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
