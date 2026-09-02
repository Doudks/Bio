-- Moonlit Archive — one-time avatar storage setup
-- Run this once in Supabase > SQL Editor.

-- 1) Public bucket for profile pictures.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'avatars',
  'avatars',
  true,
  2097152,
  array['image/png', 'image/jpeg', 'image/webp', 'image/gif']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

-- 2) Users may update ONLY avatar_url on their own profile.
alter table public.profiles enable row level security;

revoke update on public.profiles from authenticated;
grant update (avatar_url) on public.profiles to authenticated;

drop policy if exists "users can update own avatar" on public.profiles;
create policy "users can update own avatar"
on public.profiles
for update
to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);

-- 3) Storage policies: each user owns /<their-user-id>/avatar.
drop policy if exists "users can read own avatar objects" on storage.objects;
create policy "users can read own avatar objects"
on storage.objects
for select
to authenticated
using (
  bucket_id = 'avatars'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

drop policy if exists "users can upload own avatar" on storage.objects;
create policy "users can upload own avatar"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'avatars'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

drop policy if exists "users can replace own avatar" on storage.objects;
create policy "users can replace own avatar"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'avatars'
  and (storage.foldername(name))[1] = (select auth.uid())::text
)
with check (
  bucket_id = 'avatars'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

drop policy if exists "users can delete own avatar" on storage.objects;
create policy "users can delete own avatar"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'avatars'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);
