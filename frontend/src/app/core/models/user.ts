export class User {
    name: string;
    email: string;
    followers: number;
    profileImage: string;
    accountType: string;

    constructor(userResponse: any) {
       this.name = userResponse.display_name,
       this.email = userResponse.email,
       this.followers = userResponse.followers.total,
       this.profileImage = userResponse.images[0].url,
       this.accountType = userResponse.product
    }
}