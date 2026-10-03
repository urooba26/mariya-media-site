import Section from './Section'
import FeatureCard from './FeatureCard'
import { SERVICES, EXPERTISE } from '../data'

export function WhatWeDo() {
  return (
    <Section id="what" title="What We Do" kicker="Our Services">
      <div className="grid g4">{SERVICES.map(([i, t, d], n) => <FeatureCard key={t} icon={i} title={t} text={d} index={n} />)}</div>
    </Section>
  )
}

export function Expertise() {
  return (
    <Section id="expertise" title="Our Expertise" kicker="Why Creators Choose Us">
      <div className="grid g4">{EXPERTISE.map(([i, t, d], n) => <FeatureCard key={t} icon={i} title={t} text={d} inline index={n} />)}</div>
    </Section>
  )
}
