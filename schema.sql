-- SQL Schema to create the b2b_orders table for the REBORN waitlist.
-- You can run this script directly in the Supabase SQL Editor.

-- Enable UUID extension if not already enabled (Supabase usually has this active)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create the table
CREATE TABLE IF NOT EXISTS b2b_orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_name VARCHAR(255) NOT NULL,
    owner_name VARCHAR(255) NOT NULL,
    daily_volume INTEGER NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Enable Row Level Security (RLS) for safety
ALTER TABLE b2b_orders ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the pre-order form waitlist)
CREATE POLICY "Allow public insert to b2b_orders" 
ON b2b_orders 
FOR INSERT 
TO public 
WITH CHECK (true);

-- Allow reading orders only to authenticated admin users (if needed in the future)
CREATE POLICY "Allow authenticated read to b2b_orders" 
ON b2b_orders 
FOR SELECT 
TO authenticated 
USING (true);
