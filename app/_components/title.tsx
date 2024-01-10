'use client';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import classNames from 'classnames';
import { useFeatureStore } from '@/store/store';

export const FeatureTitle = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isinView = useInView(ref, { margin: '-50% 0px -50% 0px' });

  const setInViewFeature = useFeatureStore((state) => state.setInVIewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isinView) setInViewFeature(id);
    if (!isinView && inViewFeature === id) setInViewFeature(null);
  }, [isinView, id, setInViewFeature, inViewFeature]);

  return (
    <p
      ref={ref}
      className={classNames(
        'text-5xl font-heading py-16 font-bold transition-colors',
        isinView ? 'text-black' : 'text-gray-300'
      )}
    >
      {children}
    </p>
  );
};
