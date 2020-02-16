declare module '~/data/Liked.json' {
    interface LikedGuys {
      name: string;
      icon: [string];
    }
  
    const guys: LikedGuys[];
  
    export default guys;
  }