'use client';
import { Hero } from './_components/hero';
import {
  Availability,
  Colors,
  FeatureCard,
  Music,
  SchedulingLinks,
  Team,
  Todo,
} from './_components/card';
import { FeatureTitle } from './_components/title';

const features = [
  {
    title: 'Use your calendar as a todo list',
    id: 'todo-list',
    card: Todo,
    // visual: OtherVisual,
    gradient: 'from-[#f7f0ff] to-[#a78afe]',
  },
  {
    title: 'Color your calendar to organize',
    id: 'colors',
    card: Colors,
    // visual: OtherVisual,
    gradient: 'from-[#f5fbff] to-[#addeff]',
  },
  {
    title: 'Instantly know if someone is available',
    id: 'availability',
    card: Availability,
    // visual: OtherVisual,
    gradient: 'from-[#f5fff7] to-[#adf8ff]',
  },
  {
    title: 'Track what you listened to when',
    id: 'music',
    card: Music,
    // visual: MusicVisual,
    gradient: 'from-[#f7fff5] to-[#adffd8]',
  },
  {
    title: 'Send scheduling links guests love',
    id: 'scheduling-links',
    card: SchedulingLinks,
    // visual: OtherVisual,
    gradient: 'from-[#fff7f5] to-[#ffd8ad]',
  },
  {
    title: 'Always know what your team is up to',
    id: 'team',
    card: Team,
    // visual: OtherVisual,
    gradient: 'from-[#fef5ff] to-[#ffade1]',
  },
];

export default function Home() {
  return (
    <main className="px-4 mx-auto max-w-6xl">
      <Hero />
      <div className="w-full flex gap-20 items-start">
        <div className="w-full py-[50vh]">
          <div>
            {features.map((feature) => (
              <div key={feature.id}>
                <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full sticky top-0 h-screen flex items-center">
          <div className="relative aspect-square rounded-2xl bg-gray-100 w-full">
            {features.map((feature) => (
              <FeatureCard
                gradient={feature.gradient}
                id={feature.id}
                key={feature.id}
              >
                <span />
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>

      <div className="h-screen">Another div</div>
    </main>
  );
}
