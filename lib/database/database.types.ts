export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      cart: {
        Row: {
          id: string;
          products: Product[];
          user_id: string;
        };
        Insert: {
          id?: string;
          products: Product[];
          user_id: string;
        };
        Update: {
          id?: string;
          products?: Product[];
          user_id?: string;
        };
      };
      favorite: {
        Row: {
          id: string;
          products: Product[];
          user_id: string;
        };
        Insert: {
          id?: string;
          products: Product[];
          user_id: string;
        };
        Update: {
          id?: string;
          products?: Product[];
          user_id?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
