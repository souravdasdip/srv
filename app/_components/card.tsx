'use client';

import { useFeatureStore } from '@/store/store';
import classNames from 'classnames';
import React from 'react';

type FeatureCardProps = {
  id: string;
  gradient: string;
  children: React.ReactNode;
};

type CardProps = {
  id: string;
};

export const FeatureCard = ({ gradient, children, id }: FeatureCardProps) => {
  const inVIewFeature = useFeatureStore((state) => state.inViewFeature);

  return (
    <div
      className={classNames(
        'absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br p-4 transition-opacity',
        gradient,
        inVIewFeature === id ? 'opacity-100' : 'opacity-0'
      )}
    >
      {children}
    </div>
  );
};

export const Todo = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <span />
    </FeatureCard>
  );
};

export const Colors = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <span />
    </FeatureCard>
  );
};

export const Music = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7fff5] to-[#adffd8]">
      <span />
    </FeatureCard>
  );
};

export const Availability = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
      <span />
    </FeatureCard>
  );
};

export const SchedulingLinks = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#fff7f5] to-[#ffd8ad]">
      <span />
    </FeatureCard>
  );
};

export const Team = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#fef5ff] to-[#ffade1]">
      <span />
    </FeatureCard>
  );
};
