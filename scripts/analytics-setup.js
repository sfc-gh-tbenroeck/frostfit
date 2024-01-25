import { analyticsConfig } from "./analytics-config.js"

function updateSettingsFromQueryString() {
    const url = new URL(window.location.href);
    const queryParams = url.searchParams;

    if (queryParams) {
        for (let service in analyticsConfig) {
            let updated = false;

            analyticsConfig[service].keys.forEach(key => { // Use analyticsConfig[service].keys here
                if (queryParams.has(key)) {
                    localStorage.setItem(key, queryParams.get(key));
                    queryParams.delete(key);
                    updated = true;
                }
            });
            if (updated) {
                removeScript(analyticsConfig[service].scriptId);
                history.pushState({}, '', url.pathname + url.search);
            }
        }
    }
}

function removeScript(scriptId) {
    const scripts = document.querySelectorAll(`script[data-scriptid="${scriptId}"]`);
    scripts.forEach(script => {
        script.parentNode.removeChild(script);
    });
}

function loadScript(serviceConfig) {
    serviceConfig.scripts.forEach(scriptConfig => {
        const scriptContent = scriptConfig.getContent();
        var script = document.createElement('script');
        script.setAttribute('data-scriptid', serviceConfig.scriptId); // Set data-scriptid
        script.type = 'text/javascript';
        script.async = scriptConfig.async;


        if (scriptConfig.isCode) {
            script.innerHTML = scriptContent;
        } else {
            script.src = scriptContent;
        }

        document.head.appendChild(script);
    });
}

window.personalized_trackers = function () {
    updateSettingsFromQueryString();

    for (let service in analyticsConfig) {
        const serviceConfig = analyticsConfig[service];
        const enableService = serviceConfig.keys.every(key => localStorage.getItem(key));

        if (enableService) {
            loadScript(serviceConfig);
        }
    }
}
