import {
  Users, Eye, Globe, LifeBuoy, TrendingUp, GraduationCap, Headphones,
  UserCog, Radio, PenTool, BadgeCheck, Handshake, ShieldCheck, Flame,
  Sparkles, Star, Heart, Gift, Music2, Play, Search, Zap, Target,
} from 'lucide-react'

// Maps the string icon names stored in src/data/*.js to lucide-react components,
// so content stays editable without touching JSX.
const MAP = {
  Users, Eye, Globe, LifeBuoy, TrendingUp, GraduationCap, Headphones,
  UserCog, Radio, PenTool, BadgeCheck, Handshake, ShieldCheck, Flame,
  Sparkles, Star, Heart, Gift, Music2, Play, Search, Zap, Target,
}

export default function Icon({ name, size = 24, ...rest }) {
  const Cmp = MAP[name] || Sparkles
  return <Cmp size={size} aria-hidden="true" focusable="false" {...rest} />
}
