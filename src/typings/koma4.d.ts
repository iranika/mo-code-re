declare module '~/data/koma4.json' {
    interface KomaData {
      Title: string;
      ImagesUrl: [string];
    }
  
    const data: KomaData[];
  
    export default data;
  }