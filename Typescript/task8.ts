type Profile = {
    username: string;
    bio: string | null;
    avatarUrl?: string;
};
let profile1: Profile = {
    username: "user1",
    bio: null
};
let profile2: Profile = {
    username: "user2",
    bio: "Love coding and Dsa",
    avatarUrl: "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?w=2000"
};
function showProfile(profile: Profile): void {
    let bioText = profile.bio === null? "Bio not added yet" : profile.bio;
    let avatar =profile.avatarUrl === undefined ? "default.png" : profile.avatarUrl;
    console.log("Username:", profile.username);
    console.log("Bio:", bioText);
    console.log("Avatar:", avatar);
}
showProfile(profile1);
showProfile(profile2);