'use client';
import { Hero } from './_components/hero';
import { FeatureCard } from './_components/card';
import { FeatureTitle } from './_components/title';
import { MusicVisual, OtherVisual } from './_components/visual';
import { stagger, useAnimate } from 'framer-motion';
import { useFeatureStore } from '@/store/store';
import { useEffect } from 'react';
import classNames from 'classnames';

const features = [
  {
    title: 'Use your calendar as a todo list',
    id: 'todo-list',
    // card: Todo,
    visual: OtherVisual,
    gradient: 'from-[#f7f0ff] to-[#a78afe]',
    img: 'https://images.unsplash.com/photo-1704511659012-6596415cc869?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Color your calendar to organize',
    id: 'colors',
    // card: Colors,
    visual: OtherVisual,
    gradient: 'from-[#f5fbff] to-[#addeff]',
    img: 'https://images.unsplash.com/photo-1704397443263-d7467ecb8b48?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Instantly know if someone is available',
    id: 'availability',
    // card: Availability,
    visual: OtherVisual,
    gradient: 'from-[#f5fff7] to-[#adf8ff]',
    img: 'https://images.unsplash.com/photo-1704642220407-392955316c7a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Track what you listened to when',
    id: 'music',
    // card: Music,
    visual: MusicVisual,
    gradient: 'from-[#f7fff5] to-[#adffd8]',
    img: 'https://images.unsplash.com/photo-1704786574827-f4dfa47ad4f4?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Send scheduling links guests love',
    id: 'scheduling-links',
    // card: SchedulingLinks,
    visual: OtherVisual,
    gradient: 'from-[#fff7f5] to-[#ffd8ad]',
    img: 'https://images.unsplash.com/photo-1704635021570-fd5af2fadf77?q=80&w=1542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Always know what your team is up to',
    id: 'team',
    // card: Team,
    visual: OtherVisual,
    gradient: 'from-[#fef5ff] to-[#ffade1]',
    img: 'https://images.unsplash.com/photo-1704721298056-6df695953129?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

export default function Home() {
  const [scope, animate] = useAnimate()
  const fullScreenFeature = useFeatureStore(state => state.fullScreenFeature)
  const setFullScreenFeature = useFeatureStore(state =>state.setfullScreenFeature)
  const lastfullScreenFeature = useFeatureStore(state =>state.lastfullScreenFeature)
  
  useEffect(() => {
    if(fullScreenFeature){
      animate([['.feature-title', {
        opacity: 0,
        x: '-200px'
      }, {
        duration: .3,
        delay: stagger(0.05)
      }],[
        `.visual-${lastfullScreenFeature}`,{
          opacity: 1, 
          scale: 1,
          pointerEvents: 'auto'
        }, {
          at: "<"
        }
      ],[
        ".active-card .gradient",{
          opacity: 0, 
          scale: 0,
        }, {
          at: "<"
        }
      ],[
        '.active-card .show-me-btn',{
          opacity: 0,
        },{
          at: '<'
        }
      ],[
        '.back-to-site-btn',{
          opacity: 1,
          y: '0px'
        },{
          at: '<',
          duration: .3
        }
      ]
    ])
    }else{
      animate([['.feature-title', {
        opacity: 1,
        x: '0px'
      }, {
        duration: .3,
        delay: stagger(0.05)
      }],[
        `.visual-${lastfullScreenFeature}`,
        {
          opacity: 0, 
          scale: 0.75,
          pointerEvents: 'none'
        },{
          at: "<"
        }
      ],[
        ".active-card .gradient",{
          opacity: 1, 
          scale: 1,
        }, {
          at: "<"
        }
      ],[
        '.back-to-site-btn',{
          opacity: 0,
          y: '300px'
        },{
          at: '<',
          duration: .3
        }
      ],[
        '.active-card .show-me-btn',{
          opacity: 1,
        }
      ]])
    }
  }, [animate,fullScreenFeature, lastfullScreenFeature])

  return (
    <main className="px-4 mx-auto max-w-6xl">
      <Hero />

      {/* Showcase */}
      <div ref={scope}>
      {features.map(feature => <feature.visual id={feature.id} key={feature.id}/>)}

      {/* Back to site button */}
      <button onClick={() => setFullScreenFeature(null)} className={classNames('back-to-site-btn bg-black text-white px-4 opacity-0 py-2 rounded-full shadow-lg translate-y-[300%] fixed bottom-6 left-1/2 z-10 -translate-x-1/2', fullScreenFeature ? 'block' : 'hidden')}>Back to site</button>

      {/* List all of works */}
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
          <div className="relative aspect-square rounded-2xl bg-gray-100 w-full [&:has(>_.active-card)]:bg-transparent">
            {features.map((feature) => (
              <FeatureCard
                gradient={feature.gradient}
                id={feature.id}
                key={feature.id}
                img={feature.img}
              >
                <span />
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
      </div>

      <div className="h-screen">Another div</div>
    </main>
  );
}
