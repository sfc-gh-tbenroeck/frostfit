export const analyticsConfig = {
    'GoogleAnalytics': {
        keys: ['ga_gtag'],
        labels: ['Google Tag Id'],
        scriptId: 'GoogleAnalytics_script',
        scripts: [{
            isCode: false,
            async: true,
            getContent: () => `https://www.googletagmanager.com/gtag/js?id=${localStorage.getItem('ga_gtag')}`
        }, {
            isCode: true,
            getContent: () => `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${localStorage.getItem('ga_gtag')}');
`}
        ]
    },
    'SnowplowAnalytics': {
        keys: ['sp_collector_url', 'sp_app_id'],
        labels: ['Collector URL', 'App Id'],
        scriptId: 'SnowplowAnalytics_script',
        scripts: [{
            isCode: true,
            async: false,
            getContent: () => `
;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","${window.location.origin}/scripts/sp.js","snowplow"));

window.snowplow('newTracker', 'sp1', '${localStorage.getItem('sp_collector_url')}', {
  appId: '${localStorage.getItem('sp_app_id')}',
  discoverRootDomain: true,
  cookieSameSite: 'Lax',
  contexts: {
      performanceTiming: true
  }
});

window.snowplow('enableActivityTracking', {
  minimumVisitLength: 30,
  heartbeatDelay: 30
});

window.snowplow('enableLinkClickTracking');
window.snowplow('trackPageView');
`}
        ]
    }
};
