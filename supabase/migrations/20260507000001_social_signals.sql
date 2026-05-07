-- 1. Update Schema
ALTER TABLE public.phantom_templates 
ADD COLUMN IF NOT EXISTS source_app TEXT DEFAULT 'System',
ADD COLUMN IF NOT EXISTS sender_name TEXT;

-- 2. Seed "Beautiful World" Social Templates
INSERT INTO public.phantom_templates (pack, title, message, emoji, source_app, sender_name) VALUES
('Magnetic Dating', 'Hey gorgeous', 'Just wanted to say I can''t stop thinking about our date tonight. You are incredible.', '❤️', 'WhatsApp', 'Sofia ✨'),
('Magnetic Dating', 'Checking in', 'You were the best part of my week. Can''t wait to see you again.', '🔥', 'WhatsApp', 'Elena'),
('Wealth Explosion', 'INVESTOR UPDATE', 'The term sheet is signed. We are officially funded at a $50M valuation.', '🚀', 'Telegram', 'VC Partner'),
('Wealth Explosion', 'NEW PROJECT', 'I want to buy your property at the full asking price. Sending contract now.', '🏠', 'WhatsApp', 'High-Value Client'),
('Body Transformation', 'Gym Status', 'You just inspired everyone in the building. That lift was legendary.', '💪', 'Instagram', 'Coach Mike'),
('Deep Focus', 'Neural Sync', 'Your brain is operating at 115% efficiency today. Perfect flow.', '🧠', 'System', 'PEAK AI')
ON CONFLICT DO NOTHING;

-- 3. Update Pulse Function to pick source_app and sender_name
CREATE OR REPLACE FUNCTION public.trigger_neural_pulse()
RETURNS void AS $$
DECLARE
    user_record RECORD;
    template_record RECORD;
BEGIN
    FOR user_record IN 
        SELECT id FROM public.profiles 
        WHERE onboarded_at IS NOT NULL 
        AND (last_nudge_at IS NULL OR last_nudge_at < now() - interval '1 hour')
    LOOP
        SELECT * INTO template_record 
        FROM public.phantom_templates 
        ORDER BY random() LIMIT 1;

        IF template_record.id IS NOT NULL THEN
            INSERT INTO public.phantom_signals (user_id, title, message, emoji, source_app, sender_name)
            VALUES (user_record.id, template_record.title, template_record.message, template_record.emoji, template_record.source_app, template_record.sender_name);

            UPDATE public.profiles SET last_nudge_at = now() WHERE id = user_record.id;
        END IF;
    END LOOP;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
