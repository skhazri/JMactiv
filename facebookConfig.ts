// Facebook Configs
import { AuthServiceConfig, FacebookLoginProvider } from 'angular-6-social-login';

export function getAuthServiceConfigs() {
    let appID = "2229942433740406";
    let config = new AuthServiceConfig(
        [
            {
                id: FacebookLoginProvider.PROVIDER_ID,
                provider: new FacebookLoginProvider(appID)
            }
        ]
    );
    return config;
}
