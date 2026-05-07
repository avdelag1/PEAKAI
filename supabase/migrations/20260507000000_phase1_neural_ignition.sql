-- 1. Extend profiles table
ALTER TABLE public.profiles 
ADD COLUMN future_self_avatar_url TEXT,
ADD COLUMN voice_style TEXT DEFAULT 'Hype',
ADD COLUMN nudge_frequency TEXT DEFAULT '1 hour',
ADD COLUMN is_pro BOOLEAN DEFAULT false,
ADD COLUMN onboarded_at TIMESTAMP WITH TIME ZONE;

-- 2. Create goals table
CREATE TABLE public.goals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  category TEXT NOT NULL CHECK (category IN ('brain', 'body', 'business', 'behavior')),
  title TEXT NOT NULL,
  deadline DATE,
  why_emotional TEXT,
  future_self_score DECIMAL(3,1) DEFAULT 1.0,
  nudge_frequency TEXT DEFAULT '1 hour',
  phantom_pack TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'paused')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 3. Create vision_items table
CREATE TABLE public.vision_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  goal_id UUID NOT NULL REFERENCES public.goals(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  smell TEXT,
  temperature TEXT,
  feeling TEXT,
  position INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 4. Create phantom_templates table
CREATE TABLE public.phantom_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pack TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  emoji TEXT,
  sound TEXT,
  vibration TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 5. Create phantom_signals table
CREATE TABLE public.phantom_signals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  goal_id UUID REFERENCES public.goals(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  emoji TEXT,
  sound TEXT,
  vibration TEXT,
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  reacted BOOLEAN DEFAULT false
);

-- 6. Create activations table
CREATE TABLE public.activations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  goal_id UUID REFERENCES public.goals(id) ON DELETE CASCADE,
  task TEXT NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 7. Enable RLS
ALTER TABLE public.goals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vision_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.phantom_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.phantom_signals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activations ENABLE ROW LEVEL SECURITY;

-- 8. RLS Policies
-- Goals
CREATE POLICY "Users can manage their own goals" ON public.goals
  FOR ALL USING (auth.uid() = user_id);

-- Vision Items
CREATE POLICY "Users can manage their own vision items" ON public.vision_items
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.goals 
      WHERE goals.id = vision_items.goal_id 
      AND goals.user_id = auth.uid()
    )
  );

-- Phantom Templates (Public Read)
CREATE POLICY "Anyone can read phantom templates" ON public.phantom_templates
  FOR SELECT USING (true);

-- Phantom Signals
CREATE POLICY "Users can manage their own phantom signals" ON public.phantom_signals
  FOR ALL USING (auth.uid() = user_id);

-- Activations
CREATE POLICY "Users can manage their own activations" ON public.activations
  FOR ALL USING (auth.uid() = user_id);

-- 9. Storage Buckets
-- Note: Buckets must be created via Supabase API or Dashboard normally, 
-- but we can insert into storage.buckets if we have permissions.
-- INSERT INTO storage.buckets (id, name, public) VALUES ('vision-boards', 'vision-boards', true) ON CONFLICT DO NOTHING;
-- INSERT INTO storage.buckets (id, name, public) VALUES ('avatars', 'avatars', true) ON CONFLICT DO NOTHING;

-- 10. Seed Phantom Templates
INSERT INTO public.phantom_templates (pack, title, message, emoji) VALUES
('Wealth Explosion', 'STRIPE PAYOUT', 'Deposit of $10,450.20 confirmed.', '💰'),
('Wealth Explosion', 'WIRE TRANSFER', 'Incoming wire of $50,000 from Client X.', '🏦'),
('Wealth Explosion', 'CRYPTO ALERT', 'Your portfolio just reached a new ATH.', '🚀'),
('Wealth Explosion', 'DIVIDEND PAID', 'You received $1,200 in passive income.', '💸'),
('Wealth Explosion', 'SALE NOTIFICATION', 'A high-ticket offer was just purchased.', '📈'),
('Magnetic Dating', 'NEW MATCH', 'Someone high-value just liked your profile.', '🔥'),
('Magnetic Dating', 'DM RECEIVED', 'Ready for our date tonight?', '❤️'),
('Magnetic Dating', 'COMPLIMENT', 'You looked incredible today.', '✨'),
('Magnetic Dating', 'INVITATION', 'You are invited to an exclusive VIP event.', '🥂'),
('Body Transformation', 'FAT LOSS ALERT', 'Body fat dropped by 0.5% this morning.', '💪'),
('Body Transformation', 'PR REACHED', 'You just hit a new Max on Deadlift.', '🏋️'),
('Body Transformation', 'FASTING WINDOW', 'You successfully completed a 24h fast.', '🧘'),
('Body Transformation', 'BIO-FEEDBACK', 'Recovery score is 98. Primed for PEAK.', '⚡'),
('Deep Focus', 'FLOW STATE', 'You just completed 4 hours of deep work.', '🧠'),
('Deep Focus', 'LEARNING SPIKE', 'Neural plasticity is at its peak right now.', '📚'),
('Deep Focus', 'NOISE CANCELLED', 'Distractions eliminated. Execution mode on.', '🎯'),
('Confidence', 'PRESENCE GAIN', 'You held perfect eye contact today.', '👀'),
('Confidence', 'VOICE POWER', 'Your speech was authoritative and clear.', '🎙️'),
('Confidence', 'ROOM COMMAND', 'You owned the space in that meeting.', '👑'),
('Nicotine Freedom', 'LUNG RECOVERY', 'Your capacity increased by 5% today.', '🫁'),
('Nicotine Freedom', 'CRAVING KILLED', 'You defeated the animal brain today.', '⚔️'),
('Nicotine Freedom', 'SAVINGS ALERT', 'You saved $500 this month by not smoking.', '💎');
-- (Would add more to reach ~100 in production)
