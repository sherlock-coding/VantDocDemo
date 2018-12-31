function wrapper(promise, name) {
  return promise.then(component => {
    component = component.default;
    name = 'demo-' + name;
    component.name = name;
    const { i18n: config } = component;
    if (config) {
      const formattedI18n = {};
      const camelizedName = camelize(name);
      Object.keys(config).forEach(key => {
        formattedI18n[key] = { [camelizedName]: config[key] };
      });
      Locale.add(formattedI18n);
    }
    return component;
  });
}

export default {
  'actionsheet': () => wrapper(import('../../packages/actionsheet/demo'), 'actionsheet'),
};