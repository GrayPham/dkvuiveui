export interface IComment {
    id: number;
    image: string;
    name: string;
    content: string;
    brand: string;
    category: string[];
    isOffer?: boolean;
    registerDate?: string;
    timeStamp?: number;
    starRating: number;
    replies?: IComment[];
  }