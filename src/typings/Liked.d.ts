declare module '~/data/Liked.json' {
  interface LikedGuys {
    name: string;
    icon: [string];
  }

  const data: LikedGuys[];

  export default data;
}