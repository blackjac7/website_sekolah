export interface Teacher {
  id: string;
  name: string;
  position: string;
  photo: string;
  description: string;
}

export interface News {
  id: string;
  title: string;
  date: string;
  content: string;
  image?: string;
  category: "achievement" | "activity";
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
  category: "laboratory" | "library" | "sports" | "other";
}

export interface ExtracurricularActivity {
  id: string;
  name: string;
  description: string;
  schedule: Array<string> | string;
  image: string;
}
