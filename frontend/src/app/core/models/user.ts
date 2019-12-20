export class User {
    private name: string;
    private email: string;
    private followers: number;
    private profileImage:string;
    private accountType: string;

    constructor( name: string, email: string,  followers: number, profileImage: string, accountType: string ) {
        this.name = name;
        this.email = email;
        this.followers = followers;
        this.profileImage = profileImage;
        this.accountType = accountType;
    }
}