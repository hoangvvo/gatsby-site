exports.onRouteUpdate = (context, pluginOptions) => {
  if (process.env.NODE_ENV !== 'production' || typeof fathom !== `function`)
    return null;
  const sendPageView = () => window.fathom('trackPageview');
  // Minimum delay for reactHelmet's requestAnimationFrame
  const delay = Math.max(32, pluginOptions.pageTransitionDelay || 0);
  setTimeout(sendPageView, delay);
  return null;
};
