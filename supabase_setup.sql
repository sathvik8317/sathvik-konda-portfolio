-- Run this in your Supabase SQL Editor

-- 1. Create the table if it doesn't exist
create table if not exists public.messages (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Enable Row Level Security (RLS)
alter table public.messages enable row level security;

-- 3. Create a policy to allow anyone (anon) to insert messages
create policy "Enable insert for all users" 
on public.messages 
for insert 
to anon 
with check (true);

-- 4. (Optional) Allow you to view messages in the dashboard
create policy "Enable read access for authenticated users only"
on public.messages
for select
to authenticated
using (true);
