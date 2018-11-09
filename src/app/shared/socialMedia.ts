
export class SocialMedia {
    facebook: any;
    twitter: any;
    instagram: any;
    website: any;

    constructor(social: any) {
        this.facebook = social.Facebook;
        this.twitter = social.Twitter;
        this.instagram = social.Instagram;
        this.website = social.Website;
    }
}
