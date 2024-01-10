import { create } from 'zustand';

type FeatureStore = {
  inViewFeature: string | null;
  setInVIewFeature: (feature: string | null) => void;
  fullScreenFeature: string | null;
  setfullScreenFeature: (feature: string | null) => void;
  lastfullScreenFeature: string | null;
  setlastfullScreenFeature: (feature: string | null) => void;
};

export const useFeatureStore = create<FeatureStore>((set) => ({
  inViewFeature: null,
  fullScreenFeature: null,
  lastfullScreenFeature: null,
  setInVIewFeature: (feature: string | null) => set({
      inViewFeature: feature,
  }),
  setfullScreenFeature: (feature: string | null) => {
    set({fullScreenFeature: feature})
    
    if(feature !== null){
      set({
        lastfullScreenFeature: feature
      })
    }
  },
  setlastfullScreenFeature: (feature: string | null) => set({
    fullScreenFeature: feature
  }),
}));
