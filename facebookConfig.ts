// Facebook Configs
import { AuthServiceConfig, FacebookLoginProvider } from 'angular-6-social-login';

export function getAuthServiceConfigs() {
    let APP_ID = "2229942433740406";
    let config = new AuthServiceConfig(
        [
            {
                id: FacebookLoginProvider.PROVIDER_ID,
                provider: new FacebookLoginProvider(APP_ID)
            }
        ]
    );
    return config;
}
