import { create } from 'zustand';

type FeatureStore = {
  inViewFeature: string | null;
  setInVIewFeature: (feature: string | null) => void;
};

export const useFeatureStore = create<FeatureStore>((set) => ({
  inViewFeature: null,
  setInVIewFeature: (feature: string | null) =>
    set({
      inViewFeature: feature,
    }),
}));
