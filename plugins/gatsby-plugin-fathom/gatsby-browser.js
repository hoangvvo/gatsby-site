export function onRouteUpdate(context, pluginOptions) {
  if (process.env.NODE_ENV !== 'production' || !pluginOptions.siteId) return;
  window.fathom('trackPageview');
}
