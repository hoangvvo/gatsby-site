/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export function onRenderBody({ setPostBodyComponents }, pluginOptions) {
  if (process.env.NODE_ENV !== 'production' || !pluginOptions.siteId) return;
  setPostBodyComponents([
    <script
      key="fathom-analytics"
      dangerouslySetInnerHTML={{
        __html: `
      (function(f, a, t, h, o, m){
        a[h]=a[h]||function(){
        (a[h].q=a[h].q||[]).push(arguments)
        };
        o=f.createElement('script'),
        m=f.getElementsByTagName('script')[0];
        o.async=1; o.src=t; o.id='fathom-script';
        m.parentNode.insertBefore(o,m)
        })(document, window, 'https://cdn.usefathom.com/tracker.js', 'fathom');
        fathom('set', 'siteId', '${pluginOptions.siteId}');
        fathom('trackPageview');
      `,
      }}
    />,
  ]);
}
